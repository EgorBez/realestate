import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router";
import Home from "./components/home/Home";
import Sale from "./components/sale/Sale";
import Rent from "./components/rent/Rent";
import Hotrent from "./components/hotrent/Hotrent";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/hotrent" element={<Hotrent />} />
        <Route path="/carsrent" element={<Home />} />
        <Route path="/bikesrent" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
