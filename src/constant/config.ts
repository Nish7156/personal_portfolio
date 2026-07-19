export const siteConfig = {
  title: "Nishant Shedage - Full Stack Developer",
  description:
    "Hello! I'm Nishant Shedage, a passionate full-stack developer. I love turning ideas into reality through coding. My expertise lies in both front-end and back-end development, and I enjoy creating seamless and responsive web applications.",
  // Must be an absolute URL — it is parsed with `new URL()` for metadataBase,
  // and every OG/Twitter image URL is resolved against it. Pointing this at a
  // domain that doesn't resolve silently breaks all social link previews.
  // Set NEXT_PUBLIC_SITE_URL once a custom domain is live.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://personal-portfolio-brown-three.vercel.app",
};
