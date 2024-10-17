import React from 'react'
import Navbar from './(header)/navbar/page'
import Hero from './(body)/hero/page'
import Footer from './(footer)/footer/page'

export default function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}
