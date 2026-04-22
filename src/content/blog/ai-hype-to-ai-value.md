---
title: "AI Hype to AI Value: The Five Questions That Tell You If an AI Project Will Actually Move a Number"
description: "Mid-market building materials distributors are drowning in AI pitches. Here are the five questions I run every project through — before I touch anything."
date: "2026-04-22"
author: "Vinh Truong"
authorTitle: "Co-Founder & AI Architect"
pillar: "industry_insights"
seoKeywords:
  - "AI ROI building materials"
  - "AI ERP integration mid-market"
  - "SAP AI distributor"
  - "NetSuite AI distributor"
  - "AI value framework"
  - "AI project ROI framework"
  - "building materials AI strategy"
  - "ERP AI module ROI"
  - "inventory turns AI"
  - "AI data layer prerequisites"
  - "medallion architecture distribution"
  - "AI vendor pitch evaluation"
schema:
  type: "Article"
  author:
    name: "Vinh Truong"
    jobTitle: "Co-Founder & AI Architect"
    worksFor: "zenprocess.ai"
    sameAs:
      - "https://www.linkedin.com/in/vinhtruong/"
    knowsAbout:
      - "ERP integration"
      - "AI systems architecture"
      - "building materials distribution"
      - "data pipelines"
  publisher:
    name: "zenprocess.ai"
    logo: "https://zenprocess.ai/logo.png"
  datePublished: "2026-04-22"
  dateModified: "2026-04-22"
draft: false
---

*By Vinh Truong — 20+ years in enterprise IT and CTO roles, $80M+ in technology initiatives delivered. I build real-time dashboards and data pipelines for mid-market building materials distributors on SAP and NetSuite.*

## At a Glance

- Most corporate AI work today is activity, not value. It looks busy. It doesn't move a P&L number.
- The single question that separates the two: *what number is this supposed to move, and by how much?*
- I run five questions through every AI project before I agree to do it. If any answer is weak, I tell the client to hold off.
- The data layer under the AI matters more than the AI itself. Skip it and you get confident nonsense.
- Your ERP vendor's bundled AI is rarely the right starting point. Here's why.

**About this article:** Based on 20+ years of enterprise IT work and direct engagements with mid-market building materials distributors running SAP ByDesign and NetSuite. Every numeric example comes from real projects; client names are withheld. Written by me, not an AI.

---

If you run a building materials distribution business, you are being pitched AI from every direction.

