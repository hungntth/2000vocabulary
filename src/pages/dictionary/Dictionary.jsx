import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { search } from "../../api/dictionary.api";
import DictionaryTable from "../../components/dictionary/DictionaryTable";

export default function Dictionary() {
    const [words, setWords] = useState([]);
    const getWords = async () => {
        const data = await search();
        setWords(data);
    }

    useEffect(() => {
        getWords()
    }, [])

    return (
        <React.Fragment>
            <Helmet title="Dictionary" />
            <Container fluid className="p-0">
                <div className="row pb-">
                    <h1 className="col-md-6">Dictionary</h1>

                    <input className="col-md-6" type="text" name="input" placeholder="Input" />
                </div>

                <Row>
                    <Col lg="12">
                        <DictionaryTable data={words} />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}