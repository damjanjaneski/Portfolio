import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function ProjectCard({ project }) {
  return (
    <Card
      style={{
        backgroundColor: "transparent",
        width: "18rem",
        border: "1px solid white",
        width: "400px",
        marginBottom: "100px",
        height: "600px",
      }}
    >
      <Card.Img
        variant="top"
        src={project.imgUrl}
        style={{ height: "42.5%" }}
      />
      <Card.Body style={{ height: "50%" }}>
        <Card.Title style={{ margin: "25px 10px" }}>{project.title}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush"></ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
