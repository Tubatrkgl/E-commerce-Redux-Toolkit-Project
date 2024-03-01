import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/img/nike-2.png";
import img2 from "../../assets/img/nike-1.png";
const SliderComp = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center justify-center bg-gray-100 p-6 md:h-[550px] 
        md:max-sm h-[850px] md:max-sm p-7 md:max-sm m-auto md:flex flex-wrap mt-5">
          <div className="md:w-1/2 p-10">
            <div className="md:text-4xl font-bold md:max-sm text-2xl mb-10" >
              Cool Popular Shoes
            </div>
            <div className="md:text-lg my-4 md:max-sm text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              eius corrupti consectetur tenetur expedita blanditiis, nihil
              ratione quo asperiores numquam temporibus quibusdam ipsa quaerat
              incidunt quas. Iste dolorum pariatur vitae distinctio ipsa
              explicabo, exercitationem possimus, architecto vero amet
              reiciendis animi quaerat? Ratione minima repellat provident
              corrupti pariatur excepturi odio! Quis?
            </div>
            <button className="flex items-center justify-center cursor-pointer 
            bg-gray-200 border rounded-full md:text-2xl md:w-[200px] md:max-sm text-xl md:max-sm w-[100px] h-16 mt-10">
              Look
            </button>
          </div>
          <div className="md:w-1/2">
            <img className=" md:h-full md:max-sm h-[400px] object-contain" src={img1} alt="img1" />
          </div>
        </div>
        <div className="!flex items-center justify-center bg-gray-100 p-6 md:h-[550px] 
        md:max-sm h-[850px] md:max-sm p-7 md:max-sm m-auto md:flex flex-wrap mt-5">
          <div className="md:w-1/2 p-10">
            <div className="md:text-4xl font-bold md:max-sm text-2xl mb-10" >
              Cool Popular Shoes
            </div>
            <div className="md:text-lg my-4  md:max-sm text-md ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              eius corrupti consectetur tenetur expedita blanditiis, nihil
              ratione quo asperiores numquam temporibus quibusdam ipsa quaerat
              incidunt quas. Iste dolorum pariatur vitae distinctio ipsa
              explicabo, exercitationem possimus, architecto vero amet
              reiciendis animi quaerat? Ratione minima repellat provident
              corrupti pariatur excepturi odio! Quis?
            </div>
            <button className="flex items-center justify-center cursor-pointer 
            bg-gray-200 border rounded-full md:text-2xl md:w-[200px] md:max-sm text-xl md:max-sm w-[100px] h-16 mt-10">
              Look
            </button>
          </div>
          <div className="md:w-1/2 mt-5">
            <img className=" md:h-full md:max-sm h-[400px] object-contain" src={img2} alt="img2" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
