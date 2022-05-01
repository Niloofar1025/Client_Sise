import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Volcano from "./pages/Volcano";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Volcano" element={<Volcano />} />{" "}
        </Routes>
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
