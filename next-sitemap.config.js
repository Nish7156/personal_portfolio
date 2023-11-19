/** @type {import('next-sitemap').IConfig} */

const dev = process.env.NODE_ENV !== "production";

module.exports = {
  siteUrl: dev
    ? `https://personal-portfolio-brown-three.vercel.app`
    : `https://personal-portfolio-brown-three.vercel.app`,
  generateRobotsTxt: true,
};
