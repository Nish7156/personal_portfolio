import Link from "next/link";
import React from "react";

function PrimaryButton({ link, btnText }: { link: string; btnText: string }) {
  return (
    <>
      <Link href={link ? `${link}` : "/contact"} legacyBehavior prefetch={false}>
        <a className="theme-btn">{btnText ? btnText : "Let's talk"}</a>
      </Link>
    </>
  );
}

export default PrimaryButton;
