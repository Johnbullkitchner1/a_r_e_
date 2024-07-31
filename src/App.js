import React from 'react';
import NavBar from './components/Navbar'; // Note the lowercase "b" in Navbar
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

export default App;
