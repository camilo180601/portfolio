import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderNav = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <span>C</span>
                <h3>Camilo Lopez</h3>
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