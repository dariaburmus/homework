import React from "react";
import "./LeftNav.scss";

const LeftNav = ({ items }) => {
  return (
    <div className="navContainer">
      {items.map(({ link, name }) => {
        return (
          <a className="navItem" href={link}>
            {name}
          </a>
        );
      })}
    </div>
  );
};

export default LeftNav;
