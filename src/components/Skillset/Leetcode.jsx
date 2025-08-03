import React from "react";
import { Row } from "react-bootstrap";

const Leetcode = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px", textAlign: "center" }}>
        <strong className="yellow">LeetCode</strong> Stats
      </h1>
      <div className="leetcode-card">
        <img
          src="https://leetcard.jacoblin.cool/Suryacharan143?theme=dark&font=Syne%20Mono&ext=heatmap"
          alt="LeetCode Stats"
          style={{ maxWidth: "100%", borderRadius: "8px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)" }}
        />
      </div>
    </Row>
  );
};

export default Leetcode;
