import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Menu from "./Menu";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";

const Body = () => {
  return (
    <div className="Body">
      {/* Routes */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </div>
  );
};

export default Body;
