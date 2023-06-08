import React, { useState } from "react";
import { FcLock } from "react-icons/fc";
import { ImCross } from "react-icons/im";
import { GiCheckMark } from "react-icons/gi";
import Swal from "sweetalert2";
import FeedbackModal from "../Components/FeedbackModal";

const ClassesTable = ({ cls, fetchClasses, index }) => {
  const handleApprove = (cls) => {
    Swal.fire({
      title: `Approve ${cls.className}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/classes/admin/${cls._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount) {
              fetchClasses();
              Swal.fire(
                "Approved!",
                `${cls.className} is approve now!`,
                "success"
              );
            }
          });
      }
    });
  };

  const handleMakeInstructor = async (cls) => {
    const { value: text } = await Swal.fire({
      input: "textarea",
      inputLabel: "Feedback",
      inputPlaceholder: "Type your feedback here...",
      inputAttributes: {
        "aria-label": "Type your feedback here",
      },
      showCancelButton: true,
    });

    if (text) {
        const data = {text}
      fetch(`http://localhost:5000/classes/admin/${cls._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            fetchClasses();
            Swal.fire(
              "Denied!",
              `${cls.className} is denied!`,
              "success"
            );
          }
        });
    }
    //     Swal.fire({
    //         title: `${user.name} make instructor?`,
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, make!'
    //       }).then((result) => {
    //     if (result.isConfirmed) {
    //         fetch(`http://localhost:5000/users/instructor/${user._id}`, {
    //     method: 'PATCH',
    // })
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data);
    //     if(data.modifiedCount){
    //         fetchUsers();
    //         Swal.fire(
    //             'Admin!',
    //             `${user.name} is Instructor now!`,
    //             'success'
    //           )
    //     }
    // })

    //     }
  };

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
          {cls?.instructorName}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap flex items-center">
          <FcLock className="me-1 text-md" /> {cls?.status}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={() => handleApprove(cls)}
          disabled={cls.status == "Approved" || cls.status == "Denied"}
          className="btn btn-xs bg-yellow-600 text-white hover:text-black whitespace-no-wrap flex items-center"
        >
          <GiCheckMark className="text-md" /> Approve
        </button>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={() => handleMakeInstructor(cls)}
          disabled={cls.status == "Denied"}
          className="btn btn-xs bg-red-600 text-white hover:text-black whitespace-no-wrap flex items-center"
        >
          <ImCross className="text-md" /> Deny
        </button>
      </td>
    </tr>
  );
};

export default ClassesTable;
