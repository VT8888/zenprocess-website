---
title: "AI Hype to AI Value: Why Most Mid-Market ERP Integrations Fail the ROI Test"
description: "Building materials distributors are being pitched AI from every direction. Here's the framework I use to separate AI activity from AI value — and the five questions that tell you if an AI project will actually move a number."
date: "2026-04-27"
author: "Vinh Truong"
authorTitle: "Co-Founder & AI Architect"
pillar: "industry_insights"
seoKeywords: ["AI ROI building materials", "AI ERP integration", "SAP AI distributor", "NetSuite AI distributor", "AI value framework", "mid-market AI strategy"]
draft: false
---

If you run a building materials distribution business, you are being pitched AI from every direction right now. Your ERP vendor just announced agentic AI inside every module. Your BI tool added a copilot. Three consultants sent you proposals last month. A board member forwarded you a McKinsey report. Your competitors are posting on LinkedIn about their AI transformation.

Most of it is activity, not value.

I say that as someone who builds AI systems for a living. The technology is real. The capabilities are real. The problem is that almost nobody is asking the only question that matters: *what number is this supposed to move, and by how much?*

Here's the framework I use when a distributor asks me whether an AI project is worth doing.

## The Activity Trap

There is an activity trap in corporate AI adoption right now, and it looks like this.

A company rolls out ChatGPT Enterprise. Training sessions get scheduled. A few people build useful prompts. Leadership talks about it on the earnings call. The CIO writes a memo about responsible AI. Six months later, somebody asks what the ROI is. The honest answer is that a few analysts are writing emails faster.

That is not AI transformation. That is an expense line with a narrative attached.

The activity trap happens because AI projects are easy to start and hard to measure. Unlike a new warehouse or a new ERP module, there is no go-live date, no clear scope, no obvious number to check against. The work feels important. The demos are impressive. The board is happy. But nothing in the P&L has moved.

For a building materials distributor, the cost of the activity trap compounds. You spend a year on AI projects that generate slides instead of margin. Meanwhile, a competitor spends the same year reducing stockouts by three points and cutting month-end close from nine days to two. At the end of the year, one of you has a story. The other has a better business.

## The Five Questions

Before I start any AI project with a distributor, I run through five questions. If any of them has a weak answer, I tell the client to hold off. Not every AI project is worth doing, and honesty on this upfront saves everyone time.

### 1. What number is this supposed to move?

Not "efficiency." Not "productivity." Not "insight." A specific, measurable number that appears on a report somebody already cares about.

Fill rate. Inventory turns. Days sales outstanding. Gross margin by product category. Landed cost variance. Purchase order accuracy. Stockout frequency. Month-end close duration.

If the answer is something vague — "help the team make better decisions" — the project is in the activity trap before it starts. Better decisions show up as better numbers. Name the number.

### 2. How is that number measured today?

This is where most AI projects fall apart and nobody realizes it until month six.

If you cannot measure the target metric reliably today, you cannot measure AI's impact on it tomorrow. You will be left with vibes and testimonials. The AI will feel like it is working, but you will not be able to prove it, defend the budget, or decide whether to expand the program.

For a building materials distributor on SAP or NetSuite, this often means the real first project is not an AI project at all. It is a data pipeline project — building the Bronze-Silver-Gold layer that lets you measure fill rate, turns, and landed cost accurately and consistently. Without that foundation, AI on top is a guess.

### 3. What is the current performance, and what is the target?

"Improve inventory turns" is not a target. "Move inventory turns from 4.1 to 5.0 over two quarters" is a target.

A real target forces two useful conversations. First, it forces you to confirm that the current number is trustworthy — which often surfaces the data quality issues in question two. Second, it forces you to decide whether the expected improvement justifies the cost. If the answer is "I don't know what it would be worth to move turns by a point," the project isn't ready.

One point of inventory turns on a $50M inventory base at a 15% carrying cost is $750K a year. Name that number and the conversation changes.

### 4. Who owns the outcome?

Not who owns the project. Who owns the number.

If the VP of Operations owns fill rate, then the VP of Operations needs to be the one asking for an AI project that improves fill rate, defining what success looks like, and being accountable when the project ships. If the project is being driven by IT, by a consultant, or by a board member, and the person who owns the number is a spectator, the project is already at risk.

The biggest predictor of AI project success in a mid-market distributor is not the technology stack. It is whether a real operator is on the hook for the result.

### 5. What is the simplest version that would prove it works?

The default failure mode in enterprise AI is scope creep. A project that should have been four weeks becomes eight months because every department wants their exceptions handled, every edge case gets built in, and every stakeholder adds a requirement.

