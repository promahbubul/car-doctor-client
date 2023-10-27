import React from "react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div
        id="slide1"
        className="carousel-item rounded-lg h-[600px] relative w-full"
      >
        <img src={img1} className="w-full rounded-lg " />
        <div className="absolute flex-col justify-center space-y-7 pl-[40px] flex h-full  w-    bg-gradient-to-r from-[#151515] rounded-lg   to-[rgba(21, 21, 21, 0.00)]">
          <h1 className="text-6xl font-bold leading-[75px] w-[480px] text-white">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-white w-[520px] capitalize text-lg font-normal">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="">
            <button className="pt-3 px-5 rounded-md  pb-4 border-none font-semibold text-lg bg-[#FF3811] text-white mr-5">
              Discover More
            </button>
            <button className="pt-3 px-5 rounded-md  pb-4  font-semibold text-lg border border-white border-solid text-white">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide4"
            className="bg-[#FFFFFF33] text-[#FFFFFF] border-none btn btn-circle mr-5"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="bg-[#FFFFFF33] text-[#FFFFFF] border-none btn btn-circle "
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item h-[600px] relative w-full">
        <img src={img2} className="w-full rounded-lg" />
        <div className="absolute flex-col justify-center space-y-7 pl-[40px] flex h-full  w-    bg-gradient-to-r from-[#151515] rounded-lg   to-[rgba(21, 21, 21, 0.00)]">
          <h1 className="text-6xl font-bold leading-[75px] w-[480px] text-white">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-white w-[520px] capitalize text-lg font-normal">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="">
            <button className="pt-3 px-5 rounded-md  pb-4 border-none font-semibold text-lg bg-[#FF3811] text-white mr-5">
              Discover More
            </button>
            <button className="pt-3 px-5 rounded-md  pb-4  font-semibold text-lg border border-white border-solid text-white">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide1"
            className="bg-[#FFFFFF33] text-[#FFFFFF] border-none btn btn-circle mr-5"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="bg-[#FFFFFF33] text-[#FFFFFF] border-none btn btn-circle"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item h-[600px] relative w-full">
        <img src={img3} className="w-full rounded-lg" />
        <div className="absolute flex-col justify-center space-y-7 pl-[40px] flex h-full  w-    bg-gradient-to-r from-[#151515] rounded-lg  to-[rgba(21, 21, 21, 0.00)]">
          <h1 className="text-6xl font-bold leading-[75px] w-[480px] text-white">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-white w-[520px] capitalize text-lg font-normal">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="">
            <button className="pt-3 px-5 rounded-md  pb-4 border-none font-semibold text-lg bg-[#FF3811] text-white mr-5">
              Discover More
            </button>
            <button className="pt-3 px-5 rounded-md  pb-4  font-semibold text-lg border border-white border-solid text-white">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide2"
            className="bg-[#FFFFFF33] text-[#FFFFFF] border-none btn btn-circle mr-5"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="bg-[#FFFFFF33] text-[#FFFFFF] border-none btn btn-circle"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item h-[600px] relative w-full">
        <img src={img4} className="w-full rounded-lg" />
        <div className="absolute flex-col rounded-lg justify-center space-y-7 pl-[40px] flex h-full  w-    bg-gradient-to-r from-[#151515]   to-[rgba(21, 21, 21, 0.00)]">
         
          <h1 className="text-6xl font-bold leading-[75px] w-[480px] text-white">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-white w-[520px] capitalize text-lg font-normal">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="">
            <button className="pt-3 px-5 rounded-md  pb-4 border-none font-semibold text-lg bg-[#FF3811] text-white mr-5">
              Discover More
            </button>
            <button className="pt-3 px-5 rounded-md  pb-4  font-semibold text-lg border border-white border-solid text-white">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide3"
            className="bg-[#FFFFFF33] text-[#FFFFFF] border-none btn btn-circle mr-5"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="bg-[#FFFFFF33] text-[#FFFFFF] border-none btn btn-circle"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
