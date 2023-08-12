import React from 'react';
import Container from '../Shared/Container';
import Home from '../Pages/Home/Home';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Navbar />
        <Container>
            <Outlet />
            <Footer />
        </Container>
        </>
    );
};

export default Main;