import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const BookService = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  const { user } = useContext(AuthContext);
  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
      customerName: name,
      email,
      date,
      img,
      service: title,
      service_id: _id,
      price,
    };
    console.log(booking);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Success!",
          text: "Service Booked Successfully",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div className="w-10/12 mx-auto my-10">
      <div className="bg-[#F3F3F3] p-20 rounded-lg">
        <form onSubmit={handleBookService} className="grid grid-cols-2 gap-6">
          <input
            type="text"
            defaultValue={title}
            name="name"
            placeholder="Full Name"
            className="text-[#FF3811] placeholder:text-[#A2A2A2] outline-[#FF3811] py-4 px-6 rounded-md"
          />
          <input
            type="date"
            name="date"
            placeholder="Date"
            className="text-[#FF3811] placeholder:text-[#A2A2A2] outline-[#FF3811] py-4 px-6 rounded-md"
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            className="text-[#FF3811] placeholder:text-[#A2A2A2] outline-[#FF3811] py-4 px-6 rounded-md"
          />
          <input
            type="text"
            name="email"
            defaultValue={user?.email}
            placeholder="Your Email"
            className="text-[#FF3811] placeholder:text-[#A2A2A2] outline-[#FF3811] py-4 px-6 rounded-md"
          />

          <textarea
            className="text-[#FF3811] col-span-2 placeholder:text-[#A2A2A2] outline-[#FF3811] py-4 px-6 rounded-md"
            name="message"
            placeholder="Your Message"
            cols="20"
            rows="6"
          ></textarea>
          <input
            type="submit"
            value="Order Confirm "
            className="bg-[#FF3811] col-span-2 py-4 rounded-lg text-white font-semibold text-xl "
          />
        </form>
      </div>
    </div>
  );
};

export default BookService;
