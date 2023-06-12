import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Title from '../../../Shared/Title';
import FeedbackTable from './FeedbackTable';
import EmptyState from '../../../Shared/EmptyState';

const Feedback = () => {
    const { user } = useAuth();
  const [feedbacks, setFeedbacks] = useState([]);
  console.log(feedbacks);
  useEffect(() => {
    fetch(`http://localhost:5000/classes/denied/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data);
      });
  }, [user]);
    return (
        <>{ feedbacks && Array.isArray(feedbacks) && feedbacks.length > 0 ?
          <div className="max-h-screen">
      <Title title="Denied Class" subtitle="Update your class to approve"/>
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
                      Feedback
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
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {feedbacks &&
                    feedbacks.map((feedback, index) => (
                      <FeedbackTable
                        key={feedback._id}
                        feedback={feedback}
                        index={index}
                      />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div> :
    <EmptyState message={"You have no feedback yet!"} address={'/'} label={"Go Back To Home"}/>
        }</>
    );
};

export default Feedback;