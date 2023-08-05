import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Photos from "./components/photo-list";
import Users from "./components/users";
import Albums from "./components/albums";

import "./App.scss";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" exact element={<Users />} />
          <Route path="/albums/:userId" element={<Albums />} />
          <Route path="/photos/:albumId" element={<Photos />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
