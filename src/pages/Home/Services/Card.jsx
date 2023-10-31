import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { _id, title, img, price } = item;
  return (
    <div className="card p-6  card-compact border border-[#E8E8E8]">
      <figure>
        <img src={img} className="h-[250px]" alt="Shoes" />
      </figure>
      <div className="">
        <h2 className=" text-[#444444] text-2xl font-bold leading-normal my-5">
          {title}
        </h2>
        <div className="flex flex-row justify-between">
          <p className="text-[#FF3811] text-xl font-semibold leading-normal ">
            {price}
          </p>
          <Link to={`/book/${_id}`}>
            <button className="">
              <BiRightArrowAlt className="text-[#FF3811]  text-4xl" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
