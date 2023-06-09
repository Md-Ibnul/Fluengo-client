import React, { useEffect, useState } from 'react';
import Card from '../../Shared/Card';
import Title from '../../Shared/Title';

const AllClasses = () => {

    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/classes/approved/all')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setClasses(data);
        })
    }, [])
   
    return (
        <div className='mb-10 mt-4'>
            <Title title='All classes' subtitle='All Excellent Classes Of Us'/>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
                {classes.map(cls =><Card 
                cls={cls}
                key={cls._id}
                />)}
            </div>
        </div>
    );
};

export default AllClasses;