import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="left-container text-start">
                                <h1>Web Development Course</h1>

                                <p className="mt-4 ">
                                    <small>
                                        This is a footer for Web Development service
                                    </small>
                                </p>

                                <p className="mt-5">
                                    <small>@toWebDevelopment</small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-menu-container">
                                <ul>
                                    <li className="footer-menu">Home</li>
                                    <li className="footer-menu">Our Courses</li>

                                    <li className="footer-menu">Contact us</li>
                                    <li className="footer-menu"> About us</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="right-footer-container">
                                <h3>Sign up </h3>
                                <input
                                    className="footer-input"
                                    type="text"
                                    placeholder="Enter Email"
                                />
                                <div className="phone d-flex align-items-center justify-content-center mt-4">
                                    <div className="foter-phone-icon">
                                        {/* <FontAwesomeIcon icon={faPhoneVolume} /> */}
                                    </div>
                                    <div>
                                        <h5>54845649846564</h5>
                                    </div>
                                </div>
                                <div className="map d-flex align-items-center justify-content-center">
                                    <div className="foter-phone-icon">
                                        {/* <FontAwesomeIcon icon={faMapMarkedAlt} /> */}
                                    </div>
                                    <div>
                                        <p>
                                            Chalaban, Uttara
                                            <br /> Dhaka
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Footer;