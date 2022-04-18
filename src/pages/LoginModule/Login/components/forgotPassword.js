import React, { Fragment, useState ,useEffect} from "react";
import { Navigate, useNavigate } from "react-router-dom";

import {
    Col,
    Row,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
} from "reactstrap";
import instance from "../../../../config/apiConfig";
import { toast, ToastContainer } from "react-toastify";


const ForgotPasword = ({ emailOrPhone }) => {

    const [otp, setOTP] = useState("")
    const [isVerified, setisVerified] = useState(false)
    const [checked, setChecked] = useState(false)
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const [userObj, setUserObj] = useState({});




    useEffect(() => {
        if (isLoggedIn) {
            //   console.log(userObj, "userObj");
            navigate("/dashboards", {
                state: userObj,
            });
        }


    }, [isLoggedIn])

    const navigate = useNavigate();

    const verifyOtp = async () => {

        if(!checked){
            toast.info("Please check terms and Conditions");
            return ;
        }

        let url;
        url = (localStorage.getItem("role") == "customer") ? "/customer-login" : "/manager-login";

        let payload = {
            otp: otp
        };

        if (emailOrPhone.includes(".com")) payload["email"] = emailOrPhone;
        else payload["phone"] = emailOrPhone;

        console.log(payload, "payload");

        let response = await instance.post(url, payload);
        if (response) {

            const custId = response.data.loanDetail.customer;
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
            // setisVerified(true)
        }
        else {
            toast.info("Please check your OTP");
        }

    }

    return (
        <div style={{ marginTop: "20%" }}>

            <h4 className="mb-4 ">
                <div >
                    Forgot Password
                </div>

            </h4>
            {/* {isVerified && (<Navigate to="/dashboards" />)} */}

            <Row className="divider" />

            <Row md={12}>

                <Col>
                    <FormGroup>
                        <Label for="exampleEmail" className="normal_text mb-1">
                            Enter OTP sent to {emailOrPhone.substring(0, 9) + ".."}
                        </Label>
                        <Input
                            type="number"
                            id="exampleEmail"
                            placeholder="Enter OTP here..."
                            className="normal_text"
                            onChange={(e) => setOTP(e.target.value)}
                            autoComplete="off"
                        />
                    </FormGroup>
                </Col>

                <Col>
                    <Button
                        style={{ marginRight: "1%" }}
                        color="primary"
                        size="md"
                        className="btn mt-4 "
                        onClick={verifyOtp}
                    >
                        Verify OTP and Login
                    </Button>
                </Col>

            </Row>
            <Row md={12}>



                <FormGroup check>
                    <Input

                        onChange={(e) => {
                            setChecked(e.target.checked)

                        }}
                        checked={checked}
                        type="checkbox"
                        disbled="true"
                        name="check"
                        className="normal_text"
                        id="exampleCheck"
                    />
                    <Label for="exampleCheck" className="normal_text" check>
                        {" "}
                        I accept Loan Zone's{" "}
                        <a
                            style={{ color: "blue" }}
                        >
                            Terms and Conditions{" "}
                        </a>{" "}
                        and{" "}
                        <a

                            style={{ color: "blue" }}

                        >
                            Privacy Policy.
                        </a>{" "}
                    </Label>
                </FormGroup>
            </Row>

            <Row md={12}>
                <FormGroup>


                </FormGroup>



            </Row>

        </div>
    )

}


export default ForgotPasword
