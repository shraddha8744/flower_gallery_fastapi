import React from "react";
import defaultImage from "../assets/images/five.jpg"; // Replace with your default image path

const CategoryItem = ({ image_data }) => {
  const { id, name, image, number } = image_data;

  return (
    <div className="relative">
      <img
        src={image || defaultImage} // Use defaultImage if image is not available
        alt={name}
        className="w-[21rem] h-[300px] object-cover rounded-lg brightness-75"
      />
      <div className="absolute top-[30%] left-14 flex flex-col justify-center items-center text-center">
        <h1 className="text-center text-[24px] font-medium text-white tracking-wide">
          {name}
        </h1>
        <p className="text-white text-[18px] font-normal">
          {number} properties
        </p>
      </div>
    </div>
  );
};

export default CategoryItem;
