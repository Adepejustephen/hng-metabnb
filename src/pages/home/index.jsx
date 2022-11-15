import React from "react";
import { HeroImg } from "../../assests";

export const Home = () => {
  return (
    <>
      {/* Hero section */}
      <section className="flex w-full min-h-[20.125rem] px-5 py-10 md:px-14 xl:px-0">
        <div className="text-txtDark flex flex-col gap-7 md:gap-10  lg:flex-row md:justify-between lg:gap-14 lg:items-center w-full max-w-[1200px] m-auto ">
          <div className="flex flex-col gap-6 lg:gap-12">
            <h2 className="text-4xl lg:text-[3.5rem] text-txtDark font-bold  lg:leading-[140%]">
              Rent a{""} <span className="text-txtPurple">Place </span> away
              from <span className="text-txtPurple">Home</span> in the{" "}
              <span className="text-txtPurple">Metaverse</span>
            </h2>
            <p className="text-lg lg:text-2xl font-normal">
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>
            <div className="flex">
              <input
                type="text"
                className="border border-[#A3A3A3] border-r-0 bg-[rgba(247, 247, 247, 0.1)] px-[0.9375rem] w-full  py-5 rounded-l-lg placeholder:text-[#B8B8B8] placeholder:text-sm placeholder:font=normal"
                placeholder="Search for location"
              />
              <button className="bg-mainPurple text-base text-white font-normal py-[1.0625rem] rounded-r-lg border-0 outline-0 w-[40%]">
                Search
              </button>
            </div>
          </div>
          {/* Hero image */}
          <div className="hidden xl:flex max-w-[25rem] xl:max-w-[29.75rem] w-full  h-full">
            <img
              src={HeroImg}
              alt="home_image"
              className=" object-contain w-full h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};
