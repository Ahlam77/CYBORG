import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from 'react';
import './App.css';

import { Header,Footer }from './sections/index';
import { Home, Profile, Streams } from "./Pages/index";

import { Container } from "./components/index";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Streams" element={<Streams />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App
