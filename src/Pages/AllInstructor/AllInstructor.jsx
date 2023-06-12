import React, { useEffect, useState } from 'react';
import InstructorCard from '../Home/PopularInstructor/InstructorCard';
import Title from '../../Shared/Title';

const AllInstructor = () => {
    const [instructors, setAllInstructors] = useState([]);
    useEffect(() => {
        fetch('https://fluengo-server-oq1dkczx0-md-ibnul.vercel.app/users/instructors/all')
        .then(res => res.json())
        .then(data => {
            setAllInstructors(data);
        })
    }, [])
   
    return (
        <div className='mb-10 mt-4'>
            <Title title='All Instructor' subtitle='All Excellent Instructor Of Us'/>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
                {instructors.map(instructor =><InstructorCard
                instructor={instructor}
                key={instructor._id}
                />)}
            </div>
        </div>
    );
};

export default AllInstructor;