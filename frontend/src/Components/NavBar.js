import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import { FaBars, FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";

import {
  Products,
  Contact_US,
  Business_Model,
  Franchisees,
  Social_Responsbility,
  FAQ,
} from "./list";
export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Contact_US" element={<Contact_US />} />
        <Route path="/Business_Model" element={<Business_Model />} />
        <Route path="/Franchisees" element={<Franchisees />} />
        <Route
          path="/Social_Responsbility"
          element={<Social_Responsbility />}
        />
        <Route path="/FAQ" element={<FAQ />} />
      </Routes>
    </div>
  );
};

const NavBar = () => {
  const [nav, setNave] = useState(false);
  const handleNav = () => {
    setNave(!nav);
  };
  return (
    <div className="w-full min-h-[50px] flex justify-between items-center relative z-10 text-white bg-gray-800/80 rounded-sm">
      <ul className="text-sm font-bold hidden sm:flex px-4 ml-3">
        <li className="p-2 m-2  hover:bg-gradient-to-r from-[#02fefa] to-[#149ff7] hover:text-black hover:rounded-xl ease-in-out duration-300">
          <Link to="/">Home</Link>
        </li>
        <li className="p-2 m-2 hover:bg-gradient-to-r from-[#02fefa] to-[#149ff7] hover:text-black hover:rounded-xl ease-in-out duration-300">
          <Link to="/Products">Products</Link>
        </li>
        <li className=" p-2 m-2 hover:bg-gradient-to-r from-[#02fefa] to-[#149ff7] hover:text-black hover:rounded-xl ease-in-out duration-300">
          <Link to="/Business_Model">Business model</Link>
        </li>
        <li className=" p-2 m-2 hover:bg-gradient-to-r from-[#02fefa] to-[#149ff7] hover:text-black hover:rounded-xl ease-in-out duration-300">
          <Link to="/Franchisees">Franchisees</Link>
        </li>
        <li className=" p-2 m-2 hover:bg-gradient-to-r from-[#02fefa] to-[#149ff7] hover:text-black hover:rounded-xl ease-in-out duration-300">
          <Link to="/AboutUs">Social Responsbility</Link>
        </li>
        <li className=" p-2 m-2 hover:bg-gradient-to-r from-[#02fefa] to-[#149ff7] hover:text-black hover:rounded-xl ease-in-out duration-300">
          <Link to="/Contact_US">Contact Us</Link>
        </li>
        <li className=" p-2 m-2 hover:bg-gradient-to-r from-[#02fefa] to-[#149ff7] hover:text-black hover:rounded-xl ease-in-out duration-300">
          <Link to="/AboutUs">FAQ</Link>
        </li>
      </ul>
      <div className="sm:flex flex-row ">
        <FaInstagramSquare size={25} className="mx-4 " />
        <FaFacebookSquare size={25} className="mx-4" />
      </div>
      <div onClick={handleNav} className="sm:hidden z-10 ">
        <FaBars size={25} className="mr-4 cursor-pointer" />
      </div>
      <div
        onClick={handleNav}
        className={
          nav
            ? " overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col "
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="h-full w-full pt-12 text-center ">
          <li className="text-2xl py-8 font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="text-2xl py-8 font-bold">
            <Link to="/Products">Products</Link>
          </li>
          <li className="text-2xl py-8 font-bold">
            <Link to="/Services">Services</Link>
          </li>
          <li className="text-2xl py-8 font-bold">
            <Link to="/Contact_US">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
