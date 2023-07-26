import React from "react";
import "./Survey.scss";

const SurveyItem = ({ icon, name, onItemClick, points }) => {
  return (
    <div className="surveyItem">
      <span className="icon" onClick={() => onItemClick(name)}>
        {icon}
      </span>
      {points}
    </div>
  );
};

export default SurveyItem;
