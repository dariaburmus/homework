import React from "react";
import "./MainContainer.scss";

const MainContainer = ({ sections }) => {
  return (
    <div className="mainContainer">
      {sections.map(({ color, name, id }) => {
        return (
          <section
            id={id}
            style={{ backgroundColor: color }}
            className="section"
          >
            {name}
          </section>
        );
      })}
    </div>
  );
};

export default MainContainer;
