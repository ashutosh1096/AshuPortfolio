import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineWhatsApp, AiOutlineMail,} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {

  const phoneNumber = '7398121867';
  const message = 'Hello! I need help with...';
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  const emailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=ashutosh.sin1096@gmail.com&su=Inquiry&body=Hello%20Ashutosh%2C%20I%20need%20help%20with...";
  

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming, and while I’ve still got plenty to learn, I think I’ve picked up a thing or two along the way 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> React, Javascript and Go. </b>
              </i>
              <br />
              <br />
              My interests lie in building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> 
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">React.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              <br />
              &nbsp; like
              <br />
              <i>
                <b className="purple"> React.js, Javascript, TypeScript, Redux, Zustand, React Hooks, Jquery, AJAX, REST API, Bootstrap, Material UI</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ashutosh1096"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={emailLink}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ashutosh-sin1096"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;