import React from "react";
import { Container, Col } from "react-bootstrap";
import Particle from "../Particle";
import CardComponent from "./ProjectCard";
import BasicExample from "./ProjectCard";

export default function Projects() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Col
          md={5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            paddingTop: "30px",
            paddingBottom: "30px",
          }}
          className="about-img circular-image"
        ></Col>

        <h1 className="project-heading">
          My<strong className="purple"> Projects </strong>
        </h1>
        <BasicExample />
      </Container>
    </Container>
  );
}
