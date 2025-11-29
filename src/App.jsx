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
import Exchange from "./components/exchange/Exchange";
import Fasttrack from "./components/Fasttrack/Fasttrack";
import Documents from "./components/documents/Documents";
import SocialButton from "./components/socialButton/SocialButton";

function App() {
  return (
    <>
      <SocialButton
        route="https://t.me/HappyHomeAsiaAgency"
        image="/telegram.png"
        order={0}
      />
      <SocialButton
        route="https://wa.me/66940500750"
        image="/whatsapp.svg"
        order={1}
      />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/hotrent" element={<Hotrent />} />
        <Route path="/carsrent" element={<Cars />} />
        <Route path="/bikesrent" element={<Bikes />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/events" element={<Home />} />
        <Route path="/fasttrack" element={<Fasttrack />} />
      </Routes>
    </>
  );
}

export default App;
