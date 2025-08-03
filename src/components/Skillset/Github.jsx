import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

const Github = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px", textAlign: "center" }}>
        Days I <strong className="yellow">Code</strong>
      </h1>
      <GitHubCalendar
        username="Bandaluppi-Suryacharan"
        blockSize={15}
        blockMargin={5}
        color="#8e44ad"
        fontSize={16}
      />
    </Row>
  );
};

export default Github;
