/** @type {import('next-sitemap').IConfig} */

module.exports = {
  // Keep in sync with src/constant/config.ts — same env var, same default,
  // so the sitemap and the page metadata can never disagree.
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    'https://personal-portfolio-brown-three.vercel.app',
  generateRobotsTxt: true,
  // Static export writes to ./out, so robots.txt and sitemap.xml must land
  // there too — otherwise they are never uploaded with the site.
  outDir: './out',
};
