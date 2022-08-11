import React from "react";
import { FetchJobs } from "./FetchJobs";
import { Container } from "react-bootstrap";

export const JobListing = () => {
  const { jobs, loading, error } = FetchJobs();

  return (
    <Container>
      {loading && <h1>Loading... </h1>}
      {error && <h1>Error. Try Refreshing... </h1>}
      {<h1>{jobs.length}</h1>}
    </Container>
  );
};
