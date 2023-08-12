import React from 'react';
import Banner from './Banner/Banner';
import PopularClasses from './PopularClasses/PopularClasses';
import PopularInstructor from './PopularInstructor/PopularInstructor';
import AboutUs from './AboutUs/Aboutus';
import CounterUpPage from './CountUp/CounterUpPage';
import GetFromUs from './GetFromUS/GetFromUs';

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutUs />
            <PopularClasses />
            <CounterUpPage />
            <PopularInstructor />
            <GetFromUs />
        </div>
    );
};

export default Home;