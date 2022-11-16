import React from "react";
import { SettingsIcon } from "../../assests";
import { PlaceCard } from "../../components";
import { places } from "../../data/places";

const filters = [
  "Resturant",
  "Cottage",
  "Castle",
  "fantast city",
  "beach",
  "Carbins",
  "Off-grid",
  "Farm",
];

export const Places = () => {
  return (
      <div className="min-h-screen flex flex-col gap-14 px-5 py-10 md:px-14 xl:px-0  w-full max-w-[1200px] m-auto">
          <div className="flex gap-4 items-center justify-between flex-wrap">
              {filters.map((item, id) => {
                  return <button className="bg-none outline-0 border-0 text-lg font-normal lg:text-xl" key={id}>{ item}</button>
              })}
              <button className="bg-0 outline-0 border border-[#B4B4B4] rounded-lg flex items-center justify-between p-3 gap-10 text-[#333333] text-sm md:text-base" >Location <SettingsIcon/> </button>
          </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {places.map((item, id) => {
          return <PlaceCard key={id} img={item} />;
        })}
      </div>
    </div>
  );
};
