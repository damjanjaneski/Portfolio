import React from "react";
import { Card, Container } from "react-bootstrap";
import Particle from "../Particle";
import MyPdfViewer from "./PdfPreview";

export default function Resume() {
  const downloadFile = function () {
    const fileUrl = `${process.env.REACT_APP_API_URL}/resumeDamjan.pdf`;
    const fileName = "resumeDamjan.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  };
  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-center"
        style={{ marginTop: "150px", marginBottom: "100px" }}
      >
        <Particle />
        <Card
          className="justify-content-center"
          style={{ width: " 250px" }}
          onClick={downloadFile}
        >
          <Card.Link className="btn btn-primary" download>
            Download Resume{" "}
            <svg
              style={{ fill: "white", width: "15px" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
            </svg>
          </Card.Link>
        </Card>
      </Container>
      <MyPdfViewer />
    </>
  );
}
