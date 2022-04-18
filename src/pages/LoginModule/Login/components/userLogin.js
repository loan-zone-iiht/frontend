import React, { useState } from "react";

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
import Contact from "../../../AboutAndContact/Contactus";
import "./userlogin.css";


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



const UserLogin = ({ forgotPasswordSelected, getUserCredentials }) => {

    const [roleDropdown, setroleDropdown] = useState(false);
    const [selectedRole, setSelectedRole] = useState(defaultOption);


    const handleChange = (e) => {
        const { name, value } = e.target;
        getUserCredentials((prev) => {
            return { ...prev, [name]: value };
        });

    };

    const toggleForm = () => {
        const container = document.querySelector('.container');
        container.classList.toggle('active');
    };


    return (
        <div style={{ marginTop: "20%" }} >

            <h4 className="mb-2">
                <div >
                    Login
                </div>

            </h4>
            <Row form>
                <Col md={12}>
                    {/* First screen */}
                    <FormGroup>
                        <UncontrolledButtonDropdown>
                            <Dropdown
                                className="d-inline-block"

                                isOpen={roleDropdown}
                                toggle={() => setroleDropdown(prevModal => !prevModal)}
                            >
                                <DropdownToggle
                                    caret
                                    color="primary"
                                    className="mb-2 mr-2"
                                >
                                    {selectedRole ==
                                        "Select Your Role"
                                        ? selectedRole
                                        : "Your Selected Role is " +
                                        texts[
                                        options.indexOf(
                                            selectedRole
                                        )
                                        ]}
                                </DropdownToggle>
                                <DropdownMenu style={{
                                    height: "130px",
                                    overflowY: "scroll"
                                }}
                                >
                                    {options.map((option, i) => (
                                        <DropdownItem
                                            key={i}
                                            onClick={() => {
                                                if (i != 0) {
                                                    setSelectedRole(option);
                                                    localStorage.setItem("role", option)
                                                }
                                            }}
                                        >
                                            {texts[i]}
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                        </UncontrolledButtonDropdown>
                    </FormGroup>
                </Col>
            </Row>
            <Row form>
                <Col md={8}>
                    <FormGroup className="username">
                        <Label for="exampleEmail" className="normal_text">Registered Email or Phone</Label>
                        <Input

                            id="emailorphone"
                            type="email"
                            name="emailOrPhone"
                            placeholder="Type here"
                            className="normal_text"
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {/* <p style={{margin: 0}} >OR</p> */}
                    </div>
                </Col>
                <Col md={8}>
                    <FormGroup>
                        <Label for="examplePassword" className="normal_text">
                            Enter Password
                        </Label>
                        <Input
                            // onKeyDown={this.handleKeyDownChange}
                            id="pass"

                            type="password"
                            name="password"
                            placeholder="Type here"
                            className="normal_text"
                            onChange={handleChange}
                        />
                        <br />
                        {/* <Input type="password" name="password" id="examplePassword" placeholder="Password here..."/> */}
                        <a
                            // href="#"
                            onClick={() => forgotPasswordSelected(true)}
                            className="btn-sm btn btn-link normal_text forgot_password_remove_left_padding"

                        >
                            Forgot Password?
                        </a>{" "}
                    </FormGroup>
                </Col>
            </Row>
        </div>

    )
}

export default UserLogin;


