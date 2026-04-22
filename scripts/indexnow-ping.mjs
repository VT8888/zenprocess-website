#!/usr/bin/env node
// Ping IndexNow with updated URLs so Bing (and ChatGPT-by-extension), Yandex, and others re-crawl.
// Usage: node scripts/indexnow-ping.mjs <url1> <url2> ...
// Or: node scripts/indexnow-ping.mjs --all  (pings a curated list of high-priority pages)

const KEY = '739a37a7a2b3b0efb3286b9ba1cb3614';
const HOST = 'zenprocess.ai';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const ALL_URLS = [
  'https://zenprocess.ai/',
  'https://zenprocess.ai/about',
  'https://zenprocess.ai/solutions',
  'https://zenprocess.ai/case-study',
  'https://zenprocess.ai/contact',
  'https://zenprocess.ai/resources',
  'https://zenprocess.ai/resources/ai-hype-to-ai-value',
  'https://zenprocess.ai/resources/what-a-modern-data-pipeline-looks-like',
  'https://zenprocess.ai/resources/what-a-paid-ai-audit-looks-like',
  'https://zenprocess.ai/resources/why-your-purchasing-team-lives-in-excel',
  'https://zenprocess.ai/resources/pe-firms-buying-building-materials-distributors',
];

const args = process.argv.slice(2);
const urlList = args.includes('--all') ? ALL_URLS : args;

if (urlList.length === 0) {
  console.error('Usage: node scripts/indexnow-ping.mjs <url1> <url2> ...');
  console.error('   or: node scripts/indexnow-ping.mjs --all');
  process.exit(1);
}

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList,
};

try {
  const res = await fetch('https://api.indexnow.org/IndexNow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });
  console.log(`IndexNow: HTTP ${res.status}`);
  console.log(`Submitted ${urlList.length} URL(s):`);
  urlList.forEach((u) => console.log(`  - ${u}`));
  if (res.status >= 400) {
    const text = await res.text();
    console.error('Response body:', text);
    process.exit(1);
  }
} catch (err) {
  console.error('IndexNow request failed:', err.message);
  process.exit(1);
}
