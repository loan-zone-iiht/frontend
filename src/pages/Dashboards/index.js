import React, { useEffect, useState } from "react";
import { Row, Col, Table, Card, CardBody, CardImg,Badge, CardImgOverlay, CardTitle, CardText, Button } from "reactstrap";

import Navbar from "../../Layout/Navbar";
import Tables from "../../components/Tables";

import instance from "../../config/apiConfig";
import { useLocation,Link } from "react-router-dom";

import CustomerTable from "../../components/CustomerTable"
import ApplicationForm from "../ApplyForms/applicationForm";
// import { Button } from "bootstrap";


const Dashboards = (props) => {

    const [loandetails, setLoanDetails] = useState([])
    const location = useLocation();


    useEffect(() => {
        fetchDetails();

    }, [])

    useEffect(() => {
        const userState = location.state;
        if(location.state.custId){

            localStorage.setItem("custId",location.state.custId)
        }
        console.log(userState)

    }, [])

    const fetchDetails = () => {
        if (localStorage.getItem("role") == "manager") {
            fetchLoanDetails();
        }
        // else {
        //     fetchSingleLoanDetail()
        // }

    }

    const fetchLoanDetails = async () => {
        let response = await instance.get(`/manager/get-loandetails?role=MANAGER`);
        console.log(response.data)
        setLoanDetails(response.data);
    }





    return (
        <div>

            <Navbar />

            {localStorage.getItem("role") == "manager" ? (

                <div className="container mt-3">
                    {/* //First <h1> tag is hidden for both the roles */}
                    <h1>Loan Details -- Manager</h1>
                    <h3>Pending Loan Details</h3>
                    <br></br>
                    <Tables fetchLoanDetails={fetchLoanDetails} allRecords={true} loanDetails={loandetails} />
                    <br></br>
                    <br></br>
                    <br></br>
                    <h3>All Loan Details</h3>
                    <Tables fetchLoanDetails={fetchLoanDetails} allRecords={false} loanDetails={loandetails} />
                </div>

            ) : (
                <div className="container mt-3">
                    {/* //First <h1> tag is hidden for both the roles */}

                    {/* <h1>Loan Details - Customer</h1>
                    <h3>Start here Ashish</h3>
                    <br></br> */}


                    {location.state.loanId != null ? (
                        <div>

                            <h3>Loan Details - Customer</h3>
                            <CustomerTable customerState={location.state} />
                            

                             
                        </div>
                    ) : (
                        <div >

                            <Card className="bg-dark text-white">
                                <CardImg src="https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/blogs/loansborrowings/images/different-types-of-loans-for-your-home.jpg" alt="Card image" />
                                <CardImgOverlay>
                                    <CardTitle><h1>Customer Loan Details - No Ongoing Loans</h1></CardTitle>
                                    <CardText>
                                        <h4 >Apply for a Loan Now!
                                        <Badge style={{marginLeft:"2%"}} color="warning">
                                            New
                                        </Badge>
                                            </h4> </CardText>
                                    <CardText>
                                    <Link to= {`/apply/${location.state.custId}`}>

                                        <Button style={{ float: "right" }} size="lg" color="success">Take me to the Application Form -></Button>
                                    </Link>
                                    </CardText>
                                </CardImgOverlay>
                            </Card>


                            {/* <h2><ApplicationForm /></h2> */}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Dashboards;