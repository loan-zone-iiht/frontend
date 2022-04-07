import React, { Fragment, useState } from "react";
import {
    Col,
    Row,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Spinnner,
    UncontrolledButtonDropdown,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Alert
} from "reactstrap";

const ForgotPasword = ({emailOrPhone}) => {

    


    const handleOTP = (event) => {
        // this.setState({ userOTP: event.target.value });
    };

    return (
        <div style={{ marginTop: "20%" }}>

            <h4 className="mb-4 ">
                <div >
                    Forgot Pasword
                </div>

            </h4>

            <Row className="divider" />

            <Row md={12}>

                <Col>
                    <FormGroup>
                        <Label for="exampleEmail" className="normal_text mb-1">
                            Enter OTP sent to {emailOrPhone}
                        </Label>
                        <Input
                            type="text"
                            id="exampleEmail"
                            placeholder="Enter OTP here..."
                            className="normal_text"
                            onChange={handleOTP}
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
                    // onClick={this.verifyOtp}
                    >
                        Verify OTP
                    </Button>
                </Col>

            </Row>
            <Row md={12}>



                <FormGroup check>
                    <Input
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