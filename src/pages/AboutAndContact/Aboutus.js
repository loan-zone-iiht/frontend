import React, { Fragment, Component, useState } from "react";

import {
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardImg,
  CardImgOverlay, CardText,
  CardTitle, CardBody, CardFooter, CardGroup

} from "reactstrap";

import ashish from "./../../assets/ashish.jpg";
import sayak from "./../../assets/Sayak.jpeg";

import "bootstrap/dist/css/bootstrap.min.css";

import instance from "../../config/apiConfig";

const API = process.env.REACT_APP_SERVER_URL;

const AboutUs = () => {

  const [customer, setCustomer] = useState({
    customer_name: "",
    customer_salary: 0,
    loan_amount: 0,
    loan_tenure: 0,
    loan_frequency: 0,
    gender: ""
  })

  const Toggle = () => {
    const show = false
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/apply">
            LoanZone
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
                <a class="nav-link" href="/contact">Contact Us</a>
              </li>
            </ul>
            <ul class="navbar-nav mr-auto">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Account
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="/login">Logout</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Go to Profile</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="container mt-3">
        <h3>About Us</h3><br />
        <div className=" p-4 bg-light">
          <Card className="bg-dark text-white">
            <CardImg src="https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/blogs/loansborrowings/images/different-types-of-loans-for-your-home.jpg" alt="Card image" />
            <CardImgOverlay>
              <CardTitle><h1>A freind In need is a friend, Indeed</h1></CardTitle>
              <CardText>
                <h4>Hello world, <br></br>We are team LoanZone. Developers of this LoanZone Website, am end to end platform for your housing needs.
                </h4></CardText>
              <CardText>Check out out contacts<br></br>Feel Free to connect</CardText>
            </CardImgOverlay>
          </Card>
        </div>
        <CardGroup>
          <Card>
            <CardImg variant="top" src="https://media-exp1.licdn.com/dms/image/C5603AQFgOKMRG-lV_Q/profile-displayphoto-shrink_800_800/0/1607764996728?e=1655942400&v=beta&t=3zuEX-G8iEIP4u9g2UWAjdDJw52cXFz6UxyQo6qqSNU" />
            <CardBody>
              <CardTitle><h4>Saswata Dutta</h4></CardTitle>
              <CardText>
                "When you have a dream, you've got to grab it and never let go..."
              </CardText>
              <a target="_blank" href="https://www.linkedin.com/in/sd170?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACpjKIQBCsFvZT51eLvfe2Lws1fTQJ19Ufw&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B2qpHs%2Bp7RuuMovZzMR9sqg%3D%3D" class="btn btn-primary btn-lg" role="button">Visit Profile</a>
            </CardBody>
            <CardFooter>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardFooter>
          </Card>
          <Card>
            <CardImg variant="top" src="sayak" />
            <CardBody>
              <CardTitle><h4>Sayak Mukherjee</h4></CardTitle>
              <CardText>
                "Keep your face always toward the sunshine, and shadows will fall behind you..."
              </CardText>
              <a target="_blank" href="https://www.linkedin.com/in/sayak-mukherjee-60903017a/" class="btn btn-primary btn-lg" role="button">Visit Profile</a>
            </CardBody>
            <CardFooter>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardFooter>
          </Card>
          <Card>
            <CardImg variant="top" src="https://photos.google.com/photo/AF1QipMm1TgiI3QcVsdoRyn3uVa63jGDTAYrlrGaUpIt" />
            <CardBody>
              <CardTitle><h4>Ashish Gupta</h4></CardTitle>
              <CardText>
                "There is nothing impossible to they who will try..."
              </CardText>
              <a target="_blank" href="https://www.linkedin.com/in/ashish-gupta-b84002219/" class="btn btn-primary btn-lg" role="button">Visit Profile</a>
            </CardBody>
            <CardFooter>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardFooter>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card>
            <CardImg variant="top" src="https://media-exp1.licdn.com/dms/image/C5603AQF5aCeB5Ln23w/profile-displayphoto-shrink_800_800/0/1614807746968?e=1655942400&v=beta&t=mjubU0adoJcioKecFxtOtVWeKkkKx_LVx5i6zL0k-d8" />
            <CardBody>
              <CardTitle><h4>Subhajit Sanyal</h4></CardTitle>
              <CardText>
                "Nothing is impossible...."
              </CardText>
              <a target="_blank" href="https://www.linkedin.com/in/subhajit-sanyal-0608b51a8/" class="btn btn-primary btn-lg" role="button">Visit Profile</a>
            </CardBody>
            <CardFooter>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardFooter>
          </Card>
          <Card>
            <CardImg variant="top" src="https://media-exp1.licdn.com/dms/image/C5603AQHQvxDIMWsY7w/profile-displayphoto-shrink_800_800/0/1636546436053?e=1655942400&v=beta&t=IkGnLn0yeZ1UpnRBvg10Pqlhy14ectVx-f6iO_h7Sys" />
            <CardBody>
              <CardTitle><h4>Raktim Chatterjee</h4></CardTitle>
              <CardText>
                "The bad news is time flies. The good news is you’re the pilot..."
              </CardText>
              <a target="_blank" href="https://www.linkedin.com/in/raktimchatterjee1998/" class="btn btn-primary btn-lg" role="button">Visit Profile</a>
            </CardBody>
            <CardFooter>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardFooter>
          </Card>
          <Card>
            <CardImg variant="top" src="https://media-exp1.licdn.com/dms/image/C5103AQHmHhQ_ychZwQ/profile-displayphoto-shrink_800_800/0/1586854631448?e=1655942400&v=beta&t=xAKXtvFiFEUDZy6SNMYYkE7ECAklNb3DiUJojcoaVfM" />
            <CardBody>
              <CardTitle><h4>Chandrika Bhattacharya</h4></CardTitle>
              <CardText>
                "Nothing is impossible. The word itself says ‘I’m possible!..."
              </CardText>
              <a target="_blank" href="https://www.linkedin.com/in/chandrika-bhattacharya/" class="btn btn-primary btn-lg" role="button">Visit Profile</a>
            </CardBody>
            <CardFooter>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardFooter>
          </Card>
        </CardGroup>
        <br></br>
        <div class="d-flex justify-content-center">

          <a href="/contact" class="btn btn-primary btn-lg" role="button">Contact Us</a>
        </div>
        <br></br>
      </div>
    </div>
  );

}

export default AboutUs;