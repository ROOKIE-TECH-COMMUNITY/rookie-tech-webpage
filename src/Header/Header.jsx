import React from "react";
import Logo from "./../assets/20230307_222050_0001-removebg-preview 2.svg";
import { Link, NavLink } from "react-router-dom";

export default function Header({backgroundColor, buttonType}) {
  return (
    <header className={`block ${backgroundColor === 'white'? 'bg-white': 'bg-community-primary-light'} w-full shadow-md sticky left-0 top-0 z-50`}>
      <div className={`navigation flex w-full justify-between items-center mx-auto container`}>
        <div className="logo  pl-4">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <nav className="web hidden md:flex items-center justify-between">
          <ul className="flex gap-12 ">
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive
                    ? " text-black font-semibold p-3 rounded-full bg-white"
                    : "font-semibold text-black"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/our-website"
                className={({ isActive }) =>
                  isActive
                    ? " text-black font-semibold p-3 rounded-full bg-white"
                    : "font-semibold text-black"
                }
              >
                Visit our Website
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive
                    ? " text-black font-semibold p-3 rounded-full bg-white"
                    : "font-semibold text-black"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
        <nav className="web hidden md:flex items-center justify-between">
            {buttonType?
                <ul className="flex gap-4">
                    <li className="py-2 px-6 border border-black border-solid rounded-lg font-semibold text-white bg-black cursor pointer">
                        <Link to='/auth/signup'>
                            Sign Up
                        </Link>
                    </li>
                    <li className="py-2 px-6 border border-black border-solid rounded-lg font-semibold cursor-pointer ">
                        <Link to='/auth/signin'>
                            Sign In
                        </Link>
                    </li>
                </ul>
                :
                <ul>
                    <li className="py-2 px-6 border border-black border-solid rounded-lg font-semibold cursor-pointer ">
                        <Link to='/auth/signin'>
                            Admin
                        </Link>
                    </li>
                </ul>}
        </nav>
        <div className="nav-sidebar md:hidden">
          <div className="button mr-4 flex flex-col">
            <span className="border border-black rounded-lg w-6 border-solid mt-1"></span>
            <span className="border border-black rounded-lg w-6 border-solid mt-1"></span>
            <span className="border border-black rounded-lg w-6 border-solid mt-1"></span>
          </div>
          <nav>
            {/*<ul></ul>*/}
          </nav>
        </div>
      </div>
    </header>
  );
}
