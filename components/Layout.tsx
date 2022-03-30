import React,{useState} from "react";
import NavBar from "./navbar";


const Layout = ({ children }:any) => {
const [isConnected,setIsConnected]=useState<boolean>(false);
return(
  <div className="h-screen mx-auto w-[1000px] container flex ">
    <div className="rounded h-5/6 bg-overlay-background my-auto flex gap-20 px-8 py-12">
      <NavBar isConnected={isConnected} setIsConnected={setIsConnected}/>
      <div className="grow">
        {children}
      </div>
    </div>
  </div>
)};

export default Layout;