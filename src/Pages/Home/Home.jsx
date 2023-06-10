import React from 'react';
import Banner from './Banner/Banner';
import PopularClasses from './PopularClasses/PopularClasses';
import PopularInstructor from './PopularInstructor/PopularInstructor';
import AboutUs from './AboutUs/Aboutus';
import CounterUpPage from './CountUp/CounterUpPage';

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutUs />
            <PopularClasses />
            <CounterUpPage />
            <PopularInstructor />
        </div>
    );
};

export default Home;