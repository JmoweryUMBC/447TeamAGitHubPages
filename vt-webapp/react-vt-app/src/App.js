import React from 'react';
import './App.css';
import {CTA, Brand, Navbar} from './components';
import {Header} from './containers';
import {BrowserRouter as Router, Routes, Route, Link  } from "react-router-dom";
import Home from "./WebPages/Home";
import About from "./WebPages/About";
import Search from "./WebPages/Search";

function App() {
    const sayHello = () => {
	console.log("Log Hello");
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
