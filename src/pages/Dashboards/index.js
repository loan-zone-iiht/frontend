import React, { useEffect, useState } from "react";
import { Row, Col, Table } from "reactstrap";

import Navbar from "../../Layout/Navbar";
import Tables from "../../components/Tables";

import instance from "../../config/apiConfig";
import { useLocation } from "react-router-dom";

import CustomerTable from "../../components/CustomerTable"


const Dashboards = (props) => {

    const [loandetails, setLoanDetails] = useState([])
    const location = useLocation();


    useEffect(() => {
        fetchDetails();

    }, [])

    useEffect(()=>{
        const userState = location.state;
        
    },[])

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
                  {location.state.loanId!=null? (
                      <div>

                    <h1>Loan Details - Customer</h1> 
                    <CustomerTable customerState={location.state} />
                    </div>
                  ):(
                      <div>
                        <h1>Customer Loan Details</h1>
                        <h2>Loan Ne</h2>
                        </div>
                  )}  
                                     
                
                </div>
            )}

        </div>
    )
}

export default Dashboards;