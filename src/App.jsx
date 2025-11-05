import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router";
import Home from "./components/home/Home";
import Sale from "./components/sale/Sale";
import Rent from "./components/rent/Rent";
import Hotrent from "./components/hotrent/Hotrent";
import Cars from "./components/cars/Cars";
import Bikes from "./components/bikes/Bikes";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/hotrent" element={<Hotrent />} />
        <Route path="/carsrent" element={<Cars />} />
        <Route path="/bikesrent" element={<Bikes />} />
        <Route path="/exchange" element={<Home />} />
        <Route path="/documents" element={<Home />} />
        <Route path="/events" element={<Home />} />
        <Route path="/fasttrack" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
