import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import LoanDetails from "./Loandetails"

import {
    Row, Col, Alert, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter,
    FormGroup, UncontrolledButtonDropdown, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Label,
    Input,
    Form
} from "reactstrap";

import instance from "../config/apiConfig";

const options = [
    "Select Payment Method -- UPI,Debit,Credit,Bank Transfer..",
    "UPI",
    "DEBIT_CARD",
    "CREDIT_CARD",
    "BANK_TRANSFER"
];

const texts = [
    "Select Payment Method -- UPI,Debit,Credit,Bank Transfer..",
    "UPI - Unified Payments Interface",
    "DEBIT Card - VISA,RUPAY,MasterCard,Maestro",
    "CREDIT Card - VISA,Contactless,Business,Travel",
    "BANK Transfer - SBI,ICICI,HDFC"

];


const CustomerTable = ({ customerState }) => {

    const [responsedata, setresponseData] = useState({})
    const [customerLoandetails, setcustomerLoandetails] = useState([])
    const [loanStatus, setloanStatus] = useState("");
    const [paymentModal, setpaymentModal] = useState(false)
    const [paymentOptionsModal, setpaymentOptionsModal] = useState(false)
    const [viewModal, setviewModal] = useState(false);
    const [paymentDropdown, setpaymentDropdown] = useState(false);
    const [paymentmethodDropdown, setpaymentmethodDropdown] = useState(false)
    const [paymentOptions, setpaymentOptions] = useState(["PAYOUT", "DOWNPAYMENT"]);
    const [paymentMethods, setpaymentMethods] = useState(["UPI - Unified Payments Interface", "DEBIT Card - VISA,RUPAY,MasterCard,Maestro", "CREDIT Card - VISA,Contactless,Business,Travel", "BANK Transfer - SBI,ICICI,HDFC"])
    const [selectedPaymentMethod, setselectedPaymentMethod] = useState("Select Payment Method -- UPI,Debit,Credit,Bank Transfer..")
    const [selectedpaymentOption, setselectedPaymentOption] = useState(null)
    const [noofPayments, setnoofPayments] = useState(1)
    const [selectednoofPayments, setselectednoofPayments] = useState(0);

    useEffect(() => {
        fetchSingleLoanDetail();
    }, [])

    const fetchSingleLoanDetail = async () => {
        let response = await instance.get(`/get-loandetails/${customerState.loanId}`)
        setcustomerLoandetails([response.data])
        setresponseData(response.data)
        if (response.data.loanStatus == "FORECLOSURE_PENDING" || response.data.loanStatus == "FORECLOSURE_ACCEPTED") setselectedPaymentOption("FORECLOSURE")
        setloanStatus(response.data.loanStatus)
        setnoofPayments(response.data.noOfPayments)
        console.log(response);
    }

    const handlePayment = (loanId, amount, status) => {

        console.log(loanId)
        setpaymentModal(prev => !prev)
    }

    function verifyLoanPayloadURL() {
        let url;
        let payload = {
            loanId: customerState.loanId,
            fromOptions: localStorage.getItem("role").toUpperCase(),
            paymentMethod: selectedPaymentMethod,
            successType: "SUCCESSFUL"
        };
        if (selectedpaymentOption == "FORECLOSURE") url = "/foreclosure-payment";

        else if (selectedpaymentOption == "PAYOUT") url = "/pay-back";

        else if (selectedpaymentOption == "DOWNPAYMENT") {
            url = "/downpayment";
            payload.noOfPayments = selectednoofPayments
        }

        return [url, payload];
    }


    const handlePaymentProcedure = async () => {

        toast.info("Payment Triggered");
        let url, payload;
        [url, payload] = verifyLoanPayloadURL();
        console.log(url, payload)

        let response = await instance.post(url, payload);
        console.log(response)
        try {
            if (response.headers.success) {

                toast.info("Payment Successful");
                setTimeout(() => {

                    setpaymentModal(prev => !prev)
                    setpaymentOptionsModal(prev => !prev)
                    fetchSingleLoanDetail()
                }, 2000)

            }
        } catch (e) {
            toast.info("Something is wrong")
        }

    }

    const handleForeClosureApply = async () => {

        let response = await instance.post('apply-for-foreclosure', { loanId: customerState.loanId });
        console.log(response)
        try {

            if (response.headers.success) {
                toast.info("Successfully appliad for Foreclosure")

                fetchSingleLoanDetail();
            }
        } catch (e) {
            toast.info("Something is wrong")
        }

    }

    return (
        <div>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Application Date</th>
                        <th>Principal</th>
                        <th>Loan Frequency</th>
                        <th>ROI</th>
                        <th>Tenure</th>
                        <th>Amount</th>
                        <td>No.of Payments</td>
                        <td>Status</td>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {customerState && customerLoandetails.length > 0 && customerLoandetails.map((item, i) => {
                        return (
                            <tr key={i}  >
                                <td>{i + 1 + "."}</td>
                                <td>{item.applicationDate}</td>
                                <td>{item.loanPrincipal}</td>
                                <td>{item.loanFrequency}</td>
                                <td>{item.loanInterestRate}%</td>
                                <td>{item.loanTenure}</td>
                                <td>{item.paymentAmount}</td>
                                <td>{item.noOfPayments}</td>
                                <td>{item.loanStatus}</td>



                                <td>

                                    {item.loanStatus == "ACCEPTED" ? (
                                        <div>

                                            <Button
                                                onClick={() => { handlePayment(item.loanId, item.paymentAmount, item.loanStatus) }}
                                                disabled={noofPayments == 0 ? "disabled" : ""}
                                                color="success"
                                                size="sm">Pay
                                            </Button>
                                            <Button
                                                onClick={handleForeClosureApply}
                                                color="success"
                                                size="sm">Apply for Foreclosure
                                            </Button>
                                        </div>
                                    ) : null}

                                    {item.loanStatus == "FORECLOSURE_ACCEPTED" ? (

                                        <Button
                                            onClick={() => { handlePayment(item.loanId, item.paymentAmount, item.loanStatus) }}
                                            disabled={noofPayments == 0 ? "disabled" : ""}
                                            color="success"
                                            size="sm">Pay
                                        </Button>

                                    ) : null}


                                    <Button style={{ marginLeft: "6px" }}
                                        onClick={() => { setviewModal(prevModal => !prevModal) }}
                                        color="primary"
                                        size="sm">View
                                    </Button>
                                </td>
                            </tr>

                        )
                    })}
                </tbody>
            </Table>

            {/* payment Modal */}
            <Modal

                isOpen={paymentModal}
                toggle={() => setpaymentModal(prevModal => !prevModal)}

                backdrop={true}
            >
                <ModalHeader
                    toggle={() => setpaymentModal(prevModal => !prevModal)}

                >

                    Payment Options
                </ModalHeader>
                <ModalBody>


                    {loanStatus == "FORECLOSURE_PENDING" || loanStatus == "FORECLOSURE_ACCEPTED" ? (
                        <div>
                            <Alert color="info" style={{ marginLeft: "10px" }}>You have applied for FORECLOSURE.</Alert>
                            {/* <Label style={{ marginLeft: "10px" }}>Select Payment Process</Label> */}



                        </div>
                    ) : (
                        <div>

                            <Label style={{ marginLeft: "10px" }}>Enter your payment Process :</Label>


                            <FormGroup style={{ float: "right" }}>
                                <UncontrolledButtonDropdown>
                                    <Dropdown
                                        className="d-inline-block"
                                        size="sm"
                                        isOpen={paymentDropdown}
                                        toggle={() => setpaymentDropdown(prev => !prev)}
                                    >
                                        <DropdownToggle
                                            caret
                                            color="primary"
                                            className="mb-2 mr-2"
                                        >
                                            Select Status
                                        </DropdownToggle>
                                        <DropdownMenu >
                                            {paymentOptions.map((option, i) => (
                                                <DropdownItem
                                                    key={i}
                                                    onClick={() => { setselectedPaymentOption(option) }}
                                                >
                                                    {option}
                                                </DropdownItem>
                                            ))}
                                        </DropdownMenu>
                                    </Dropdown>
                                </UncontrolledButtonDropdown>

                            </FormGroup>
                            {selectedpaymentOption != null && (

                                <Alert style={{ marginLeft: "10px", marginTop: "10px" }} color="warning">SELECTED PAYMENT PROCESS : {selectedpaymentOption} </Alert>
                            )}
                            {/* 
                            <FormGroup>

                                Click here 
                                <Button outline >Apply for </Button>
                            </FormGroup> */}


                            {selectedpaymentOption == "DOWNPAYMENT" ? (
                                <FormGroup style={{ marginLeft: "10px" }} className="username">
                                    <Label>Enter the number of payouts you want to downpay.</Label>
                                    <Input

                                        id="emailorphone"
                                        type="number"
                                        min="1" max={noofPayments}
                                        name="emailOrPhone"
                                        placeholder="Enter the number of payouts"
                                        className="normal_text"
                                        onChange={(e) => setselectednoofPayments(e.target.value)}
                                    />

                                </FormGroup>


                            ) : null}


                        </div>
                    )}





                    {/* {selectedpaymentOption!=null && (
                        <Alert style ={{marginLeft:"10px"}} color="primary">Payment METHOD : UPI</Alert>

                    )} */}
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="link"
                        onClick={() => {
                            setpaymentModal(prev => !prev)

                        }}
                        size="sm"

                    >
                        Cancel
                    </Button>
                    <Button
                        color="primary"
                        size="sm"
                        onClick={() => setpaymentOptionsModal(prevModal => !prevModal)}
                    // onClick = {handleUpdate}
                    >
                        {loanStatus == "FORECLOSURE_PENDING" ? "Pay Foreclosure Amount" : "Next"}
                    </Button>
                </ModalFooter>
            </Modal>


            {/* payment method Modal */}
            <Modal

                isOpen={paymentOptionsModal}
                toggle={() => setpaymentOptionsModal(prevModal => !prevModal)}
                backdrop={true}
            >
                <ModalHeader
                    toggle={() => setpaymentOptionsModal(prevModal => !prevModal)}
                >
                    Payment Options
                </ModalHeader>
                <ModalBody>
                    <Alert color="primary">Once you make the payment,it cannot be reversed.</Alert>
                    <Row >
                        <FormGroup>
                            <UncontrolledButtonDropdown>
                                <Dropdown
                                    className="d-inline-block"
                                    size="sm"
                                    isOpen={paymentmethodDropdown}
                                    toggle={() => setpaymentmethodDropdown(prev => !prev)}

                                >
                                    <DropdownToggle
                                        caret
                                        color="primary"
                                        className="mb-2 mr-2"
                                    >
                                        {selectedPaymentMethod ==
                                            "Select Payment Method -- UPI,Debit,Credit,Bank Transfer.."
                                            ? selectedPaymentMethod
                                            : "You are paying via " +
                                            texts[
                                            options.indexOf(
                                                selectedPaymentMethod
                                            )
                                            ]}
                                    </DropdownToggle>
                                    <DropdownMenu style={{
                                        height: "180px",
                                        overflowY: "scroll"
                                    }}
                                    >
                                        {options.map((option, i) => (
                                            <DropdownItem
                                                key={i}
                                                onClick={() => {
                                                    setselectedPaymentMethod(option)
                                                }}
                                            >
                                                {texts[i]}
                                            </DropdownItem>
                                        ))}
                                    </DropdownMenu>
                                </Dropdown>
                            </UncontrolledButtonDropdown>

                            {/* Select Payment Method -- UPI,Debit,Credit,Bank Transfer.. */}
                        </FormGroup>
                        {selectedPaymentMethod == "UPI" ? (
                            <div>
                                <FormGroup className="username">
                                    {/* <Label for="exampleEmail" className="normal_text">Enter your UPI:Id</Label> */}
                                    <Input

                                        id="emailorphone"
                                        type="text"
                                        name="emailOrPhone"
                                        placeholder="Enter your UPI ID eg: ***@oksbi"
                                        className="normal_text"
                                    // onChange={handleChange}
                                    />
                                </FormGroup>
                            </div>


                        ) : null}



                        {selectedPaymentMethod == "DEBIT_CARD" || selectedPaymentMethod == "CREDIT_CARD" ? (
                            <div>
                                <FormGroup className="username">

                                    <Input

                                        id="emailorphone"
                                        type="text"
                                        name="emailOrPhone"
                                        placeholder="Name on Card"
                                        className="normal_text"
                                    // onChange={handleChange}
                                    />

                                </FormGroup>


                                <FormGroup>



                                    <Input

                                        id="emailorphone"
                                        type="text"
                                        name="emailOrPhone"
                                        placeholder="Card Number"
                                        className="normal_text"
                                    // onChange={handleChange}
                                    />


                                </FormGroup>

                                <FormGroup>

                                    <Input

                                        id="emailorphone"
                                        type="text"
                                        name="emailOrPhone"
                                        placeholder="Expiry date (MM/YY)"
                                        className="normal_text"
                                    // onChange={handleChange}
                                    />


                                </FormGroup>

                                <FormGroup>
                                    <Label for="exampleEmail" className="normal_text">**We do not store your CVV Number.</Label>
                                    <Input

                                        id="emailorphone"
                                        type="text"
                                        name="emailOrPhone"
                                        placeholder="CVV Number"
                                        className="normal_text"
                                    // onChange={handleChange}
                                    />


                                </FormGroup>
                            </div>


                        ) : null}

                        {selectedPaymentMethod == "BANK_TRANSFER" ? (

                            <div>
                                <FormGroup className="username">

                                    <Input

                                        id="emailorphone"
                                        type="text"
                                        name="emailOrPhone"
                                        placeholder="Account Number"
                                        className="normal_text"
                                    // onChange={handleChange}
                                    />

                                </FormGroup>


                                <FormGroup>



                                    <Input

                                        id="emailorphone"
                                        type="text"
                                        name="emailOrPhone"
                                        placeholder="Re-enter account number"
                                        className="normal_text"
                                    // onChange={handleChange}
                                    />


                                </FormGroup>

                                <FormGroup>

                                    <Input

                                        id="emailorphone"
                                        type="text"
                                        name="emailOrPhone"
                                        placeholder="IFSC"
                                        className="normal_text"
                                    // onChange={handleChange}
                                    />


                                </FormGroup>

                                <FormGroup>
                                    {/* <Label for="exampleEmail" className="normal_text">**We do not store your CVV Number.</Label> */}
                                    <Input

                                        id="emailorphone"
                                        type="text"
                                        name="emailOrPhone"
                                        placeholder="Recipient name"
                                        className="normal_text"
                                    // onChange={handleChange}
                                    />


                                </FormGroup>
                            </div>

                        ) : null}


                    </Row>


                </ModalBody>
                <ModalFooter>
                    <Button
                        color="link"
                        onClick={() => {
                            setpaymentOptionsModal(prev => !prev)

                        }}
                        size="sm"

                    >
                        Cancel
                    </Button>
                    <Button
                        color="primary"
                        size="sm"
                        onClick={handlePaymentProcedure}
                    >
                        Pay Now
                    </Button>
                </ModalFooter>
            </Modal>


            {/* customer View Modal */}
            <Modal
                fullscreen={true}
                isOpen={viewModal}
                toggle={() => setviewModal(prevModal => !prevModal)}

                backdrop={true}
            >
                <ModalHeader
                    toggle={() => setviewModal(prevModal => !prevModal)}

                >

                    Loan Overview
                </ModalHeader>
                <ModalBody>

                    {responsedata && (

                        <LoanDetails responsedata={responsedata} />
                    )}


                </ModalBody>
                <ModalFooter>
                    <Button
                        color="link"
                        onClick={() => {
                            setviewModal(prev => !prev)

                        }}
                        size="sm"

                    >
                        Cancel
                    </Button>
                    <Button
                        color="primary"
                        size="sm"
                        onClick={() => setviewModal(prevModal => !prevModal)}

                    >
                        Done
                    </Button>
                </ModalFooter>
            </Modal>

        </div>

    )
}

export default CustomerTable;

