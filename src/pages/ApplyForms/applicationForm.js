import React, { Fragment, Component, useState, useEffect } from "react";

import {
    Col,
    Row,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Progress,
    Alert

} from "reactstrap";
import DocumentUpload from "./DocumentUpload";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



import instance from "../../config/apiConfig";


import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";



const API = process.env.REACT_APP_SERVER_URL;

const ApplicationForm = ({ match }) => {


    const [loanInput, setLoanInput] = useState({
        principal: "0",
        tenure: "0",
        frequency: "1",
    });

    const [custId, setCustId] = useState("")
    const [canlogin, setCanLoginIn] = useState(false)
    const [message, setMessage] = useState(null)



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // console.log([name], value);
        setLoanInput((prev) => {
            return { ...prev, [name]: value };
        });
    };

    useEffect(() => {
        if (window.location.pathname) {
            let path = window.location.pathname
            setCustId(path.substring(path.length - 2, path.length))
        }

    })

    const handleLoanApplication = async () => {

        let payload = {
            loanPrincipal: loanInput.principal,
            loanTenure: loanInput.tenure,
            loanInterestRate: Math.floor(Math.random() * (12 - 7 + 1) + 7),
            loanFrequency: loanInput.frequency
        }


        let response = await instance.post(`/create-loandetail?custId=${localStorage.getItem("custId")}`, payload);
        console.log(response)
        if (response.headers.success) {
            setMessage("Complain Filed Successfully. Please Login to Continue")
            setCanLoginIn(true)
        }
        else {
            setMessage(response.data)
        }

    }

    return (
        <div>
            <div class="container mt-3">
                <h4>Loan Application Form</h4><br />
                <div className=" p-4 bg-light">

                    <Form>
                        <FormGroup>
                            <h5 className="normal_text">Applicant name</h5>
                            <Input
                                className=" form-control-alternative"
                                name="customer_name"
                                placeholder="Enter your name"
                                type="text"
                                required
                            ></Input>
                        </FormGroup>
                        <Row>

                            <Col md="6">


                                <FormGroup>
                                    <h5>Principal</h5>

                                    <Input
                                        id="principal-in"
                                        name="principal"
                                        placeholder="principal"
                                        type="text"
                                        aria-label="SSS"
                                        onChange={handleInputChange}
                                        value={loanInput.principal}
                                        required
                                    />

                                    <Input
                                        id="principal"
                                        name="principal"
                                        type="range"
                                        min={0}
                                        max={1e6}
                                        step={1000}
                                        onChange={handleInputChange}
                                        value={loanInput.principal}
                                        required
                                    />
                                </FormGroup>
                            </Col>

                            <Col md="6">
                                <FormGroup>
                                    <h5>Loan Tenure </h5>
                                    <Input
                                        id="tenure-in"
                                        name="tenure"
                                        placeholder="tenure"
                                        type="text"
                                        onChange={handleInputChange}
                                        value={loanInput.tenure}
                                        required
                                    />
                                    <Input
                                        id="tenure"
                                        name="tenure"
                                        type="range"
                                        min={0}
                                        max={20}
                                        step={1}
                                        onChange={handleInputChange}
                                        value={loanInput.tenure}
                                        required
                                    />
                                </FormGroup>
                            </Col>

                        </Row>



                        <Row>

                            <Col md="6">


                                <FormGroup>
                                    <h5>Total Family Income</h5>

                                    <Input

                                        id="family_income"
                                        name="family_income"
                                        placeholder="0"
                                        type="text"


                                    />


                                </FormGroup>
                            </Col>

                            <Col md="6">
                                <FormGroup>
                                    <h5>Loan Frequency </h5>
                                    <Input
                                        id="frequency-in"
                                        name="frequency"
                                        placeholder="Frequency"
                                        type="text"
                                        onChange={handleInputChange}
                                        value={loanInput.frequency}
                                    />
                                    <Input
                                        id="frequency"
                                        name="frequency"
                                        type="range"
                                        min={1}
                                        max={12}
                                        step={1}
                                        onChange={handleInputChange}
                                        value={loanInput.frequency}
                                    />
                                </FormGroup>
                            </Col>

                        </Row>



                        <Row>
                            <Col md="6">
                                <FormGroup>
                                    <h5>Gender</h5>
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
                            <Col md="6">
                                <FormGroup>
                                    <h5 className="normal_text">Age</h5>
                                    <Input
                                        className=" form-control"
                                        name="customer_gender"
                                        placeholder="Enter your age"
                                        type="number"
                                        min={"23"}
                                        max={"62"}
                                        required
                                    ></Input>
                                </FormGroup>
                            </Col>
                            {/* <Col>
                                 <a  href="/upload_file" class="btn btn-primary btn-sm mt-4" role="button">Proceed to Document Verification</a>

                            </Col> */}
                        </Row>
                        <DocumentUpload />


                    </Form>
                    <Button color="primary"
                        style={{ marginLeft: "5px" }}
                        className=""
                        size="md"
                        onClick={handleLoanApplication}
                    >
                        Submit
                    </Button>

                    {message != null && (
                        <Alert color="info" style={{ marginTop: "10px" }}>{message}</Alert>
                    )}

                    {canlogin && (



                        <Link to="/login">

                            <Button color="primary"
                                style={{ marginLeft: "5px" }}
                                className=""
                                size="md"

                            >
                                Go to Login Page
                            </Button>
                        </Link>


                    )}
                </div>
            </div>
        </div >
    );

}

export default ApplicationForm;