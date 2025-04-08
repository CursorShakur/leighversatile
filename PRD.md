Okay, here is a Product Requirements Document (PRD) based on our discussion for the Leigh Versatile website project. This document outlines the vision, features, and technical specifications as we've defined them.

---

**Product Requirements Document: Leigh Versatile Website (Version 1.0)**

* **Date:** April 8, 2025
* **Status:** Draft
* **Author:** Gemini (based on user input)
* **Project:** Leigh Versatile Business Website

**1. Introduction & Overview**

Leigh Versatile consults with small businesses to help them implement automation and improve efficiency. This project is to build the company's primary online presence. The website will serve as a hub for information about services, a platform for lead generation, a point of sale for digital products, and a tool to showcase expertise and provide value through interactive elements.

**2. Goals & Objectives**

* **Establish Credibility:** Present Leigh Versatile as a professional and knowledgeable expert in small business automation.
* **Generate Consulting Leads:** Encourage qualified visitors to inquire about or book consulting services via contact forms or booking links.
* **Sell Digital Products:** Enable the direct sale and automated delivery of digital goods (e.g., guides, templates).
* **Provide Value & Engage Users:** Offer unique, interactive tools (tool recommender, automation idea generator) to attract and engage visitors.
* **Build Authority:** Showcase expertise through blog content and potentially case studies (future).
* **Achieve High Performance:** Ensure a fast, responsive, and reliable user experience.

**3. Target Audience**

* **Primary:** Small Business Owners, Managers, and key employees within small businesses who are feeling overwhelmed by manual tasks, looking for ways to improve efficiency, save time, or scale operations through automation.
* **Characteristics:**
    * May have varying levels of technical expertise.
    * Are typically time-poor and looking for clear, actionable solutions.
    * Value trustworthiness, clear communication, and demonstrable results.
    * Seeking information, solutions (consulting or products), and guidance on automation tools and strategies.

**4. Scope**

**In Scope (Version 1.0):**

* Development of a public-facing website with core informational pages.
* Implementation of an interactive hero section for tool recommendations.
* Implementation of an AI-powered form/chatbot for automation ideas.
* Integration with Sanity.io for content management.
* Integration with Lemon Squeezy for digital product sales checkout and delivery.
* Integration points for lead generation (Contact Form, potentially Consultation Booking Link).
* Setup using agreed technology stack (React, Vite, PNPM, Vercel/Netlify, etc.).
* Responsive design for Desktop, Tablet, and Mobile devices.
* Basic SEO setup (metadata, semantic HTML).
* Standard Analytics setup.

**Out of Scope (Version 1.0):**

* User accounts / login system (beyond purchase identification via Lemon Squeezy).
* Complex backend dashboards (beyond Sanity CMS).
* Direct integration with Wave for frontend display (Wave used offline/separately for invoicing).
* Advanced features like forums, membership areas (beyond product purchase).
* Detailed case studies section (can be added later via CMS).

**5. Requirements & Features**

