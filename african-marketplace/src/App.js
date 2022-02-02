import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

//Components Import
import Navbar from "./components/NavBar/navbar";
import Login from "./components/Login";
import Shop from "./components/Shop";
import PriceList from './components/PriceList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/categories" element={<PriceList />} />
      </Routes>
    </div>
  );
}

export default App;
