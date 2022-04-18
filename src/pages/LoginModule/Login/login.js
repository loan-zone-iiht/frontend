import React, { Fragment, useState, useEffect } from "react";

import UserLogin from "./components/userLogin"
import ForgotPasword from "./components/forgotPassword"

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import instance from "../../../config/apiConfig";


import {
    Col,
    Row,
    Button,
    Form,
} from "reactstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";


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
    const [userObj, setUserObj] = useState({});
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const [credentials, setCredentials] = useState({
        emailOrPhone: "",
        password: ""
    })

    useEffect(() => {
        if (isLoggedIn) {
            //   console.log(userObj, "userObj");
            navigate("/dashboards", {
                state: userObj,
            });
        }


    }, [isLoggedIn])

    const navigate = useNavigate();

    const forgotPasswordSelected = async (selected) => {

        let forgotPasswordPayload = {};

        if (credentials.emailOrPhone.includes(".com")) forgotPasswordPayload["email"] = credentials.emailOrPhone;
        else forgotPasswordPayload["phone"] = credentials.emailOrPhone;

        let url;
        url = (localStorage.getItem("role") == "customer") ? "/customer-send-otp" : "/manager-send-otp";

        try {
            let response = await instance.post(url, forgotPasswordPayload);
            console.log(response, "response")
            if (response.headers.success) setisForgotPassword(selected);
        } catch (e) {
            toast.info("Email or Phone Doesnt Exist");

        }


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

    const handleLoginUsingPassword = async () => {
        if (validate()) {
            if (!localStorage.getItem("role")) {
                toast.info("Please Select Role");
                return;
            }

            let url;
            url =
                localStorage.getItem("role") == "customer"
                    ? "/customer-login"
                    : "/manager-login";

            let payload = {
                password: credentials.password,
            };

            if (credentials.emailOrPhone.includes(".com"))
                payload["email"] = credentials.emailOrPhone;
            else payload["phone"] = credentials.emailOrPhone;

            //   console.log(payload, "payload");
            try {
                let response = await instance.post(url, payload);
                if (response && response.headers.success) {
                    //   console.log(response.data, "response");
                    const custId = response.data.id;
                    let loanId = null;
                    if (response.data.loanDetail && response.data.loanDetail.loanId) {
                        loanId = response.data.loanDetail.loanId;
                    }
                    setisLoggedIn(() => {
                        setUserObj({
                            custId,
                            loanId,
                        });

                        return true;
                    });
                }
            } catch (e) {
                toast.info("Something is wrong.Please try again later.");
            }
        }
    };

    return (
        <Form  >
            {!isForgotPassword ? (
                <UserLogin forgotPasswordSelected={forgotPasswordSelected} getUserCredentials={getUserCredentials} />) : (<ForgotPasword emailOrPhone={credentials.emailOrPhone} />)}


            <Row className="divider" />
            <div>
                {/* {isLoggedIn && (
                    <Navigate to="/dashboards" />
                )} */}
                <div>
                    {!isForgotPassword ? (
                        <div >
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
                            <Link to="/home">
                                <Button
                                    color="primary"
                                    style={{ marginLeft: "5px" }}
                                    className="btn btn-md brand_background_color normal_text"


                                >
                                    {" "}
                                    Home Page
                                </Button>
                            </Link>
                        </div>
                    ) : null}
                </div>
            </div>
        </Form>
    );
};

export default Login;