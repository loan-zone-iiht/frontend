import React, { useEffect, useState } from "react";
import { Row, Col, Table } from "reactstrap";

import Navbar from "../../Layout/Navbar";
import Tables from "../../components/Tables";

import instance from "../../config/apiConfig";


const Dashboards = () => {

    const [loandetails, setLoanDetails] = useState([])

    const fetchDetails = () => {
        if (localStorage.getItem("role") == "manager") {
            fetchLoanDetails();
        }

    }

    const fetchLoanDetails = async () => {
        let response = await instance.get(`/manager/get-loandetails?role=MANAGER`);
        console.log(response.data)
        setLoanDetails(response.data);
    }

    useEffect(() => {
        fetchDetails();
    }, [])



    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-light">
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
            <Navbar />

            {localStorage.getItem("role") == "manager" ? (

                <div className="container mt-3">
                    {/* //First <h1> tag is hidden for both the roles */}
                    <h1>Loan Details -- Manager</h1>
                    <h3>Pending Loan Details</h3>
                    <br></br>
                    <Tables fetchLoanDetails={fetchLoanDetails} allRecords={true} loanDetails={loandetails} />
                    <br></br>
                    <br></br>
                    <br></br>
                    <h3>All Loan Details</h3>
                    <Tables fetchLoanDetails={fetchLoanDetails} allRecords={false} loanDetails={loandetails} />
                </div>

            ) : (
                <div className="container mt-3">
                    {/* //First <h1> tag is hidden for both the roles */}

                    <h1>Loan Details - Customer</h1>
                    <h3>Start here Ashish</h3>
                    <br></br>

                </div>
            )}
        </div>
    )
}

export default Dashboards;