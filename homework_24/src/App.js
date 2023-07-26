import React from "react";
import Survey from "./components/survey/Survey";
import Header from "./components/header/Header";
import "./App.scss";

const items = [
  { icon: "🤗", name: "hugging_face" },
  { icon: "😭", name: "loudly_crying_face" },
  { icon: "🤡", name: "clown_face" },
  { icon: "🤔", name: "thinking_face" },
];

const App = () => {
  return (
    <div>
      <Header title="Smile Survey" />
      <div className="container">
        <Survey items={items} />
      </div>
    </div>
  );
};

export default App;
