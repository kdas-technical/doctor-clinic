import React from 'react'

import Hero from '../components/Hero'
import Doctor from '../components/Doctor'
import Services from '../components/Services'
import Chamber from '../components/Chamber'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
    <Navbar/>
  <Hero/>
 <Doctor/>
 <Services/>
 <Chamber/>
 <Contact/>
    </>
  )
}

export default Home