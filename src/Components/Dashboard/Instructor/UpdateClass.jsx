import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import Title from '../../../Shared/Title';
import './updateClass.css'
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const img_hosting_token = import.meta.env.VITE_Image_Host_Key;

const UpdateClass = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const classes = useLoaderData();
    const {_id, className, price, availableSeat, description} = classes || {};
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgData) =>{
          console.log(imgData);
            if (imgData.success) {
                const imgURL = imgData.data.display_url;
                const { className, price, availableSeat, description } = data;
                const newInfo = {
                    className,
                  price: parseFloat(price),
                  availableSeat,
                  description,
                  image: imgURL,
                  status: "Pending"
                };
                fetch(`https://fluengo-server-oq1dkczx0-md-ibnul.vercel.app/classes/update/${_id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newInfo),
                  })
                    .then((res) => res.json())
                    .then(data => {
                      if (data.modifiedCount > 0) {
                        toast.success("Successfully Updated")
                        reset();
                        navigate('/dashboard/insClasses');
                      }
                    });
              }
        })

      
  };

  return (
    <div className="addBg text-center my-16 min-h-screen p-5">
      <Title title="Update Your Class" subtitle="Give something extra!"/>
      <div className="w-4/5 md:w-full mx-auto text-start mt-14">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex-col md:flex md:gap-5'>
          <div className='w-full'>
            <label className="ms-2 font-bold text-lg">Class Name</label>
          <input
            className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3 bg-transparent"
            defaultValue={className}
            {...register("className", { required: true })}
          /></div>

          <div className='w-full mb-5 md:mb-0'>
          <label className="ms-2 font-bold text-lg">Class's Image</label>
          <input type='file'
             className="file-input w-full bg-transparent"
            {...register("image", { required: true })}
          />
          </div>

          </div>
          <div className='flex-col md:flex gap-5'>
          <div className='w-full'>
          <label className="ms-2 font-bold text-lg">Instructor Name</label>
          <input
            className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3 bg-transparent"
            value={user?.displayName}
            {...register("instructorName", { required: true })}
          />
          </div>
         <div className='w-full'>
         <label className="ms-2 font-bold text-lg">Instructor Email</label>
          <input
            className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3 bg-transparent"
            value={user?.email}
            {...register("instructorEmail", { required: true })}
          />

         </div>
          </div>
          
          <div className='flex-col md:flex gap-5'>
          <div className='w-full'>
          <label className="ms-2 font-bold text-lg">Price</label>
          <input
            className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3 bg-transparent"
            defaultValue={price}
            {...register("price", { required: true })}
          />
          </div>
          <div className='w-full'>
          <label className="ms-2 font-bold text-lg">Available Seat</label>
          <input
            className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3 bg-transparent"
            defaultValue={availableSeat}
            {...register("availableSeat", { required: true })}
          />
          </div>
          </div>

          <label className="ms-2 font-bold text-lg">Description</label>
          <textarea
            className="border border-slate-900 block rounded w-full h-32 mb-12 ps-3 bg-transparent"
            defaultValue={description}
            {...register("description", { required: true })}
          />

          {errors.exampleRequired && <span>This field is required</span>}
          <input
            className="block bg-red-600 hover:bg-red-800 transition text-white font-bold text-lg w-full py-3 rounded cursor-pointer"
            value="Add Class"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateClass;