import React from 'react'
import HeroSection from './HeroSection'
import WorkSection from './WorkSection'
import About from './About'
import Services from './Services'

const Home = () => {
  return (
    <div>
      {/* =============== Hero Section ==================== */}
      <HeroSection />

      {/* =============== Work Section ==================== */}
      <WorkSection />
      {/* =============== About Section ==================== */}
      <About />
      {/* =============== Service Section ==================== */}
      <Services />

    </div>
  )
}

export default 
Home