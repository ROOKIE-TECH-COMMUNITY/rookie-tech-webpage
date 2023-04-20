import React from "react";
import Logo from "./../assets/20230307_222050_0001-removebg-preview 2.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="block bg-[#FFF7DF] w-full">
      <div className="navigation flex w-full justify-between items-center">
        <div className="logo  pl-4">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <nav className="web hidden md:flex items-center justify-between w-8/12">
          <ul className="flex justify-evenly  w-3/4">
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/our-website">Visit our Website</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
          <ul className="flex w-1/4 justify-evenly">
            <li className="py-2 px-4 border border-black border-solid rounded-lg font-semibold text-white bg-black">
              Sign Up
            </li>
            <li className="py-2 px-4 border border-black border-solid rounded-lg font-semibold  ">
              Sign In
            </li>
          </ul>
        </nav>
        <div className="nav-sidebar md:hidden">
          <div className="button mr-4 flex flex-col">
            <span className="border border-black rounded-lg w-6 border-solid mt-1"></span>
            <span className="border border-black rounded-lg w-6 border-solid mt-1"></span>
            <span className="border border-black rounded-lg w-6 border-solid mt-1"></span>
          </div>
          <nav>
            <ul></ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
