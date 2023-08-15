import React from 'react'
import { FaDownload } from 'react-icons/fa';

const Curriculum = () => {

    const handleDownload = () => {
        console.log("download pdf");
        const link = document.createElement('a');
        link.href = 'curriculum.pdf'; // Ruta al archivo PDF en la carpeta public
        link.download = 'curriculum.pdf';
        link.click();
    };

    return (
        <div className='page'>
            <div className='clearfix'>
                <h1 className='heading float-start'>Curriculum vitae</h1>
                <button onClick={handleDownload} className='float-end'>
                    <FaDownload />
                </button>
            </div>
            <br/>
            <h2>Experience</h2>
            <ul>
                <li>Software Engineer Developer, October 2022 - Present.</li>
            </ul>
            <ul>
                <li>Freelance Software Developer, June 2021 - October 2022.</li>
            </ul>
            <h2>Knowledge</h2>
            <ul>
                <li>PHP</li>
                <li>Laravel</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>NodeJS</li>
                <li>AWS(EC2)</li>
                <li>MySQL</li>
                <li>NoSQL</li>
                <li>Linux Ubuntu</li>
            </ul>
            <h2>Education</h2>
            <ul>
                <li> UMNG. Computer Engineering (2019-2024) </li>
                <li> Master en React: Aprender ReactJS, Hooks, MERN, NodeJS, JWT+ </li>
                <li> Master en PHP, SQL, POO, MVC, Laravel, Symfony, WordPress + </li>
                <li> Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS </li>
            </ul>
        </div>
    )
}

export default Curriculum