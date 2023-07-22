import React from "react";
import Header from "./components/header/Header";
import LeftNav from "./components/left-nav/LeftNav";
import MainContainer from "./components/main-container/MainContainer";
import "./App.scss";

const sections = [
  { name: "section1", color: "red", id: "section1" },
  { name: "section2", color: "green", id: "section2" },
];

const navItems = [
  { name: "item1", link: "#section1" },
  { name: "item2", link: "#section2" },
];

const App = () => {
  return (
    <div>
      <Header title="Hello" />
      <div className="container">
        <LeftNav items={navItems} />
        <MainContainer sections={sections} />
      </div>
    </div>
  );
};

export default App;
