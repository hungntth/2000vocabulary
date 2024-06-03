import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import Header from "../dashboards/Default/Header";
import Statistics from "../dashboards/Default/Statistics";

import PieChart from "../dashboards/Default/PieChart";
import Projects from "../dashboards/Default/Projects";

const HomePage = () => (
  <>
    <Helmet title="Home page" />
    <Container fluid className="p-0">
      <Header />
      <Statistics />
      <Row>
        <Col lg="4" xl="4" className="d-flex justify-content-center ">
          <PieChart />
        </Col>

        <Col lg="8" xl="8" className="d-flex justify-content-center ">
          <Projects />
        </Col>
      </Row>
    </Container>
  </>
);

export default HomePage;
