import React from "react";
import { Form, Col, Row } from "react-bootstrap";

export default function SearchForm({ params, onParamChange }) {
  return (
    <Form className="mb-4">
      <Row>
        <Form.Group as={Col}>
          <Form.Label>Company</Form.Label>
          <Form.Control
            onChange={onParamChange}
            value={params.company}
            name="company"
            type="text"
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Location</Form.Label>
          <Form.Control
            onChange={onParamChange}
            value={params.location}
            name="location"
            type="text"
          />
        </Form.Group>
      </Row>
    </Form>
  );
}
