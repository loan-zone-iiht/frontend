import React, { Fragment, Component, useState } from "react";

import {
    Col,
    Row,
    Form,
    FormGroup,
    Label,
    Input,
    Button

} from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import instance from "../../config/apiConfig";

const API = process.env.REACT_APP_SERVER_URL;

const ApplicationForm = () => {

    const [customer, setCustomer] = useState({
        customer_name: "",
        customer_salary: 0,
        loan_amount: 0,
        loan_tenure: 0,
        loan_frequency: 0,
        gender: ""
    })

    const Toggle = () => {
        const show = false
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/apply">
                        LoanZone
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="/apply">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" >Pricing Calculator</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Account
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="/login">Logout</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Go to Profile</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="container mt-3">
                <h3>Loan Application Form</h3><br />
                <div className=" p-4 bg-light">
                    <Form>
                        <FormGroup>
                            <Label>Applicant name</Label>
                            <Input
                                className=" form-control-alternative"
                                name="customer_name"
                                placeholder="Enter your name"
                                type="text"
                            ></Input>
                        </FormGroup>
                        <Row>
                            <Col md="6">
                                <FormGroup>
                                    <Label>Applicant salary</Label>
                                    <Input
                                        className=" form-control-alternative"
                                        name="customer_salary"
                                        placeholder="Enter your monthly salary"
                                        type="number"
                                        min={"0"}
                                    ></Input>
                                </FormGroup>
                                this btn shld call "/get-cus-limit" to define max loan Amount; after the btn call slider will show up<br></br>
                                <Button color="primary"
                                    style={{ marginLeft: "5px" }}
                                    className="btn btn-md brand_background_color normal_text"
                                    type="submit"
                                    onClick={Toggle.show = true}
                                >
                                    <Label>Get your Limt</Label>
                                </Button>
                            </Col>
                            <Col md="6">
                                <FormGroup>
                                    {Toggle.show &&
                                        <><Label>Loan Amount</Label><div class="rangeslider">
                                            <input type="range" min="1" max="100" // Cu
                                                class="myslider" name="loan_amount" />
                                        </div></>
                                    }
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <FormGroup>
                                    <Label>Loan Tenure</Label>
                                    <Input
                                        className=" form-control-alternative"
                                        name="loan_tenure"
                                        placeholder="Enter your desired loan tenure in years"
                                        type="number"
                                        min={"0"}
                                    ></Input>
                                </FormGroup>
                            </Col>
                            <Col md="6">
                                <FormGroup>
                                    <Label>Loan Frequency</Label>
                                    <Input
                                        className=" form-control-alternative"
                                        name="loan_frequency"
                                        placeholder="Enter your desired payback frequency per year"
                                        type="number"
                                        min={"0"}
                                    ></Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <FormGroup>
                                    <Label>Gender</Label>
                                    <Input
                                        type="select"
                                        className="form-control"
                                        name="gender"
                                        placeholder="Enter your gender">

                                        <option value="male"> Male
                                        </option>
                                        <option value="female"> Female
                                        </option>
                                        <option value="others"> Others
                                        </option>
                                    </Input>

                                </FormGroup>
                            </Col>
                        </Row>
                        <Button color="primary"
                            style={{ marginLeft: "5px" }}
                            className="btn btn-md brand_background_color normal_text"
                            type="submit" >
                            <Label>Proceed to Document Verification</Label>
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default ApplicationForm;