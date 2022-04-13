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
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/dash">
                        LoanZone Dashboard
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="/dash">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" >Pricing</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item dropdown">
                                <div class="btn-group">
                                    <button type="button" class="btn btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        Account
                                    </button>
                                    <ul class="dropdown-menu">
                                        {/* <li><a class="dropdown-item" >Manage account</a></li> */}
                                        <li><a class="dropdown-item" href="/login">Logout</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="container mt-3">
                <h1>Loan Details</h1>
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