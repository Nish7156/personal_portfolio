import Link from "next/link";
import React from "react";
import Logo from "../Utility/Logo";

function Footer({ Menus }: any) {
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="footer-content text-center">
            <Link href={""} className="logo">
              <Logo />
            </Link>
            <ul className="footer-menu">
              {Menus.map((data: any) => {
                return (
                  <li>
                    <Link href={`${data.link}`}>{data.title}</Link>
                  </li>
                );
              })}
            </ul>
            <p className="copyright">
              &copy; All rights reserved by <span>Nishant</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
