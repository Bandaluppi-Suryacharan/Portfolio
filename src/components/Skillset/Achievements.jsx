import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCard";
import nptel from "../../assets/projects/nptel.png";
import python from "../../assets/projects/python.png";
import hack from "../../assets/projects/hack.jpg";

const Achievements = () => {
  return (
    <Container fluid className="project-section" style={{ paddingTop: "50px" }}>
      <Container>
        <h1 className="project-heading">
          My <strong className="yellow">Achievements </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are few Achievements that I've accomplished in my journey so far.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hack}
              isBlog={false}
              title="Hack4Humnity Winner"
              a
              description="🏆 Winner – Hack4Humanity (STEPcone 2024)
Secured the winner position and a cash prize by developing Agro Asserts, a farming support website using HTML, CSS, and JavaScript during our institute’s Hackathon event."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nptel}
              isBlog={false}
              title="NPTEL Certified"
              description="📜 NPTEL Elite – DSA in Java (IIT Kharagpur)
Awarded an Elite certificate for successfully completing the Data Structures and Algorithms using Java course offered by IIT Kharagpur through the NPTEL platform."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={python}
              isBlog={false}
              title="Python Certified(HackerRank)"
              description="🐍 Python Certified – HackerRank
Earned a certification in Python programming by demonstrating proficiency through hands-on coding assessments on the HackerRank platform."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Achievements;
