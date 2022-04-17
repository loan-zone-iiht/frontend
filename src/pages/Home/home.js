import React, { Fragment, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Col, Row, UncontrolledCarousel } from "reactstrap";
import "./home.css";

import { toast, Bounce, ToastContainer } from "react-toastify";
import bg1 from "./../../assets/p12.png";
import bg2 from "./../../assets/p11.png";
import bg3 from "./../../assets/p13.png";



const items = [
    {
        src: bg1,
        header: 'Welcome to LoanZone',
        caption: 'Home loans. Delivered.'
    },
    {
        src: bg2,
        header: 'Easy to apply',
        caption: 'Apply for home loans in just 3 steps!'
    },
    {
        src: bg3,
        header: 'Instant approval of your dreams',
        caption: 'Get notified as soon as your loan application is approved via SMS and mail!'
    }
];

const Home = () => {

    return (
        <div >
            <Fragment>
                <ToastContainer />
                <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/home">LoanZone</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/home">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/login">Login / Register</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/contact">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <UncontrolledCarousel items={items}
                    slide={false}
                />

            </Fragment>
        </div>
    );
}

export default Home