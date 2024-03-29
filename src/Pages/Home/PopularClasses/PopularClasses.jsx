import React, { useEffect, useState } from 'react';
import Title from '../../../Shared/Title';
import Card from '../../../Shared/Card';
import { Link } from 'react-router-dom';

const PopularClasses = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('https://fluengo-server-oq1dkczx0-md-ibnul.vercel.app/classes/approved/fixed')
        .then(res => res.json())
        .then(data => {
            setClasses(data);
        })
    }, [])
    return (
        <div className='mb-10 mt-4'>
            <Title title='popular classes' subtitle='Choose Your Language'/>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
                {classes.map(cls =><Card 
                cls={cls}
                key={cls._id}
                />)}
            </div>
            <div className='text-center mt-10'><Link to='/classes' className='btn btn-outline btn-error hover:text-white'>See All</Link></div>
        </div>
    );
};

export default PopularClasses;