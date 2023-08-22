import React from "react";

export const Card = ({ movie }) => {
  return (
    <div className=" relative w-[19.5vw] bg-black h-full text-white  ">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.image}`}
        alt=""
        className="h-full w-full p-2"
      />
      <h1 className="absolute top-0">{movie.name}</h1>
      {/* {console.log("HELLOW", movie.image)} */}
    </div>
  );
};
