# Bellabeat Smart Device Case Study — Portfolio Project Page

## Overview

Standalone portfolio case-study page for the **"Bellabeat Smart Device Usage Analysis"** —
a business analytics capstone from the Google Data Analytics Professional Certificate,
completed by Nakul Sreekanth in October 2024.

---

## File Structure

```
bellabeat-case-study/
├── bellabeat-case-study.html              # Main project page (standalone)
├── bellabeat-case-study.json              # Project metadata
├── README-bellabeat-case-study.md         # This file
└── assets/
    ├── css/bellabeat-case-study.css       # Warm rose/blush dark stylesheet
    ├── js/bellabeat-case-study.js         # Scroll nav, reveals, bar animations
    └── images/bellabeat-case-study-thumbnail.svg
```

---

## Design System

| Property      | Value                                        |
|---------------|----------------------------------------------|
| Theme         | Dark mode (`#110d0f` base — very warm black) |
| Primary accent| Rose `#e8916a`                               |
| Secondary     | Blush `#f5b8a0`, Sage `#9bb89a`              |
| Display font  | DM Serif Display (italic for headers)        |
| Body/code     | DM Mono                                      |
| Texture       | Grain noise overlay, warm blob blurs         |
| Aesthetic     | Editorial / wellness / serif warmth          |

Intentionally the warmest, most editorial-feeling page in the portfolio.
Contrasts strongly with the cold/tech/industrial feel of the other five pages.

---

## Index Card Integration

```html
<a href="bellabeat-case-study.html" class="project-card">
  <img
    src="bellabeat-case-study/assets/images/bellabeat-case-study-thumbnail.svg"
    alt="Bellabeat Smart Device Case Study — Fitbit usage analysis in R, SQL, and Tableau"
    loading="lazy"
  />
  <div class="card-body">
    <div class="card-tags">
      <span>Business Analytics</span><span>R</span><span>SQL</span>
    </div>
    <h3>Bellabeat Smart Device Analysis</h3>
    <p>
      Google Data Analytics capstone: Fitbit tracker behavioral patterns
      translated into marketing strategy recommendations for Bellabeat's Leaf product.
    </p>
    <div class="card-metric">R²=0.80 intensity · 2.85% active time · 4 recommendations</div>
  </div>
</a>
```

---

*Generated for Nakul Sreekanth's Data Science Portfolio — 2024/2026*
