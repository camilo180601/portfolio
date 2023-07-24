import React from 'react'

const Contact = () => {
    return (
        <div className='page'>
            
            <h1 className='heading'>Contact</h1> &nbsp; 
            <a href='https://github.com/camilo180601'><i class="bi bi-github"></i></a> &nbsp;
            <a href='https://www.linkedin.com/in/camilo-lopez-aguilar-1806c/'><i class="bi bi-linkedin"></i></a> &nbsp;
            <form className='contact' action="mailto:camilo06180401@gmail.com">
                <input type='text' placeholder='Name' autocomplete="off" />
                <input type='text' placeholder='Last name' autocomplete="off" />
                <input type='email' placeholder='Email' autocomplete="off" />
                <textarea placeholder='Reason for contact' autocomplete="off" />
                <input type='submit' value='Send' />
            </form>
        </div>
    )
}

export default Contact