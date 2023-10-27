import React, { useContext } from "react";
import signupImage from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Signup = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const newUser = { name, email, password };
    console.log(newUser);
    createUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="hero my-10">
      <div className="gap-16 flex items-stretch flex-col lg:flex-row">
        <div className="text-center lg:text-left lg:w-1/2">
          <img src={signupImage} alt="" />
        </div>
        <div className="card flex-shrink-0 text-center  w-1/2 border p-10">
          <form onSubmit={handleSignup} className=" ">
            <h1 className="text-4xl font-bold mb-12 ">Sign Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                name="password"
              />
              <label className="label flex justify-end text-right">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-[#FF3811]  "
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="py-2 cursor-pointer bg-[#FF3811] text-white font-semibold text-lg leading-8 rounded-lg"
                value="Sign Up"
              />
            </div>
            <Link
              to="/login"
              className="text-lg mt-5 block underline
             font-semibold  text-[#FF3811]"
            >
              Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
