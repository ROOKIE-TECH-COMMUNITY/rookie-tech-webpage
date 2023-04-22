import React from "react";
import ProjPerson from "./../assets/projItem.png";

export default function ProjItems() {
  
  return (
    <div className="proj-items shadow w-1/4 flex flex-col">
      <picture className="w-full">
        <img
          src={ProjPerson}
          className="object-contain object-center w-full h-full"
          alt="proj item"
        />
      </picture>
      <p className="text-xl items-center text-center p-3 ">Hero section page</p>
    </div>
  );
}
