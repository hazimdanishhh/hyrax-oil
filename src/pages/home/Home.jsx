import React from 'react'
import Layout from '../Layout'
import "./home.scss";

function Home() {
  return (
    <div>
      <Layout />
      
      {/* CAROUSEL TOP SECTION */}
      <section id="home-top">
        <div>
          <h2 className='home-title'>We Are The Lubricants Experts</h2>
        </div>
      </section>

      {/* BEST LUBRICANTS SECTION */}
      <section id="best-lubricants">
        <div>
          <h2>Only The Best Lubricants For The World</h2>
        </div>
      </section>
    </div>
  )
}

export default Home