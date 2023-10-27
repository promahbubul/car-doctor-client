import React, { useEffect, useState } from "react";
import Card from "./Card";

const Services = () => {
  const [services, setServices] = useState();

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);
  return (
    <>
      <div>
        <h3 className="text-[#FF3811] mb-5 font-bold text-xl text-center">
          Service
        </h3>
        <h1 className="text-5xl text-center font-bold leading-normal text-[#151515] mb-7">
          Our Service Area
        </h1>
        <p className="font-normal text-base  leading-8 capitalize text-[#737373] w-[772px] mx-auto text-center mb-12">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid md:grid-cols-2 mb-12 lg:grid-cols-3 grid-cols-1 gap-6">
        {services?.map((item) => (
          <Card key={item._id} item={item}></Card>
        ))}
      </div>
      <button className="btn btn-lg mx-auto block hover:bg-[#FF3811] hover:text-white text-center border border-[#FF3811] text-[#FF3811] bg-transparent px-6 py-4 rounded-lg">
        More Services
      </button>
    </>
  );
};

export default Services;
