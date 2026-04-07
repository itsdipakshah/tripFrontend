import React from 'react'
import Navbar from '../components/common/Navbar';
import Hero from '../components/LandingComponents/Hero';
import Features from '../components/LandingComponents/Features';
import AboutMe from '../components/LandingComponents/AboutMe';


const Landing = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <AboutMe/>
    </div>
  )
}

export default Landing;