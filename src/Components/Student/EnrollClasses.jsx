import React, { useEffect, useState } from 'react';
import Title from '../../Shared/Title';
import useAuth from '../../hooks/useAuth';
import { getEnrollClasses } from '../../api/class';
import EnrollTable from './EnrollTable';
import EmptyState from '../../Shared/EmptyState';

const EnrollClasses = () => {
const {user} = useAuth();

const [enrolls, setEnrolls] = useState([])

const fetchEnroll =  () => {
    getEnrollClasses(user?.email)
    .then(data => {
        console.log(data);
        setEnrolls(data);
    })

}
    useEffect(() => {
            fetchEnroll()
        }, [user]);

    return (
        <>
        {
          enrolls && Array.isArray(enrolls) && enrolls.length > 0 ? 
          <div className="container mx-auto px-4 sm:px-8">
          <Title title="Your enrolled Classes" subtitle="Start Your journey"/>
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
                    Instructor's Name
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Transaction Id
                  </th>
                </tr>
              </thead>
              <tbody>
                {enrolls &&
                  enrolls.map((enroll, index) => (
                    <EnrollTable
                      key={enroll._id}
                      enroll={enroll}
                      index={index}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div> : 
        <EmptyState message={"You did not buy any class yet!"} address={'/'} label={"Browse Classes"}/>
      }
      </>
    );
};

export default EnrollClasses;