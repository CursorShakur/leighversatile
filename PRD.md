Product Requirements Document (PRD) - Leigh Versatile Website
Version: 1.0
Date: March 28, 2025

1. Introduction / Overview

Project: Leigh Versatile / CodeMyVibes™ Website
Purpose: This website will serve as the primary online presence for Leigh Versatile, a company specializing in AI-assisted development enablement ("vibe coding") for Small-to-Medium Businesses (SMBs). The site's objectives are to educate potential clients about the "vibe coding" methodology, establish brand credibility, generate qualified leads, and showcase the company's capabilities through informative content and interactive demonstrations.
2. Goals

Lead Generation: Generate qualified leads via consultation requests or contact forms.
Value Proposition Clarity: Clearly communicate Leigh Versatile's unique value, services offered, and the distinct CodeMyVibe™ process (Visualize, Instruct, Build, Enhance).
Education: Inform visitors, particularly domain experts within target industries, about the capabilities and benefits of AI-assisted development ("vibe coding").
Credibility & Trust: Build trust and establish Leigh Versatile as a knowledgeable and professional expert in the field.
Engagement: Engage users with unique, interactive tools and demonstrations that illustrate AI enablement concepts.
3. Target Audience

Primary: Domain Experts and Subject-Matter Experts (SMEs) within SMBs located in the DMV region (DC, Maryland, Virginia).
Secondary: Technical and Business Decision-makers (e.g., CTOs, VPs of Engineering, Project Managers, Business Owners) within these SMBs.
Key Industries (DMV Focus):
Biotechnology
Cybersecurity
Government Contracting
Professional Services (Consulting, Legal, etc.)
Research Institutions
Education
Non-Profits / Associations
4. Features

