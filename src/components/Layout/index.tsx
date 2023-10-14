import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Menus } from "@/lib/constant";

function Layout({ children }: any) {
  
  return (
    <>
      <Header Menus={Menus} />
      {children}
      <Footer Menus={Menus} />
    </>
  );
}

export default Layout;
