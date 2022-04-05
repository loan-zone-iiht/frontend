import React, { Fragment, useState } from "react";

import UserLogin from "./components/userLogin"
import ForgotPasword from "./components/forgotPassword"

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

import {
    Col,
    Row,
    Button,
    Form,
} from "reactstrap";


const options = [
    "Select Your Role",
    "manager",
    "customer"
];

const texts = [
    "Select Your Role",
    "Acting Manager",
    "Acting Customer"
];

const defaultOption = options[0];


// const API = process.env.REACT_APP_SERVER_URL;

const Login = ({isLoginOrRegistered}) => {

    const [isForgotPassword, setisForgotPassword] = useState(false)

    const forgotPasswordSelected = (selected) => {
        console.log(selected)
        setisForgotPassword(selected)
    }

    return (
        <Form  >
            {!isForgotPassword ? (
                <UserLogin forgotPasswordSelected = {forgotPasswordSelected} />) : (<ForgotPasword />)}


            <Row className="divider" />
            <div >
                <div>
                    {!isForgotPassword ? (
                        <div>
                            <a onClick={() => {
                                isLoginOrRegistered(false)
                               
                            }} target="_blank" className="" >
                                Create an account
                            </a>{" "}
                            <Button
                                color="primary"
                                style={{ marginLeft: "5px" }}
                                className="btn btn-md brand_background_color normal_text"
                                
                            >
                                {" "}
                                Login
                            </Button>
                        </div>
                    ) : null}


                </div>
            </div>
        </Form>
    );
};

export default Login;
