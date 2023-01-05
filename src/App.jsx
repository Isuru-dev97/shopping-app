import React from "react";
import Navbar from "./components/header/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Deals from "./pages/Deals";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="deals" element={<Deals />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
