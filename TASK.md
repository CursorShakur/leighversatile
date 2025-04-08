# TASK.md: Leigh Versatile Website Build Plan

This document outlines the key tasks required to build and launch the Leigh Versatile website, based on the agreed-upon PRD and technology stack.

**Assumptions:**
* Detailed UI/UX designs (wireframes, mockups) will be provided.
* Core website content (text, images for pages, services, about, etc.) will be provided or drafted for input into the CMS.
* Accounts for third-party services (Sanity, Lemon Squeezy, Wave, Google Workspace, AI Provider) will be created.

---

## Phase 1: Project Setup & Configuration

- [ ] **Version Control:** Initialize Git repository (e.g., on GitHub, GitLab, Bitbucket).
- [ ] **Project Scaffolding:** Set up Vite + React + TypeScript project using PNPM (`pnpm create vite leigh-versatile-site --template react-ts`).
- [ ] **Core Dependencies:** Install necessary base packages (`pnpm install react-router-dom`).
- [ ] **Project Structure:** Define and create initial folder structure (e.g., `src/components`, `src/pages`, `src/hooks`, `src/lib`, `src/styles`, `src/assets`).
- [ ] **Styling Solution:** Choose, install, and configure styling solution (e.g., Tailwind CSS: `pnpm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p`, configure `tailwind.config.js`, `postcss.config.js`, import base styles).
- [ ] **Headless CMS Setup:**
    - [ ] Initialize Sanity.io project within the monorepo or separately (`pnpm create sanity@latest`).
    - [ ] Define initial Sanity schemas (e.g., `page`, `post`, `service`, `digitalProduct`, `heroTool`).
    - [ ] Configure and deploy Sanity Studio (e.g., `sanity deploy`).
- [ ] **Hosting Setup:**
    - [ ] Create a new project on Vercel or Netlify.
    - [ ] Connect the hosting project to the Git repository for Continuous Integration/Continuous Deployment (CI/CD).
- [ ] **Environment Variables:** Set up `.env` file locally and configure environment variables in Vercel/Netlify for API keys/secrets (Sanity Project ID/Dataset/Token, AI API Key, etc.). Use `.env.example` for tracking variables needed.
- [ ] **Email Setup:** Configure Google Workspace MX records with the domain registrar.
- [ ] **Initial Commit:** Commit initial project setup to Git.

## Phase 2: Core Development (Layout & Routing)

- [ ] **Routing:** Implement basic page routing using `react-router-dom` (or chosen router) for core pages (Home, About, Services, Blog, Products, Contact).
- [ ] **Layout Component:** Create the main site layout (e.g., `Layout.tsx`) including Header, Footer, and main content outlet area.
- [ ] **Header Component:** Develop the site Header with navigation links and logo placeholder.
- [ ] **Footer Component:** Develop the site Footer with necessary links (Privacy, Terms, social links?) and copyright info.
- [ ] **Basic Page Components:** Create placeholder components for each main page defined in routing.

## Phase 3: Content Integration (Sanity CMS)

- [ ] **Sanity Client:** Implement Sanity client/SDK setup in the React app (`src/lib/sanityClient.ts`) to fetch data.
- [ ] **Schema Refinement:** Refine and add necessary fields to Sanity schemas based on design/content requirements.
- [ ] **Content Fetching:** Implement data fetching logic for core pages (Home, About, Services) from Sanity. Populate pages with CMS content.
- [ ] **Blog Implementation:**
    - [ ] Develop Blog Index page component (fetching and displaying list of posts from Sanity).
    - [ ] Develop Blog Post page template component (fetching and displaying single post content from Sanity).
- [ ] **Digital Products Page:** Develop component to fetch and display digital products from Sanity.
- [ ] **Populate Initial Content:** Add initial website content into Sanity Studio.

## Phase 4: Feature Development (Interactive Elements)

- [ ] **Interactive Hero Component:**
    - [ ] Fetch "Hero Tool" data (name, description, category, affiliate link) from Sanity.
    - [ ] Build the UI for filtering/selecting categories.
    * [ ] Implement frontend logic to display relevant tools based on selected filters.
    * [ ] Ensure affiliate links are handled correctly (e.g., `rel="sponsored"` or `nofollow` as appropriate, disclosure).
- [ ] **AI Automation Helper - Frontend:**
    * [ ] Develop the frontend UI component (form or chat interface).
    * [ ] Manage input state and display areas for results/errors/loading.
