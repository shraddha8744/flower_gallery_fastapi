import React, { useState } from "react";
import { herSectionImages } from "../utils/constat";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";

const HeroSection = () => {
  const [images] = useState(herSectionImages);
  const [currentIndex, setCuurentIndex] = useState(0);
  const handleNext = () => {
    setCuurentIndex((prev) =>
      prev == herSectionImages.length - 1 ? 0 : prev + 1
    );
  };
  const handleBack = () => {
    setCuurentIndex((prev) =>
      prev == 0 ? herSectionImages.length - 1 : prev - 1
    );
  };
  return (
    <div className="w-[100vw] px-[20px] h-[550px] relative  mt-[150px]  ">
      <div className="h-full w-full brightness-75 rounded flex justify-center items-center">
        <img
          src={images[currentIndex]?.name}
          alt="hero section images"
          className="w-[70vw] h-full object-cover rounded"
        />
      </div>
      <button className="absolute top-[45%] left-[100px]" onClick={handleBack}>
        <FaCircleArrowLeft size={35} className=" " />
      </button>
      <div className="absolute  top-32 left-[28%] ">
        <h1 className="text-6xl text-center font-bold text-white">
          Find Your Fev Flower
        </h1>
        <div className="flex justify-center items-center gap-3 mt-[60px]">
          <input
            type="search"
            name=""
            id=""
            className="w-[70%] h-12 rounded px-2 outline-none"
            placeholder="Search by flower name"
          />
          <button className="h-12 bg-yellow-400 text-white font-semibold px-7 rounded uppercase">
            Search
          </button>
        </div>
      </div>

      <button className="absolute top-[45%] right-[100px]" onClick={handleNext}>
        <FaCircleArrowRight size={30} />
      </button>
      <div className="flex gap-2  absolute bottom-7 left-[45%]">
        {herSectionImages?.map((_, i) => {
          return (
            <button
              key={i}
              className={`h-4 w-4 rounded-full border-2 border-white ${
                currentIndex == i && "bg-white border-none"
              } `}
              onClick={() => setCuurentIndex(i)}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSection;
