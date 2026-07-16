// Gated demo server with 24h-expiring signed links.
//
// A share link looks like:  https://zenprocess.ai/d/owneros?t=<exp>.<sig>
//   exp = unix seconds when the link dies
//   sig = HMAC-SHA256("<name>|<exp>", DEMO_SIGNING_SECRET) as hex
//
// Mint links with scripts/demo-link.js (same secret, set in Netlify env).
// Bad/missing signature -> 403 branded page. Past expiry -> 410 branded page.
// Valid -> the exact demo HTML bytes, uncached.

import { createHmac, timingSafeEqual } from "node:crypto";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const DEMOS = {
  owneros: "OwnerOS",
  inteldb: "ERP Intelligence",
};

const BOOKING = "https://links.zenprocess.ai/widget/booking/rcoKJifJJA46bRI9fTEr";

function sign(name, exp, secret) {
  return createHmac("sha256", secret).update(`${name}|${exp}`).digest("hex");
}

function safeEqualHex(a, b) {
  const ba = Buffer.from(a, "hex");
  const bb = Buffer.from(b, "hex");
  if (ba.length !== bb.length || ba.length === 0) return false;
  return timingSafeEqual(ba, bb);
}

// Try the layouts Netlify may use for included_files, return the HTML bytes.
async function loadDemoHtml(name) {
  const candidates = [
    path.join(process.cwd(), "demos", name, "index.html"),
    fileURLToPath(new URL(`../../demos/${name}/index.html`, import.meta.url)),
    path.join("/var/task", "demos", name, "index.html"),
  ];
  let lastErr;
  for (const p of candidates) {
    try {
      return await readFile(p);
    } catch (e) {
      lastErr = e;
    }
  }
  throw new Error(`demo file not found for "${name}"; tried: ${candidates.join(" | ")} (${lastErr})`);
}

function brandedPage({ title, heading, body, status }) {
  const html = `<!doctype html><html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title>${title} | zenprocess.ai</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;600;800&display=swap">
<style>
  :root{--canvas:#F6F6F3;--card:#fff;--ink:#0C1116;--ink2:#3A424C;--muted:#7A828C;--line:rgba(12,17,22,.1);--green:#16A34A;--greenD:#15803D}
  *{box-sizing:border-box;margin:0;padding:0}
  body{background:var(--canvas);color:var(--ink);font-family:'Be Vietnam Pro',system-ui,sans-serif;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px;line-height:1.55}
  .card{background:var(--card);border:1px solid var(--line);border-radius:22px;box-shadow:0 30px 60px -30px rgba(12,17,22,.25);max-width:520px;width:100%;padding:44px 40px;text-align:center}
  .logo{display:flex;align-items:center;justify-content:center;gap:10px;font-weight:800;font-size:18px;letter-spacing:-.02em;margin-bottom:28px}
  .logo img{width:30px;height:30px;display:block}
  h1{font-size:28px;font-weight:800;letter-spacing:-.02em;margin-bottom:12px}
  p{color:var(--ink2);font-size:16px;margin-bottom:8px}
  .sub{color:var(--muted);font-size:14px;margin-bottom:28px}
  a.btn{display:inline-flex;align-items:center;gap:8px;background:var(--green);color:#fff;font-weight:600;font-size:15px;text-decoration:none;padding:14px 24px;border-radius:12px;box-shadow:0 8px 24px -8px rgba(22,163,74,.5)}
  a.btn:hover{background:var(--greenD)}
</style></head>
<body><div class="card">
  <div class="logo"><img src="https://zenprocess.ai/logo.png" alt="zenprocess.ai">zenprocess.ai</div>
  <h1>${heading}</h1>
  <p>${body}</p>
  <p class="sub">Demo links are time-limited on purpose. Reach out and I'll send you a fresh one.</p>
  <a class="btn" href="${BOOKING}" target="_blank" rel="noopener noreferrer">Book a call</a>
</div></body></html>`;
  return new Response(html, {
    status,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
      "x-gate-build": "5",
      "x-secret-present": process.env.DEMO_SIGNING_SECRET ? "yes" : "no",
    },
  });
}

export default async (req) => {
  const secret = process.env.DEMO_SIGNING_SECRET;
  if (!secret) {
    return brandedPage({
      title: "Demo unavailable",
      heading: "This demo is temporarily unavailable",
      body: "The demo gate is not configured yet.",
      status: 503,
    });
  }

  const url = new URL(req.url);
  const name = (url.searchParams.get("d") || "").toLowerCase();
  const token = url.searchParams.get("t") || "";

  if (!DEMOS[name]) {
    return brandedPage({
      title: "Demo not found",
      heading: "This demo link isn't valid",
      body: "The link may be mistyped or no longer active.",
      status: 404,
    });
  }

  const dot = token.indexOf(".");
  const expStr = dot > 0 ? token.slice(0, dot) : "";
  const sig = dot > 0 ? token.slice(dot + 1) : "";
  const exp = Number(expStr);

  const expired = { title: "Demo link expired", heading: `The ${DEMOS[name]} demo link has expired`, body: "This link was set to work for a limited time and has now closed.", status: 410 };
  const invalid = { title: "Demo link invalid", heading: `This ${DEMOS[name]} demo link isn't valid`, body: "The link is incomplete or has been changed.", status: 403 };

  // exp must be a canonical integer string (no leading zeros, sign, decimals, NaN/Inf)
  if (!expStr || !sig || !Number.isInteger(exp) || String(exp) !== expStr) return brandedPage(invalid);
  if (!safeEqualHex(sign(name, expStr, secret), sig)) return brandedPage(invalid);
  if (Math.floor(Date.now() / 1000) >= exp) return brandedPage(expired);

  let bytes;
  try {
    bytes = await loadDemoHtml(name);
  } catch (e) {
    return brandedPage({ title: "Demo unavailable", heading: "This demo is temporarily unavailable", body: "Please try again shortly.", status: 500 });
  }
  return new Response(bytes, {
    status: 200,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "private, no-store",
      "x-robots-tag": "noindex, nofollow",
    },
  });
};
