import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router";
import Home from "./components/home/Home";
import Sale from "./components/sale/Sale";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/rent" element={<Home />} />
        <Route path="/hotrent" element={<Home />} />
        <Route path="/carsrent" element={<Home />} />
        <Route path="/bikesrent" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
