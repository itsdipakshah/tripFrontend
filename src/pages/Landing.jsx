import React from 'react'
import Navbar from '../components/common/Navbar';
import Hero from '../components/LandingComponents/Hero';
import Features from '../components/LandingComponents/Features';
import AboutMe from '../components/LandingComponents/AboutMe';
import FAQ from '@/components/LandingComponents/FAQ';
import Contact from '@/components/LandingComponents/Contact';


const Landing = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <AboutMe/>
      <Contact/>
      <FAQ/>
    </div>
  )
}

export default Landing;