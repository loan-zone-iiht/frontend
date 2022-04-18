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
            
            <div >
                <h3>Background Verification :</h3><br />
                <div className=" bg-light">
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
                       
                      
                    </Form>
                </div>
            </div>
        </div>
    );

}

export default ApplicationFormBGV;