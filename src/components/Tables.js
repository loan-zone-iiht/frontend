
import React, { useState } from "react";
import { toast } from "react-toastify";

import {
    Row, Col, Alert, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter,
    FormGroup, UncontrolledButtonDropdown, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Label
} from "reactstrap";

import instance from "../config/apiConfig";
import LoanDetails from "./Loandetails";




const Tables = ({ loanDetails, allRecords, fetchLoanDetails }) => {

    const [statusdropdown, setStatusDropdown] = useState(false)
    const [setstatusModal, setStatusModal] = useState(false);
    const [statusUpdateOptions, setstatusUpdateOptions] = useState([])
    const [currentLoanStautus, setCurrentLoanStatus] = useState("")
    const [updatedStatus, setupdatedStatus] = useState("")
    const [loanId, setloanId] = useState("")

    const [detailsModal, setDetailsModal] = useState(false);
    const [selectedLoanDetail, setSelectedLoanDetail] = useState({});

    const handleUpdateLoanStatus = (loanStatus, loanId) => {
        setloanId(loanId)
        setCurrentLoanStatus(loanStatus)
        setStatusModal(prevModal => !prevModal)
        console.log(loanStatus)
        if (loanStatus == "PENDING") setstatusUpdateOptions(['ACCEPTED', 'REJECTED'])
        else if (loanStatus == "FORECLOSURE_PENDING") setstatusUpdateOptions(['FORECLOSURE_ACCEPTED', 'FORECLOSURE_REJECTED'])
        // else if(loanStatus == "FORECLOSURE_PENDING") setstatusUpdateOptions(['FORECLOSURE_ACCEPTED','ACCEPTED'])

    }

    const handleUpdate = async () => {
        const update = {
            status: updatedStatus,
            loanId: loanId
        }

        let response = await instance.post(`/manager/update-loandetails-by-status?role=${localStorage.getItem("role").toUpperCase()}`, update);
        if (response.headers.success) {
            fetchLoanDetails();
            setStatusModal(prevModal => !prevModal)
        } else {
            toast.info("Something is wrong.Please try again later.")
        }
        console.log(response)
    }


    return (
        <div>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>LoanId</th>
                        <th>Principal</th>
                        <th>Rate</th>
                        <th>Months</th>
                        <th>Tenure</th>
                        <th>Frequency</th>
                        <td>Status</td>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {loanDetails && loanDetails.map((item, i) => {
                        return (
                            !allRecords && item.loanStatus != "PENDING" ? (

                                <tr key={i}  >
                                    <td>{i + 1 + "."}</td>
                                    <td>{item.loanId}</td>
                                    <td>{item.loanPrincipal}</td>
                                    <td>{item.loanInterestRate}</td>
                                    <td>{item.noOfPayments}</td>
                                    <td>{item.loanTenure}</td>
                                    <td>{item.loanFrequency}</td>
                                    <td>{item.loanStatus}</td>
                                    <td>
                                        {(item.loanStatus == "PENDING" || item.loanStatus == "FORECLOSURE_PENDING") ? (
                                            <Button size="sm">Update</Button>

                                        ) : (
                                            <Button size="sm" disabled color="success">Approved</Button>
                                        )}
                                    </td>
                                </tr>
                            ) : (
                                (item.loanStatus == "PENDING" || item.loanStatus == "FORECLOSURE_PENDING") ? (

                                    <tr key={i} onClick={() => {
                                        setSelectedLoanDetail(item);
                                        setDetailsModal(true);
                                    }}>
                                        <td>{i + 1 + "."}</td>
                                        <td>{item.loanId}</td>
                                        <td>{item.loanPrincipal}</td>
                                        <td>{item.loanInterestRate}</td>
                                        <td>{item.noOfPayments}</td>
                                        <td>{item.loanTenure}</td>
                                        <td>{item.loanFrequency}</td>

                                        <td>{item.loanStatus}</td>
                                        <td>
                                            {(item.loanStatus == "PENDING" || item.loanStatus == "FORECLOSURE_PENDING") ? (
                                                <Button onClick={
                                                    () => {
                                                        handleUpdateLoanStatus(item.loanStatus, item.loanId)

                                                    }
                                                } color="primary" size="sm">Update</Button>

                                            ) : (
                                                <Button size="sm" disabled color="success">Approved</Button>
                                            )}
                                        </td>

                                    </tr>
                                ) : (null)
                            )
                        )
                    })}
                </tbody>
            </Table>

            <Modal
                isOpen={setstatusModal}
                toggle={() => setStatusModal(prevModal => !prevModal)}

                backdrop={true}
            >
                <ModalHeader
                    toggle={() => setStatusModal(prevModal => !prevModal)}

                >

                    Change Loan Status
                </ModalHeader>
                <ModalBody>


                    <Alert style={{ marginLeft: "10px" }} color="primary">Once you change the status,it cannot be reversed.</Alert>
                    <Label style={{ marginLeft: "10px" }}>Current Status : {currentLoanStautus}</Label>
                    <FormGroup style={{ float: "right" }}>
                        <UncontrolledButtonDropdown>
                            <Dropdown
                                className="d-inline-block"
                                size="sm"
                                isOpen={statusdropdown}
                                toggle={() => setStatusDropdown(prev => !prev)}
                            >
                                <DropdownToggle
                                    caret
                                    color="primary"
                                    className="mb-2 mr-2"
                                >
                                    Select Status
                                </DropdownToggle>
                                <DropdownMenu >
                                    {statusUpdateOptions.map((option, i) => (
                                        <DropdownItem
                                            key={i}
                                            onClick={() => {
                                                if (option == "FORECLOSURE_REJECTED") {
                                                    setupdatedStatus("ACCEPTED")
                                                } else {
                                                    setupdatedStatus(option)
                                                }
                                            }}
                                        >
                                            {option}
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                        </UncontrolledButtonDropdown>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="link"
                        onClick={() => {
                            setStatusModal(prev => !prev)

                        }}
                        size="sm"

                    >
                        Cancel
                    </Button>
                    <Button
                        color="primary"
                        size="sm"
                        onClick={handleUpdate}
                    >
                        Update Status
                    </Button>
                </ModalFooter>
            </Modal>
            <Modal
                fullscreen={true}
                isOpen={detailsModal}
                toggle={() => setDetailsModal((prevModal) => !prevModal)}
                backdrop={true}
            >
                <ModalHeader toggle={() => setDetailsModal((prevModal) => !prevModal)}>
                    Loan Overview
                </ModalHeader>
                <ModalBody>
                    {selectedLoanDetail && <LoanDetails responsedata={selectedLoanDetail} />}
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="link"
                        onClick={() => {
                            setDetailsModal((prev) => !prev);
                        }}
                        size="sm"
                    >
                        Cancel
                    </Button>
                    <Button
                        color="primary"
                        size="sm"
                        onClick={() => setDetailsModal((prevModal) => !prevModal)}
                    >
                        Done
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}


export default Tables;
