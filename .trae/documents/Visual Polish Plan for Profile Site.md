## Current State
- Framework: `React` + `Vite` + `Tailwind v4` + `DaisyUI` (`package.json:6–17`, `vite.config.js:6–15`).
- Theme: custom DaisyUI theme `Claude` set on `<html>` (`index.html:2`, `src/index.css:3–36`).
- Page structure: `Navbar` → `Hero` → `About` → `Projects` → `Contact` (`src/App.jsx:10–14`).
- Visuals: fixed blurred navbar (`src/components/Navbar.jsx:3`), grid-pattern hero with SVG overlay (`src/components/Hero.jsx:6–22`), bento-style cards in About, simple cards in Projects and Contact.

## Objectives
- Apply non-functional visual refinements only (layout, spacing, color, typography, motion), no behavioral features.
- Improve readability, hierarchy, contrast, and consistency across sections.
- Preserve existing content and structure.

## Typography
- Establish a clear type scale and hierarchy:
  - `Hero` title upscale to desktop size and tune line-height (`src/components/Hero.jsx:25`).
  - Section headings unified sizes and spacing (`About` `h2/h3` in `src/components/About.jsx:20,29,61,84,102,137,158`; `Projects` in `src/components/Projects.jsx:11,26,42`; `Contact` in `src/components/Contact.jsx:7`).
- Reduce body text opacity for secondary copy while maintaining accessibility (`Hero` subtitle `src/components/Hero.jsx:26`).

## Layout & Spacing
- Normalize section containers to a consistent width and horizontal padding (`max-w-7xl`, `px-6`) across sections (`Navbar.jsx:4`, `About.jsx:17`, `Projects.jsx:4`, `Contact.jsx:4`).
- Establish vertical rhythm: consistent top/bottom spacing for each section (`py-24` baseline) and balanced gaps inside cards.
- Add anchor offset for fixed navbar using section `scroll-mt` so in-page links land cleanly without clipping (`#home`, `#about`, `#projects`, `#contact`).

## Color & Contrast
- Tweak theme tokens in `src/index.css:8–27` for better contrast harmony:
  - Slightly deepen `--color-base-content` for text clarity on light background.
  - Nudge `--color-secondary` away from base to differentiate grid accents.
  - Soften `--color-accent` usage to avoid washout on badges.
- Ensure badges and ghost buttons meet contrast ratios, especially in `About` and `Projects`.

## Navbar
- Strengthen visual separation with a subtle bottom border and refined blur (`src/components/Navbar.jsx:3`).
- Add active-state styling that reflects the current section for clearer orientation (purely visual style, no new logic).
- Improve target sizes and spacing of nav pills for mobile readability (`Navbar.jsx:9–26`).

## Hero
- Tone down grid and SVG overlay opacity for less visual noise while keeping texture (`Hero.jsx:15–21`).
- Refine headline size/line-height and add a subtle supporting line; optional single primary CTA styled as a pill to guide focus (visual only).
- Maintain the bottom gradient fade but smooth its transition (`Hero.jsx:30–35`).

## About (Bento)
- Unify card radii/shadows to match theme and reduce clutter (`About.jsx:27–35`, `38–56`, `59–79`, `82–97`, `100–121`, `135–153`, `156–178`).
- Clarify tab affordances with stronger selected-state contrast and spacing (`About.jsx:63–71`).
- Reduce emoji usage in titles in favor of consistent iconography style; keep labels concise.

## Projects
- Introduce thumbnails from existing preview folders at repo root to enrich cards (visual imagery only; e.g., `FinAiPreview/`, `QuoteXPreview/`, `HfawaPreview/`).
- Adjust grid breakpoints for better tablet flow (`sm:grid-cols-2`, `lg:grid-cols-3`) and normalize card internal spacing (`Projects.jsx:8–55`).
- Standardize badges for tech stacks with consistent sizing and contrast.

## Contact
- Elevate CTA with stronger visual hierarchy and comfortable spacing (`Contact.jsx:6–11`).
- Add subtle background treatment (light gradient or texture) to differentiate the section without competing with Hero.

## Motion & Microinteractions
- Apply gentle entrance transitions to section headings/cards (opacity + translate), keeping motion minimal and accessible.
- Preserve focus outlines and ensure hover/focus states are visually consistent across interactive elements.

## Accessibility & Responsiveness
- Verify color contrast for text/badges/buttons against `base-100`.
- Ensure touch targets meet minimum sizes; balance spacing on small screens (nav and tabs).
- Confirm anchor navigation lands below the fixed navbar using `scroll-mt` classes.

## Validation
- After approval, launch the dev server (`npm run dev`) and review the site across mobile, tablet, and desktop.
- Iterate with quick visual tweaks to theme tokens and utility classes, capturing before/after screenshots.

## Deliverables
- Updated theme token values and utility classes for visual polish (no structural changes).
- Before/after screenshots for key sections.
- A concise changelog referencing file paths and line ranges touched for transparency.