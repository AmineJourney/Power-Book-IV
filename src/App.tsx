import React from "react";
import MainLayout from "./MainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./Components/details/Details";
import "./App.css";
import NavBar from "./Components/NavBar";
import "react-multi-carousel/lib/styles.css";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/episode/:id" element={<Details />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
