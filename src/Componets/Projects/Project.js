import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LiveIssue from "../../Assets/Projects/LiveIssue.webp";
import EmployeeProfile from "../../Assets/Projects/EmployeeProfile.png";
import Theme from "../../Assets/Projects/Theme.jpg";
import WebsiteBuilder from "../../Assets/Projects/WebsiteBuilder.jpg";
import TimeCard from "../../Assets/Projects/TimeCard.png";
import ServiceClass from "../../Assets/Projects/ServiceClass.png";
import MissedCheckout from "../../Assets/Projects/MissedCheckout.jpg";
import Payroll from "../../Assets/Projects/Payroll.jpg";
import Pending from "../../Assets/Projects/Pending.jpg";
import FailedPayment from "../../Assets/Projects/FailedPayment.png";
import Unsigned from "../../Assets/Projects/Unsigned.jpg";
import Particle from "../../Particle";
import ProjectCards from "./ProjectCards";

function Projects() {
  
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCards
              imgPath={WebsiteBuilder}
              isBlog={false}
              title="Website Builder"
              description="Customers can easily create their website design. They have the flexibility to choose the
              layout, colors, fonts, and other style elements to match their brand or personal preferences."
              // ghLink="https://github.com/ashutosh1096"
              demoLink="https://youtu.be/bqkrRxQMlSw"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={EmployeeProfile}
              isBlog={false}
              title="Employee Profile"
              description="Developed a web-based Employee Profiles Management System to help business owners efficiently manage their workforce and The application allows for Adding, editing, and updating employee details and Managing user permissions with customizable role-based access control."
              // ghLink="https://github.com/ashutosh1096"
              demoLink="https://youtu.be/E-5wGwDuhQs"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={TimeCard}
              isBlog={false}
              title="Reports Phase II (Timecard)"
              description="This report allows employees to manage their Clock-In and Clock-Out records efficiently.
              Employees can add new entries, edit existing entries, and delete entries as needed.
              Additionally, the report provides options to print the data or export it as a PDF for easy
              management and record-keeping."
              // ghLink="https://github.com/ashutosh1096"
              demoLink="https://youtu.be/pW02VBOS94Q"
            />
          </Col>          
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={ServiceClass}
              isBlog={false}
              title="Services classes"
              description="I worked on the ServiceClasses Report module, which provides detailed insights into all services and classes offered through the platform. This feature helps businesses analyze performance metrics and make informed decisions."
              // ghLink="https://github.com/ashutosh1096"
              demoLink="https://youtu.be/DS2vdiC47Ek"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={MissedCheckout}
              isBlog={false}
              title="Missed Checkouts/Check-ins"
              description="I worked on the Missed Checkouts / Check-ins report in Vagaro. This report shows details of appointments where customers didn’t check out or check in properly and I helped build the logic to track missed checkouts and check-ins and display this information clearly in the report."
              // ghLink="https://github.com/ashutosh1096"
              demoLink="https://youtu.be/E70gBGil8NM"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={TimeCard}
              isBlog={false}
              title="Reports Phase III (Timecard)"
              description="This report allows employees to manage their Clock-In and Clock-Out records. In Phase III
              of the Reports, access levels are introduced to ensure better control. Only business owners
              can make changes to all entries or add new ones, while employees are restricted to editing,
              adding, or deleting their own entries."
              // ghLink="https://github.com/ashutosh1096"
              demoLink="https://youtu.be/pW02VBOS94Q"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={Pending}
              isBlog={false}
              title="PendingShipments"
              description="I worked on the Pending Shipments report in Vagaro, which helps businesses track the status of product orders.
              I helped build the logic to display and update each shipment’s status in real-time, making it easy for businesses to manage product deliveries and take action when needed."
              // ghLink="https://github.com/ashutosh1096"
              demoLink="https://youtu.be/lqi_oSsNug4"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={FailedPayment}
              isBlog={false}
              title="Failed Payment"
              description="I worked on the Failed Payments report in Vagaro. This report shows all failed transactions with details like:
              Customer name, Amount, Card details, Date and time, Reason for failure and I helped build the system to capture and display these details clearly, so businesses can quickly identify and resolve payment issues with "
              // ghLink="https://github.com/ashutosh1096"
              demoLink="https://youtu.be/D4WM_SWbZNg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={Unsigned}
              isBlog={false}
              title="Unsigned Forms/SOAPs"
              description="I worked on the Unsigned Forms / SOAPs report in Vagaro. This report shows which customers have signed or not signed their forms or SOAP notes.I helped build this report to make it easy for businesses to track and manage unsigned forms."
              // ghLink="https://github.com/ashutosh1096"
              demoLink="https://youtu.be/P_iwn29zDP8" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={Theme}
              isBlog={false}
              title="Theme"
              description="I worked on the Theme project in Vagaro, which allows users to customize the look and feel of their website. Option to choose between Light Mode, Dark Mode, and System Mode and Multiple color customization and options Theme applied consistently across all website pages."
              // ghLink="https://github.com/ashutosh1096"
              demoLink="https://youtu.be/-Epr8xe2-6o"     
            />
          </Col>          

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={Payroll}
              isBlog={false}
              title="Payroll (Gusto)"
              description="Payroll (Gusto) It allows employers to manage employee payroll, tax filings, and benefits.
              Gusto offers employees self-service access to their paystubs and tax documents."
              // ghLink="https://github.com/ashutosh1096"
              demoLink="https://youtu.be/SEo1nEdgKSw"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={LiveIssue}
              isBlog={false}
              title="Live Production Issue"
              description="Currently I am working on live production issues. If any problems are found, I do solve them on the same day. I am working on these all module."
              // ghLink="https://github.com/ashutosh1096"
              demoLink="https://www.vagaro.com/"  
            />
          </Col>
        </Row>      
      </Container>
    </Container>
  );
}

export default Projects;