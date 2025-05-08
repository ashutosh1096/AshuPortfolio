import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiPostman,  SiVercel,  SiMacos, SiVscodium, SiMysql, SiGithub, SiFigma, SiGit, SiAndroidstudio} from "react-icons/si";


function Toolstack() {

  
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVscodium />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>       
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
      </Col>      
    </Row>
  );
}

export default Toolstack;