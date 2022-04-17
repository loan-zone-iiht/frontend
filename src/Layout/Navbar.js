import React from "react";

import { Row, Col } from "reactstrap";


const Navbar = () => {


    return (
        <nav class="navbar navbar-expand bg-light navbar-dark fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand"  >LoanZone Dashboard</a>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" >Pricing</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="menu-header-content text-left">
                <div className="widget-content p-0">
                    <div className="widget-content-wrapper">
                        <div className="widget-content-left mr-3" >
                            <Row>

                                <Col>
                                    {/* <img
                                    width={42}
                                    className="rounded-circle"
                                    src="logo192.png"
                                    alt=""
                                /> */}

                                </Col>
                                <Col>
                                    <p>Ashish</p>
                                </Col>
                            </Row>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;