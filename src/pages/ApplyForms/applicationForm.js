import React, { Fragment, Component, useState } from "react";

import {
    Col,
    Row,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Progress,

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
                            </Col>
                            <Col md="6">
                                <br />
                                <Button color="primary"
                                    style={{ margin: "0px" }}
                                    className="btn btn-md brand_background_color"
                                    type="submit"
                                //make this hidden
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
                        <a href="/upload_file" class="btn btn-primary btn-lg" role="button">Proceed to Document Verification</a>
                    </Form>
                </div>
            </div>
        </div >
    );

}

export default ApplicationForm;