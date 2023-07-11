import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import Index from '../components/Index'
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'
import Curriculum from '../components/Curriculum'
import Contact from '../components/Contact'
import HeaderNav from '../components/layout/HeaderNav'
import Footer from '../components/layout/Footer'

const MyRoutes = () => {
  return (
    <BrowserRouter>
        <HeaderNav/>
        <section className='content'>
            <Routes>
                <Route path='/' element={<Navigate to="/index" />}></Route>
                <Route path='/index' element={<Index/>}></Route>
                <Route path='/portfolio' element={<Portfolio/>}></Route>
                <Route path='/services' element={<Services/>}></Route>
                <Route path='/curriculum' element={<Curriculum/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='*' element={
                  <div className='page'>
                    <h1 className='heading'>Error 404</h1>
                  </div>
                } />
            </Routes>
        </section>
        <Footer/>
    </BrowserRouter>
  )
}

export default MyRoutes