import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import slugDatas from "./../../../data/vocabulary/slug";
import VocabulariesTable from "../../../components/vocabulary/VocabulariesTable";

export default function VocabularyDetail() {
  let { vocabularySlug } = useParams();
  const slugData = slugDatas[vocabularySlug]?.datas || [];
  const slugName = slugDatas[vocabularySlug]?.name || "Không xác định";
  return (
    <React.Fragment>
      <Helmet title={`Vocabulary - ${slugName}`} />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3 text-capitalize">{slugName}</h1>
        <Row>
          <Col lg="12">
            <VocabulariesTable data={slugData} />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
