/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,
  swcMinify: true,

  // Fully static site: `next build` emits plain HTML/CSS/JS into ./out
  // with no Node server required. Deployable to S3, GitHub Pages, etc.
  output: 'export',

  // Static hosts serve directories, so emit /about/index.html rather than
  // /about.html — otherwise visiting /about 404s on S3.
  trailingSlash: true,

  // Uncoment to add domain whitelist
  images: {
    domains: [
      'wpriverthemes.com',
    ],
    // The Next.js image optimizer needs a running server, which a static
    // export does not have. Images are served as-is.
    unoptimized: true,
  },

  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: { not: /\.(css|scss|sass)$/ },
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        loader: '@svgr/webpack',
        options: {
          dimensions: false,
          titleProp: true,
        },
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

module.exports = nextConfig;
