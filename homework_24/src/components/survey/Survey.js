import React, { useState } from "react";
import SurveyItem from "./SurveyItem";
import Results from "./Results";
import "./Survey.scss";

const getMaxPointsKey = (points) => {
  return Object.keys(points).reduce((a, b) => (points[a] > points[b] ? a : b));
};

const getDefaultState = (items) =>
  items.reduce((acc, { name }) => {
    acc[name] = 0;
    return acc;
  }, {});

const Survey = ({ items }) => {
  const [showResults, setShowResults] = useState(false);
  const [points, setPoints] = useState(getDefaultState(items));

  const handleAddPoint = (name) => {
    if (showResults) {
      return;
    }

    setPoints((prevPoints) => {
      const candidate = prevPoints[name];

      if (candidate === undefined) {
        return { ...prevPoints, [name]: 1 };
      }

      return { ...prevPoints, [name]: candidate + 1 };
    });
  };

  const handleShowResults = () => {
    if (showResults) {
      setPoints(getDefaultState(items));

      return setShowResults(false);
    }

    return setShowResults(true);
  };

  const maxPointKey = getMaxPointsKey(points);
  const maxPoints = points[maxPointKey];

  return (
    <div>
      {items.map(({ icon, name }) => {
        return (
          <SurveyItem
            key={name}
            icon={icon}
            name={name}
            onItemClick={handleAddPoint}
            points={points[name]}
          />
        );
      })}
      <button
        className="resultsButton"
        disabled={maxPoints === 0}
        onClick={handleShowResults}
      >
        {showResults ? "Hide" : "Show"} results
      </button>
      <Results
        show={showResults}
        item={items.find((item) => item.name === maxPointKey)}
      />
    </div>
  );
};

export default Survey;
