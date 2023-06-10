import React from 'react';
import { FaUserGraduate, FaUserSecret } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import Swal from 'sweetalert2';

const UserTable = ({user, fetchUsers, index}) => {

    const handleMakeAdmin = user => {
        Swal.fire({
            title: `${user.name} make admin?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, make!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                fetchUsers();
                Swal.fire(
                    'Admin!',
                    `${user.name} is admin now!`,
                    'success'
                  )
            }
        })
              
            }
          })
        
      }

      const handleMakeInstructor = user => {
        Swal.fire({
            title: `${user.name} make instructor?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, make!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                fetchUsers();
                Swal.fire(
                    'Instructor!',
                    `${user.name} is Instructor now!`,
                    'success'
                  )
            }
        })
              
            }
          })
        
      }

    return (
        <tr>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          
            <div className='ml-3'>
              <p className='text-gray-900 whitespace-no-wrap'>{index+1}</p>

          </div>
        </td>
        <td className=' py-5 border-b border-gray-200 bg-white text-sm'>
          
        <div className='block relative'>
              <img
                alt='profile'
                src={user?.image}
                className='mx-auto object-cover rounded h-14 w-14 '
              />
            </div>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{user?.name}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap flex items-center'>
            <FaUserGraduate className='me-1 text-md'/> {user?.role ? user?.role : "Student"}
          </p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <button onClick={() => handleMakeInstructor(user)} disabled={user.role == 'Instructor'}  className='btn btn-xs bg-yellow-600 text-white hover:text-black whitespace-no-wrap flex items-center'>
            <GiTeacher className='text-md'/> Instructor
          </button>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <button onClick={() => handleMakeAdmin(user)} disabled={user.role == 'Admin'} className='btn btn-xs bg-red-600 text-white hover:text-black whitespace-no-wrap flex items-center'>
           <FaUserSecret className='text-md'/> Admin
          </button>
        </td>
        
      </tr>
    );
};

export default UserTable;