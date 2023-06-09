import React, { useEffect, useState } from 'react';
import Title from '../../../Shared/Title';
import InstructorCard from './InstructorCard';
import { Link } from 'react-router-dom';

const PopularInstructor = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/users/instructors/fixed')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setInstructors(data);
        })
    }, [])
    return (
        <div className='mb-10 mt-4'>
            <Title title='popular Instructor' subtitle='Choose your Favorite Instructor'/>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
                {instructors.map(instructor =><InstructorCard 
                instructor={instructor}
                key={instructor._id}
                />)}
            </div>
            <div className='text-center mt-14 w-1/2 mx-auto'>
                <p>Get the most dedicated consultation for your life-changing course. Earn a certification for your effort and passion <Link to='/login' className='text-red-600 cursor-pointer'>Join Now.</Link></p>
            </div>
        </div>
    );
};

export default PopularInstructor;