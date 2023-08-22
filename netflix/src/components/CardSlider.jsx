import React, { useEffect, useRef, useState } from "react";
import { Card } from "./Card";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const CardSlider = ({ title, data }) => {
  const [showControls, setShowControls] = useState(false);
  const [sliderPostion, setSliderPosition] = useState(0);
  const sliderRef = useRef();

  //   const changeSlide = (position, width) => {
  //     sliderRef.current.style.transform = `translateX(-${position * width}px)`;
  //   };

  const handleDirection = (side) => {
    // const itemWidth = sliderRef.current.children[0].offsetWidth;
    const maxPosition = data.length / 2;

    if (
      side == "right" &&
      sliderPostion < maxPosition &&
      sliderRef.current.children.length > 0
    ) {
      setSliderPosition(Math.min(sliderPostion + 1, maxPosition));
      //   changeSlide(sliderPostion, itemWidth);
      console.log(sliderPostion);
    }
    if (
      side == "left" &&
      sliderPostion > 0 &&
      sliderRef.current.children.length > 0
    ) {
      setSliderPosition(Math.max(sliderPostion - 1, 0));
      //   changeSlide(sliderPostion, itemWidth);
      console.log(sliderPostion);
    }
  };
  useEffect(() => {
    if (sliderRef.current.children.length > 0) {
      const itemWidth = sliderRef.current.children[0].offsetWidth; // Get the width of a single item
      sliderRef.current.style.transform = `translateX(-${
        sliderPostion * itemWidth
      }px)`;
    }
  }, [sliderPostion]);
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-semibold  text-white ">{title}</h1>
      <div
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
        className=" relative w-full text-white items-center h-[28vh] flex overflow-hidden bg-black border-2"
      >
        <button
          onClick={() => {
            handleDirection("left");
          }}
          className={
            showControls
              ? "opacity-100 transition-opacity duration-300 absolute left-0 z-10 h-[150px] bg-[rgba(0,0,0,0.9)] w-[50px] flex items-center justify-center"
              : "opacity-0 absolute left-0 z-10 h-[150px] bg-[rgba(0,0,0,0.9)] w-[50px] flex items-center justify-center"
          }
        >
          <AiOutlineLeft className="text-white text-3xl " />
        </button>
        <button
          onClick={() => {
            handleDirection("right");
          }}
          className={
            showControls
              ? "opacity-100 transition-opacity duration-300 absolute right-0 z-10 h-[150px] bg-[rgba(0,0,0,0.9)] w-[50px] flex items-center justify-center"
              : "opacity-0 absolute right-0 z-10 h-[150px] bg-[rgba(0,0,0,0.9)] w-[50px] flex items-center justify-center"
          }
        >
          <AiOutlineRight className="text-white text-3xl" />
        </button>
        <div
          ref={sliderRef}
          className="text-white duration-300 items-center h-full flex  "
        >
          {data.map((movie, index) => {
            return <Card movie={movie} index={index} key={movie.id} />;
          })}
        </div>
      </div>
    </div>
  );
};
