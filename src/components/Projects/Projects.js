import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import resq from "../../Assets/Projects/resq.png";
import icms from "../../Assets/Projects/icms.png";
import production from "../../Assets/Projects/production.png";
import ionet from "../../Assets/Projects/ionet_logo.png";
import airvoyage from "../../Assets/Projects/airvoyage.png";
import mindmender from "../../Assets/Projects/mindmender.png";
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
            <ProjectCard
              imgPath={icms}
              isBlog={false}
              title="ICMS"
              description="The ICMS (Industrial Cooling and Monitoring System) system is a comprehensive desktop application
            designed for monitoring and controlling industrial equipment. This system provides real-time monitoring of
            various parameters including temperature, power consumption, fan operations, and alarm conditions."
              demoLink="https://sunshineiot.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={production}
              isBlog={false}
              title="Production Management System"
              description="The Production Management System is a robust and scalable web-based application 
            designed to streamline and optimize end-to-end production workflows. It enables 
            organizations to efficiently manage, monitor, and control production operations 
            through a centralized and intuitive platform."
              ghLink="https://github.com/Orion1163/production"
              demoLink="http://two.sunshineiotronics.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            
              imgPath={ionet}
              isBlog={false}
              title="Ionet Solutions"
              description="Engineered multiple embedded IoT solutions at Ionet Solutions, including a 
              2-Relay automation module, an ADC-based smart water level monitoring system, 
              and a P10 LED matrix display. Focused on real-time control, accurate sensing, 
              and efficient hardware-software integration to deliver scalable and reliable 
              products."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resq}
              isBlog={false}
              title="Res-Q"
              description="Res-Q is a web application built with React.js and Firebase for securely managing and authenticating traffic police credentials. It provides a centralized dashboard for commissioners to efficiently handle officer access and data. The system ensures secure storage using Firebase Firestore and seamless authentication. As part of a larger Emergency Response System (ERS), it enhances coordination and supports faster emergency response operations."
              ghLink="https://github.com/Orion1163/Res-Q"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airvoyage}
              isBlog={false}
              title="AirVoyage"
              description="AirVoyage is a web-based airline reservation system built using PHP, MySQL, HTML, CSS, and Bootstrap. It provides a seamless flight booking experience through an intuitive interface and responsive design. The application leverages a robust backend for efficient data management, ensuring reliable and smooth user interactions across devices."
              ghLink="https://github.com/Orion1163/AirVoyage"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mindmender}
              isBlog={false}
              title="MindMender"
              description="Developed a Generative AI–based chatbot to support mental health professionals by providing personalized coping strategies and guided interactions. The system enables real-time conversational support with adaptive responses based on user inputs. It includes continuous improvement mechanisms and an escalation flow to connect users with professionals for complex cases, ensuring reliable and effective assistance."
              ghLink="https://github.com/Orion1163/MindMender"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
