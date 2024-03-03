import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Damjan Janeski </span>
            from <span className="purple"> Skopje, North Macedonia.</span>
            <br /> 28 years old engineer who does his best to successfully join
            to the developer's world!
            <br />
            Currently, I'm diving deeper into web development as a Full-Stack
            JavaScript Developer Intern at Code Desk. Here, I've been working on
            dynamic and responsive web interfaces, utilizing frameworks like
            React and Next.js. I'm passionate about continuous learning and
            contributing to innovative projects.
            <br />
            Curiously interested in self-improvement and upgrading my knoledge
            with additional technologies and frameworks.
            <br />
            Let's connect and discuss how we can work together to create amazing
            things!
            <br />
            <br />
          </p>
          <h2>Personal hobbies:</h2>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Riding bicycle
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Fitness
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Fitness
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
