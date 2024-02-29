import React from "react";

const Product = ({ product }) => {
  return (
    <div className="w-[402px] ml-5 mb-5 border rounded-md relative">
      <div className="absolute text-2xl font-bold rounded-md top-0 right-0 bg-black text-white">
        {product?.price}
        <span className="text-sm"> TL</span>
      </div>
      <img className="w-[250px] h-[250px] m-auto" src={product?.image} alt="" />
    <div className="text-center px-3 mt-3 text-xl font-bold">{product?.title}</div>
    </div>
  );
};

export default Product;
