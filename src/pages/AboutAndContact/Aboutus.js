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

import bg1 from "./../../assets/p12.png";
import bg2 from "./../../assets/p11.png";
import bg3 from "./../../assets/p13.png";
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
            <CardImg variant="top" src="https://lh3.googleusercontent.com/T7lUr0bDzJOhrZZSR1eiBVZefKUiCrOrg74OmzvS37K9Kpa_l8RQgyoamzv37mz7cnfU2Qqa-SLC332PqmYyRkSar5EDd85QYyk6gGjUtvuo5BgsUHPOeBEzGa_e9WDw3qvL7KJ2Gn3TcNBxhpe7DwWi-eVR7OqBPstBFS1CaDsJZAtzA-_mW-9aAsIsxvx7Q30MmoQPWayQ5FTuK6NKHS49ds0LVJxRZytCb2nS8yBl6TAPvDwPmRQF4ErF2idbOeM__W-Tx01uo94QuMYj0NaBcXmaFryGtz9c0HFw58Tu-GeeTp-Yj2krCerVPw625Jg_DEVA1X_8N7Pquulcv8xDDFXwWRxMaTAgU-HxHkzKoAfAWSzWHIQz9RuIJMvSpMSc55LbhF45lPNq_TNCWuCeh08-TOu07GEAnpxbHDtFCJSf2TgmClpMBE27ikN5Vxh7lzGmDaUZzpgim7J-FhI-0c_AehHMrC-Z0EDZ9Sl34gV51azPrREWj4HTg3BrK3aoxTLaC86fQteYbTfHM7IeZia57bO5NAIW-9_AiOjMqCaMhQdF7VQtbv4BXqhr3ybRKrALGLkj5ETBXxMRgW64BJ3-t2eNNFMAeWZu6nRrUxtIpen2rtFkxmyQBi9j0ezg97Ok_51Q62WrLJ-T9UOMqtEKGaaR8St54pjb_m8qOVmw84ddH3w4MmuFC72V--ynEc_xC2auBVJ1CLXHiwOy7NKXK2b1qnDFqjeFb73vIoU3QowuSeLcW31E=s720-no?authuser=0" />
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
            <CardImg variant="top" src="https://lh3.googleusercontent.com/5GZYq8xQNAUF0gL8aG49Ye0-HN4_g4evt1Hwid1iqCT3DiRtFK5YWarj_lZRATFRwfwj720S8P6_CD4GPdrklUfpz-owl_bLXlOfPg04h8HJGiT_NTchr646HeaDhXl2lk76dUkpR4mnSgpTNB4kTBAwMDEoNXYwqGCZmNj3e-s3jOa4j4QHpBsTokrUutb-neZKqgZQOHQnH5JUYPdSVGpbQIgzLtQTbOErp92XWlZk-GZtPwr64nNaWAI95LCBvuqo3cZRbZ_PD6IQeZZ1TIPFkZDBt_oWFBGKU2TII-n6_c8M0ThDeY8Bi02PoK1UjIvH3n1S13j-FwQdTSCW5hOX9zfPFeeibNNUqGtnbMaFZsf11tys08TcR_YShYgeTvHRxblenfSRMPxZNW66nzmPqDb6fBKX6DJQXMXJxiOm3lawnUttIzaLXZYfeY2cfo26lowf6lXexR4yfIl2GToFmCCyMF5BrTJRjI4OaXACMU45j8KkNNR9Hm7Y03unIledBR3hGqbwurO4deUrJaECb7Y2GLn9OVrMCQWJQLDs1kUeuh-ZCRHtlneSCwrQK7gyf08YOCXZVWkdYoVf92zYXEVQmHUCAWU3zuxjkp7RjXIo7sibKoXGq6_fM-aDZcsIyRFjD6YCJC9llcRVjF6cGlm9QP56RX2KBYlMvww-rxHmgQT6Az6Skg731n_IcNUFVlOJmuNn8IwiOZ6lUEE_WdDtkfNH4K86aNT5JqE37xYxsLU2BINwvto-=s934-no?authuser=0" />
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