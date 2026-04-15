---
title: "What a Modern Data Pipeline Actually Looks Like (Plain English)"
description: "Bronze, Silver, Gold — the three-layer data architecture that Fortune 500 companies use, explained in terms a building materials distributor can understand."
date: "2026-04-08"
author: "Vinh Truong"
authorTitle: "Co-Founder & AI Architect"
pillar: "operational_intelligence"
seoKeywords: ["data pipeline explained", "Bronze Silver Gold architecture", "ERP data warehouse", "building materials distribution analytics"]
draft: false
---

If someone tells you they want to build a data pipeline for your distribution business, you should know exactly what they mean before you agree to anything. The term gets thrown around a lot, usually by consultants who benefit from keeping it vague.

So let me explain it plainly. I've built these systems for Fortune 500 companies and mid-market distributors alike. The architecture is the same. The scale is different. And there's nothing magical about it.

## The Problem the Pipeline Solves

Your ERP is a transactional system. It's designed to do one thing extremely well: record business transactions. When your purchasing team creates a purchase order, the ERP records it. When a shipment arrives at the warehouse and inventory is received, the ERP records it. When a sales order ships and an invoice is generated, the ERP records it.

What the ERP is not designed to do is answer questions like:

- What are my inventory turns by product category across all warehouses for the last 90 days?
- Which SKUs have been below safety stock more than three times this quarter?
- What's my actual landed cost on overseas orders versus domestic, including freight, duties, and handling?
- Which warehouse has excess stock on items that another warehouse needs?

These are analytics questions, and your ERP was never built to answer them efficiently. That's not a flaw in the ERP — it's a design constraint. Transactional systems are optimized for recording individual events quickly. Analytics requires aggregating thousands or millions of those events, transforming them, and presenting them in a way that supports decision-making.

When your team exports data from the ERP into Excel to answer these questions, they're manually building a data pipeline. Every export, every VLOOKUP, every pivot table is a step in a pipeline that a human is operating by hand, every day, with no audit trail and no consistency guarantee.

A modern data pipeline automates all of that. It extracts data from your ERP, processes it through defined stages, and delivers clean, reliable, business-ready metrics to dashboards your team can use without touching a spreadsheet.

## The Three Layers: Bronze, Silver, Gold

The architecture that powers this is called a medallion architecture — Bronze, Silver, Gold. It's the same pattern used by companies like Walmart, Amazon, and Home Depot for their supply chain analytics. Here's what each layer does, in plain terms.

### Bronze Layer — The Raw Copy

The Bronze layer is a complete copy of the data from your ERP, stored exactly as it appears in the source system. Every table, every field, every record — pulled over automatically on a schedule.

Why do this? Three reasons.

First, it's a safety net. If anything goes wrong downstream — a transformation breaks, someone needs to re-analyze historical data, there's a discrepancy to investigate — you always have the original data to go back to. It hasn't been modified, filtered, or summarized.

Second, it decouples your reporting from your ERP. Once the data is in the Bronze layer, your team can run heavy queries and analyses against it without putting load on the ERP. I've seen ERPs slow to a crawl during month-end because someone ran a massive inventory report. With a Bronze layer, that never happens. Your ERP handles transactions. The data warehouse handles analytics.

Third, it creates a historical record. Most ERPs overwrite data. When you change a price, the old price is gone. When you adjust an inventory count, the previous count isn't accessible. The Bronze layer captures snapshots over time, so you can track trends and compare periods.

For a building materials distributor, the Bronze layer typically pulls purchase orders, sales orders, inventory transactions, item master data, vendor master data, customer master data, warehouse transfers, and financial transactions. For a company with 3,000+ SKUs across multiple warehouses, this is a significant volume of data — but modern data warehouse technology handles it easily.

### Silver Layer — Cleaned and Standardized

The Silver layer is where the data gets cleaned up. Raw ERP data is messy. If you've ever exported data from your ERP and tried to use it directly, you know what I mean.

Here's what happens in the Silver layer:

**Deduplication.** ERPs sometimes create duplicate records — duplicate vendor entries, duplicate item records from data migration, duplicate transaction entries from system glitches. The Silver layer identifies and resolves these.

**Standardization.** If you have multiple locations on different ERP instances, the same product might have different item codes, different descriptions, or different unit-of-measure conventions. The Silver layer maps everything to a single, consistent standard. Item XYZ-100 at location one and PROD-XYZ100 at location two become the same SKU.

**Data type fixing.** Dates that are stored as text get converted to actual dates. Currency fields that include dollar signs get converted to numbers. Quantity fields with mixed units get standardized. These seem like minor issues until you try to sum a column and get an error because one record has "12 EA" and another has "12."

**Relationship linking.** ERPs store data in normalized tables, which is efficient for the database but not intuitive for analysis. The Silver layer links related data together — purchase orders linked to vendors linked to items linked to inventory levels linked to warehouse locations — so downstream queries don't need to join 15 tables to answer a simple question.

**Validation.** Records that don't make sense get flagged. An inventory transaction with a negative quantity that isn't a return. A purchase order with a unit cost of zero. A sales order dated in 2019 that appeared in yesterday's data pull. These anomalies get caught and handled in the Silver layer instead of silently corrupting your reports.

For a building materials distributor, the Silver layer is where things like landed cost calculations start to come together. You have the purchase price from the PO, the freight cost from the shipping invoice, the duty charges from the customs broker, and the handling cost from the warehouse. The Silver layer combines these into a single landed cost per unit per item — something your ERP probably doesn't calculate automatically, especially for overseas shipments with 60-90 day lead times.

