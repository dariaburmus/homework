import React from "react";
import { Provider } from "react-redux";

import ContactList from "./components/contact-list";
import store from "./store";

import "./App.scss";

const App = () => {
  return (
    <div className="container">
      <Provider store={store}>
        <ContactList />
      </Provider>
    </div>
  );
};

export default App;
