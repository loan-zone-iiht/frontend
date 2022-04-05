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
    const [checked,setChecked] = useState(false);


    const _onSelect = (value) => {
        console.log(value)
        setSelectedRole(value);
    };


    return (
        <div style={{marginTop:"20%",width:"100%"}}>
            
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

                            id="emailorphone"
                            type="text"
                            name="name"
                            placeholder="Type here.."
                            className="normal_text"
                        // onChange={handleChange}
                        />
                    </FormGroup>

                    

                    
                </Col>
               
                <Col md={6}>
                  

                    <FormGroup className="username">
                        <Label for="exampleEmail" className="normal_text">Phone Number</Label>
                        <Input

                            id="emailorphone"
                            type="number"
                            name="phone"
                            placeholder="Type here.."
                            className="normal_text"
                        // onChange={handleChange}
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

                            type="email"
                            name="email"
                            placeholder="Type here.."
                            className="normal_text"
                        // onChange={handlePassword}
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

                            type="password"
                            name="password"
                            placeholder="Type here.."
                            className="normal_text"
                        // onChange={handlePassword}
                        />

                    </FormGroup>
                 
                </Col>
            </Row>

            <Row>
                <FormGroup check className="ml-3">
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
                        style={{color:"blue"}}
                            // href="#"
                            target="_blank"
                        >
                            Terms and Conditions{" "}
                        </a>{" "}
                        and{" "}
                        <a
                        style={{color:"blue"}}

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
