import { useState } from "react";
import "./App.css";
import Navbar from './components/Navbar.jsx'
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Volunteer from "./pages/Volunteer.jsx";
import Gallery from "./pages/Gallery.jsx";
import ScrollToTop from "./components/ScrollToTop";
import { Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <>
      <ScrollToTop />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>

        <Route path="/volunteer" element={<Volunteer/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
