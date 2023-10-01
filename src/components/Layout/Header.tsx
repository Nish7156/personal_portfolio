"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../Utility/Logo";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  const Menus = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "About", link: "/about" },
    { id: 3, title: "Projects", link: "/projects" },
    { id: 4, title: "Contact", link: "/contact-us" },
  ];
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);

  const handleHamburgerClick = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <header
        className={`header-area sticky top-0 z-50 ${
          scrolling ? "bg-black" : "bg-transparent"
        }  bg-opacity-90`}
      >
        <div className="container">
          <div className="gx-row d-flex align-items-center justify-content-between">
            <Link href={"/"} className="logo">
              <Logo />
            </Link>

            <nav className={`navbar ${openMenu ? "active" : ""}`}>
              <ul className="menu">
                {Menus.map((data: any) => {
                  return (
                    <li className={pathname === data.link ? "active" : ""}>
                      <Link href={`${data.link}`}>{data.title}</Link>
                    </li>
                  );
                })}
              </ul>
              <a href="./contact.html" className="theme-btn">
                Let's talk
              </a>
            </nav>

            <a href="./contact.html" className="theme-btn">
              Let's talk
            </a>

            <div
              className={`show-menu ${openMenu ? "active" : ""}`}
              onClick={handleHamburgerClick}
            >
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
