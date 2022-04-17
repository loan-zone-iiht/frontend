import React, { Fragment, Component, useState } from "react";

import {
    Col,
    Row,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    FormText

} from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import instance from "../../config/apiConfig";

const API = process.env.REACT_APP_SERVER_URL;

const ApplicationFormBGV = () => {

    const [customer, setCustomer] = useState({
        customer_name: "",
        customer_salary: 0,
        loan_amount: 0,
        loan_tenure: 0,
        loan_frequency: 0,
        gender: "",
    })

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
                                <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Account
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="/login">Logout</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="">Go to Profile</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="container mt-3">
                <h3>Background Verification Form</h3><br />
                <div className=" p-4 bg-light">
                    <Form>
                        <FormGroup>
                            <Label for="User Photo">Applicant's Photo</Label>
                            <Input type="file" name="file" id="exampleFile" />
                            <FormText color="muted">
                                (.png,.jpeg,.pdf etc)
                            </FormText>
                        </FormGroup>
                        <Row>
                            <Col md="6">
                                <FormGroup>

                                    <Label for="Select">Select ID Type</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>VOTER Proof</option>
                                        <option>AADHAR</option>
                                        <option>Drving License</option>
                                        <option>Other</option>
                                    </Input>
                                </FormGroup>

                            </Col>
                            <Col md="6">
                                <FormGroup>
                                    <Label for="User Photo">Attach Address Proof</Label>
                                    <Input type="file" name="file" id="exampleFile" />
                                    <FormText color="muted">
                                        (.png,.jpeg,.pdf etc)
                                    </FormText>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <FormGroup>
                                    <Label for="User Photo">Attach PAN card</Label>
                                    <Input type="file" name="file" id="exampleFile" />
                                    <FormText color="muted">
                                        (.png,.jpeg,.pdf etc)
                                    </FormText>
                                </FormGroup>
                            </Col>
                            <Col md="6">
                                <FormGroup>
                                    <FormGroup>
                                        <Label for="User Photo">Attach Bank Records</Label>
                                        <Input type="file" name="file" id="exampleFile" />
                                        <FormText color="muted">
                                            Last 3 months Bank Statement
                                        </FormText>
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <FormGroup>
                                    <Label>Employment Status</Label>
                                    <Input
                                        type="select"
                                        className="form-control"
                                        name="Employment Status"
                                    >

                                        <option> Salaried
                                        </option>
                                        <option > Self Employed
                                        </option>
                                        <option value="others"> Others
                                        </option>
                                    </Input>

                                </FormGroup>
                            </Col>
                            <Col md="6">
                                <FormGroup>
                                    <Label>Employment Status</Label>
                                    <Input
                                        type="select"
                                        className="form-control"
                                        name="Employment Status"
                                    >
                                        <option> Salaried
                                        </option>
                                        <option > Self Employed
                                        </option>
                                        <option value="others"> Others
                                        </option>
                                    </Input>

                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label>Property Valuation</Label>
                            <Input
                                className="form-control"
                                name=""
                                placeholder="Type NA if not applicable"
                                type="text"
                                min={"0"}
                            ></Input>
                        </FormGroup>
                        <Button color="primary"
                            style={{ marginLeft: "5px" }}
                            className="btn btn-md brand_background_color normal_text"
                            type="submit">
                            <Label>Submit</Label>
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );

}

export default ApplicationFormBGV;