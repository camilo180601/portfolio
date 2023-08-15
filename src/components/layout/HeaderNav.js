import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderNav = () => {
    return (
        <header className='header'>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"></link>
            <div className='logo'>
                <span>C</span>
                <h3>amilo Lopez</h3>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/index" className={({isActive}) => isActive ? 'active' : ''}>Start</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" className={({isActive}) => isActive ? 'active' : ''}>Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" className={({isActive}) => isActive ? 'active' : ''}>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculum" className={({isActive}) => isActive ? 'active' : ''}>Curriculum</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderNav