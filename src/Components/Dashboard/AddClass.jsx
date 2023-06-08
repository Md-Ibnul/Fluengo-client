import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import Title from '../../Shared/Title';

const AddClass = () => {
    const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.insertedId) {
    //       Swal.fire({
    //         position: "center",
    //         icon: "success",
    //         title: "Your Classhas been added.",
    //         showConfirmButton: false,
    //         timer: 1500,
    //       });
    //     }
    //   });
    e.target.reset();
  };

  return (
    <div className="text-center my-16 min-h-screen">
      <Title title="Add A Class" subtitle="Ready to go!"/>
      <div className="w-4/5 md:w-full mx-auto text-start mt-14">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="ms-2 font-bold text-lg">Class Name</label>
          <input
            className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3"
            {...register("className", { required: true })}
          />

          <label className="ms-2 font-bold text-lg">Class's Image</label>
          <input
            className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3"
            {...register("pictureURL", { required: true })}
          />

          <label className="ms-2 font-bold text-lg">Instructor Name</label>
          <input
            className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3"
            value={user?.name}
            {...register("instructor Name", { required: true })}
          />

          <label className="ms-2 font-bold text-lg">Instructor Email</label>
          <input
            className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3"
            value={user?.email}
            {...register("instructor Email", { required: true })}
          />

          <label className="ms-2 font-bold text-lg">Price</label>
          <input
            className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3"
            {...register("price", { required: true })}
          />
          <label className="ms-2 font-bold text-lg">Available Quantity</label>
          <input
            className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3"
            {...register("availableQuantity", { required: true })}
          />

          <label className="ms-2 font-bold text-lg">Description</label>
          <textarea
            className="border border-slate-900 block rounded w-full h-28 mb-12 ps-3"
            {...register("description", { required: true })}
          />

          {errors.exampleRequired && <span>This field is required</span>}
          <input
            className="block bg-red-800 text-white font-bold text-lg w-full py-3 rounded cursor-pointer"
            value="Add"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddClass;