import React from "react";
import NavBar from "./navbar";

const Layout = ({ children }:any) => (
  <>
    <NavBar />
    {children}
  </>
);

export default Layout;