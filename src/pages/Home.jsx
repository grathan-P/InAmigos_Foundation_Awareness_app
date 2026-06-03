import React from 'react'
import { useState } from "react";
import Hero from '../components/home_components/Hero.jsx'
import WhoWeAre from "../components/home_components/Intro.jsx";
import ProjectCard from "../components/home_components/ProjectCard.jsx";
import HomeFooter from "../components/home_components/HomeFooter.jsx";

const Home = () => {
  return (
    <div>
      <Hero/>
      <WhoWeAre/>
      <ProjectCard/>
      <HomeFooter/>
    </div>
  )
}

export default Home
