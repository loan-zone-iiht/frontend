import React, { Fragment, useState } from "react";

import UserLogin from "./components/userLogin"
import ForgotPasword from "./components/forgotPassword"

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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


const Login = ({ isLoginOrRegistered }) => {

    const [isForgotPassword, setisForgotPassword] = useState(false)
    const [credentials, setCredentials] = useState({
        emailOrPhone: "",
        password: ""
    })

    const forgotPasswordSelected = (selected) => {
        setisForgotPassword(selected)
    }

    const getUserCredentials = (val) => {
        // console.log(val)
        setCredentials(val)
    }

    const validate = () => {

        let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


        if (!(credentials.emailOrPhone.match('[0-9]{10}') || regexEmail.test(credentials.emailOrPhone))) {
            toast.info('Please Provide valid Phone Or Email');
            return false;
        }
        else {
            return true;
        }

    }

    const handleLoginUsingPassword = () => {

        // emailOrPhone

        if (validate()) {
            let payload = {
                password: credentials.password
            };
            if (credentials.emailOrPhone.includes(".com")) payload["email"] = credentials.emailOrPhone;
            else payload["phone"] = credentials.emailOrPhone;

            console.log(payload,"payload");
            
        }
    }

    return (
        <Form  >
            {!isForgotPassword ? (
                <UserLogin forgotPasswordSelected={forgotPasswordSelected} getUserCredentials={getUserCredentials} />) : (<ForgotPasword emailOrPhone={credentials.emailOrPhone} />)}


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
                                onClick={handleLoginUsingPassword}

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
