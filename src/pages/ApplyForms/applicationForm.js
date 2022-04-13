import React, { Fragment, Component } from "react";

import {
    Col,
    Row,
    Form,
    FormGroup,
    Label,
    Input

} from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";

const ApplicationForm = () => {

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/apply">
                        LoanZone Dashboard
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
                                        <li><a class="dropdown-item" href="/login">Logout</a></li>
                                    </ul>
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
                        <Row>
                            <Col md="6">
                                <FormGroup>
                                    <Label>Loan Amount</Label>
                                    <Input
                                        className=" form-control-alternative"
                                        name="loan_amount"
                                        placeholder="Enter loan amount"
                                        type="number"
                                    ></Input>
                                </FormGroup>
                            </Col>
                            <Col md="6">
                                <FormGroup>
                                    <Label>Loan Tenure</Label>
                                    <Input
                                        className=" form-control-alternative"
                                        name="loan_tenure"
                                        placeholder="Enter your loan tenure in years"
                                        type="number"
                                    ></Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <FormGroup>
                                    <Label>Loan Frequency</Label>
                                    <Input
                                        className=" form-control-alternative"
                                        name="loan_frequency"
                                        placeholder="Enter loan frequency"
                                        type="number"
                                    ></Input>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </div>
    );

}

export default ApplicationForm;