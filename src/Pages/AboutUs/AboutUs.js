import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="about-us">
                <h1>Welcome to Web Development</h1>
                <p>Here you can get ourse paid courses which are lectured by Famous faculties</p>
                <strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea sunt nesciunt beatae tempore enim minima qui laudantium provident. Porro eum ex laudantium quidem. Expedita ducimus sit quibusdam quos quidem adipisci?</strong>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;