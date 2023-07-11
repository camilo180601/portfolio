import React from 'react'
import { works } from '../data/works'

const Portfolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Portfolio</h1>
      {
        works.map(work => (
          <article key={work.id}>
            <span>{work.category}</span>
            <h2>{work.name}</h2>
            <h3>{work.technologies}</h3>
          </article>
        ))
      }
    </div>
  )
}

export default Portfolio 