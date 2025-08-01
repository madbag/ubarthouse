import React from "react";
import Logo from "../assets/UB Arthouse LOGO - 1.PNG";

const Navbar = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between px-7">
      <div className="w-30">
        <img src={Logo} />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 justify-center p-4">
        <div className="">Home</div>
        <div className="">My Store</div>
        <div className="">Pop Ups</div>
        <div className="">About Me</div>
    
      </div>

      <div className="">Contact</div>
    </div>
  );
};

export default Navbar;
