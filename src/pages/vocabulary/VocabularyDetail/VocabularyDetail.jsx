import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { detail } from "../../../api/vocabularies.api";
import VocabulariesTable from "../../../components/vocabulary/VocabulariesTable";

export default function VocabularyDetail() {
  let { vocabularySlug } = useParams();
  const [chapter, setChapter] = useState({});
  const slugs = vocabularySlug.split("-");
  const chapterId = slugs[slugs.length - 1]

  const getChapter = async() => {
    const data = await detail(chapterId);
    setChapter(data);
  }

  useEffect(() => {
    getChapter()
  },[])
  return (
    <React.Fragment>
      <Helmet title={`Vocabulary - ${chapter.title}`} />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3 text-capitalize">{chapter.title}</h1>
        <Row>
          <Col lg="12">
            <VocabulariesTable data={chapter.vocabularies} />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
