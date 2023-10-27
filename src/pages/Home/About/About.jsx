import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero mt-28">
      <div className="hero-content  flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 top-1/2 right-0 border-white border-8 absolute rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-[#FF3811] mb-5 font-bold text-xl">About Us</h3>
          <h1 className="text-5xl font-bold w-[400px] leading-normal text-[#151515] mb-7">
            We are qualified & of experience in this field
          </h1>
          <p className="font-normal text-base  leading-8 capitalize text-[#737373] mb-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="font-normal text-base  leading-8 capitalize text-[#737373] mb-7">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="text-white bg-[#FF3811] font-semibold text-lg py-4 px-5 rounded-lg">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
