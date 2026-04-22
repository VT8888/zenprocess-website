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
- **Blog URL route:** Posts are served at `/resources/<slug>` — NOT `/blog/<slug>`. Route handler is `src/pages/resources/[slug].astro`. Always use `/resources/<slug>` for internal links.

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

- **Schedule:** Weekly — every Monday, 7 AM CT (decided 2026-04-22)
- **Length:** 2,000–2,800 words per post
- **Pillars:** `operational_intelligence`, `industry_insights`, `data_problem`, `ai_value`
- **Author:** Vinh Truong, "Co-Founder & AI Architect"
- **Backlog rule:** Maintain a 4-post buffer at all times — this is the single predictor of sustaining weekly cadence
- **Distribution:** LinkedIn post Mon 7:30 AM, LinkedIn newsletter Tue, X thread Wed

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
6. **Draft workflow (REQUIRED for every new post):**
   - Save new post to `src/content/blog/<slug>.md` with `draft: true`
   - Confirm Astro dev server is running on `localhost:4321` (start with `npm run dev` if not)
   - Curl the preview URL to verify it renders without errors
   - Give Vinh the local preview link: `http://localhost:4321/resources/<slug>`
   - Present article summary + link audit table
   - Wait for explicit approval ("approved", "push it live")
   - On approval: flip `draft: true` → `draft: false`, commit, push to `main`
   - Never push `draft: false` without explicit per-post approval
7. **Internal links:** every new post should link to 2-3 existing posts in `src/content/blog/`.
8. **Backup before edit** — copy source files to `_backups/` before modifying (per parent CLAUDE.md rule).
9. **No AI-jargon or generic tech content** — every piece must be specific to building materials distribution.
10. **NEVER name clients (including HOF) in public content** — anonymize as "a national building materials distributor," "a SAP ByDesign distributor we work with," etc. Proof-point numbers (3,000+ SKUs, 16-week engagement, 0.00% variance) are fine; names are not. Requires explicit written permission from Vinh to name any client.
11. **External citations must be authoritative** — link to SAP, Gartner, IDC, McKinsey, WSJ, NYT, Harvard Business Review, reputable industry publications (LBM Journal, ProSales), or primary sources. No content farms, aggregators, or affiliate sites.
12. **Verify every external URL before publishing** — fetch each link with WebFetch or curl to confirm it returns 200 AND the page matches the claim. Never guess URL patterns. Present a link audit table (URL → status → matches claim?) to the user before shipping. If a URL can't be verified, remove the link and soften the claim.

## Write in Vinh's Voice (NOT AI Voice)

Every article must sound like Vinh wrote it. AI-sounding prose gets dismissed by executive readers — credibility dies in the first 3 paragraphs.

**AI tells to AVOID:**
- Parallel triples: "fast, reliable, and scalable"
- Buzzwords: leverage, unlock, transform, optimize, streamline, empower, robust, seamless, holistic, cutting-edge, game-changing
- Hedge phrases: "it's worth noting," "in today's landscape," "in the ever-evolving world of"
- Em-dash over-use as a stylistic crutch
- Symmetric bullet lists where every item has identical structure
- "Not just X, but Y" used repeatedly
- Sweeping generalizations: "every company," "all businesses," "the modern enterprise"
- Filler verbs: "dive in," "unpack," "let's explore"
- Closing paragraphs that summarize what was just said
- Over-qualifiers: "generally speaking," "in most cases," "typically"

**Vinh's actual voice:**
- Short sentences. Short paragraphs. Often 1-2 sentences per paragraph.
- First person: "I've seen," "in my experience," "I was wrong about"
- Specific numbers over vague claims: "3,000+ SKUs" not "large catalog"
- Plain operator language: "Your ERP cost $500K" not "your enterprise technology investment"
- Direct, occasionally blunt: "That's not a people problem — it's a data architecture problem"
- Occasional sentence fragments for emphasis. Like this.
- Real talk about tradeoffs: "This doesn't work for every business"
- Anecdotes with specifics, anonymized: "A purchasing manager I worked with was running 800+ exceptions in Excel every morning"
- First-draft energy — one person, one sitting, not over-polished
- Contrarian takes on industry pieties when warranted

**Pre-ship self-check:**
1. Read first 3 paragraphs out loud. CTO talking, or marketing blog?
2. Specific numbers in the first 300 words?
3. Could reader guess a real operator wrote this?
4. At least one blunt opinion or contrarian take?
5. Scan for banned buzzwords — remove them.
6. Paragraph lengths varied? (AI writes uniform paragraphs.)
7. Any "clever" or "polished" sentence Vinh wouldn't write? Kill it.

If the article could have appeared on any generic AI/ERP/SaaS blog, it failed.

## Existing Blog Posts (link to these for internal SEO)

- `pe-firms-buying-building-materials-distributors.md`
- `what-a-modern-data-pipeline-looks-like.md`
- `what-a-paid-ai-audit-looks-like.md`
- `why-your-purchasing-team-lives-in-excel.md`
- `ai-hype-to-ai-value.md`

## Related Context

Strategic/business context (audience details, offers, funnels, outreach) lives in the **AIOS workspace** at `/Users/vinhtruong/Data/zenprocess.ai/AIOS/`. If you need deeper context than this file provides, read `AIOS/context/brand-and-audience.md` and `AIOS/CLAUDE.md`.
