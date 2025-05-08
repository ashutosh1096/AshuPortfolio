import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashutosh Singh </span>
            from <span className="purple"> Varanasi, India.</span>
            <br />
            I am currently employed as a software developer at Vagaro Technologies Pvt Ltd.
            <br />
            I have completed MCA (MMMUT) in Madan Mohan Malaviya University of Technologies Gorakhapur in the Year 2021.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> Learn new Coding Libraries
            </li>
            <li className="about-activity">
              <ImPointRight /> GYM and Workout
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ashutosh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;