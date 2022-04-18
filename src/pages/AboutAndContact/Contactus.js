import React, { Fragment, Component, useState } from "react";

import {
  Col,
  Row,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  Button,
  Card,
  CardImg,
  CardImgOverlay, CardText,
  CardTitle, CardBody, CardFooter, CardGroup, Collapse, Accordion, AccordionItem, AccordionHeader, AccordionBody

} from "reactstrap";


import "bootstrap/dist/css/bootstrap.min.css";

const API = process.env.REACT_APP_SERVER_URL;

const Contact = () => {



  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/home">
            <h3>LoanZone</h3>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/calculator">Pricing Calculator</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav >
      <div class="container mt-3">
        <h3>Contact Us</h3><br />
        <div className=" p-4 bg-light">
          <Row>
            <Col>
              <Accordion>
                <AccordionItem eventKey="0">
                  <AccordionHeader>How long does it take to get approval?</AccordionHeader>
                  <AccordionBody>
                    Around 4 to 5 days.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="1">
                  <AccordionHeader>What's the process behind?</AccordionHeader>
                  <AccordionBody>
                    One of our loan officers go through your application personally, and verifies your eligibility,Meanwhile you can sit back and relax !!
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="2">
                  <AccordionHeader>How can I caclulate my Interests??</AccordionHeader>
                  <AccordionBody>
                    You can use our "Pricing caclulator" widget.
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
            </Col>
            <Col>
              <Form>
                <FormGroup row>
                  <Label for="Email" sm={2}>Email</Label>
                  <Col sm={10}>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="Name" sm={2}>Name</Label>
                  <Col sm={10}>
                    <Input type="text" name="name" id="name" placeholder="Enter your name" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="exampleSelectMulti" sm={2}>Select Multiple</Label>
                  <Col sm={10}>
                    <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                      <option>Loan Grievance</option>
                      <option>Loan Enqueiry</option>
                      <option>Payment Issue</option>
                      <option>Fraud Reporting</option>
                      <option>Others</option> </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="exampleText" sm={2}>Message</Label>
                  <Col sm={10}>
                    <Input type="textarea" name="text" id="message" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="exampleFile" sm={2}>File</Label>
                  <Col sm={10}>
                    <Input type="file" name="file" id="exampleFile" />
                    <FormText color="muted">
                      Attach some supporting documents.
                    </FormText>
                  </Col>
                </FormGroup>

              </Form>
              <Button color="primary"
                style={{ margin: "0px" }}
                className="btn btn-md brand_background_color"
                type="submit"//use onclick to send message
              >
                <Label>Submit</Label>
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div >
  );

}

export default Contact