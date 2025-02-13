// BrowserRouter
import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";

// CSS Imports
import './assets/css/Base.css';

// 複数のページ
import Home from './pages/Home';

// Nav bar
import Navbar from './subcomponents/Navbar';

function App() {

  return (
    <>
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
