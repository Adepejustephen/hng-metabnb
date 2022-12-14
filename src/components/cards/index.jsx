import React from "react";
import { Heart, RatingStar } from "../../assests/svgs";

export const PlaceCard = ({img}) => {
  return (
    <div className="bg-plCardBg flex flex-col p-4 gap-4 rounded-[0.9375rem] border border-[#D7D7D7]  cursor-pointer">
      <div className=" relative h-[16.25rem]  rounded-[0.9375rem] ">
        <img
          src={img}
          alt="place_card_img"
          className="rounded-[0.9375rem] object-cover w-full h-full border border-[#D7D7D7] "
        />
        <Heart className="absolute top-2 right-3 heart" />
      </div>
      <div className="flex flex-col gap-[0.625rem]">
        <div className="flex justify-between text-txtDark text-xs">
          <p className="font-normal ">Desert king</p>
          <span className="font-bold">1MBT per night</span>
        </div>
        <div className="flex justify-between text-txtDark text-xs font-normal ">
          <p className="">2345km away</p>
          <span className="">available for 2weeks stay</span>
        </div>
        <div className="flex items-center gap-2">
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
        </div>
      </div>
    </div>
  );
};
