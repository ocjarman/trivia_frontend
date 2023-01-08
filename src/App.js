import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import RoomView from "./components/RoomView/RoomView";

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
