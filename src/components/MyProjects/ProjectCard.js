import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function ProjectCard({ project }) {
  return (
    <Card
      className="card"
      style={{
        border: "1px solid white",
        background: "transparent",
        marginBottom: "50px",
        height: "700px",
      }}
    >
      <Card.Img
        variant="top"
        src={project.imgUrl}
        style={
          project.imgUrl === "/static/media/Twenty.f82af6e8944825ec9732.png"
            ? { height: "39.5%" }
            : { height: "42.5%" }
        }
      />
      <Card.Body style={{ height: "50%" }}>
        <Card.Title style={{ margin: "25px 10px" }}>{project.title}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush"></ListGroup>
      <Card.Body>
        <Card.Link
          target="blank"
          class="btn"
          style={{
            marginRight: "25px",
            marginLeft: "25px",
            marginBottom: "10px",
            width: "45%",
            border: "1px solid purple",
            color: "white",
          }}
          href={project.liveUrl}
        >
          Live Project
        </Card.Link>
        <Card.Link
          target="blank"
          class="btn "
          href={project.gitHubUrl}
          style={{
            marginRight: "25px",
            marginLeft: "25px",
            width: "45%",
            border: "1px solid purple",
            color: "white",
          }}
        >
          Github Repository
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
