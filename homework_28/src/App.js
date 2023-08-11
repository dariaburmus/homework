import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import TodoList from "./components/todo";

import "./App.scss";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
