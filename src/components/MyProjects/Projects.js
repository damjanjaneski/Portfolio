import React from "react";
import { Container, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCard";
import { projectData } from "./projectsData";

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
        <div className="projects_container">
          {projectData.map((project, x) => {
            return <ProjectCard key={x} project={project} />;
          })}
        </div>
      </Container>
    </Container>
  );
}
