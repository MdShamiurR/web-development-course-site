import React, { useEffect, useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import Home from '../Home/Home';
import './AllNews.css'

const AllNews = () => {

    const [courses, setCourse] = useState([]);

    useEffect(() => {
        fetch("./custom-data.json")
            .then(res => res.json())
            .then(data => setCourse(data))
    }, []);

    return (


        <div>
            <Navbar></Navbar>

            <Banner></Banner>


            <div>
                <h1 className="fs-1 fw-bold text-warning">Check Home Page</h1>
                <div className="row">
                    {
                        courses.map((course) => (<div className="col-md-4">
                            <div className="cart">
                                <div className="logo-image">
                                    <img className="w-25" src={course.img} alt="" />
                                </div>
                                <h1>course:{course.course}</h1>
                                <h2>Price : {course.price}</h2>
                                <h3>Contact : {course.Contact}</h3>
                            </div>
                        </div>))
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllNews;