import React from "react";
import { Link } from "react-router-dom";

import { Row, Col } from "reactstrap";


const Navbar = () => {


    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="/apply">
                    <h3>LoanZone</h3>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/calculator">Pricing Calculator</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact">Contact Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">About Us</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav mr-auto">
                        <Link to="/login">
                            <button
                                color="primary"
                                style={{ marginLeft: "5px" }}
                                className="btn btn-md brand_background_color normal_text"
                            >Logout</button>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;