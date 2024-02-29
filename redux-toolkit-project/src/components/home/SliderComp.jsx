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
        <div className="!flex items-center justify-center bg-gray-100 p-6 md:h-[100%] 
        md:max-sm h-[50%] md:max-sm p-7 md:max-sm m-auto md:flex flex-wrap">
          <div className="lg:w-1/2">
            <div className="text-6xl font-bold lg:mt-0 lg:ml-4">
              Cool Popular Shoes
            </div>
            <div className="text-lg my-4 lg:mt-0 lg:ml-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              eius corrupti consectetur tenetur expedita blanditiis, nihil
              ratione quo asperiores numquam temporibus quibusdam ipsa quaerat
              incidunt quas. Iste dolorum pariatur vitae distinctio ipsa
              explicabo, exercitationem possimus, architecto vero amet
              reiciendis animi quaerat? Ratione minima repellat provident
              corrupti pariatur excepturi odio! Quis?
            </div>
            <button className="flex items-center justify-center cursor-pointer 
            bg-gray-200 border rounded-full text-2xl  w-[200px] h-16 ">
              Look
            </button>
          </div>
          <div className="lg:w-1/2">
            <img className="md-full h-auto " src={img1} alt="img1" />
          </div>
        </div>
        <div className="!flex items-center justify-center bg-gray-100 p-6 md:h-[100%] 
        md:max-sm h-[50%] md:max-sm p-7 md:max-sm m-auto md:flex flex-wrap ">
          <div className="lg:w-1/2">
            <div className="text-6xl font-bold lg:mt-0 lg:ml-4">Cool Popular Shoes</div>
            <div className="text-lg my-4 lg:mt-0 lg:ml-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              eius corrupti consectetur tenetur expedita blanditiis, nihil
              ratione quo asperiores numquam temporibus quibusdam ipsa quaerat
              incidunt quas. Iste dolorum pariatur vitae distinctio ipsa
              explicabo, exercitationem possimus, architecto vero amet
              reiciendis animi quaerat? Ratione minima repellat provident
              corrupti pariatur excepturi odio! Quis?
            </div>
            <button className=" flex items-center justify-center cursor-pointer 
            bg-gray-200 border rounded-full text-2xl  w-[200px] h-16 ">
              Look
            </button>
          </div>

          <img className="md-full h-auto " src={img2} alt="img2" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
