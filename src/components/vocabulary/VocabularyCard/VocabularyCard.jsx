import React from "react";
import { Button, Card } from "react-bootstrap";

export default function VocabularyCard({ name, image, slug, meaning }) {
  return (
    <Card>
      <Card.Img width="100%" src={image} alt="Card image cap" />
      <Card.Header>
        <Card.Title className="mb-0">{ name }</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>{ meaning }</Card.Text>
        <Button href={`#/vocabularies/${slug}`} variant="primary">
          Get go
        </Button>
      </Card.Body>
    </Card>
  );
}
