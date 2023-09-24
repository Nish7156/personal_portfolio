import Link from "next/link";
import React from "react";
import Logo from "../Utility/Logo";

function Footer() {
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="footer-content text-center">
            <Link href={""} className="logo">
              <Logo />
            </Link>
            <ul className="footer-menu">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="works.html">Works</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
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
