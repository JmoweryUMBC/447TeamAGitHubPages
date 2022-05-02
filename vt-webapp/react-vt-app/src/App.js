import React from 'react';
import './App.css';
import {CTA, Brand, Navbar} from './components';
import {BrowserRouter as Router, Routes, Route, Link  } from "react-router-dom";
import VTSearch from "./WebPages/VTSearch";
import About from "./WebPages/About";
import DBSearch from "./WebPages/DBSearch";

function App() {
    const sayHello = () => {
	console.log("Log Hello");
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VTSearch />} />
        <Route path="/About" element={<About />} />
        <Route path="/DBSearch" element={<DBSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