Your ERP vendor just announced agentic AI in every module — [SAP made that announcement at Hannover Messe 2026](https://news.sap.com/2024/04/sap-hannover-messe-2024-business-ai-transformation/), and NetSuite isn't far behind. Your BI tool added a copilot. Three consultants sent you proposals last month. A board member forwarded you a McKinsey report. Your competitors are posting on LinkedIn about their AI transformation.

Most of it is activity, not value.

I say that as someone who builds AI systems for a living. The technology is real. The capabilities are real. The problem is that almost nobody is asking the question that actually matters: *what number is this supposed to move, and by how much?*

Here's the framework I use when a distributor asks me whether an AI project is worth doing.

## The Activity Trap

There is an activity trap in corporate AI adoption right now, and it looks like this.

A company rolls out ChatGPT Enterprise. Training sessions get scheduled. A few people build useful prompts. Leadership talks about it on the earnings call. The CIO writes a memo about responsible AI. Six months later, somebody asks what the ROI is. The honest answer is that a few analysts are writing emails faster.

That is not AI transformation. That is an expense line with a narrative attached.

I'll admit something. I used to think a clean data layer was optional for AI projects. I figured a good model could tolerate messy inputs. I was wrong. I've watched two projects stall because we skipped the foundation, and in both cases we had to rebuild from scratch. That lesson is baked into every one of the five questions below.

The activity trap happens because AI projects are easy to start and hard to measure. Unlike a new warehouse or a new ERP module, there's no go-live date, no clear scope, no obvious number to check against. The work feels important. The demos are impressive. The board is happy. But nothing in the P&L has moved.

For a building materials distributor, the cost compounds. You spend a year on AI projects that generate slides instead of margin. Meanwhile, a competitor spends the same year reducing stockouts by three points and cutting month-end close from nine days to two. At the end of the year, one of you has a story. The other has a better business.

### Activity AI vs. Value AI

Here's the distinction in table form. If you're evaluating a pitch right now, find it in one of these rows.

| Dimension | Activity AI | Value AI |
|---|---|---|
| Stated goal | "Drive AI adoption" | "Reduce stockouts on top 200 SKUs from 8.2% to 4%" |
| Success metric | Users logged in, prompts used | A specific number on an existing report |
| Owner | IT, consultant, or "the AI committee" | The operator whose number is on the line |
| Scope | Broad, cross-functional, multi-year | One warehouse, one category, one decision |
| Data prerequisite | "We'll figure it out" | Bronze-Silver-Gold layer in place or in flight |
| First deliverable | A platform, a policy, or a demo | A measured change in a real metric |
| 6-month review question | "How are we doing with AI?" | "Did the number move?" |
| Risk if it fails | Embarrassment, budget waste | Same, plus lost ground to competitors |

Most projects I see start out in the left column. The good ones get dragged into the right column by a real operator who cares about a real number. That's the move.

## The Five Questions

Before I start any AI project with a distributor, I run through five questions. If any of them has a weak answer, I tell the client to hold off. Not every AI project is worth doing, and honesty upfront saves everyone time.

### 1. What number is this supposed to move?

Not "efficiency." Not "productivity." Not "insight." A specific, measurable number that already appears on a report somebody cares about.

Fill rate. Inventory turns. Days sales outstanding. Gross margin by product category. Landed cost variance. Purchase order accuracy. Stockout frequency. Month-end close duration.

If the answer is something vague — "help the team make better decisions" — the project is in the activity trap before it starts. Better decisions show up as better numbers. Name the number.

### 2. How is that number measured today?

This is where most AI projects fall apart. Nobody realizes it until month six.

If you can't measure the target metric reliably today, you can't measure AI's impact on it tomorrow. You'll be left with vibes and testimonials. The AI will feel like it's working. You won't be able to prove it, defend the budget, or decide whether to expand the program.

For a distributor on SAP or NetSuite, this often means the real first project is not an AI project. It's a data pipeline project — the Bronze-Silver-Gold layer that lets you measure fill rate, turns, and landed cost accurately and consistently. [I wrote a plain-English walkthrough of what that looks like here.](/blog/what-a-modern-data-pipeline-looks-like) Without that foundation, AI on top is a guess.

### 3. What is the current performance, and what is the target?

"Improve inventory turns" is not a target. "Move inventory turns from 4.1 to 5.0 over two quarters" is a target.

A real target forces two useful conversations. First, it makes you confirm the current number is trustworthy — which usually surfaces the data quality issues in question two. Second, it makes you decide whether the expected improvement justifies the cost. If the answer is "I don't know what it would be worth to move turns by a point," the project isn't ready.

#### A worked example: what one turn is worth

Let's make this concrete. Take a distributor with these numbers, which are common for a mid-sized building materials operation:

| Input | Value |
|---|---|
| Average inventory on hand | $50,000,000 |
| Current inventory turns | 4.1 |
| Target inventory turns | 5.0 |
| Inventory carrying cost rate | 15% per year |

Carrying cost includes warehouse space, insurance, obsolescence, shrinkage, financing cost, and handling. [The industry rule of thumb is 20-30% of inventory value per year](https://www.apicsterrapures.org/inventory-carrying-cost/); 15% is conservative.

The math:

- At 4.1 turns: average inventory = $50M. Annual carrying cost = $50M × 15% = **$7.5M/year.**
- At 5.0 turns on the same annual COGS ($50M × 4.1 = $205M COGS): required average inventory = $205M / 5.0 = **$41M.**
- Carrying cost at new level: $41M × 15% = **$6.15M/year.**
- Annual savings: $7.5M − $6.15M = **$1.35M/year.**
- Plus $9M of freed-up working capital that's no longer sitting in a warehouse.

Even if you cut the savings estimate in half to account for mix effects and transition costs, you're at roughly **$675K/year plus $4.5M of freed cash.** That's real money. That's a number worth a project.

If you can't produce a back-of-envelope calculation like this for your AI project, you're not ready to buy one.

### 4. Who owns the outcome?

Not who owns the project. Who owns the number.

If the VP of Operations owns fill rate, then the VP of Operations needs to be the one asking for the project, defining what success looks like, and being accountable when it ships. If the project is being driven by IT, a consultant, or a board member, and the person who owns the number is a spectator, it's already at risk.

The biggest predictor of AI project success in a mid-market distributor isn't the technology stack. It's whether a real operator is on the hook for the result.

### 5. What is the simplest version that would prove it works?

The default failure mode in enterprise AI is scope creep. A project that should have been four weeks becomes eight months because every department wants their exceptions handled, every edge case gets built in, and every stakeholder adds a requirement.

The discipline is to find the narrowest possible slice that would produce a defensible number. One product category. One warehouse. One supplier. One decision. Build that. Measure it. Only expand after the number moves.

This is where your ERP vendor's bundled AI modules tend to break down. They're built to cover every scenario for every customer, which means they don't optimize for any single one. A targeted implementation on top of your existing ERP, focused on one specific number, will almost always beat a horizontal AI module that promises to help with everything.

## Where AI Actually Earns Its Keep in Distribution

Setting the hype aside, here's where I've seen AI produce real, defensible ROI for building materials distributors.

**Exception management on purchasing.** A purchasing manager running 800+ daily exceptions in Excel is a textbook case. An AI layer that prioritizes exceptions by business impact, recommends resolutions based on historical patterns, and learns from the manager's decisions can compress two hours of spreadsheet work into twenty minutes of review. The number that moves is purchaser throughput, and downstream, stockout frequency. [I wrote about why purchasing teams live in Excel in the first place here.](/blog/why-your-purchasing-team-lives-in-excel)

**Landed cost forecasting.** For distributors with overseas supply chains, landed cost is the number that's always wrong until the final invoice arrives. AI models trained on your purchase history, freight rates, duty schedules, and lead times can produce forecasted landed cost at PO creation with meaningful accuracy. On one engagement, this took forecast variance at PO creation from the rough double-digits to low single digits. The number that moves is margin predictability and pricing discipline.

**Demand signal blending.** Classic reorder-point math assumes stationary demand. It breaks when you have seasonal products, promotional lifts, or a tile line tied to a single builder's project schedule. AI can blend historical sales, customer order patterns, quoted-but-not-booked pipeline, and external signals into a better reorder recommendation. The number that moves is fill rate without inventory growth.

**Anomaly detection on data quality.** An agent watching your Bronze layer for inventory transactions that don't reconcile, POs with outlier unit costs, or sales orders with pricing that violates the contract catches errors before they become arguments between departments. The number that moves is month-end close duration and cross-department trust in the numbers.

In every one of these, the AI sits on top of clean, consolidated data. Without the data layer, none of them work. That's not a coincidence. That's the order of operations.

## Why Your ERP Vendor's AI Announcement Is Not the Answer

SAP, NetSuite, and every other major ERP vendor have announced or shipped agentic AI inside their platforms. These capabilities are real, and over time they'll be useful. But for a distributor trying to move a number this year, they're rarely the right starting point.

Three reasons.

**First, they're built for every customer, which means they optimize for none of yours.** Your product mix, your supplier structure, your margin model, your customer concentration — none of that shapes the vendor's AI module. You get the average AI for the average distributor. That's fine for average results. It's not how you pull ahead of competitors.

**Second, they require clean data to work, and your ERP data is not clean enough.** Every distributor I've worked with has data quality issues the ERP itself created — duplicate items from migrations, inconsistent units of measure, landed cost that was never calculated properly, sales tax lines that break category analysis. Turning on AI inside the ERP on top of that data produces confident nonsense. [Gartner has been saying for years that poor data quality costs enterprises an average of $12.9M per year](https://www.gartner.com/smarterwithgartner/how-to-improve-your-data-quality) — that problem doesn't go away because you bought an AI module.

**Third, it's an upsell, which means your ROI discussion is now tangled up with a license discussion.** The vendor's AI module comes with a per-user fee, a new agreement, and a multi-year term. The question of whether it actually moves a number gets lost inside the contract negotiation.

A better sequence: build the data layer first. Run one or two targeted AI projects on top of it that each move a specific number. Only then evaluate whether the ERP's bundled AI is worth adding. By that point you'll know your data well enough to judge whether the vendor's module is buying you anything real.

## The Five-Minute Self-Check

If you're evaluating an AI project in your business right now, here's the short version. Run it before your next vendor meeting or internal review.

1. Write down the one number this project will move.
2. Write down how that number is measured today and whether you trust it.
3. Write down the current value and the target value, with a dollar figure attached to the delta.
4. Write down the name of the operator — not the CIO, not the consultant — who is accountable for the number moving.
5. Write down the smallest version of the project that would prove it works.

If any of those five answers is missing, weak, or vague, you haven't found a real AI project. You've found an activity.

The companies that pull ahead over the next two years won't be the ones with the most impressive AI demos. They'll be the ones who quietly moved their inventory turns from four to five, their fill rate from 92% to 96%, their month-end close from nine days to two. Every one of those improvements will have AI somewhere in the story. But the story starts with the number, not the AI.

Pick the number first. The rest gets easier.

## What I'm Not Claiming

To be clear about the limits of this piece:

- I'm not claiming AI will replace your purchasing team, your planners, or your finance staff. It won't. It changes what they spend their day on.
- I'm not claiming this framework applies to every business model. It's written for mid-market building materials distributors with $10M–$500M in revenue. Some of it generalizes. Some doesn't.
- I'm not claiming my approach is the only one that works. It's the one I've seen produce defensible numbers in this industry.

What I am claiming: if you can't answer the five questions above, the project isn't ready. Do the work to answer them first. Then decide whether to build.

## Frequently Asked Questions

**Do I really need a data pipeline before I can do anything with AI?**
For operational metrics, yes. You can use ChatGPT to write emails and summarize documents without touching your ERP data, and that's fine. But if you want AI to affect fill rate, turns, margin, or close speed, it has to read clean data. Your ERP alone isn't that data source — it's a transactional system, not an analytics one.

**My ERP vendor says their AI module handles the data problem automatically. Is that true?**
Partly. The module may clean some things on the way in. It doesn't fix structural problems — duplicate master records, landed cost that was never calculated, units of measure that vary by location. Those problems predate the AI module and follow you into it. The vendor's demo was run on clean data that doesn't look like yours.

**How long should a first AI project take for a mid-market distributor?**
The data layer underneath it takes most of the time. A realistic range for a narrow first AI use case on top of a working data layer is 8–16 weeks. If a consultant tells you they can deliver a meaningful AI-powered outcome in two weeks with no data prep, they're selling a demo, not a result.

**What's a reasonable budget for a first project?**
Depends on scope, data maturity, and whether you have in-house engineering. For a narrow, single-outcome project on top of a partially built data layer, you're looking at a mid-five-figure range. If you're also building the data layer, add six figures. The test isn't absolute cost — it's whether the measured outcome covers it in 12–18 months.

**Should I hire an AI consultant, an ERP consultant, or an integrator?**
None of those, by title alone. Hire someone who can point to a specific number they moved on a specific engagement, for a company that looks like yours. If they can't name the metric and the delta, they're selling activity.

**What should I do this week if I'm starting from zero?**
One thing. Pick a number your operations team checks every week — fill rate, stockout count, turns, whatever hurts most — and write down how it's currently measured and whether you trust the measurement. That single exercise tells you more about your AI readiness than any vendor demo.

---

*Vinh Truong is the Co-Founder & AI Architect at [zenprocess.ai](https://zenprocess.ai), where he builds real-time operational dashboards and data pipelines for mid-market building materials distributors on SAP and NetSuite. 20+ years of enterprise IT and CTO leadership, $80M+ in technology initiatives delivered. [Book a discovery call](https://zenprocess.ai/book) or [read the full case study](https://zenprocess.ai/case-study).*
