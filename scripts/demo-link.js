#!/usr/bin/env node
// Mint an expiring demo share link.
//
// Usage:
//   DEMO_SIGNING_SECRET=<secret> node scripts/demo-link.js <owneros|inteldb> [duration]
//
// duration accepts a unit suffix — Nd (days) or Nh (hours). A bare number is
// treated as hours for backward compatibility. Defaults to 24h.
//
// Examples:
//   DEMO_SIGNING_SECRET=abc node scripts/demo-link.js owneros        # 24h (default)
//   DEMO_SIGNING_SECRET=abc node scripts/demo-link.js inteldb 4      # 4h  (bare = hours)
//   DEMO_SIGNING_SECRET=abc node scripts/demo-link.js owneros 12h    # 12h
//   DEMO_SIGNING_SECRET=abc node scripts/demo-link.js owneros 30d    # 30 days
//
// The same secret must be set as DEMO_SIGNING_SECRET in the Netlify site env.

import { createHmac } from "node:crypto";

const NAMES = new Set(["owneros", "inteldb", "nasa"]);
const BASE = process.env.DEMO_BASE_URL || "https://zenprocess.ai";

const name = (process.argv[2] || "").toLowerCase();
const durationArg = (process.argv[3] || "24h").toLowerCase();
const secret = process.env.DEMO_SIGNING_SECRET;

function die(msg) {
  console.error(`error: ${msg}`);
  process.exit(1);
}

// Parse "30d" / "12h" / bare number (= hours). Returns hours, or null if invalid.
function parseHours(arg) {
  const m = arg.match(/^(\d+(?:\.\d+)?)(d|h)?$/);
  if (!m) return null;
  const qty = Number(m[1]);
  if (!Number.isFinite(qty) || qty <= 0) return null;
  return (m[2] || "h") === "d" ? qty * 24 : qty;
}

if (!secret) die("DEMO_SIGNING_SECRET env var is not set");
if (!NAMES.has(name)) die(`first arg must be one of: ${[...NAMES].join(", ")}`);
const hours = parseHours(durationArg);
if (hours === null) die("duration must be like 30d, 12h, or a positive number of hours");

const exp = Math.floor(Date.now() / 1000) + Math.round(hours * 3600);
const sig = createHmac("sha256", secret).update(`${name}|${exp}`).digest("hex");
const url = `${BASE}/d/${name}?t=${exp}.${sig}`;

const expiresAt = new Date(exp * 1000).toISOString();
const window = hours % 24 === 0 ? `${hours / 24}d` : `${hours}h`;
console.log(url);
console.error(`  demo:    ${name}`);
console.error(`  expires: ${expiresAt} (${window} from now)`);
