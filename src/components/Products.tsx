import React from "react";

const Products = ({ image, title, price, description, category }) => {
  return (
    <div className="shadow-md flex justify-center items-center flex-col">
      <img
        src={image}
        alt="image goes here"
        className="w-full h-[200px] border"
      />
      <div className="font-medium text-sm mt-3 space-y-1 text-center">
        <div>{title}</div>
        <div>{description}</div>
        <div className="font-semibold text-base">${price}</div>
        <div>{category}</div>
      </div>
    </div>
  );
};

export default Products;
