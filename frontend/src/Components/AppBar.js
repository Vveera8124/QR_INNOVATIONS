import * as React from "react";
import LOGO from "./../Assests/LogoQr.png";
// gradient-to-r from-[#149ff7] to-[var(--primary--dark)]
const AppBar = () => {
  return (
    <div className="w-full stikcy flex justify-between px-4  items-center bg-gradient-to-r  from-[#02000e] to-[#149ff7] m-0 rounded-sm ">
      <div className="flex items-center p-2">
        <img src={LOGO} className="w-20 h-13"></img>
        <p className="p-4 text-lg font-bold text-white">QR INNOVATIONS</p>
      </div>
      <div className="flex flex-center items-center mr-5">
        <button className="bg-gray-800/70 rounded-xl px-3 py-2 mr-5 text-sm font-bold text-white hover:text-black hover:bg-white/80 ">
          Login
        </button>
        <button className="bg-gray-800/70 rounded-xl px-3 py-2 mr-3 font-bold text-sm text-white hover:text-black hover:bg-white/80 ">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default AppBar;
