import React from 'react'

const Services = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Services</h1>
      <section className='services'>
        <article className='service'>
          <h2>Custom Web Solutions</h2>
          <p>
            Develop custom web applications or solutions based on client requirements, 
            offering unique and tailored solutions to meet their specific needs.
          </p>
        </article>
      </section>
      <section className='services'>
        <article className='service'>
          <h2>Website Maintenance and Support</h2>
          <p>
            Offer ongoing maintenance and support services to ensure websites are running 
            smoothly, perform regular updates, security checks, and handle technical issues.
          </p>
        </article>
      </section>
      <section className='services'>
        <article className='service'>
          <h2>Web Application Development</h2>
          <p>
            Build web applications tailored to specific business needs, utilizing technologies 
            like Node.js, Express.js, Laravel, React, and MySQL for backend development and database management.
          </p>
        </article>
      </section>
      <section className='services'>
        <article className='service'>
          <h2>Responsive Design</h2>
          <p>
            Create websites that are optimized for different devices, ensuring a seamless user experience across 
            desktop, mobile, and tablet devices.
          </p>
        </article>
      </section>
    </div>
  )
}

export default Services