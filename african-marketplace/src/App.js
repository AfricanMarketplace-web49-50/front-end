import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components Import
import Navbar from "./components/NavBar/navbar";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
