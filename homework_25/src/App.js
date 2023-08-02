import React from "react";
import "./App.scss";
import TodoList from "./components/todo";

const App = () => {
  return (
    <div className="container">
      <TodoList />
    </div>
  );
};

export default App;
