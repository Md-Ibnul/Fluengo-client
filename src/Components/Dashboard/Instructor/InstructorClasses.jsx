import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Title from "../../../Shared/Title";
import InstructorTable from "./InstructorTable";
import EmptyState from "../../../Shared/EmptyState";

const InstructorClasses = () => {
  const { user } = useAuth();
  const [allClasses, setAllClasses] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/classes/instructor/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAllClasses(data);
      });
  }, [user]);
  return (
    <> { allClasses && Array.isArray(allClasses) && allClasses.length > 0 ?
      <div className="max-h-screen">
      <Title title="My Added Class" />
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
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Student
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
                  {allClasses &&
                    allClasses.map((cls, index) => (
                      <InstructorTable
                        key={cls._id}
                        cls={cls}
                        index={index}
                      />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>:
    <EmptyState message={"You don't add class yet!"} address={'/dashboard/addClass'} label={"Add Class"}/>
    }</>
  );
};

export default InstructorClasses;
