import React from 'react';
import { deleteSelectClass } from '../../api/select';
import { toast } from 'react-hot-toast';
import { FaMoneyCheckAlt, FaUserTie } from 'react-icons/fa';
import { GiCrossMark } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const SelectClassTable = ({cls, index, fetchSelectClasses}) => {
    const handleDelete = (id) => {
        deleteSelectClass(id)
        .then(data => {
            if(data.deletedCount > 0){
                fetchSelectClasses();
                toast.success("Deleted Class Successfully")
            }
        })
    }
    return (
        <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="ml-3">
          <p className="text-gray-900 whitespace-no-wrap">{index + 1}</p>
        </div>
      </td>
      <td className=" py-5 border-b border-gray-200 bg-white text-sm">
        <div className="block relative">
          <img
            alt="profile"
            src={cls?.classImage}
            className="mx-auto object-cover rounded h-14 w-14 "
          />
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{cls?.className}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {cls?.price}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap flex items-center">
          <FaUserTie className='inline me-2 text-xl'/> {cls?.instructor.name}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <Link to={`/dashboard/payOnline/${cls._id}`}
          className="btn btn-xs bg-yellow-600 text-white hover:text-black whitespace-no-wrap flex items-center"
        >
           <FaMoneyCheckAlt className='inline me-1 text-lg'/> Pay
        </Link>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
        onClick={() => handleDelete(cls._id)}
          className="btn btn-xs bg-yellow-600 text-white hover:text-black whitespace-no-wrap flex items-center"
        >
          <GiCrossMark className='inline me-1 text-lg'/> Delete
        </button>
      </td>
    </tr>
    );
};

export default SelectClassTable;