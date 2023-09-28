import { Metadata } from "next";
import * as React from "react";

import "@/styles/globals.css";
import "@/styles/colors.css";
import "../assets/css/aos.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";

import { siteConfig } from "@/constant/config";
import Script from "next/script";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export const metadata: Metadata = {
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
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main className="main-homepage">
          <Header />
          {children}
          <Footer />
        </main>
        {/* <div id="preloader" className="preloader off">
          <div className="black_wall"></div>
          <div className="loader"></div>
        </div> */}
      </body>
      <Script src="../assets/js/jquery-3.6.4.js" />
      <Script src="../assets/js/main.js" />
      <Script src="../assets/js/aos.js" />
      <Script src="../assets/js/bootstrap.bundle.min.js" />
    </html>
  );
}
