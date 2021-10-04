import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Navbar.css'


const Navbar = () => {




    return (
        <div class="">
            <div class='off_canvas'>
                {" "}
                <OffCanvas icon="Web_Development" />
            </div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light w-100">
                <div class="container-fluid">


                    <div></div>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink activeClassName="nav-link" exact to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink activeClassName="nav-link" to="/AboutUs">
                                    About US
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink activeClassName="nav-link" to="/ContactUS">
                                    Contact Us
                                </NavLink>
                            </li>

                            <li class="nav-item">
                                <NavLink activeClassName="nav-link" to="/news/:sourceId">
                                    <i class="bi bi-basket-fill">
                                        <span class="mx-3">Our Courses</span>
                                    </i>
                                </NavLink>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input
                                class="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button class="btn btn-outline-success" type="submit">
                                Search
                            </button>


                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};



const OffCanvas = ({ icon }) => {

    return (
        <>
            <button
                class="btn btn-primary"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasScrolling"
            >
                {icon}
            </button>

            <div
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
            >


            </div>
        </>
    );

}


export default Navbar;