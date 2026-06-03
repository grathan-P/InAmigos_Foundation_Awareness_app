import React from 'react'
import { useState } from "react";
import AboutUs from "../components/about_components/AboutUs.jsx";
import KnowMore from '../components/about_components/KnowMore.jsx';
import CoreTeam from '../components/about_components/CoreTeam.jsx';
import HomeFooter from "../components/home_components/HomeFooter.jsx";
import Certificates from '../components/about_components/certificate.jsx';

const About = () => {
  return (
    <div>
      <AboutUs />
      <KnowMore />
      <Certificates />
      <CoreTeam />
      <HomeFooter />
    </div>
  )
}

export default About
