import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/intro.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a Software Engineer with a strong focus on designing and
              building reliable, scalable, and high-performance applications. I
              am passionate about turning complex ideas into efficient digital
              solutions while delivering intuitive and seamless user
              experiences.
              <br />
              <br />I have hands-on experience with
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, Embedded C++, React, Node.js, Java, and Python{" "}
                </b>
              </i>
              and I am comfortable working across both backend and frontend
              development environments.
              <br />
              <br />
              My core areas of interest include
              <i>
                <b className="purple">
                  {" "}
                  Web Application Development and Embedded Systems{" "}
                </b>
              </i>
               with a particular focus on building systems that effectively
              integrate on-chain and off-chain architectures.
              <br />
              <br />I actively build and experiment with modern technologies,
              frequently working with
              <b className="purple"> Node.js </b>
              along with frameworks such as
              <i>
                <b className="purple"> React.js </b> and{" "}
                <b className="purple"> Next.js </b>
              </i>
              to develop robust and maintainable solutions.
            </p>
          </Col>
          <Col md={4} className="myAvtar" >
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{width: "100%", height: "100%", marginTop: "10em"}} />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
