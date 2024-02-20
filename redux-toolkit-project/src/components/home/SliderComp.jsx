import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/img/nike-2.png";
import img2 from "../../assets/img/nike-1.png";
const SliderComp = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay:false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center justify-center bg-gray-100 px-3 lg:flex flex-row md:flex flex-row sm:flex flex-col">
          <div className="w-3/5 m-auto flex-wrap sm:flex flex-col ">
            <div className="text-5xl px-3 sm:pl-10 font-bold my-8 sm:text-2xl" >Cool Popular Shoes</div>
            <div className="text-lg px-3 sm:pl-10 my-4 sm:text-md ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              eius corrupti consectetur tenetur expedita blanditiis, nihil
              ratione quo asperiores numquam temporibus quibusdam ipsa quaerat
              incidunt quas. Iste dolorum pariatur vitae distinctio ipsa
              explicabo, exercitationem possimus, architecto vero amet
              reiciendis animi quaerat? Ratione minima repellat provident
              corrupti pariatur excepturi odio! Quis?
            </div>
            <button className="flex items-center justify-center cursor-pointer 
            bg-gray-200 border-none rounded-full pr-auto text-2xl md:pr-10 w-[200px] h-16 text-gray-500">
              Look
            </button>
          </div>

          <img className=" flex flex-row w-2/5" src={img1} alt="img1" />
        </div>
        <div className="!flex items-center justify-center bg-gray-100 px-3 h-[525px] ">
          <div className="w-2/5 m-auto p-auto">
            <div className="text-5xl font-bold my-8">Cool Popular Shoes</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              eius corrupti consectetur tenetur expedita blanditiis, nihil
              ratione quo asperiores numquam temporibus quibusdam ipsa quaerat
              incidunt quas. Iste dolorum pariatur vitae distinctio ipsa
              explicabo, exercitationem possimus, architecto vero amet
              reiciendis animi quaerat? Ratione minima repellat provident
              corrupti pariatur excepturi odio! Quis?
            </div>
            <button className="flex items-center justify-center cursor-pointer bg-gray-200 border-none rounded-full text-2xl  w-[200px] h-16 my-10 text-gray-500 ">
              Look
            </button>
          </div>

          <img className="w-[500px]" src={img2} alt="img2" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
