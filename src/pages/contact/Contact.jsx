import React, { useEffect } from 'react'
import Layout from '../Layout'

function Contact() {
  useEffect(() => {
    document.title = 'Hyrax Oil | Contact Us'; // Quick solution
  }, []);

  return (
    <div>
    <Layout />

    <h1>Contact</h1>
  </div>
  )
}

export default Contact