import React, { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { getCartsTotal } from "../../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
const NavbarRight = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { itemCount } = useSelector(state => state.carts);
  useEffect(() => {
    dispatch(getCartsTotal());
  }, [dispatch]);

  return (
    <div className="flex justify-between items-center gap-4 md:max-sm gap-2 ">
      <div className="flex items-center border p-2 rounded-full bg-gray-200">
        <input
          className="bg-gray-200 outline-none md:h-full md:w-32 md:max-sm w-16"
          type="text"
          placeholder="Search"
        />
        <BiSearch size={28} />
      </div>
      <AiOutlineHeart size={28} />
      <div onClick={() => navigate("cart")} className="relative">
        <div className="absolute text-center -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
          {itemCount}
        </div>
        <SlBasket size={28} />
      </div>
    </div>
  );
};

export default NavbarRight;
