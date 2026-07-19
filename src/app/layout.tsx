import { Metadata } from "next";
import * as React from "react";

import "@/styles/globals.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";

import { siteConfig } from "@/constant/config";

import Layout from "@/components/Layout";

export const metadata: Metadata = {
  // Without this, Next resolves OG/Twitter image URLs against
  // http://localhost:3000 and warns on every page during the build.
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: `/manifest.json`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    // SVG is not a valid Open Graph image — X/LinkedIn/WhatsApp all ignore
    // it and show no preview. Use the PNG that already ships in /public.
    images: [{
      url: '/images/ogImage.png',
      width: 1200,
      height: 630,
    },],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`/images/ogImage.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Fetch Inter in parallel with the CSS instead of after it, so the
            first paint already uses the real font rather than swapping. */}
        <link
          rel="preload"
          href="/fonts/inter-var-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <main className="main-homepage">
          <Layout>{children}</Layout>
        </main>
      </body>
    </html>
  );
}
