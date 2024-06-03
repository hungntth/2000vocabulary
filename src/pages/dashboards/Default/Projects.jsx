import React from "react";

import {
  Badge,
  Card,
  Dropdown,
  Form,
  InputGroup,
  Table,
} from "react-bootstrap";

import { MoreHorizontal } from "react-feather";

const Projects = () => (
  <Card className="flex-fill w-100">
    <Card.Header>
      <div className="card-actions float-end">
        <Dropdown align="end">
          <Dropdown.Toggle as="a" bsPrefix="-">
            <MoreHorizontal />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another Action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <Card.Title className="mb-0">Latest Projects</Card.Title>
      <Form inline="true" className="d-none d-sm-inline-block">
        <InputGroup className="input-group-navbar">
          <Form.Control placeholder={"Search"} aria-label="Search" />
        </InputGroup>
      </Form>
    </Card.Header>
    <Table striped className="my-0">
      <thead>
        <tr>
          <th>Name</th>
          <th className="d-none d-xl-table-cell">Start Date</th>
          <th className="d-none d-xl-table-cell">End Date</th>
          <th>Status</th>
          <th className="d-none d-md-table-cell">Assignee</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Project Apollo</td>
          <td className="d-none d-xl-table-cell">01/01/2021</td>
          <td className="d-none d-xl-table-cell">31/06/2021</td>
          <td>
            <Badge bg="success">Done</Badge>
          </td>
          <td className="d-none d-md-table-cell">Carl Jenkins</td>
        </tr>
      </tbody>
    </Table>
  </Card>
);

export default Projects;