- [ ] **AI Automation Helper - Backend (Serverless Function):**
    * [ ] Create a serverless function (e.g., `/api/getAutomationIdeas`) on Vercel/Netlify (Node.js recommended).
    * [ ] Securely load AI provider API key from environment variables.
    * [ ] Implement logic to receive frontend data, format prompt for AI API.
    * [ ] Call the AI API, handle response/errors.
    * [ ] Format and return suggestions to the frontend.
- [ ] **AI Automation Helper - Integration:** Connect the frontend component to the serverless function API endpoint.

## Phase 5: Integrations (External Services)

- [ ] **Lemon Squeezy Integration:**
    - [ ] Add "Buy Now" buttons/links on digital product listings.
    - [ ] Point links to the correct Lemon Squeezy checkout URLs for each product.
    - [ ] (Optional) Implement Lemon Squeezy overlay/modal checkout if desired.
- [ ] **Contact Form:**
    - [ ] Build the Contact Form UI component with necessary fields and validation.
    * [ ] Implement submission handling (e.g., using Netlify Forms attribute, or POSTing to a serverless function that sends an email via a service like Resend/SendGrid).
- [ ] **Consultation Booking:** Embed or link out to the chosen scheduling tool (e.g., Calendly) on relevant pages (Services, Contact).

## Phase 6: Styling, Responsiveness & Polish

- [ ] **Apply Detailed Styling:** Implement the final UI design using the chosen styling solution (e.g., Tailwind CSS) across all components and pages.
- [ ] **Ensure Responsiveness:** Test and refine styles for optimal display and usability on Desktop, Tablet, and Mobile viewports.
- [ ] **UI Polish:** Add loading states, transitions, handle edge cases gracefully. Ensure consistent branding application.
- [ ] **Image Optimization:** Ensure images loaded from Sanity or locally are appropriately sized and optimized.

## Phase 7: Testing & Quality Assurance (QA)

- [ ] **Component/Unit Testing:** (Optional but recommended) Write tests for critical components or utility functions.
- [ ] **End-to-End (E2E) Testing:** Manually test all key user flows:
    - [ ] Navigating between pages.
    - [ ] Submitting the contact form.
    - [ ] Clicking through to Lemon Squeezy checkout.
    - [ ] Using the interactive hero filters.
    - [ ] Using the AI automation helper.
    - [ ] Viewing blog posts.
- [ ] **Cross-Browser Testing:** Test functionality and appearance on latest versions of Chrome, Firefox, Safari, Edge.
- [ ] **Cross-Device Testing:** Test on representative physical devices or simulators (iOS, Android, different screen sizes).
- [ ] **Accessibility Audit:** Perform checks using automated tools (e.g., Axe DevTools) and manual testing (keyboard navigation, screen reader check). Remediate issues.
- [ ] **Performance Audit:** Test using Lighthouse or PageSpeed Insights. Optimize where necessary (images, code splitting).
- [ ] **Content Proofreading:** Review all website copy for typos, grammar, and accuracy.
- [ ] **Validate Links:** Check all internal and external links, including affiliate links.

## Phase 8: Deployment & Launch

- [ ] **Final Configuration:**
    - [ ] Ensure all production environment variables are set correctly in Vercel/Netlify.
    - [ ] Configure custom domain DNS settings to point to Vercel/Netlify.
- [ ] **Production Build:** Test the production build locally (`pnpm run build`, `pnpm run preview`).
- [ ] **Merge to Production:** Merge the stable `develop` or `main` branch to the production branch configured in Vercel/Netlify.
- [ ] **Verify Deployment:** Thoroughly test the live production site after deployment.
- [ ] **Setup Analytics:** Install and configure Google Analytics 4 tracking code (or enable Vercel Analytics). Set up goal tracking for form submissions etc.
- [ ] **SEO Basics:** Generate and submit a `sitemap.xml` to Google Search Console. Ensure `robots.txt` is configured correctly. Ensure core pages have appropriate meta titles/descriptions (pulled from Sanity).

## Phase 9: Post-Launch

- [ ] **Monitoring:** Monitor analytics, hosting platform logs, and uptime for any immediate issues.
- [ ] **Bug Fixes:** Address any critical bugs discovered post-launch.
- [ ] **Handover:** Provide documentation or training to Leigh Versatile on managing content via Sanity Studio.
- [ ] **Initial Review:** Plan for a review after 1-2 weeks to assess initial performance and gather feedback.

---

This task list provides a structured approach. Remember that development is iterative; some steps may require revisiting as the project progresses. Good luck!