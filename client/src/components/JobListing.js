import React from "react";
import { FetchJobs } from "./FetchJobs";
import { Container } from "react-bootstrap";

export const JobListing = () => {
  const { jobs, loading, error } = FetchJobs();

  return <div>JobListing</div>;
};
