import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { getSelectedClass } from '../../api/select';
import EmptyState from '../../Shared/EmptyState';
import SelectClassTable from './SelectClassTable';

const SelectedClasses = () => {
    const [selectClasses, setSelectClass ] = useState([])
    const {user} = useAuth();

    const fetchSelectClasses = () => {
        getSelectedClass(user?.email)
        .then(data => {
            console.log(data);
            setSelectClass(data);
        })
    }
    useEffect(() => {
        fetchSelectClasses()
    }, [user])
    return (
        <>
        {
          selectClasses && Array.isArray(selectClasses) && selectClasses.length > 0 ? 
          <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Index
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Class's Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Instructor's Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Action
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {selectClasses &&
                    selectClasses.map((cls, index) => (
                      <SelectClassTable
                        key={cls._id}
                        cls={cls}
                        index={index}
                        fetchSelectClasses={fetchSelectClasses}
                      />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> : 
          <EmptyState message={"You did not select any class yet!"} address={'/'} label={"Browse Classes"}/>
        }
        </>
    );
};

export default SelectedClasses;