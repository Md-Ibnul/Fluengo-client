import React from "react";
import { Link } from "react-router-dom";

const InstructorCard = ({ instructor }) => {
  return (
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
        <Link to='/classes' className='btn btn-error text-white hover:bg-slate-900 w-full'>See Classes</Link>
    </div>
  );
};

export default InstructorCard;
