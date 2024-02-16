import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/img/nike-2.png";
import img2 from "../../assets/img/nike-1.png";
const SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-3  ">
          <div>
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
            <button className="flex items-center justify-center cursor-pointer bg-gray-200 border-none rounded-full text-2xl  w-[200px] h-16 my-10">
              Look
            </button>
          </div>

          <img src={img1} alt="img1" />
        </div>
        <div className="!flex items-center bg-gray-100 px-3 h-[500px]">
          <div>
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
            <button className="flex items-center justify-center cursor-pointer bg-gray-200 border-none rounded-full text-2xl  w-[200px] h-16 my-10">
              Look
            </button>
          </div>

          <img src={img2} alt="img2" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
