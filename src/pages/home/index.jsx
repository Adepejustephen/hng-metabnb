import React from "react";
import { HeroImg, MbLogo, MbToken, MetaLogo, MetaMask, NftSec, Opensea, OpenSeaLogo } from "../../assests";
import {Button, PlaceCard } from '../../components'
import { homePlaces } from "../../data/places";
// min-h-[20.125rem]
export const Home = () => {
  return (
    <>
      {/* Hero section */}
      <section className="flex w-full min-h-screen px-5 py-10 md:px-14 xl:px-0">
        <div className="text-txtDark flex flex-col gap-7 md:gap-10  md:flex-row md:justify-between lg:gap-14 xl:items-center w-full max-w-[1200px] m-auto ">
          <div className="flex flex-col gap-6 lg:gap-10">
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
                className="border border-[#A3A3A3] border-r-0 bg-[rgba(247, 247, 247, 0.1)] px-[0.9375rem] w-full  outline-0 py-5 rounded-l-lg placeholder:text-[#B8B8B8] placeholder:text-sm placeholder:font-normal"
                placeholder="Search for location"
              />
              <button className="bg-mainPurple text-base text-white font-normal py-[1.0625rem] rounded-r-lg border-0 outline-0 w-[45%]">
                Search
              </button>
            </div>
          </div>
          {/* Hero image */}
          <div className="hidden xl:flex max-w-[25rem] xl:max-w-[29.75rem] w-full  h-full">
            <img
              src={HeroImg}
              alt="home_image"
              className="object-cover xl:object-contain w-full "
            />
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <div className="flex justify-center bg-mainPurple min-h-[4.375rem] ">
        <div className="flex justify-between items-center w-full lg:hidden py-[0.625rem] px-[3.125rem] max-w-[500px] m-auto">
          <MbLogo />
          <MetaLogo />
          <OpenSeaLogo />
        </div>
        <div className="hidden justify-between items-center max-w-[1200px] m-auto lg:flex py-[0.625rem] px-[3.125rem] w-full md:px-[4.375rem]lg:px-[6.25rem]">
          <MbToken />
          <MetaMask />
          <Opensea />
        </div>
      </div>
      
      {/* Places */}
      <section className="flex w-full min-h-screen px-5 py-10 md:px-14 xl:px-0">
        <div className="text-txtDark flex flex-col md:gap-10  items-center w-full max-w-[1200px] m-auto ">
          <h2 className="font-bold text-3xl text-black md:text-5xl text-center">
            Inspiration for your next adventure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {homePlaces.map((item, id) => {
              return <PlaceCard key={id} img={item} />;
            })}
          </div>
        </div>
      </section>

      <section className="bg-mainPurple flex w-full items-center min-h-screen px-5 py-12 md:py-20 md:px-14 xl:px-0">
        <div className=" flex flex-col-reverse md:gap-10 md:flex-row items-center md:justify-between w-full max-w-[1200px] m-auto gap-10 ">
          <div className="flex flex-col gap-[35px] ">
            <h4 className="text-3xl lg:text-5xl text-linear">Metabnb NFTs</h4>
            <p className="text-base lg:text-lg text-linear max-w-[25.937rem] mb-[0.625rem] ">
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>
            <div className="w-[10rem]">
              <Button whitebg>Learn more</Button>
            </div>
          </div>

          {/* Image Conatiner */}
          <div className="md:max-w-[360px] lg:max-w-[500px] xl:max-w-[680px] w-full">
            <img
              src={NftSec}
              alt="meta_bnb-images"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};
