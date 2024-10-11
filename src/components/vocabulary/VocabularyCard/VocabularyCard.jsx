import React from "react";
import { Button, Card } from "react-bootstrap";

export default function VocabularyCard({ id, title, image, slug, description }) {
  return (
    <Card>
      <Card.Img width="100%" src={image} alt="Card image cap" />
      <Card.Header>
        <Card.Title className="mb-0">{title}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>{description}</Card.Text>
        <Button href={`#/vocabularies/${slug}-${id}`} variant="primary">
          Get go
        </Button>
      </Card.Body>
    </Card>
  );
}
