import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`products/${product?.id}`)}
      className=" flex flex-col justify-center items-center md:w-[300px] md:max-sm w-[180px] md:p-7 ml-5 mb-5 border rounded-md relative"
    >
      <div className="absolute md:text-2xl md:max-sm text-lg font-bold rounded-md top-0 right-0 bg-black text-white">
        {product?.price}
        <span className="text-2xl"> TL</span>
      </div>
      <img
        className="md:w-[250px] h-[250px] md:pt-3 md:max-sm pt-2 object-contain md:max-sm w-[100px] h-[100px] m-auto"
        src={product?.image}
        alt=""
      />
      <div className="text-center px-3 mt-3 md:text-xl md:max-sm text-sm font-bold">
        {product?.title}
      </div>
    </div>
  );
};

export default Product;
