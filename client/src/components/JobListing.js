import React, { useState } from "react";
import { FetchJobs } from "./FetchJobs";
import { Container } from "react-bootstrap";
import { Job } from "./Job";
import "../styles/Jobs.css";
import { JobsPagination } from "./JobsPagination";
import SearchForm from "./SearchForm";


export const JobListing = () => {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = FetchJobs(params, page);

  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }

  return (
    <Container>
      <h1 className="mb-4">Job Listings</h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h1>Loading... </h1>}
      {error && <h1>Error. Try Refreshing... </h1>}
      {jobs.map((job) => {
        return <Job key={job.id} job={job} />;
      })}
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>
  );
};