### Gold Layer — Business-Ready Metrics

The Gold layer is what your team actually sees. It contains pre-calculated metrics, aggregations, and KPIs that are ready for dashboard consumption.

This is where the raw transactional data becomes operational intelligence:

**Inventory metrics:** Current stock levels by SKU by warehouse. Inventory turns by product category — not calculated once per quarter in a spreadsheet, but updated daily. Days of supply. Safety stock coverage. Items below reorder point right now. Items above max stock level. Stock transfer recommendations based on where the excess is versus where the shortfall is.

**Purchasing metrics:** Open PO aging. Vendor lead time performance — not what the vendor promises, but what they actually deliver. PO accuracy — how often does the received quantity match the ordered quantity? Landed cost trending by product category and by supplier. Reorder point recommendations based on actual consumption rates and actual lead times.

**Financial metrics:** Revenue by customer, by product category, by warehouse. Gross margin by the same dimensions. COGS trending. Average selling price versus average purchase cost. Margin erosion alerts when a product line's spread starts thinning.

**Fulfillment metrics:** Fill rate by warehouse — what percentage of orders are shipped complete, on time? Backorder aging. Stockout frequency by SKU. Customer order cycle time.

For a distributor with 3,000+ SKUs, multiple warehouses, and a mix of overseas and domestic suppliers, these Gold-layer metrics replace dozens of spreadsheets. Your purchasing team stops exporting data and building pivot tables. They open a dashboard and see exactly what needs their attention — which items to reorder, which stock transfers to initiate, which vendors are consistently late, which products are eating up warehouse space without turning fast enough.

## How the Data Actually Moves

The pipeline runs on a schedule. Most distributors I work with start with daily refreshes — data is extracted from the ERP overnight or early morning, processed through Bronze, Silver, and Gold layers, and the dashboards are current by the time the team starts their day.

Some metrics benefit from more frequent refreshes. Inventory levels and open order status can update every few hours. Financial metrics typically need daily at most. The frequency is configurable and depends on what the business actually needs.

The extraction layer uses ETL or ELT tools — software designed specifically to pull data from source systems and load it into a data warehouse. These tools handle the connection to your ERP, manage the extraction schedule, deal with incremental updates (pulling only what's changed since the last run), and handle errors gracefully. If the ERP is temporarily unavailable, the pipeline retries instead of failing silently.

The data warehouse is where Bronze, Silver, and Gold layers live. It's a database optimized for analytics queries — the opposite of your ERP's transactional database. It can handle complex aggregations across millions of rows in seconds. Your team never interacts with it directly. They interact with dashboards that query it behind the scenes.

The dashboards are custom-built for each department. Purchasing sees inventory exceptions, reorder recommendations, and vendor performance. Finance sees margin analysis, COGS trending, and revenue breakdowns. Operations sees fulfillment metrics, warehouse utilization, and stock transfer opportunities. The CEO sees a consolidated view of everything that matters.

## What This Replaces

Let me be specific about what goes away when you implement this properly:

- The 6:30 AM Excel export your purchasing manager runs every morning
- The weekly inventory report that takes someone two days to compile
- The monthly financial analysis that three people contribute to in different spreadsheets
- The quarterly inventory turns calculation that uses outdated data by the time it's presented
- The "which number is right?" conversation between departments using different data sources
- The vendor performance evaluation that happens annually because it's too painful to do more often

These aren't hypothetical examples. I've seen every one of them in building materials distribution operations. And I've replaced every one of them with automated pipelines and dashboards.

## What This Doesn't Replace

Your ERP stays. Nobody is ripping anything out. The data pipeline sits alongside your ERP, reading from it but never writing to it. Your team continues to create POs, receive inventory, process sales orders, and run their daily transactions in the ERP exactly as they do today.

Your team's expertise stays. The pipeline doesn't make purchasing decisions — your purchasing team does. But instead of spending two hours a day finding the information they need to make decisions, they spend two minutes looking at a dashboard and then spend the rest of that time actually making decisions and working with vendors.

Your processes stay — the good ones, anyway. If you have a solid purchasing workflow or a well-defined stock transfer process, the pipeline makes it faster and more accurate. It doesn't impose new processes. It gives your existing processes better data.

## This Is Not New Technology

I want to be clear about something: none of this is experimental. The Bronze-Silver-Gold architecture has been standard practice in enterprise data engineering for over a decade. Every major retailer, every large distributor, every Fortune 500 supply chain operation runs on some version of this pattern.

What's changed is that the tools and infrastructure have become accessible to mid-market companies. Ten years ago, building a data warehouse required a dedicated team and a seven-figure budget. Today, the same architecture can be deployed for a fraction of that cost, configured for your specific ERP and your specific business, and maintained without hiring a data engineering team.

I've deployed this architecture for a national building materials distributor — 3,000+ SKUs, multiple warehouses, overseas and domestic supply chains, complex landed cost calculations. The system was operational in weeks. The dashboards replaced spreadsheets that the team had been maintaining for years.

If your team is still starting their day with an ERP export and a spreadsheet, they don't need to be. The technology exists, it's proven, and it's within reach.

*Vinh Truong is the Co-Founder & AI Architect at [zenprocess.ai](https://zenprocess.ai), where he builds real-time operational dashboards and data pipelines for building materials distributors. With 20+ years of enterprise IT and CTO leadership and $80M+ in technology initiatives delivered, he brings Fortune 500 data architecture to mid-market operations. [Book a discovery call](https://zenprocess.ai/book) or [read the full case study](https://zenprocess.ai/case-study).*