The discipline is to find the narrowest possible slice that would produce a defensible number. One product category. One warehouse. One supplier. One decision. Build that, measure it, and only expand after the number moves.

This is where your ERP vendor's bundled AI modules tend to break down. They are built to cover every scenario for every customer, which means they do not optimize for any single one. A targeted implementation on top of your existing ERP, focused on one specific number, will almost always beat a horizontal AI module that promises to help with everything.

## Where AI Actually Earns Its Keep in Distribution

Setting aside the hype, here is where I have seen AI produce real, defensible ROI for building materials distributors.

**Exception management on purchasing.** A purchasing manager running 800+ daily exceptions in Excel is a textbook case. An AI layer that prioritizes exceptions by business impact, recommends resolutions based on historical patterns, and learns from the manager's decisions can compress two hours of spreadsheet work into twenty minutes of review. The number that moves is purchaser throughput, and downstream, stockout frequency.

**Landed cost forecasting.** For distributors with overseas supply chains, landed cost is the number that is always wrong until the final invoice arrives. AI models trained on your purchase history, freight rates, duty schedules, and lead times can produce forecasted landed cost at PO creation with meaningful accuracy. The number that moves is margin predictability and pricing discipline.

**Demand signal blending.** Classic reorder-point math assumes stationary demand. It breaks when you have seasonal products, promotional lifts, or a tile line tied to a single builder's project schedule. AI can blend historical sales, customer order patterns, quoted-but-not-booked pipeline, and external signals into a more accurate reorder recommendation. The number that moves is fill rate without inventory growth.

**Anomaly detection on data quality.** An agent watching your Bronze layer for inventory transactions that don't reconcile, POs with outlier unit costs, or sales orders with pricing that violates the contract catches errors before they become arguments between departments. The number that moves is month-end close duration and cross-department trust in the numbers.

In every one of these, the AI sits on top of clean, consolidated data. Without the data layer, none of them work. That is not a coincidence. That is the order of operations.

## Why Your ERP Vendor's AI Announcement Is Not the Answer

SAP, NetSuite, and every other major ERP have announced or shipped agentic AI capabilities inside their platforms. These capabilities are real, and over time they will be useful. But for a distributor trying to move a number this year, they are rarely the right starting point.

Three reasons.

First, they are built for every customer, which means they optimize for none of yours. Your product mix, your supplier structure, your margin model, your customer concentration — none of that shapes the vendor's AI module. You get the average AI for the average distributor.

Second, they require clean data to work, and your ERP data is not clean enough. Every distributor I've worked with has data quality issues that the ERP itself created — duplicate items from migrations, inconsistent units of measure, landed cost that was never calculated properly, sales tax lines that break category analysis. Turning on AI inside the ERP on top of that data will produce confident nonsense.

Third, they are an upsell, which means your ROI discussion is now tangled up with a license discussion. The vendor's AI module comes with a per-user fee, a new agreement, and a multi-year term. The question of whether it actually moves a number gets lost inside the contract negotiation.

A better sequence for most distributors is to build the data layer first, run one or two targeted AI projects on top of it that each move a specific number, and only then evaluate whether the ERP's bundled AI is worth adding. By the time you get there, you will know your data well enough to judge whether the vendor's module is buying you anything real.

## The Five-Minute Self-Check

If you are evaluating an AI project in your business right now, here is the quick version of the framework. Run it before your next vendor meeting or internal review.

1. Write down the one number this project will move.
2. Write down how that number is measured today and whether you trust it.
3. Write down the current value and the target value, with a dollar figure attached to the delta.
4. Write down the name of the operator — not the CIO, not the consultant — who is accountable for the number moving.
5. Write down the smallest version of the project that would prove it works.

If any of those five answers is missing, weak, or vague, you have not yet found a real AI project. You have found an activity.

The companies that are going to pull ahead over the next two years are not the ones with the most impressive AI demos. They are the ones who quietly moved their inventory turns from four to five, their fill rate from 92% to 96%, their month-end close from nine days to two. Every one of those improvements will have AI somewhere in the story. But the story starts with the number, not the AI.

Pick the number first. The rest gets easier.

*Vinh Truong is the Co-Founder & AI Architect at [zenprocess.ai](https://zenprocess.ai), where he builds real-time operational dashboards and data pipelines for building materials distributors. With 20+ years of enterprise IT and CTO leadership and $80M+ in technology initiatives delivered, he brings Fortune 500 data architecture to mid-market operations. [Book a discovery call](https://zenprocess.ai/book) or [read the full case study](https://zenprocess.ai/case-study).*
