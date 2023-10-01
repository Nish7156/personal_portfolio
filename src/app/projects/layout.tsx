import { Metadata } from "next";
import * as React from "react";

import "@/styles/colors.css";

export const metadata: Metadata = {
  title: "Projects",
  description: "Pre-built components with awesome default",
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="work-area">{children} </section>
    </>
  );
}
