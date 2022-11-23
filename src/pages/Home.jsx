import React from 'react'
import Contact from '../components/Contact'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Pricing/>
      <Testimonials/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
