import React from 'react';
import { Link } from 'react-router-dom';

const FeedbackTable = ({feedback, index}) => {
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
            src={feedback?.image}
            className="mx-auto object-cover rounded h-14 w-14 "
          />
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{feedback?.className}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {feedback?.feedback?.text}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap flex items-center">
           {feedback?.status}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <Link to={`/dashboard/updateClass/${feedback._id}`}
          className="btn btn-xs bg-yellow-600 text-white hover:text-black whitespace-no-wrap flex items-center"
        >
           Update
        </Link>
      </td>
    </tr>
    );
};

export default FeedbackTable;