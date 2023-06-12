import React, { useEffect } from 'react';
import Title from '../../Shared/Title';
import { useAxiosSecure } from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';

const EnrollClasses = () => {
const {user} = useAuth();

        useEffect(() => {
            fetch(`http://localhost:5000/payments/${user?.email}`)
            .then(res => res.json())
            .then(data => console.log(data))
        }, []);

    return (
        <div>
            <Title title="Your enrolled Classes" subtitle="Start Your journey"/>
        </div>
    );
};

export default EnrollClasses;