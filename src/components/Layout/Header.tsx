import Link from "next/link";
import React from "react";
import Logo from "../Utility/Logo";

function Header() {
  return (
    <>
      <header className="header-area sticky top-0 z-50">
        <div className="container">
          <div className="gx-row d-flex align-items-center justify-content-between">
            <Link href={""} className="logo">
              <Logo />
            </Link>

            <nav className="navbar">
              <ul className="menu">
                <li className="active">
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
              <a href="./contact.html" className="theme-btn">
                Let's talk
              </a>
            </nav>

            <a href="./contact.html" className="theme-btn">
              Let's talk
            </a>

            <div className="show-menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
