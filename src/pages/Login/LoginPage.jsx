import React, { useContext } from "react";
import loginImg from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const LoginPage = () => {
  const { signIn } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const loginUser = { email, password };
    console.log(loginUser);
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="hero my-10">
      <div className="gap-16 flex items-stretch flex-col lg:flex-row">
        <div className="text-center lg:text-left lg:w-1/2">
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 text-center  w-1/2 border p-16">
          <form onSubmit={handleLogin} className=" ">
            <h1 className="text-4xl font-bold mb-12 ">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
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
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="py-2 cursor-pointer bg-[#FF3811] text-white font-semibold text-lg leading-8 rounded-lg"
                value="Login"
              />
            </div>
            <Link
              to="/signup"
              className="text-lg mt-5 block underline
             font-semibold  text-[#FF3811]"
            >
              Create an Account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
