import React, { useEffect } from 'react'
import Layout from '../Layout'

function Info() {
  useEffect(() => {
    document.title = 'Hyrax Oil | Info'; // Quick solution
  }, []);

  return (
    <div>
    <Layout />

    <h1>Info</h1>
  </div>
  )
}

export default Info