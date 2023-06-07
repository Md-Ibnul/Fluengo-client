import React, { useEffect, useState } from 'react';
import Title from '../../../Shared/Title';
import Card from '../../../Shared/Card';

const PopularClasses = () => {
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
            <Title title='popular classes' subtitle='Most Popular Classes In Students'/>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
                {classes.map(cls =><Card 
                cls={cls}
                key={cls.id}
                />)}
            </div>
        </div>
    );
};

export default PopularClasses;