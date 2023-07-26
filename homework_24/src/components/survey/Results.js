import React from "react";
import "./Survey.scss";

const Results = ({ show, item }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="results">
      {item.icon} {item.name}
    </div>
  );
};

export default Results;
