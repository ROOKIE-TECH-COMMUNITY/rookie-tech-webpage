import React from "react";
import Rookie from "./../assets/rookiebesties.svg";
import Profile from "./Profile";
import ProjItems from "./ProjItems";

export default function Intro() {
  return (
    <div className="block mx-10">
      <section className="flex m-auto h-[90vh]  min-h-[80vh]">
        <div className="h-full items-center my-auto justify-center flex">
          <div className="p-20 w-1/2 items-start h-full flex flex-col justify-evenly">
            <h1 className="text-4xl mb-4 font-bold ">
              Welcome to Rookie Tech Community
            </h1>
            <p className="mb-4">
              We are a group of individuals who are new to the tech industry and
              are determined to carve our own paths to sucess. With support and
              guidance of eachother !
            </p>
            <button className="bg-black mb-4 p-4 rounded-lg ml-4 text-white text-lg font-semibold">
              Join Our Community
            </button>
          </div>
          <div className="advert w-1/2">
            <picture>
              <img
                className=" object-contain w-full h-full object-center"
                src={Rookie}
                alt=""
              />
            </picture>
          </div>
        </div>
      </section>
      <section className="projects">
        <div className="proj-header mb-10 flex justify-between w-full">
          <h2 className=" font-bold text-xl ml-[35rem] ">Our Projects</h2>{" "}
          <span className=" ">see all</span>
        </div>
        <div className="proj-body flex justify-between">
          <ProjItems />
          <ProjItems />
          <ProjItems />
        </div>
      </section>
      {/* <section className="search">
        <h2>Quick Search</h2>
        <input type="search" name="" id="" />
      </section> */}
      <section className="portfolio my-20">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold items-center text-center">
            Rookie Tech Community Members
          </h2>
          <div className="portfolio-body mt-20 flex flex-col">
            <Profile />
            <Profile />
            <Profile />
          </div>
        </div>
      </section>
    </div>
  );
}
