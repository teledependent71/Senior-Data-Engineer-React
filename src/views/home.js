import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Senior Data Engineer</title>
        <meta property="og:title" content="Senior Data Engineer" />
      </Helmet>
    </div>
  )
}

export default Home
