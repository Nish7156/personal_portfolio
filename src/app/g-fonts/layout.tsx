import { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "G-Fonts",
  description: "Comming Soon",
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="about-area">{children} </section>
    </>
  );
}
