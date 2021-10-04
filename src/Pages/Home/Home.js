import React from 'react';
import Banner from '../../Components/Banner/Banner';
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar';
import AllNews from '../AllNews/AllNews';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
    return (
        <div>
            {/* <Navbar></Navbar>
            <Banner></Banner> */}
            <AllNews></AllNews>

        </div>
    );
};

export default Home;