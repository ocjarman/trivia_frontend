import React from "react";

const Results = ({ result }) => {
  return (
    <p key={result.name}>
      {result.name}: {result.score} point(s)
    </p>
  );
};

export default Results;
