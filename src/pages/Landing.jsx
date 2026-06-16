import React from 'react'
import Navbar from '../components/common/Navbar';
import Hero from '../components/LandingComponents/Hero';
import Features from '../components/LandingComponents/Features';

import FAQ from '@/components/LandingComponents/FAQ';
import Contact from '@/components/LandingComponents/Contact';
import About from '@/components/LandingComponents/About';
import Footer from '@/components/LandingComponents/Footer';
import Gallery from '@/components/LandingComponents/Gallery';
import Testimonials from '@/components/LandingComponents/Testimonials';


const Landing = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
      <Gallery/>
      <Testimonials/>
    
      <Contact/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default Landing;