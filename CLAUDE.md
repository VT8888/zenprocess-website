# CLAUDE.md — zenprocess.ai Website

## What This Is

Public marketing website for **zenprocess.ai** (KMV Group LLC) — an AI systems architecture firm serving mid-market building materials distributors. Built on Astro, deployed on Netlify, live at https://zenprocess.ai.

Founder: Vinh Truong. First-person voice throughout — "I", "we", "my team."

## Tech Stack

- **Framework:** Astro
- **Hosting:** Netlify (auto-deploy on push to `main`)
- **Analytics:** GA4 property 506711429 (LIVE — do not touch 533024287)
- **Search:** Google Search Console + Bing Webmaster Tools
- **Content:** Markdown in `src/content/blog/` (Astro content collection)

## Folder Structure

```
website/
├── src/
│   ├── content/blog/        # Blog posts (markdown + frontmatter)
│   ├── pages/               # .astro pages (index, about, solutions, case-study, contact, etc.)
│   ├── components/          # Reusable Astro components
│   └── layouts/             # Page layouts
├── public/                  # Static assets
├── astro.config.mjs
└── package.json
```

## Brand Positioning

- **Tagline:** Turn your ERP data into revenue.
- **One-liner:** We build real-time operational dashboards and data pipelines for building materials distributors — on top of the ERP you already run.
- **We ARE:** AI systems architecture firm for mid-market building materials distribution.
- **We are NOT:** ERP vendor, software company, staffing firm, chatbot builder.

## Brand Voice

**Tone:** Authoritative but approachable. A CTO talking to a peer, not a vendor pitching.
**POV:** First person — Vinh speaking directly.

**Rules:**
- Short sentences. Short paragraphs.
- Concrete examples over abstractions.
- Real numbers, real outcomes, real experience.
- **Banned buzzwords:** leverage, synergize, disrupt, cutting-edge, game-changer, unlock potential, transformative, revolutionary.
- Technical when needed, always accessible to a non-technical executive.

**Good:** "Your ERP cost $500K. Your team still exports to Excel every Monday. That's not a people problem — it's a data architecture problem."

**Bad:** "Leveraging cutting-edge AI to unlock the full potential of your data ecosystem."

## Audience Segments

Five B2B personas at building materials distributors ($10M–$500M revenue, 51–1000 employees):

1. **CEO / President** — Revenue, turns, competitive advantage, valuation
2. **VP of Operations** — Multi-warehouse efficiency, stockouts, process
3. **CFO** — COGS accuracy, landed cost, month-end close, data integrity
4. **VP of Sales** — Fill rates, order accuracy, pipeline visibility
5. **Purchasing Manager** — Exceptions, reorder points, lead times, alerts

Primary industries: stair parts, railings, lumber, millwork, door/window components.

## Proof Points (use in content)

- 20+ years enterprise IT & CTO leadership
- $80M+ in technology initiatives delivered
- 3,000+ SKUs managed across multi-warehouse operation
- Real-time data refresh (replaced weekly Excel exports)
- 0.00% data variance on baseline validation
- Built on top of SAP — no ERP replacement
- 16-week engagement from audit to production dashboards
- Existing client: HOF (SAP ByDesign)

## Blog Publishing Cadence

- **Schedule:** 2x/month — 1st & 3rd Wednesday
- **Pillars:** `operational_intelligence`, `industry_insights`, `data_problem`, `ai_value`
- **Author:** Vinh Truong, "Co-Founder & AI Architect"

## Article Template (REQUIRED for every post)

Every blog post MUST include these elements — this is the template that wins both classic SEO and AI search (ChatGPT, Perplexity, Google AI Overviews):

1. **"At a glance" summary box** at top — 5 bullets (AI Overviews extract this)
2. **At least one comparison table** (AI engines quote tables verbatim)
3. **At least one worked numeric example** with dollar figure (quotable specificity)
4. **Definition block** — one quotable paragraph defining the core concept
5. **FAQ section** before author bio — 5-6 real questions distributors ask
6. **FAQPage + Article schema** in frontmatter (eligible for Google AI Overviews)
7. **10-12 long-tail SEO keywords** in frontmatter
8. **2-3 internal links** to other blog posts with keyword anchor text
9. **Tight meta description** (~155 chars)
10. **Author bio** at end with CTA links to `/book` and `/case-study`

**Target length:** 2,300–2,800 words.

## Frontmatter Format

```yaml
---
title: "Article Title"
description: "Meta description under 160 chars."
date: "YYYY-MM-DD"
author: "Vinh Truong"
authorTitle: "Co-Founder & AI Architect"
pillar: "operational_intelligence" # or industry_insights, data_problem, ai_value
seoKeywords: ["keyword1", "keyword2", ...]  # 10-12 long-tail phrases
draft: false
---
```

## SEO Strategy — Win Both Classic + AI Search

Full 5-phase plan lives in AIOS memory (`project_seo_ai_search_plan.md`). Summary:

| Phase | Scope |
|---|---|
| 1 | Per-article: use the template above on every post |
| 2 | Site-wide: Article/Organization/BreadcrumbList/FAQPage schema, llms.txt, Bing sitemap, IndexNow, /learn/ hub, Related Articles block |
| 3 | AI search: Claim Perplexity/You.com sources, sameAs → LinkedIn in Organization schema |
| 4 | Content velocity: 2x/month, 8-10 cornerstone articles over 6 months |
| 5 | Authority: guest posts (LBM Journal, ProSales), podcasts, HARO, case studies |

**Critical:** ChatGPT's web search is powered by Bing. Bing Webmaster Tools matters as much as Google Search Console.

## Working Rules for Agents

1. **Never touch GA4 property 533024287** — it's a duplicate pending archive. LIVE property is 506711429.
2. **Every blog post must follow the Article Template above** — no exceptions.
3. **Never use banned buzzwords** (see Brand Voice).
4. **Always first-person (Vinh speaking).**
5. **CTA pattern:** end posts with author bio including `/book` and `/case-study` links.
6. **Draft workflow:** set `draft: false` only when user approves. Commit + push triggers Netlify auto-deploy.
7. **Internal links:** every new post should link to 2-3 existing posts in `src/content/blog/`.
8. **Backup before edit** — copy source files to `_backups/` before modifying (per parent CLAUDE.md rule).
9. **No AI-jargon or generic tech content** — every piece must be specific to building materials distribution.

## Existing Blog Posts (link to these for internal SEO)

- `pe-firms-buying-building-materials-distributors.md`
- `what-a-modern-data-pipeline-looks-like.md`
- `what-a-paid-ai-audit-looks-like.md`
- `why-your-purchasing-team-lives-in-excel.md`
- `ai-hype-to-ai-value.md`

## Related Context

Strategic/business context (audience details, offers, funnels, outreach) lives in the **AIOS workspace** at `/Users/vinhtruong/Data/zenprocess.ai/AIOS/`. If you need deeper context than this file provides, read `AIOS/context/brand-and-audience.md` and `AIOS/CLAUDE.md`.
