## Goal
Use DaisyUI v5 data‑display components to present your CV content clearly and professionally, keeping the Claude theme and current layout.

## Components to Use
- Stats: for key metrics (Latency, Accuracy, Scale, Deploy).
- Tabs: for Skills categories (Languages & DBMS, Frameworks & Libraries, Dev & Ops, Soft Skills).
- Cards: for grouped content blocks (Contact, Summary, Education, Certifications, Awards, Volunteering, Projects).
- Badges: for tech stacks and skill items.
- Steps (vertical): to show timeline entries (Education, Certifications, Awards, Volunteering) in chronological order.
- Divider: to add visual separation inside cards where helpful.

## Mapping Content → Components
- Contact: Card with inline icon rows + actionable links (tel/mail).
- Professional Summary: Card with concise paragraph.
- Skills: Tabs; each tab shows badges for the items.
- Education: Vertical Steps (degree, institution, GPA, dates).
- Certifications: Vertical Steps with title, issuer, date.
- Awards & Scholarships: Vertical Steps with title, org, date.
- Volunteering & Leadership: Vertical Steps with role, org, dates.
- Projects: 3 Cards, each with title, bullet list, tech badges.

## Implementation Details
- Replace `About` section markup in `src/App.jsx`:
  - Center container `max-w-6xl mx-auto` retained.
  - Build a grid: left Contact + Summary; right Stats; below: Tabs (Skills) then Steps blocks.
- Replace `Projects` list with Cards + Badges and optional `divider` inside each card.
- Keep the hero and navbar unchanged; keep smooth scroll.
- Use only DaisyUI components and Tailwind utilities (no custom CSS).

## Verification
- Run the dev server and confirm:
  - Tabs switch Skills groups correctly.
  - Steps render vertical timelines cleanly.
  - Stats show values in a responsive grid.
  - Cards align and wrap correctly at `md` breakpoints.

## Deliverables
- Updated `src/App.jsx` with DaisyUI data‑display components.
- Polished About and Projects sections with icons/badges and timelines.
- Short summary of changes after implementation.