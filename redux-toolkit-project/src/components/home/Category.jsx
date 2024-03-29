import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

const Category = ({setCategory}) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  console.log(categories, "categories");

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="w-1/6 bg-gray-100 p-4 max-h-screen md:w-[350px] md:max-sm w-[300px]">
      <div className="border-b pb-2 text-xl font-bold px-2 ">Category</div>
      {categories?.map((category, i) => (
        <div onClick={()=>setCategory(category)} className="text-lg mt-1  cursor-pointer hover:bg-gray-200 px-2 py-1" key={i}>{category}</div>
      ))}
    </div>
  );
};

export default Category;
