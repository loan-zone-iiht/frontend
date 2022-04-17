import React, { Fragment, useState, Component } from "react";
import {
  Col,
  Row,

} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import { toast, Bounce, ToastContainer } from "react-toastify";
import Login from "./Login/login"
import RegistrationForm from "./Register/registrationForm";
import bg1 from "./../../assets/loan.jpeg";



// const API = process.env.REACT_APP_SERVER_URL;





const LoginModule = () => {


  const [isLogin, setisLogin] = useState(true)
  const [loading, setLoading] = useState(false)


  const handleCreateAccountChange = (isLoginOrRegistered) => {
    setisLogin(isLoginOrRegistered)
  }

  return (
    <Fragment>
      <ToastContainer />

      <div className="h-100 login">
        <Row className="h-100 no-gutters">

          <Col
            lg="7"
            md="12"
            className=" d-flex bg-white justify-content-center align-items-center"
          >
            <Col lg="9" sm="12" className="mx-auto app-login-box">


              <Row className="divider" />
              <div >
                {isLogin ? (
                  <Login isLoginOrRegistered={handleCreateAccountChange} />) : (<RegistrationForm />)}
              </div>
            </Col>
          </Col>
        </Row>
      </div>
    </Fragment>
  );

}

export default LoginModule
