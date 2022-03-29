import React from "react";
import NavBar from "./navbar";

const Layout = ({ children }:any) => (
  <div className="h-screen mx-auto w-[1000px] container flex ">
    <div className="rounded h-5/6 bg-overlay-background my-auto flex gap-20 px-14 py-16">
      <NavBar />
      <div className="grow">
        {children}
      </div>
    </div>
  </div>
);

export default Layout;