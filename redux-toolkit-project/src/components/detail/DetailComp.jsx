import React, { useState } from "react";
import {useDispatch} from "react-redux"
import {addToCart} from "../../redux/cartSlice.js"
const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    if (quantity > 0) 
    setQuantity(quantity - 1);
  };

  const increment = () => {
    if (quantity < productDetail?.rating?.count) 
    setQuantity(quantity + 1);
  };

  const addBasket = () => {
    dispatch(addToCart({id: productDetail?.id, title: productDetail?.title, image: productDetail?.image, price:productDetail?.price, quantity:quantity}))
  }

  return (
    <div className="md:flex justify-between items-center gap-10 my-10 md:max-sm:flex-col md:max-sm justify-center items-center my-5 ">
      <div className="flex justify-center items-center md:w-1/2 border md:max-sm border py-5">
        <img
          className="md:w-[450px] h-[350px] object-contain cursor-pointer"
          src={productDetail?.image}
          alt=""
          style={{ textAlign: "left" }}
        />
      </div>

      <div className="w-1/2">
        <div className="text-xl font-bold">{productDetail?.title}</div>
        <div className="mt-8 my-8 flex-wrap">{productDetail?.description}</div>
        <div>Rating: {productDetail?.rating?.rate}</div>
        <div>Count: {productDetail?.rating?.count}</div>
        <div className="text-2xl font-bold">
          {productDetail?.price} <span className="text-sm">TL</span>
        </div>
        <div className="flex items-center gap-5 mt-3">
          <div onClick={decrement} className="text-2xl cursor-pointer">
            -
          </div>
          <input
            className="w-[50px] text-2xl font-bold text-center border"
            type="text"
            value={quantity}
          />
          <div onClick={increment} className="text-2xl cursor-pointer">
            +
          </div>
        </div>
        <div onClick={addBasket}
          className="border mt-4 bg-gray-200 w-[200px] 
        rounded-md h-16 flex justify-center items-center cursor-pointer"
        >
          Sepete Ekle
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
