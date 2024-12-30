import React, { useState } from "react";
import CategoryItem from "./CategoryItem";
import { propertiresPhotos } from "../utils/constat";

const Category = () => {
  const [data, setData] = useState(propertiresPhotos);
  return (
    <div className="grid grid-cols-4 mx-8 my-7">
      {data?.map((e) => {
        console.log(e);

        return <CategoryItem key={e.id} image_data={e} />;
      })}
    </div>
  );
};

export default Category;
