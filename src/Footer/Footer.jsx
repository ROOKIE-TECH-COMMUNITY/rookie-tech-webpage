import React from "react";
import Twitter from "../assets/Twitter";
import Insta from "../assets/Insta";
import Phone from "../assets/Phone";
import Mail from "../assets/Mail";
import FooterLogo from "../assets/rookiefooterLogo.svg";

export default function Footer() {
  return (
    <footer className="bg-[#ebb332de] min-h-[60vh]">
      <div className="footer-body h-full items-center flex justify-between w-[83%] mt-[193px]  mx-auto py-10">
        {/* <div className="logo-socials flex flex-col justify-between">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <ul className="justify-evenly flex flex-col">
            <li>
              <Twitter />
            </li>
            <li>
              <Insta />
            </li>
            <li>
              <Phone />
            </li>
            <li>
              <Mail />
            </li>
          </ul>
        </div> */}
        {/* <div className="community">
          <h2>Community</h2>
          <ul>
            <li>About Us</li>
            <li>Visit our Website</li>
            <li>Sign In</li>
            <li>Sign Up</li>
            <li>Contact Us</li>
          </ul>
        </div> */}
        <div className="social-links  ">
          <picture>
            <img
              src={FooterLogo}
              className="object-center w-full object-contain h-full"
              alt=""
            />
          </picture>
          <ul className="justify-evenly flex ">
            <li>
              <Twitter />
            </li>
            <li>
              <Insta />
            </li>
            <li>
              <Phone />
            </li>
            <li>
              <Mail />
            </li>
          </ul>
        </div>
        <div className="community flex justify-evenly flex-col h-full">
          <ul className="flex flex-col justify-evenly">
            <li className="font-bold text-xl mb-4">
              <h2>Community</h2>
            </li>
            <li className="mb-3">About Us</li>
            <li className="mb-3">Visit our Website</li>
            <li className="mb-3">Sign In</li>
            <li className="mb-3">Sign Up</li>
            <li className="mb-3">Contact Us</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
