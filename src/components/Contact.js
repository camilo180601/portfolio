import React from 'react'

const Contact = () => {
    return (
        <div className='page'>
            <h1 className='heading'>Contact</h1>
            <form className='contact' action="mailto:camilo06180401@gmail.com">
                <input type='text' placeholder='Name' />
                <input type='text' placeholder='Last name' />
                <input type='email' placeholder='Email' />
                <textarea placeholder='Reason for contact' />
                <input type='submit' />
            </form>
        </div>
    )
}

export default Contact