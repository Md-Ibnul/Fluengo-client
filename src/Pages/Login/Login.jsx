import React from "react";
import loginImage from '../../assets/loginImage.json'
import SocialLogin from "../../Shared/SocialLogin";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import Lottie from "react-lottie";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const Login = () => {
  const { signIn } = useAuth();
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
    .then(result => {
        console.log(result.user);
        toast.success("Successfully Login")
        reset()
    })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-100 my-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie options={defaultOptions} height={600} width={600} />
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
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    {...register("password", {
                      required: true,
                      maxLength: 20,
                      minLength: 6,
                      pattern: /^(?=.*[!@#$&*])(?=(.*[A-Z]))/,
                    })}
                    placeholder="password"
                    className="input input-bordered"
                  />
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
                <p className="text-end">New at Fluengo? <Link to='/signUp' className="text-red-600">SIgn up</Link></p>
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
