import React from "react";
import { PlaceCard } from "../../components";
import { places } from "../../data/places";

export const Places = () => {
  return (
    <div className="min-h-screen flex flex-col gap-14 px-5 py-10 md:px-14 xl:px-0  w-full max-w-[1200px] m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {places.map((item, id) => {
          return <PlaceCard key={id} img={item} />;
        })}
      </div>
    </div>
  );
};
