import { useState } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './views/Home.jsx'
import Browse from './views/Browse.jsx'
import About from './views/About.jsx'


function App() {
  return (
    <>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
    </>
    
  )
}

export default App
