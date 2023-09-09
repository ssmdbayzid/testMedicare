import React from 'react'
import HeroSection from './HeroSection'
import WorkSection from './WorkSection'
import About from './About'
import Services from './Services'
import VirtualSupport from './VirtualSupport.'
import Doctors from './Doctors'
import FAQ from './FAQ'

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
      {/* =============== Virtual Support Section ==================== */}
      <VirtualSupport />
      {/* =============== Doctors Section ==================== */}
      <Doctors />
      {/* =============== FAQ Section ==================== */}
      <FAQ />

    </div>
  )
}

export default 
Home