import React from "react";

import { Badge, Col, Card, Row } from "react-bootstrap";

import { DollarSign, ShoppingBag } from "react-feather";

const Statistics = () => {
  return (
    <Row>
      <Col md="6" xl className="d-flex">
        <Card className="flex-fill">
          <Card.Body className=" py-4">
            <div className="d-flex align-items-start">
              <div className="flex-grow-1">
                <h3 className="mb-2">$ 24.300</h3>
                <p className="mb-2">Total Earnings</p>
                <div className="mb-0">
                  <Badge bg="" className="badge-soft-success me-2">
                    +5.35%
                  </Badge>
                  <span className="text-muted">Since last week</span>
                </div>
              </div>
              <div className="d-inline-block ms-3">
                <div className="stat">
                  <DollarSign className="align-middle text-success" />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col md="6" xl className="d-flex">
        <Card className="flex-fill">
          <Card.Body className=" py-4">
            <div className="d-flex align-items-start">
              <div className="flex-grow-1">
                <h3 className="mb-2">43</h3>
                <p className="mb-2">Pending Orders</p>
                <div className="mb-0">
                  <Badge bg="" className="badge-soft-danger me-2">
                    -4.25%
                  </Badge>
                  <span className="text-muted">Since last week</span>
                </div>
              </div>
              <div className="d-inline-block ms-3">
                <div className="stat">
                  <ShoppingBag className="align-middle text-success" />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col md="6" xl className="d-flex">
        <Card className="flex-fill">
          <Card.Body className=" py-4">
            <div className="d-flex align-items-start">
              <div className="flex-grow-1">
                <h3 className="mb-2">$ 18.700</h3>
                <p className="mb-2">Total Revenue</p>
                <div className="mb-0">
                  <Badge bg="" className="badge-soft-success me-2">
                    +8.65%
                  </Badge>
                  <span className="text-muted">Since last week</span>
                </div>
              </div>
              <div className="d-inline-block ms-3">
                <div className="stat">
                  <DollarSign className="align-middle text-success" />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Statistics;
