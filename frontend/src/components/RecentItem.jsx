import React from "react";

const RecentItem = ({ recentData }) => {
  const { id, bathroom, bedrooms, size, name, image, price } = recentData;
  console.log(recentData);

  return (
    <div className="w-[27rem]  mx-3 mt-10">
      <img
        src={image}
        alt=""
        className="w-full h-[320px] rounded object-cover"
      />
      <h1 className="text-2xl font-extrabold text-yellow-400 my-2">{name}</h1>
      <span className="text-xl font-bold">${price}.00/mon</span>
      <div className="flex items-center text-gray-400 text-[17px] gap-6 my-2">
        <span>{size} </span>
        <span>.</span>
        <span>4 flowers </span>
        <span>.</span>
        <span>{bathroom} flowers</span>
      </div>

      <p className="text-[18px] font-[500] text-zinc-600">
        Flowers have the power to uplift and inspire with their beauty and
        fragrance. From delicate petals to vibrant colors, they symbolize love,
        joy, and renewal. Whether adorning gardens, bouquets, or special
        occasions, flowers bring a sense of tranquility and nature's grace into
        our lives.
      </p>
    </div>
  );
};

export default RecentItem;
