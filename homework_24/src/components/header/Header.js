import React from "react";
import "./Header.scss";

const Header = ({ title }) => {
  return (
    <div className="headerContainer">
      <span className="title">{title}</span>
    </div>
  );
};

export default Header;
