import React, { Fragment, useState, Component } from "react";

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

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import instance from "../../../config/apiConfig";
import { Navigate } from "react-router-dom";

const API = process.env.REACT_APP_SERVER_URL;

const options = [
    "Select Your Role",
    "manager",
    "customer"
];

const texts = [
    "Select Your Role",
    " Manager",
    " Customer"
];

const defaultOption = options[0];




const RegistrationForm = () => {

    const [roleDropdown, setroleDropdown] = useState(false);
    const [selectedRole, setSelectedRole] = useState(defaultOption);
    const [pan, setPan] = useState("")
    const [checked, setChecked] = useState(false);
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    })



    const validate = () => {

        let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!(user.phone.match('[0-9]{10}'))) {
            toast.info('Please Provide valid Phone Number');
            return false;
        }
        else if (!regexEmail.test(user.email)) {
            toast.info('Please Provide Valid Email');
            return false;
        }
        else if (!checked) {
            toast.info('Please accept terms and conditions');
            return false;
        }
        else if (selectedRole == defaultOption) {
            toast.info('Please select Role')
            return false;
        }
        else {
            return true;
        }

    }


    const _onSelect = (value) => {
        localStorage.setItem("role", value)
        setSelectedRole(value);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => {
            return { ...prev, [name]: value };
        });
    }

    const verifyPan = async () => {

        let panPayload = {
            panNo: pan,
            cibilScore: Math.round(Math.random() * (700 - 600) + 600)
        }

        let response = await instance.post(`/create-pan`, panPayload);
        if (response.headers.success) {
            toast.info("Pan Successfully verified.")
        }

        console.log(response)

    }


    const handleRegistration = async () => {


        if (validate()) {

            if(!pan && localStorage.getItem("role")=="customer"){
                toast.info("Please Enter Pan Number");
                return ;
            }

            let url;
             url = (localStorage.getItem("role")=="customer") ? `/create-customer?panNo=${pan}`: "/manager-signup";

            let response = await instance.post(url, user);

            if (response.headers.success) {
                toast.success("Woho.! Succesfully registered.Reload to Login");
                setUser({
                    name: "",
                    email: "",
                    phone: "",
                    password: ""
                })
                

            }
            else {
                toast.error("Something wrong. Please try again")
            }

        }

    }


    return (
        <div style={{ marginTop: "20%", width: "100%" }}>

            <Row form>
                <Col md={12}>
                   
                    <FormGroup>

                        <h4 className="mb-2">
                            <div >
                                Register
                            </div>

                        </h4>
                        {/* <Label for="exampleEmail" className="normal_text">Please Select how you want to Signup :</Label> */}

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
                                                    _onSelect(option);
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
                <Row>
                    <Col md={6}>
                        <FormGroup className="username">
                            <Label for="exampleEmail" className="normal_text">Full Name</Label>
                            <Input
                                value={user.name}
                                id="emailorphone"
                                type="text"
                                name="name"
                                placeholder="Type here.."
                                className="normal_text"
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>

                    <Col md={6}>


                        <FormGroup className="username">
                            <Label for="exampleEmail" className="normal_text">Phone Number</Label>
                            <Input
                                value={user.phone}

                                id="emailorphone"
                                type="number"
                                name="phone"
                                placeholder="Type here.."
                                className="normal_text"
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                </Row>

            </Row>
            <Row >

                <Col md={6}>

                    <FormGroup>
                        <Label for="examplePassword" className="normal_text">
                            Email
                        </Label>
                        <Input
                            // onKeyDown={this.handleKeyDownChange}
                            id="pass"
                            value={user.email}

                            type="email"
                            name="email"
                            placeholder="Type here.."
                            className="normal_text"
                            onChange={handleChange}
                        />

                    </FormGroup>



                </Col>

                <Col md={6}>

                    <FormGroup>
                        <Label for="examplePassword" className="normal_text">
                            Password
                        </Label>
                        <Input
                            // onKeyDown={this.handleKeyDownChange}
                            id="pass"
                            value={user.password}

                            type="password"
                            name="password"
                            placeholder="Type here.."
                            className="normal_text"
                            onChange={handleChange}
                        />

                    </FormGroup>

                </Col>


            </Row>

            {selectedRole == "customer" && (
                
                <Row>

                <Alert style ={{marginLeft:"10px"}} color="success">Please verify your Pan before Signup !</Alert>
                    <Col md={9}>

                        <FormGroup>
                           
                            <Input

                                id="pass"
                                // value={user.password}

                                type="text"
                                name="pan"
                                placeholder="Enter your Pan Number.."
                                className="normal_text"
                                onChange={(e) => setPan(e.target.value)}
                            />

                        </FormGroup>
                    </Col>

                    <Col md={3}>
                        <FormGroup>

                            <Button
                             
                               
                                color="success"
                                className="btn btn-md brand_background_color normal_text ml-auto "
                                onClick={verifyPan}
                            >
                                {" "}
                                Verify Pan
                            </Button>

                        </FormGroup>


                    </Col>

                </Row>

            )}

            <Row>
                <FormGroup style={{marginLeft :"10px"}} check className="ml-3">
                    <Input
                        type="checkbox"
                        // value={this.agreeterms}
                        disbled="true"
                        onChange={(e) => {
                            setChecked(e.target.checked)

                        }}
                        checked={checked}
                        name="check"
                        className="normal_text"
                        id="exampleCheck"
                    />
                    <Label for="exampleCheck" className="normal_text" check>
                        {" "}
                        I accept Loan Zone's{" "}
                        <a
                            style={{ color: "blue" }}
                            // href="#"
                            target="_blank"
                        >
                            Terms and Conditions{" "}
                        </a>{" "}
                        and{" "}
                        <a
                            style={{ color: "blue" }}

                            // href="#"
                            target="_blank"
                        >
                            Privacy Policy.
                        </a>{" "}
                    </Label>
                </FormGroup>
            </Row>


            <Row >

                <Col md={6}>


                    <Button
                       
                        color="primary"
                        className="btn btn-md brand_background_color normal_text ml-auto"
                        onClick={handleRegistration}
                    >
                        {" "}
                        Signup
                    </Button>
                </Col>
            </Row>
        </div>
    )

}

export default RegistrationForm;
