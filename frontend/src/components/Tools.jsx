import React from "react";
import one from "../assets/images/one.jpg";
import { tools } from "../utils/constat";

const Tools = () => {
  return (
    <div className="relative h-[500px] w-full mt-[100px]">
      {/* Background Image */}
      <div className="h-full w-full brightness-50">
        <img src={one} alt="" className="h-full w-full object-cover" />
      </div>

      {/* Absolute Positioned Text */}
      <div className="absolute top-20 left-52 flex flex-col justify-center items-center">
        <h1 className="text-5xl text-white font-extrabold tracking-wider px-9 ml-[130px] mt-4">
          Real Estate Tools and Resources
        </h1>
      </div>

      <div className="flex justify-evenly items-center absolute bottom-20 gap-28 left-24 ">
        {tools.map((e) => {
          return (
            <div
              key={e.id}
              className="flex flex-col justify-center items-center w-[350px] "
            >
              <div className="h-16 w-16 rounded-full bg-yellow-400 flex justify-center items-center">
                <span>1</span>
              </div>
              <h2 className="my-2 text-[26px] font-semibold text-white">
                {e.name}
              </h2>
              <p className="text-[18px] font-normal text-white tracking-wide text-center">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                velit cumque reprehenderit, voluptatibus sunt nostrum quos odio
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tools;
