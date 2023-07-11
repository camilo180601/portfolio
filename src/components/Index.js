import React from 'react'
import { Link } from 'react-router-dom'
import ListWorks from './ListWorks'

const Index = () => {
  return (
    <div className='home'>
      <h1>
        Hello, I'm <strong>Camilo Lopez</strong>, a web developer based in Bogotá,
        and I offer my <strong>programming</strong> and <strong>development</strong> services for 
        all types of web projects.
      </h1>
      <h2 className='title'>
        I help you create your website or web application,
        gain more visibility and relevance on the web. <Link to='/contact'>Contact me</Link>
      </h2>
      <section className='lasts-works'>
        <h2 className='heading'>Some of my projects</h2>
        <p>These are some of my web development works.</p>
        <ListWorks limit="2" />
      </section>
    </div>
  )
}

export default Index