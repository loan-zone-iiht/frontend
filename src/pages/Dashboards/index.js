import React from "react";
import { Row, Col } from "reactstrap";

const Dashboards = () => {

    const showPost = () => {
        console.log("Test")
        return (
            <div className="widget-content-left " >
                <div className="widget-heading">
                    Manager Admin
                </div>
                <div className="widget-subheading opacity-8 ">
                    Sayak Mukherjee
                </div>
            </div>
        );
    }

    return (
        <div>
            <nav class="navbar navbar-expand bg-primary navbar-dark fixed-top">
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
                            <div className="widget-content-left mr-3" onClick={showPost}>
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
            <div class="container mt-3">
                <h1>Loan Details</h1>
                <p>Loan Details</p>
                <div class="table-bordered">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Loan ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Loan Amount</th>
                                <th>Loan Tenure</th>
                                <th>Interest Rate %</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>100001</td>
                                <td>Saswata Dutta</td>
                                <td>sus@example.com</td>
                                <td>1234567890</td>
                                <td>1,000,000</td>
                                <td>15</td>
                                <td>5</td>
                                <td>Approved</td>
                            </tr>
                            <tr>
                                <td>100002</td>
                                <td>Sayak Mukherjee</td>
                                <td>dopalkasayak@example.com</td>
                                <td>7894562110</td>
                                <td>1,500,000</td>
                                <td>20</td>
                                <td>9</td>
                                <td>Pending</td>
                            </tr>
                            <tr>
                                <td>100003</td>
                                <td>Ashish Gupta</td>
                                <td>ashish@example.com</td>
                                <td>6954123569</td>
                                <td>500000</td>
                                <td>10</td>
                                <td>11</td>
                                <td>Rejected</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

const showPost = () => {
    return (
        <div className="widget-content-left " >
            <div className="widget-heading">
                Manager Admin
            </div>
            <div className="widget-subheading opacity-8 ">
                Sayak Mukherjee
            </div>
        </div>
    );
}

export default Dashboards;