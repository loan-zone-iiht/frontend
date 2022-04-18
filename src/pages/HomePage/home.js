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
                                    <a class="nav-link" href="/login">Login / Register</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/about">About Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <UncontrolledCarousel items={items} slide={false} /><br />

                <div class="container mt-2">
                    <hr />
                    <Row>
                        <Col md="6" >
                            <p>
                                <h2>BENEFITS</h2>
                                <ul>
                                    <li>Higher your CIBIL score, lower the interest rates.</li>
                                    <li>Keep track of your application status.</li>
                                    <li>Get notified through Email and SMS.</li>
                                </ul>
                            </p>
                        </Col>
                        <Col md="6">
                            <p>
                                <h2>ELIGIBILITY</h2>
                            </p>
                            <ul>
                                <li><strong>Nationality:</strong> Indian</li>
                                <li><strong>Employment Status:</strong> Atleast 3 years of work experience</li>
                                <li><strong>Age:</strong> Between 23 and 62</li>
                            </ul>
                        </Col>
                    </Row><hr />
                    <p>
                        <h2>FAQs</h2> <hr />
                        <p><strong> Q1. How do I apply for a loan? </strong></p>
                        <p><strong>Ans: Step 1:</strong><br /> First create an account using mobile number or email if you're a first time user.
                            If you are an existing user then log in using your credentials. <br />

                            <strong>Step 2:</strong> <br /> After creating an account in the welcome page select the option "Apply for new loan".
                            This option should take you to a Loan Application form. Once you fill this form you shall be automatically heading
                            into a subsequent form for uploading necessary documents. Upload the documents, and hit the apply button. You're done!
                        </p> <hr />

                        <p><strong>Q2. How can I calculate the interest rate?</strong></p>
                        <p><strong>Ans:</strong> After logging in, head over to Pricing Calculator.</p><hr />

                        <p><strong>Q3. How can I check the status of my loan application?</strong></p>
                        <p><strong>Ans:</strong> Just login, in the next page you shall be seeing a dashboard stating
                            the status of your loan application.</p><hr />

                        <p><strong>Q4. How do I get to know if my application is accepted or rejected?</strong></p>
                        <p><strong>Ans:</strong> You'll be notified through SMS and Email sent to your registered mobile number and email address
                            as soon as your application is accepted. Even if your application is rejected, you shall be recieving SMS and Email
                            stating the rejection reason.</p><hr />

                        <p><strong>Q5. Can I apply for foreclosure?</strong></p>
                        <p><strong>Ans:</strong> Yes you can.</p><hr />

                        <p>For further queries, feel free to <a href="/contact">contact us</a>.</p>
                        <p><a href="/home">Back to top</a></p>
                    </p>
                </div>
                <hr />
                <div class="container-fluid" id="footnote" text-align="justify">
                    <p text-align="justify">Copyright © 2022 LoanZone. <br />
                        Site best viewed in IE10+, Firefox 47+, Chrome 55+, Safari 5.0+ at 1920 X 1080 pixels resolution.<br />

                    </p>
                </div>

            </Fragment>
        </div>
    );
}



export default Home