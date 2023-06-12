import React from 'react';
import { FaUser } from 'react-icons/fa';
import { GrUpdate } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const InstructorTable = ({cls, index}) => {
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
            src={cls?.image}
            className="mx-auto object-cover rounded h-14 w-14 "
          />
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{cls?.className}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
         $ {cls?.price}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap flex items-center">
           {cls?.status}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap flex items-center"> <FaUser className='inline me-2 text-md'/>
          {cls?.student ? cls?.student : "0"}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <Link to={`/dashboard/updateClass/${cls._id}`}
          className="btn btn-xs bg-yellow-600 text-white hover:text-black whitespace-no-wrap flex items-center"
        >
          <GrUpdate className='inline me-1 text-md'/> Update
        </Link>
      </td>
    </tr>
    );
};

export default InstructorTable;