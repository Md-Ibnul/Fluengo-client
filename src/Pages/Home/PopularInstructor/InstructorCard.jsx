import React from "react";
import { Link } from "react-router-dom";
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa"
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const InstructorCard = ({ instructor }) => {
  AOS.init();
  return (
    <div data-aos="fade-down"
    data-aos-offset="0"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
    <div className="card w-full md:w-96 bg-base-100 shadow-xl">
      <figure className="h-80 w-full overflow-hidden">
        <img 
        className="w-full overflow-hidden"
          src={instructor.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
        {instructor.name}
        </h2>
        <p>{instructor.email}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Student-Focused</div>
          <div className="badge badge-outline">Caring</div>
        </div>
      </div>
      <div className="flex items-center text-center justify-center gap-8 py-3 mb-2 border-b-2 border-t-2">
          <Link className="inline-flex bg-neutral-800 p-2 rounded-full hover:bg-blue-400 transition"><FaFacebookF className="text-2xl text-white"/> </Link>
          <Link className="inline-flex bg-neutral-800 p-2 rounded-full hover:bg-blue-400 transition"><FaTwitter className="text-2xl text-white"/> </Link>
          <Link className="inline-flex bg-neutral-800 p-2 rounded-full hover:bg-red-600 transition"><FaInstagram className="text-2xl text-white"/> </Link>
        </div>
        <Link to='/classes' className='btn btn-error text-white hover:bg-slate-900 w-full'>See Classes</Link>
    </div>
    </div>
  );
};

export default InstructorCard;
