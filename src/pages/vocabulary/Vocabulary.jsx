import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { search } from "../../api/vocabularies.api";
import VocabularyCard from "./../../components/vocabulary/VocabularyCard";

export default function Vocabulary() {
  const [chapters, setChapters] = useState([]);

  const getListChapter = async () => {
    const data = await search();
    setChapters(data);
  }

  useEffect(() => {
    getListChapter()
  }, [])
  return (
    <React.Fragment>
      <Helmet title="Vocabularies" />

      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Vocabularies</h1>

        <Row>
          {chapters?.map((item) => (
            <Col md="6" lg="4" key={item.slug}>
              <VocabularyCard
                title={item.title}
                image={item.image}
                slug={item.slug}
                id={item.id}
                description={item.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
}
