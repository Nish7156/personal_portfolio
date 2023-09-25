import { Metadata } from "next";
import * as React from "react";

import "@/styles/colors.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Pre-built components with awesome default",
};

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="contact-area">{children} </section>
    </>
  );
}
