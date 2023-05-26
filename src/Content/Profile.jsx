import React from "react";
import person from "./../assets/port1.png";

export default function Profile() {
  return (
    <div className="portfolio-items my-4 bg-[#FFF7DF] hover:bg-[#FEEFC2] justify-between p-10 flex flex-col lg:flex-row cursor-pointer">
      <picture className="lg:w-4/6">
        <img
          className="object-contain h-full w-full object-center"
          src={person}
          alt=""
        />
      </picture>
      <div className="portfolio-details justify-evenly  lg:ml-10 flex flex-col">
        <div className="my-3">
          <p className="font-bold text-2xl my-1">Nadia Comraderi</p>
          <hr className="w-1/2 my-1" />
          <p className="my-1 font-semibold text-xl text-gray-600">Product Designer</p>
        </div>
        <div className="my-3">
          <h2 className="font-bold text-xl">Bio</h2>
          <p className="text-start lg:mr-20">
            Lorem ipsum dolor sit amet consectetur. Tincidunt tincidunt maecenas
            dictum amet posuere neque vitae sit. Id sagittis faucibus elementum
            amet. Ullamcorper pulvinar vel dui nunc tellus ante amet.
          </p>
        </div>
        <div className="flex my-3 items-center">
          <button className="border border-solid border-black text-white hover:bg-transparent hover:text-black bg-black rounded-lg p-2 mr-6">
            See portfolio
          </button>
          <button className="border border-solid border-black text-black hover:text-white hover:bg-black rounded-lg p-2">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}
