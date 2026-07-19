/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://personal-portfolio-brown-three.vercel.app',
  generateRobotsTxt: true,
  // Static export writes to ./out, so robots.txt and sitemap.xml must land
  // there too — otherwise they are never uploaded with the site.
  outDir: './out',
};
