import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/myabout.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello! I'm <span className="yellow">Suryacharan Bandaluppi</span>, a passionate
              <b className="yellow"> Full Stack Developer </b> from{" "}
              <span className="yellow">Vizianagaram, Andhra Pradesh</span>.
              {/* <br />
              <br /> */}
              I'm currently pursuing my Bachelor's in Computer Science at GMR Institute of Technology.
              My journey revolves around building impactful web applications and solving real-world problems through code.
              {/* <br />
              <br /> */}
              I specialize in the{" "}
              <b className="yellow">MERN stack (MongoDB, Express, React, Node.js)</b>, and love working with
              modern web technologies and libraries.
              {/* <br />
              <br /> */}
              I'm skilled in languages like <b className="yellow">JavaScript, C, Java, and Python</b>, with a strong foundation in DSA.
              {/* <br />
              <br /> */}
              I've also published a research paper on{" "}
              <b className="yellow">Real-Time Assistive Technology using American Sign Language (ASL)</b> for people with hearing and speech impairments.
              {/* <br />
              <br /> */}
              Beyond coding, I'm deeply interested in{" "}
              <b className="yellow">AI, problem solving, and building products</b> that create real impact.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} style={{ width: "250px", height: "auto" }} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              I'm always open to connect and collaborate. Feel free to{" "}
              <span className="yellow">reach out!</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Bandaluppi-Suryacharan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/bandaluppisuryacharan/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/Suryacharan143/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="leetcode"
                >
                  <SiLeetcode />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
