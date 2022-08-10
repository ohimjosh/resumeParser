import React from "react";
import PropTypes from "prop-types";

const Progress = ({ percentage }) => {
  return (
    <div className="progress">
      <div
        className="progress-bar progress-bar-striped bg-success"
        role="progressbar"
        aria-label="Success striped example"
        style={{ width: `${percentage}%` }}
      >
        {percentage}%
      </div>
    </div>
  );
};

Progress.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default Progress;
