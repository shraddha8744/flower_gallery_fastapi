import React, { useState } from "react";
import RecentItem from "./RecentItem";
import { recent } from "../utils/constat";

const Recent = () => {
  const [data] = useState(recent);
  return (
    <div className="mt-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-extrabold">Recent Flowers</h1>
        <span className="w-16 h-1 bg-yellow-400 mt-5 rounded-s-full rounded-e-full"></span>
      </div>
      <div className="grid grid-cols-3 mx-10 mt-3">
        {data.map((e) => {
          return <RecentItem key={e.id} recentData={e} />;
        })}
      </div>
      <button className="my-10 py-3 px-8 bg-yellow-400 text-center font-semibold text-white rounded-lg ml-[600px] text-xl">
        VIEW ALL PROPERTIES
      </button>
    </div>
  );
};

export default Recent;
