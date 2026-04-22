import fs from 'node:fs/promises';
import path from 'node:path';

const KEY = '739a37a7a2b3b0efb3286b9ba1cb3614';
const HOST = 'zenprocess.ai';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Extracts all <loc> entries from a sitemap (index or urlset).
async function extractUrlsFromSitemap(xmlPath) {
  try {
    const xml = await fs.readFile(xmlPath, 'utf8');
    const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)];
    return matches.map((m) => m[1].trim());
  } catch {
    return [];
  }
}

// Finds all sitemap-*.xml files referenced in sitemap-index.xml and expands them.
async function collectAllUrls(publishDir) {
  const indexPath = path.join(publishDir, 'sitemap-index.xml');
  const entries = await extractUrlsFromSitemap(indexPath);

  // If sitemap-index points to child sitemaps, fetch each and collect its URLs.
  const urls = [];
  for (const entry of entries) {
    // If this looks like a child sitemap URL, derive local file path and parse it.
    if (entry.endsWith('.xml')) {
      const filename = entry.split('/').pop();
      const childPath = path.join(publishDir, filename);
      const childUrls = await extractUrlsFromSitemap(childPath);
      urls.push(...childUrls);
    } else {
      // Already a real page URL (flat sitemap case).
      urls.push(entry);
    }
  }
  // Dedupe.
  return [...new Set(urls)];
}

export const onSuccess = async ({ constants, utils }) => {
  const publishDir = constants.PUBLISH_DIR;

  let urlList = [];
  try {
    urlList = await collectAllUrls(publishDir);
  } catch (err) {
    console.log(`IndexNow plugin: failed to read sitemap — ${err.message}`);
    return;
  }

  if (urlList.length === 0) {
    console.log('IndexNow plugin: no URLs found in sitemap. Skipping ping.');
    return;
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
    console.log(`IndexNow plugin: HTTP ${res.status} — submitted ${urlList.length} URL(s) to Bing/Yandex/Seznam/Yep`);
    urlList.forEach((u) => console.log(`  - ${u}`));
    if (res.status >= 400) {
      const body = await res.text();
      // Log but don't fail the deploy — IndexNow is best-effort.
      console.log(`IndexNow plugin: non-fatal error body: ${body}`);
    }
  } catch (err) {
    // Never fail the deploy for a failed ping.
    console.log(`IndexNow plugin: ping failed (deploy succeeded anyway) — ${err.message}`);
  }
};
