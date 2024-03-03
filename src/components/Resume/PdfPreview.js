import React from "react";
import { Card, Container } from "react-bootstrap";

export default function MyPdfViewer() {
  return (
    <Container>
      <Card>
        <embed
          src="http://localhost:3000/resumeDamjan.pdf"
          type="application/pdf"
          width="100%"
          height="1190px"
          initialPage={1}
        />
      </Card>
    </Container>
  );
}
