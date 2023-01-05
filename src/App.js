import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RoomView from "./components/RoomView";

function App() {
  //
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:id" element={<RoomView />} />
      </Routes>
    </Router>
  );
}

export default App;
