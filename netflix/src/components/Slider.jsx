import React from "react";
import { CardSlider } from "./CardSlider";

export const Slider = ({ movies, title }) => {
  const getMoviesRange = (from, to) => {
    return movies.slice(from, to);
  };

  return (
    <div className=" flex flex-col h-[35vh] m-4 justify-between bg-black  ">
      <div className="flex gap-8 flex-col">
        <CardSlider title="Trending now" data={getMoviesRange(0, 10)} />
        <CardSlider title="New Releases" data={getMoviesRange(10, 20)} />
        <CardSlider title="Trending now" data={getMoviesRange(20, 30)} />
        <CardSlider title="Trending now" data={getMoviesRange(30, 40)} />
        <CardSlider title="Trending now" data={getMoviesRange(40, 50)} />
        <CardSlider title="Trending now" data={getMoviesRange(50, 60)} />
      </div>
    </div>
  );
};
