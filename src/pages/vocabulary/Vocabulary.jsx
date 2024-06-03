import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import VocabularyCard from "./../../components/vocabulary/VocabularyCard";
import vocabulariesData from "../../data/vocabulary/vocabularies.data";

export default function Vocabulary() {
  const { vocabularies } = vocabulariesData;
  console.log(vocabularies[0]);
  return (
    <React.Fragment>
      <Helmet title="Vocabularies" />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Vocabularies</h1>

        <Row>
          {vocabularies.map((item) => (
            <Col md="6" lg="4" key={item.slug}>
              <VocabularyCard
                name={item.name}
                image={item.image}
                slug={item.slug}
                meaning={item.meaning}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
}
