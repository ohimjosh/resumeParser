import React from "react";
import { Badge, Button, Card } from "react-bootstrap";
import ReactMarkdown from "react-markdown";


export const Job = ({ job }) => {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {job.job_type} -{" "}
              <span className="text-muted font-weight-light">
                {job.company}
              </span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {job.location}
            </Card.Subtitle>
            <Badge variant="secondary">${job.salary}</Badge>
            <div style={{ wordBreak: "break-all" }}>
              <ReactMarkdown children={job.url} />
            </div>
          </div>

          <img
            className="d-sm-none d-md-block"
            height="50"
            alt={job.company}
            src={job.image}
          />
        </div>

        <Card.Text>

            <Button variant="primary">View Details</Button>
        </Card.Text>
        

      </Card.Body>
    </Card>
  );
};
