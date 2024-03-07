import React from "react";

const CartComp = ({ cart }) => {
  return (
    <div className="w-[100%] mt-9 md:flex gap-14 md:max-sm ml-10 ">
      <img
        className="h-[200px] w-[200px] md:h-[310px] w-[220px]
        flex justify-start items-start mt-10
        object-contain "
        src={cart?.image}
        alt=""
      />
      <div className="w-[100%] flex flex-col mt-7">
        <div className="flex flex-col justify-start items-start">
          <div className="flex justify-center items-center text-xl mt-8 
          font-bold">
            {cart?.title}
          </div>
          <div>{cart?.description}</div>
          <div className="text-xl md:max-sm text-base  ">
            {cart?.price} TL <span>({cart?.quantity})</span>
          </div>
        </div>

        <div>
          <div
            className="flex justify-center items-center mt-2 justify-center cursor-pointer 
            text-xl items-center rounded-md bg-red-500 
            text-white w-[100px] h-auto h-16 md:max-sm w-[80px] "
          >
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComp;