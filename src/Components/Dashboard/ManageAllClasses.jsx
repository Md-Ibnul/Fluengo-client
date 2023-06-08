import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { getAllClasses } from '../../api/class';
import ClassesTable from '../../Shared/ClassesTable';

const ManageAllClasses = () => {
    const {user} = useAuth();
    const [allClasses, setAllClasses] = useState([]);
    const fetchClasses = () => {
        getAllClasses()
        .then(data => {
            setAllClasses(data);
        })
    }
    useEffect(() => {
       fetchClasses()
    }, [user])
    return (
        <div className='container mx-auto px-4 sm:px-8'>
      <div className='py-8'>
        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
          <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
            <table className='min-w-full leading-normal'>
              <thead>
                <tr>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Index
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Image
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Class's Name
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Instructor Name
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Status
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Action
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {allClasses &&
                  allClasses.map((cls, index) => (
                    <ClassesTable
                      key={cls._id}
                      cls={cls}
                      index={index}
                      fetchClasses={fetchClasses}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ManageAllClasses;