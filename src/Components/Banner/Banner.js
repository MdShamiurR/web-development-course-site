import React from 'react';
import Navbar from '../Navbar/Navbar';
import ph2 from '../../images/ph2.png'
import './Banner.css'

const Banner = () => {
    return (
        <div class="mt-5">
            <div class="hero-image">
                <div class="hero-text">
                    <h1 style={{ fontSize: "4rem" }}>Development Hero </h1>
                    <p class="card-text fs-4"> Welcome toDevelopent Hero course.Here you can Learn Programming </p>
                    <button class="button draw-border p-3 header-button">SIGN UP</button>
                </div>
            </div>
        </div>




    );
};

export default Banner;