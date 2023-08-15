import React from 'react'

const Footer = () => {
    
    const year = new Date().getFullYear();

    return (
        <footer className='footer'>
            Portfolio Camilo Lopez &copy; {year} &nbsp; 
            <a href='https://github.com/camilo180601'><i className="bi bi-github"></i></a> &nbsp;
            <a href='https://www.linkedin.com/in/camilo-lopez-aguilar-1806c/'><i className="bi bi-linkedin"></i></a> &nbsp;
        </footer>
    )
}

export default Footer