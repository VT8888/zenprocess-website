---
title: "Three Questions to Ask Before You Let AI Touch Your Business"
description: "What can it see. What can it change on its own. How do you find out afterward what it did. Five governments published the same three questions in May. Here is what a good answer sounds like, and what a vague one costs."
date: "2026-09-16"
author: "Vinh Truong"
authorTitle: "Co-Founder & AI Architect"
pillar: "operational_intelligence"
seoKeywords: ["AI agent security", "agentic AI small business", "AI approval workflow", "AI audit trail", "is AI safe with my business data", "human in the loop"]
draft: false
---

Among small firms already using AI, the most common complaint is accuracy. Forty-six percent named it their top challenge in the Federal Reserve Banks' latest survey. That's a fair worry, and it's also the wrong first question.

Accuracy is what you find out after the tool has already acted. The questions that matter come before that, and there are three of them.

What can it see. What can it change on its own. How do you find out afterward what it did.

I've spent twenty years putting systems in front of customer data inside hospitals and school districts, and these are the three I ask of anything that touches a business, AI or not. In May, the cybersecurity agencies of the United States, Australia, the United Kingdom, Canada, and New Zealand published joint guidance on adopting AI agents. Strip out the vocabulary and it's the same three questions. So this isn't my opinion anymore. It's the published position of five governments, and it applies to a two-person bookkeeping practice as much as to a hospital.

## Question one: what can it see

Every AI tool that does anything useful needs access to something. Your inbox, your books, your CRM, your calendar, your files. The question is how much, and whether the answer is "exactly what it needs for this job" or "everything, because that was easier to set up."

The guidance calls this least privilege: give the system the minimum access required for the approved task, nothing more. It also names the failure that happens when you don't, which it calls scope creep. A tool granted broad access for one purpose quietly ends up used for another, and nobody decided that. It just drifted.

Here's what a good answer sounds like. "It reads your accounting system's invoices and customers. It cannot see payroll. It reads email subject lines and senders from the last 30 days, not attachments. Here's the list."

Here's what a vague answer sounds like. "It connects to your tools." That sentence tells you nothing about what it can reach, and a vendor who can't be more specific either doesn't know or doesn't want to say.

Ask for the list. If there's no list, there's no boundary.

## Question two: what can it change on its own

This is the one that separates a useful tool from a liability.

Reading is low risk. If the system reads your CRM and gets something wrong, you see a bad summary and you ignore it. Writing is different. If it sends the email, issues the invoice, moves the money, or deletes the record, a mistake reaches the outside world before you knew there was a decision to make.

The guidance is direct here. Agents should be prevented from executing high-impact actions without prior human approval. And the decision about which actions need approval should be made by the people running the system, never delegated to the AI itself. Read that second part again. The tool doesn't get to decide what counts as important.

For an owner-led business the line is easy to draw. Anything that leaves the building goes past a human first. The follow-up email, the invoice, the quote, the reply to a client. The system can draft all of it, and should. Then it stops, and you approve or you don't. Nothing goes out on its own.

The demo version, where the agent just sends things, is a great demo. I've watched a room applaud it. It's also the version that sends a wrong invoice to your best client at 2 a.m. on a Saturday, and the applause doesn't help you then.

If a vendor gets vague on this question, that's your answer.

## Question three: how do you find out afterward what it did

Suppose questions one and two have good answers. Access is narrow, nothing goes out without you. You still need to be able to look back on Friday and see what the system actually did all week. Which records it read. Which drafts it produced. Which ones you approved, and when. What changed.

The guidance calls this logging and auditing, and asks for it by default rather than as an add-on. It goes one step further than I expected: it says any request to delete logs or audit records should be quarantined until a human reviews it. That is the right instinct. The log is the one thing the system must not be allowed to edit.

For you, this comes down to a plain question. If something looks wrong on Thursday, can you trace it? Can you see the sequence, the data it used, and the point where a person said yes? If the answer is "we'd have to ask the vendor," you don't have an audit trail. You have a support ticket.

And you need the way back. If a change was wrong, can it be undone, and does anyone know how? Reversibility is in the guidance too, under the same heading as approval. A system that can act but can't be unwound is a system you've stopped controlling.

## What this looks like in practice

I'll tell you how we answer the three questions for OwnerOS, because I'd rather show the shape than keep it abstract.

What it sees: the tools you already use, connected one at a time with a scope you can read. Nothing gets replaced and nothing is granted broad access because it was convenient.

What it changes: nothing, on its own. Every night it reads across your business and produces a morning list of what needs you, with drafts attached. You approve what should go out. That line is on our product page because it's the product, not a caveat.

How you find out: every draft, every approval, every change is recorded and reviewable. If you disagree with a draft, you change it or drop it. The system doesn't argue and it doesn't act.

OwnerOS is early access. Multi-employee support is the phase we're in now, so today it fits an owner or a very small team. And we have deliberately not opened it to businesses handling regulated data, because a good answer to all three questions in a regulated setting is real engineering and it isn't finished. When it is, I'll say so here.

## The one-sentence test

You don't need to read government guidance to use it. Ask any vendor, including us, one sentence.

"Walk me through what it can see, what it can do without me, and how I'd find out what it did."

A good vendor answers in under two minutes, with specifics. A weak one changes the subject to what the AI can do for you. The difference is the whole decision.

**Tell me what is slipping. I will tell you if we can help.** A 30-minute call. We look at how you run today and whether this is worth it for you.

---

## Sources

[Careful Adoption of Agentic AI Services, Australian Signals Directorate's ACSC with CISA, NSA, NCSC-UK, Cyber Centre Canada, NCSC-NZ, 1 May 2026](https://www.cyber.gov.au/business-government/secure-design/artificial-intelligence/careful-adoption-of-agentic-ai-services)

[CISA release page for the same guidance](https://www.cisa.gov/resources-tools/resources/careful-adoption-agentic-ai-services)

[2026 Report on Employer Firms: Findings from the 2025 Small Business Credit Survey, Federal Reserve Banks](https://www.fedsmallbusiness.org/reports/survey/2026/2026-report-on-employer-firms)
