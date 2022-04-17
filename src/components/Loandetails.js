import React from "react";

import {
    Row, Col, Alert, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter,
    FormGroup, UncontrolledButtonDropdown, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Label,
    Input,
    Form
} from "reactstrap";

const LoanDetails = ({responsedata}) => {



    return (

        <Form>
        <Row>
                <h5>
                    Loan Details :
                </h5>
            </Row>
            <Row>
                <Col md={4}>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Application Date
                        </Label>
                        <Input
                            disabled
                            id="exampleEmail"
                            name="email"
                            placeholder={responsedata.applicationDate}
                            type="email"
                        />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="examplePassword">
                            Loan Id
                        </Label>
                        <Input
                            disabled
                            id="examplePassword"
                            name="password"
                            placeholder={responsedata.loanId}
                            type="password"
                        />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="examplePassword">
                            Loan Status
                        </Label>
                        <Input
                            disabled
                            id="examplePassword"
                            name="password"
                            placeholder={responsedata.loanStatus}
                            type="password"
                        />
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col md={4}>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Loan Principal
                        </Label>
                        <Input
                            disabled
                            id="loanprincipal"
                            name="email"
                            placeholder={responsedata.loanPrincipal}
                            type="email"
                        />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="examplePassword">
                            Loan Amount
                        </Label>
                        <Input
                            disabled
                            id="loanAmount"
                            name="password"
                            placeholder={responsedata.paymentAmount}
                            type="password"
                        />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="examplePassword">
                            No. of Payments
                        </Label>
                        <Input
                            disabled
                            id="noofpayment"
                            name="password"
                            placeholder={responsedata.noOfPayments}
                            type="password"
                        />
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col md={4}>
                    <FormGroup>
                        <Label for="exampleEmail">
                           Interest Rate(R.O.I)
                        </Label>
                        <Input
                            disabled
                            id="rate"
                            name="email"
                            placeholder={responsedata.loanInterestRate + "%"}
                            type="email"
                        />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="examplePassword">
                            Loan Tenure
                        </Label>
                        <Input
                            disabled
                            id="tenure"
                            name="password"
                            placeholder={responsedata.loanTenure + " years"}
                            type="password"
                        />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="examplePassword">
                            Loan Frequency
                        </Label>
                        <Input
                            disabled
                            id="frequence"
                            name="password"
                            placeholder={responsedata.loanFrequency}
                            type="password"
                        />
                    </FormGroup>
                </Col>
            </Row>



            <Row>
                <h5>
                    Customer Details :
                </h5>
            </Row>

            {responsedata && responsedata.customer && (
                <Row>
                <Col md={4}>
                    <FormGroup>
                        <Label for="exampleEmail">
                           Name
                        </Label>
                        <Input
                            disabled
                            id="cname"
                            name="cname"
                            placeholder={responsedata.customer.name}
                            type="email"
                        />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="examplePassword">
                            Email
                        </Label>
                        <Input
                            disabled
                            id="cemail"
                            name="cemail"
                            placeholder={responsedata.customer.email}
                            type="password"
                        />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="examplePassword">
                            Phone
                        </Label>
                        <Input
                            disabled
                            id="cphone"
                            name="password"
                            placeholder={"+91 "+ responsedata.customer.phone}
                            type="password"
                        />
                    </FormGroup>
                </Col>
            </Row>
            )}

            <Row>
                <h5>
                    PAN Details :
                </h5>
            </Row>

            
          {responsedata && responsedata.customer &&  (
            <Row>
                <Col md={4}>
                    <FormGroup>
                        <Label for="exampleEmail">
                           Customer Id :
                        </Label>
                        <Input
                            disabled
                            id="cid"
                            name="email"
                            placeholder={responsedata.customer.id}
                            type="email"
                        />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="examplePassword">
                            PAN Number
                        </Label>
                        <Input
                            disabled
                            id="cpan"
                            name="password"
                            placeholder={responsedata.customer.pan.panNo}
                            type="password"
                        />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="examplePassword">
                            Customer Cibil Score
                        </Label>
                        <Input
                            disabled
                            id="cibil"
                            name="password"
                            placeholder={responsedata.customer.pan.cibilScore}
                            type="password"
                        />
                    </FormGroup>
                </Col> 
            </Row>
          )}

          <Row>
                <h5>
                    Manager Details :
                </h5>
            </Row>

            
          {responsedata && responsedata.manager &&  (
            <Row>
                <Col md={4}>
                    <FormGroup>
                        <Label for="exampleEmail">
                           Manager Name :
                        </Label>
                        <Input
                            disabled
                            id="mname"
                            name="email"
                            placeholder={responsedata.manager.name}
                            type="email"
                        />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="examplePassword">
                            Manager Phone
                        </Label>
                        <Input
                            disabled
                            id="mphone"
                            name="password"
                            placeholder={"+91 " + responsedata.manager.phone}
                            type="password"
                        />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="examplePassword">
                            Manager Email
                        </Label>
                        <Input
                            disabled
                            id="mmail"
                            name="password"
                            placeholder={responsedata.manager.email}
                            type="password"
                        />
                    </FormGroup>
                </Col> 
            </Row>
          )}

           
        </Form>

    )
}

export default LoanDetails;