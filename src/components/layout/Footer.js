import React from 'react'

const Footer = () => {
    
    const year = new Date().getFullYear();

    return (
        <footer className='footer'>
            Portfolio Camilo Lopez &copy; {year}
        </footer>
    )
}

export default Footer