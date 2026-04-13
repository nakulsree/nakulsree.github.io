# SCM Intelligence Dashboard — Portfolio Project Page

## Overview

Standalone portfolio case-study page for the **"Supply Chain Intelligence Dashboard"** —
a full-stack web application built by a team of six at Purdue University using PHP,
PostgreSQL, and Chart.js.

---

## File Structure

```
scm-dashboard/
├── scm-dashboard.html                # Main project page (standalone)
├── scm-dashboard.json                # Project metadata (portfolio index)
├── README-scm-dashboard.md           # This file
└── assets/
    ├── css/
    │   └── scm-dashboard.css         # Forest green industrial dark stylesheet
    ├── js/
    │   └── scm-dashboard.js          # Scroll animations, KPI counters
    └── images/
        └── scm-dashboard-thumbnail.svg  # Dual-role architecture + heatmap thumbnail
```

---

## Design System

| Property      | Value                                         |
|---------------|-----------------------------------------------|
| Theme         | Dark mode (`#07100a` base)                    |
| Primary accent| Emerald green `#2ecc71`                       |
| Secondary     | Lime `#a8e063`, Amber `#f9ca24`               |
| Display font  | Lexend (800 weight)                           |
| Code/body     | JetBrains Mono                                |
| Effects       | Scanlines overlay + 40px CSS grid             |
| SQL highlight | Blue keywords `#74b9ff`, lime strings `#a8e063`|
| Framework     | None — pure HTML + CSS + JS                   |

Visually and tonally distinct from both previous projects.

---

## Sections Included

1. **Hero** — Title, team credits with highlighted author, tech stack panel with counters
2. **Executive Summary** — Two-role architecture overview with security framing
3. **Data Model** — Full database schema organized by domain (entities, logistics, risk/finance)
4. **System Architecture** — Role-split layout: SCM pages vs. Senior Manager pages with descriptions
5. **SQL Design Highlights** — 6 SQL cards with annotated code snippets (UNION ALL, criticality score, exposure formula, dynamic WHERE, STDDEV, heatmap pivot)
6. **Key Analytics Features** — 6 feature cards (on-time rate, disruption frequency, financial health, recovery time, dependency graph, disruption exposure)
7. **What I Learned** — 6 lessons: security, dynamic queries, PHP→JS bridging, PostgreSQL dialect, team conventions, role-based data design
8. **Skills** — 4 groups: Database/SQL, Backend Engineering, Frontend/Visualization, Domain/Design
9. **CTA** — GitHub link

---

## Content Notes

- The page is positioned as a **software engineering + analytics** project, not purely a
  data science project. The SQL complexity is the primary technical story.
- Team credits are displayed in the hero with Nakul highlighted distinctly.
- The project is correctly framed as a **team project** throughout.
- The Canary Token script in `index.php` is a security monitoring tool — it is not
  referenced or discussed in the portfolio page, as it is an implementation detail
  not relevant to the project narrative.

---

## Index Card Integration

```html
<a href="scm-dashboard.html" class="project-card">
  <img
    src="scm-dashboard/assets/images/scm-dashboard-thumbnail.svg"
    alt="SCM Intelligence Dashboard — role-based supply chain analytics platform"
    loading="lazy"
  />
  <div class="card-body">
    <div class="card-tags">
      <span>Full-Stack</span>
      <span>PostgreSQL</span>
      <span>PHP</span>
    </div>
    <h3>SCM Intelligence Dashboard</h3>
    <p>
      Role-based supply chain analytics platform with complex SQL queries,
      disruption risk scoring, and financial health monitoring. Team of 6.
    </p>
    <div class="card-metric">10 pages · 2 roles · 30+ SQL queries · 12+ DB tables</div>
  </div>
</a>
```

---

*Generated for Nakul Sreekanth's Data Science Portfolio — 2025/2026*