4.1 Landing Page Core Content:
UI: Single-page application structure with distinct content sections: Hero, Problem Statement, Solution (including tagline), Process (Visualize, Instruct, Build, Enhance), Services Overview (Assessment, Training, Custom Solutions), Target Audience/Industries, Why Choose Us, Call To Action (CTA), Footer. Layout built using Vuetify 3 components.
Functionality: Display finalized website copy tailored to empowering domain experts. Navigation (potentially via scroll-spy or header links) allows users to jump between sections. All CTAs should be clearly visible and functional.
4.2 Feature 1 (Revised): Industry Input -> Tool Suggestion:
UI: A dedicated section containing input fields for "Industry" and "Service/Product Provided". A "Submit" or "Analyze" button triggers the process. A dynamic results area will display the output using appropriate Vuetify components (e.g., Cards, Lists, Tables).
Functionality:
User enters their Industry and Service/Product into the form and clicks Submit.
The Vue.js frontend sends this data to a designated Supabase Edge Function via an API call.
The Supabase Edge Function securely accesses a pre-configured 3rd party Large Language Model (LLM) API key.
The Edge Function constructs a specific prompt including the user's input and sends it to the LLM API.
The LLM processes the prompt to generate structured data (JSON preferred) containing:
Suggested typical job roles within the provided industry/service context.
Common off-the-shelf software tools used by those roles.
Potential alternative tools or automations achievable via "vibe coding", relevant to the user's input.
A rough estimation of time/cost comparison between traditional methods/tools and the proposed "vibe coded" alternatives (initially using placeholders or simplified logic).
The Supabase Edge Function receives the structured response from the LLM.
The Edge Function formats (if necessary) and returns this structured data to the frontend.
The Vue.js frontend parses the response and displays the suggestions and comparisons in a clear, user-friendly format within the results area. Loading and error states must be handled.
4.3 Feature 2: Interactive Chart Demo:
UI: A visually engaging section showcasing data transformation. May involve side-by-side comparison or an animated sequence.
Functionality: Implement an interactive element or a looping animation. This will visually represent sample data (conceptually originating from a source like Excel/CSV) being processed by illustrative "code" or AI prompts, ultimately rendering into an HTML chart (e.g., bar, line, pie). This feature will utilize a Vue-compatible charting library (e.g., Chart.js with a Vue wrapper, ApexCharts, ECharts, or Vuetify's built-in charting if suitable). The primary goal is to demonstrate the speed and simplicity of creating data visualizations using AI-assisted techniques.
4.4 Feature 3: Horizontal Scrolling Case Study:
UI: A dedicated section or potentially a separate page. It will feature filtering/selection controls based on Industry (e.g., Biotech, Cybersecurity, Gov Contracting). A content area will display the details of the selected case study.
Functionality:
User selects an industry from the available options.
Relevant case study content is loaded dynamically.
A horizontal scrolling mechanism allows the user to navigate through different stages, steps, or aspects of the case study. This could be triggered by vertical page scroll ("scroll hijacking"), mouse wheel interaction over the specific section, or dedicated navigation buttons (prev/next arrows).
Smooth transitions and animations between sections are required (potential candidate for GSAP if complex animations are desired). Requires well-structured content for each case study.
4.5 Contact / Lead Generation:
UI: Clearly visible Call-to-Action (CTA) buttons throughout the site (e.g., "Request Consultation", "Learn More", "Contact Us"). A footer containing contact information. Potentially a dedicated contact page.
Functionality: Ensure all CTA buttons are functional. Initially, these can be implemented as mailto: links opening the user's email client or links directing to a dedicated contact page/section containing a contact form (form backend implementation TBD - potentially using Supabase or a third-party service).
5. Design

Framework: Utilize Vuetify 3 components, adhering to Material Design principles.
Aesthetic: Clean, modern, professional, trustworthy. Inspiration may be drawn from relevant industry benchmarks (e.g., tech-focused sites like Causaly, professional service sites like MSA).
Branding: Implement Leigh Versatile's branding guidelines. Customize the Vuetify theme (colors, typography, spacing). Key colors: Primary #2B579A, Accent #00A0B0, plus others as defined by branding.
Responsiveness: The website must be fully responsive and functional across major breakpoints: desktop (large, medium), tablet (portrait, landscape), and mobile (portrait).
6. Tech Stack (As of March 26, 2025)

Frontend Framework: Vue.js (v3, setup via npm create vuetify)
UI Component Library: Vuetify (v3, Material Design)
Language: TypeScript
Build Tool: Vite
CSS Styling: Vuetify's built-in styling system (customizable with SASS variables), standard CSS/SCSS.
Routing: Vue Router (via Vuetify Recommended preset)
State Management: Pinia (via Vuetify Recommended preset)
Code Quality: ESLint & Prettier (via Vuetify Recommended preset)
Backend (Feature 1): Serverless via Supabase Edge Functions (Deno runtime)
Animation (Potential Future): GSAP (GreenSock Animation Platform) - For complex animations, particularly Feature 3, if needed.
Internationalization (Potential Future): Paraglide JS - Setup considered for EN, ES, FR, ZH, KO; implementation dependent on business priority.
7. Non-Functional Requirements

Performance: Optimize for fast load times (Lighthouse scores > 85). Leverage Vite's bundling, code splitting, lazy loading, and efficient component usage. Optimize images.
Accessibility: Strive for WCAG 2.1 AA compliance. Use semantic HTML, ARIA attributes where necessary, ensure keyboard navigation, and sufficient color contrast. Test with screen readers.
Security: Protect Supabase Edge Function endpoints. Securely manage the LLM API key (use Supabase secrets). Implement standard web security practices (HTTPS, input validation).
Maintainability: Write clean, modular, well-documented TypeScript code. Utilize Vue's component-based architecture. Follow established coding conventions enforced by ESLint/Prettier.
8. Open Questions / Future Considerations

LLM Selection: Finalize the specific 3rd party LLM provider for Feature 1.
Prompt Engineering: Develop and refine the specific prompts for the LLM in Feature 1.
Cost/Time Data: Source or define methodology for generating realistic/representative cost/time comparison data for Feature 1.
Case Study Content: Develop detailed content and structure for Feature 3 case studies across target industries.
Detailed Design: Create high-fidelity mockups or wireframes based on these requirements.
Animation Specifics: Define specific animation requirements for Feature 3 and potentially elsewhere (triggers, duration, easing) to determine GSAP necessity.
Contact Form Backend: Decide on and implement the backend handling for the contact form (if used instead of mailto:).
Deployment Strategy: Select hosting platform (e.g., Vercel, Netlify, Supabase Hosting) and configure CI/CD pipeline.
Feature Prioritization: Confirm the implementation order for Features 1, 2, and 3.
Internationalization (i18n) Timeline: Define the trigger and timeline for implementing translations using Paraglide JS.
