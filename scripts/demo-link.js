#!/usr/bin/env node
// Mint an expiring demo share link.
//
// Usage:
//   DEMO_SIGNING_SECRET=<secret> node scripts/demo-link.js <owneros|inteldb> [hours]
//
// Examples:
//   DEMO_SIGNING_SECRET=abc node scripts/demo-link.js owneros        # 24h (default)
//   DEMO_SIGNING_SECRET=abc node scripts/demo-link.js inteldb 4      # 4h
//
// The same secret must be set as DEMO_SIGNING_SECRET in the Netlify site env.

import { createHmac } from "node:crypto";

const NAMES = new Set(["owneros", "inteldb"]);
const BASE = process.env.DEMO_BASE_URL || "https://zenprocess.ai";

const name = (process.argv[2] || "").toLowerCase();
const hours = process.argv[3] ? Number(process.argv[3]) : 24;
const secret = process.env.DEMO_SIGNING_SECRET;

function die(msg) {
  console.error(`error: ${msg}`);
  process.exit(1);
}

if (!secret) die("DEMO_SIGNING_SECRET env var is not set");
if (!NAMES.has(name)) die(`first arg must be one of: ${[...NAMES].join(", ")}`);
if (!Number.isFinite(hours) || hours <= 0) die("hours must be a positive number");

const exp = Math.floor(Date.now() / 1000) + Math.round(hours * 3600);
const sig = createHmac("sha256", secret).update(`${name}|${exp}`).digest("hex");
const url = `${BASE}/d/${name}?t=${exp}.${sig}`;

const expiresAt = new Date(exp * 1000).toISOString();
console.log(url);
console.error(`  demo:    ${name}`);
console.error(`  expires: ${expiresAt} (${hours}h from now)`);
