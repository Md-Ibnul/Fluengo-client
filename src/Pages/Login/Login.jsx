import React, { useState } from "react";
import loginImage from "../../assets/loginImage.json";
import SocialLogin from "../../Shared/SocialLogin";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import Lottie from "react-lottie";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Title from "../../Shared/Title";

const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setVisible] = useState(false);
  const toggle = () => {
    setVisible(!isVisible);
  };
  const from = location.state?.from?.pathname || "/";
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loginImage,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        navigate(from, { replace: true });
        toast.success("Successfully Login");
        reset();
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div>
      <Title title="Login Now"/>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-full lg:ml-auto h-full">
            <Lottie options={defaultOptions}  />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    {...register("email", { required: true })}
                    placeholder="email"
                    className="input input-bordered w-full"
                  />
                  {errors.email && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="relative">
                  <input
                    type={!isVisible ? "password" : "text"}
                    name="password"
                    {...register("password", {
                      required: true,
                      maxLength: 20,
                      minLength: 6,
                      pattern: /^(?=.*[!@#$&*])(?=(.*[A-Z]))/,
                    })}
                    placeholder="password"
                    className="input input-bordered w-full"
                  />
                    <span className="absolute right-2 top-4 cursor-pointer" onClick={toggle}>
                    {isVisible ? <FaEye /> : <FaEyeSlash />}
                  </span>
                  </div>
                  {errors.password && (
                    <span className="text-red-500">Password required.</span>
                  )}
                  {errors.password?.type == "minLength" && (
                    <span className="text-red-500">
                      Password must be min 6 character.
                    </span>
                  )}
                  {errors.password?.type == "maxLength" && (
                    <span className="text-red-500">
                      Password must be less than 20 character.
                    </span>
                  )}
                  {errors.password?.type == "pattern" && (
                    <span className="text-red-500">
                      Password must have one special character & one capital
                      letter.
                    </span>
                  )}
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-error bg-red-600 hover:text-black text-white w-full"
                    type="submit"
                    value="Login"
                  />
                </div>
                <p className="text-end">
                  New at Fluengo?{" "}
                  <Link to="/signUp" className="text-red-600">
                    SIgn up
                  </Link>
                </p>
              </form>
              <div>
                <SocialLogin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
