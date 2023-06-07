import React from "react";
import { useForm } from "react-hook-form";
import Lottie from "react-lottie";
import signUpImage from "../../assets/signUpImage.json";
import useAuth from "../../hooks/useAuth";
import { saveUser } from "../../api/auth";
import { toast } from "react-hot-toast";
import SocialLogin from "../../Shared/SocialLogin";

const SignUp = () => {
  const {createUser, updateUserProfile} = useAuth();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: signUpImage,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
      .then(() => {
        saveUser(loggedUser);
        toast.success("successfully login")
      })
      .catch(error => {
        console.log(error)
        toast.error(error.message)
      })
    })
    .catch(error => {
      console.log(error)
      toast.error(error.message)
    })
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
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    {...register("name", { required: true })}
                    placeholder="name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photoUrl"
                    {...register("photoURL", { required: true })}
                    placeholder="photo url"
                    className="input input-bordered"
                  />
                  {errors.photoURL && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
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
                    <span className="label-text">Gender</span>
                  </label>
                  <select
                    {...register("gender", { required: true })}
                    className="select select-bordered w-full"
                  >
                    <option disabled selected>
                      Select Gender
                    </option>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                  </select>
                  {errors.gender && (
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
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input className="input input-bordered"
                    {...register("confirmPassword", { required: true })}
                    id="password"
                    type="password"
                    placeholder="Confirm Password"
                  />
                  {errors.confirmPassword && (
                    <span className="text-red-500">Password required.</span>
                  )}
                  {watch("confirmPassword") !== watch("password") &&
                  getValues("confirmPassword") ? (
                    <span className="text-red-500">Password not matched.</span>
                  ) : null}
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-error bg-red-600 hover:text-black text-white w-full"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
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

export default SignUp;
