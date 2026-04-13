# Stanford CS229 Independent Study — Portfolio Page

## Overview

Standalone portfolio page for the **Stanford CS229 Machine Learning Independent Study** —
10 algorithm implementations from mathematical first principles, undertaken by
Nakul Sreekanth independently in 2023–2024 using Stanford's publicly available
course materials.

**This is explicitly NOT a project page.** It is framed as an intellectual initiative
and honest account of self-directed learning.

---

## File Structure

```
cs229-independent-study/
├── cs229-independent-study.html           # Main page (standalone)
├── cs229-independent-study.json           # Metadata
├── README-cs229-independent-study.md      # This file
└── assets/
    ├── css/cs229-independent-study.css    # Ink-on-parchment scholarly stylesheet
    ├── js/cs229-independent-study.js      # Minimal: nav, reveals, counters
    └── images/cs229-independent-study-thumbnail.svg
```

---

## Design System

| Property      | Value                                          |
|---------------|------------------------------------------------|
| Theme         | Dark parchment (`#0e0d0b` — warm near-black)   |
| Primary accent| Gold `#c4933f`                                 |
| Text          | Warm cream `#e8e0d0`                           |
| Display font  | Playfair Display (serif, italic)               |
| Code font     | Source Code Pro                                |
| Aesthetic     | Scholar's notebook / academic typesetting      |
| Signature     | Left margin ruling line, Roman numeral section marks |

This page is intentionally the most visually restrained in the portfolio —
no hero KPI cards, no tech stack chips, no animation-heavy reveals.
It reads like a well-typeset academic document.

---

## Portfolio Placement

**Do NOT place this alongside the 6 project pages.**

Instead, place it in a clearly labeled separate section on the portfolio index.
Suggested section heading: "Theoretical Foundations" or "Background Study."

Suggested index card:

```html
<a href="cs229-independent-study.html" class="study-card">
  <img
    src="cs229-independent-study/assets/images/cs229-independent-study-thumbnail.svg"
    alt="Stanford CS229 Independent Study — 10 ML algorithms from scratch"
    loading="lazy"
  />
  <div class="card-body">
    <div class="card-label">Independent Study · 2023–2024</div>
    <h3>Stanford CS229 Machine Learning</h3>
    <p>
      Self-directed study of Stanford's graduate ML course: 10 algorithms
      implemented from mathematical first principles, including ICA, EM/GMM,
      Value Iteration, and PU Learning.
    </p>
  </div>
</a>
```

---

## Framing Note

The page opens with an explicit statement that this is not a project, and
includes a "note on framing" box acknowledging that Stanford owns the
problem structure and scaffolding. This honesty is a feature, not a bug —
it demonstrates intellectual integrity and makes the genuine contribution
(the mathematical implementations and the understanding they represent)
more credible, not less.

---

*Generated for Nakul Sreekanth's Data Science Portfolio — 2024/2026*
