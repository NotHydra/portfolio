# Portfolio Repository Guidelines & Agent Operating Contract

## 1. Project Overview & Scope
- **Repository**: Personal portfolio website built with Next.js (Pages router), TypeScript, Sass, Swiper, and Zustand.
- **Purpose**: Showcase Rizky Irswanda's software engineering, IoT, academic qualifications, and project experiences.

## 2. Git Staging & Index Guardrails (Strict User Invariant)
- **Never stage or unstage changes automatically**: Do NOT execute `git add`, `git rm --cached`, `git restore --staged`, or `git reset` unless explicitly commanded by the user.
- All git staging, unstaging, and commit operations are reserved strictly for the user.
- Keep modifications confined to the working tree.

## 3. Content & Narrative Text Guidelines
- **Zero Semicolons**: Never use semicolons (`;`) in narrative text, bullet points, titles, descriptions, or string literals displayed to users in the UI.
- **Primary Source Integrity**: Every claim in `src/components/qualification/index.component.tsx`, `src/stores/project-store.ts`, structured data (JSON-LD), SEO metadata, and machine-readable profiles (such as `public/llms.txt`) must strictly map to verified primary sources (ATS CV, official transcripts, git repositories, or registered DOIs/HKI). Never infer, extrapolate, or invent project history from unreferenced files or images in `public/image/` or other asset directories. Only reference projects explicitly active in `src/stores/project-store.ts`.
- **Prohibited Attributes**: Never re-introduce disclaimed contributions (specifically Google SSO integration, role-based permission matrices, or automated SINTA scraping).
- **Humanizer & Tone Standards**: Write natural, varied prose without stock AI buzzwords ("robust", "pivotal", "showcase", "boasts", "cutting-edge"). Avoid bold labels on every list item, forced triads, and dashes as universal connectors.
- **Functional Architecture Phrasing**: Avoid raw OS flag constants or internal system symbols (such as `START_STICKY`) in narrative copy. Translate implementation mechanisms into concrete architectural terms (for example, "automatic service recovery").
- **Dual Role & Description Integrity**: For leadership roles with direct technical implementation (such as "Project Manager - FSTI ITK's Quality Assurance System"), explicitly document both sprint management and hands-on software development. Never discard overall platform descriptions when detailing individual contributions.

## 4. Media & Project Assets
- **Format**: All project previews and profile images in `public/image/` must be modern WebP files with valid 8-bit sRGB color profiles.
- **Dimensions**: Project carousel mockups must adhere to standard 16:9 widescreen dimensions (e.g. 1920x1080) for visual consistency in the Swiper coverflow slider.
- **Asset Integrity**: Project preview images must depict authentic application interfaces (e.g. login screens for ERP systems, authentic handcrafted product catalogs for e-commerce, hero landing pages for web applications).

## 5. Build & Dev Server Lifecycle
- **Dev Server vs. Build Conflict**: Running `pnpm build` (`next build`) invalidates the Turbopack dev server's in-memory compilation cache, causing the dev server on `http://localhost:3000` to return HTTP 500 until restarted.
- After running a production build, always restart the dev server daemon if live preview is active.

## 6. Timeline Chronology & Ordering Invariants
- **Strict Descending Order**: All timeline arrays in `src/components/qualification/index.component.tsx` (`workExperience`, `projectExperience`, `volunteering`, `certifications`, `education`, `awards`, `languageTests`, `publications`, `patents`) must be ordered chronologically latest-first (newest to oldest).
- **Sorting Precedence**:
  1. Active entries with "Present" sort first, ordered by latest start date descending.
  2. Completed entries sort primarily by end date descending, breaking ties by latest start date descending.
  3. Single-date items sort by calendar date descending.
