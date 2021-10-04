import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import './ContactUs.css'

const ContactUS = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="contact">
                <strong>Contact Us : </strong>
                <ul>
                    <li>Email :jakalaka@gmail.com</li>
                    <li>What's App : 24545454545</li>
                    <li>FaceBook:Web Development </li>
                </ul>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ContactUS;