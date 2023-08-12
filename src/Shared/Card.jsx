import { FaBookReader, FaUsers } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { addSelectClass, updatePlace } from "../api/select";
import { toast } from "react-hot-toast";
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Card = ({ cls }) => {
  const { user, role } = useAuth();
  const navigate = useNavigate();

const selectInfo = {student: {name: user?.displayName, email: user?.email, image: user?.photoURL},
instructor: {name: cls.instructorName, email: cls.instructorEmail, image: cls.insImage},
className: cls.className,
classImage: cls.image,
price: cls.price,}

  const handleSelectClass = () => {
    addSelectClass(selectInfo)
    .then(data => {
      updatePlace(user.email, true)
      .then(data => {
        console.log(data);
        if (data.matchedCount > 0) {
          toast.success("Successfully Selected!");
          navigate("/dashboard/selectedClasses");
        }
      })
      .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
  };
  AOS.init();
  return (
    <div className="col-span-1 cursor-pointer group" >
      <div className="flex flex-col gap-2 w-full relative">
        <div  data-aos="fade-up"
    data-aos-delay="0"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
        <div
          className="
            aspect-square 
            w-full
            h-80
            overflow-hidden
          "
          
        >
          <img
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={cls.image}
            alt="Class"
          />
          <div
            className="
            absolute
            bottom-56
            right-5
            z-20
          "
          >
            <p className="font-bold text-white text-xl bg-red-700 p-4 rounded-full shadow-md">
              ${cls.price}
            </p>
          </div>
        </div>
        <div className="flex gap-6 ju items-center mt-5">
          <div className="w-10 h-10 rounded-full">
            <img
              className="w-full h-full rounded-full"
              referrerPolicy="no-referrer"
              src={cls.insImage}
              alt=""
            />
          </div>
          <div className="font-medium text-xl text-neutral-500">
            {cls.instructorName}
          </div>
        </div>
        <div className="font-bold text-2xl mb-3 hover:text-red-600">
          {cls.className}
        </div>
        <div className="flex flex-row justify-between items-center mb-3">
          <div className="font-semibold">
            <FaUsers className="inline" /> Students: {cls.student ? cls.student : '0'}
          </div>
          <div className="font-light">
            <FaBookReader className="inline" /> Available Seats:{" "}
            {cls.availableSeat}
          </div>
        </div>
        <button
        onClick={handleSelectClass}
          disabled={role === "Admin" || role === "Instructor"}
          className="btn btn-error text-white hover:bg-slate-900"
        >
          Select Course
        </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
