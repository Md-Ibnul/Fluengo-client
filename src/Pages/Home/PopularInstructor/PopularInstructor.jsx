import React, { useEffect, useState } from 'react';
import Card from '../../../Shared/Card';
import Title from '../../../Shared/Title';

const PopularInstructor = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('./courses.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setClasses(data);
        })
    }, [])
    return (
        <div className='mb-10 mt-4'>
            <Title title='popular Instructor' subtitle='Most Popular Classes By Instructor'/>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
                {classes.map(cls =><Card 
                cls={cls}
                key={cls.id}
                />)}
            </div>
        </div>
    );
};

export default PopularInstructor;