| Feature Area                | Requirement / User Story                                                                                                                                      | Technical Notes / Considerations                                                                                                | Content Source | Priority |
| :-------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------ | :------------- | :------- |
| **Core Pages** |                                                                                                                                                               |                                                                                                                                 |                |          |
| Homepage                  | As a visitor, I want to quickly understand what Leigh Versatile does, who it helps, and what I can do next (learn more, buy product, contact).                 | Include value proposition, intro to services, links to key areas, interactive hero section.                                       | Sanity         | High     |
| About Page                | As a visitor, I want to learn about Leigh Versatile's mission, values, and the person/team behind it to build trust.                                           | Include bio, company story, mission/vision.                                                                                   | Sanity         | High     |
| Services Page             | As a visitor, I want to clearly understand the consulting services offered, the process, and the benefits.                                                  | Detail different service packages or areas of expertise. Clear Call-to-Action (CTA) to contact/book.                              | Sanity         | High     |
| Contact Page              | As a visitor, I want an easy way to get in touch with Leigh Versatile for inquiries or service requests.                                                      | Include contact form (sending to Leigh Versatile email), direct email address, potentially phone number or booking link (e.g., Calendly). | Sanity (text)  | High     |
| Blog (Index & Post)       | As a visitor, I want to read articles/posts about business automation to learn and see Leigh Versatile's expertise. As an admin, I want to easily add/edit posts. | List view with excerpts, individual post view. Basic categorization/tagging.                                                      | Sanity         | High     |
| Digital Products Page(s)  | As a visitor, I want to browse available digital products, understand their value, and purchase them easily.                                                | List products with descriptions, pricing. "Buy Now" buttons link to Lemon Squeezy checkout.                                       | Sanity         | High     |
| Privacy Policy / Terms    | As a visitor, I want to understand how my data is used and the terms of using the site/services.                                                              | Standard legal pages.                                                                                                           | Sanity         | High     |
| **Interactive Features** |                                                                                                                                                               |                                                                                                                                 |                |          |
| Interactive Hero Section  | As a visitor, I want to filter/click categories (e.g., "Marketing", "Admin", "Finance") to see recommended automation tools with brief descriptions & links. | React component using state. Tool data (name, description, category, affiliate link) managed in Sanity. Filter logic in frontend.     | Sanity (data)  | High     |
| AI Automation Helper      | As a visitor, I want to input my business type/pain points into a form/chat and receive tailored automation ideas.                                            | React component (form or chat UI). Submits data to a serverless function on Vercel/Netlify. Function calls AI API (e.g., OpenAI), returns suggestions. | Sanity (prompts?) | High     |
| **Lead Generation** |                                                                                                                                                               |                                                                                                                                 |                |          |
| Contact Form              | As a site admin, I want to receive inquiries submitted through the contact page form via email.                                                               | Use a form handling service (Netlify Forms, Vercel function + email service) or build custom backend (serverless function).     | N/A            | High     |
| Consultation Booking      | As a visitor interested in consulting, I want an easy way to book an initial call.                                                                          | Embed or link to a scheduling tool (e.g., Calendly).                                                                            | Sanity (link)  | Medium   |
| **Non-Functional** |                                                                                                                                                               |                                                                                                                                 |                |          |
| Performance               | Website should load quickly and feel responsive.                                                                                                              | Leverage Vite builds, Vercel/Netlify CDN, image optimization (via Sanity/frontend). Target good Core Web Vitals.                   | N/A            | High     |
| Responsiveness            | Website must display correctly and be usable on common Desktop, Tablet, and Mobile screen sizes.                                                              | Implement responsive design principles (CSS media queries, flexible layouts).                                                     | N/A            | High     |
| Accessibility             | Website should be accessible to users with disabilities.                                                                                                      | Aim for WCAG 2.1 AA compliance (semantic HTML, keyboard navigation, ARIA attributes where needed, color contrast).                 | N/A            | High     |
| Security                  | Basic security measures should be in place.                                                                                                                   | Use HTTPS. Sanitize user inputs (contact form). Securely handle API keys (serverless functions).                                | N/A            | High     |

**6. Design & UX**

* **Look & Feel:** Professional, trustworthy, modern, clean, and approachable. Reflect Leigh Versatile's brand identity (logo, colors - TBD).
* **User Experience:** Intuitive navigation, clear information hierarchy, prominent calls-to-action, minimal friction for key tasks (contacting, purchasing). Interactive elements should be easy to understand and use.
* **Deliverables:** Detailed wireframes and high-fidelity mockups will be required before development.

**7. Technology Stack**

* **Frontend Framework:** React
* **Build Tool / Dev Server:** Vite
* **Package Manager:** PNPM
* **Routing:** React Router (or TanStack Router - TBD)
* **Styling:** TBD (e.g., Tailwind CSS, CSS Modules, Emotion)
* **Headless CMS:** Sanity.io
* **Digital Product Sales:** Lemon Squeezy
* **Consulting Invoicing/Accounting:** Wave Financial (Used offline/separately, not directly integrated into site frontend)
* **Hosting:** Vercel or Netlify
* **Serverless Functions:** Vercel Functions or Netlify Functions (likely Node.js)
* **AI Integration:** TBD AI Provider API (e.g., OpenAI) via serverless function
* **Professional Email:** Google Workspace

**8. Analytics & Measurement**

* **Platform:** Vercel Analytics and/or Google Analytics 4.
* **Key Metrics:**
    * Website Traffic (Users, Sessions, Page Views)
    * Traffic Sources
    * Bounce Rate / Engagement Rate
    * Contact Form Submissions (Goal Tracking)
    * Clicks on Digital Product purchase links
    * Clicks on Consultation Booking links
    * Usage of Interactive Hero / AI Helper (Custom Event Tracking)
* **Other Data:** Sales data tracked within Lemon Squeezy. Consulting revenue tracked within Wave.

**9. Future Considerations**

* Detailed Case Studies section.
* More advanced interactive tools or calculators.
* Client login area for project status or resources (Requires Auth).
* Integration with CRM for lead management.
* Expansion of digital product offerings (e.g., courses, subscriptions via Stripe Billing).

**10. Open Questions / TBDs**

* Confirm specific Router choice (React Router default assumption).
* Define specific styling library/approach (e.g., Tailwind CSS).
* Select specific AI provider and model for the Automation Helper.
* Finalize branding elements (logo, color palette).
* Specific configuration/setup for analytics tracking.
* Detailed content for all pages to be provided/migrated to Sanity.
* Specifics of affiliate link tracking/disclosure for interactive hero tools.

---

This PRD provides a comprehensive overview based on our conversation. It should serve as a solid foundation for design and development planning. Remember that requirements can evolve, and this document should be updated as needed.