import React from 'react'

const Contact = () => {
    return (
        <div className='page'>
            <h1 className='heading'>Contact</h1>
            <form className='contact' action="mailto:camilo06180401@gmail.com">
                <input type='text' placeholder='Name' autocomplete="on" />
                <input type='text' placeholder='Last name' autocomplete="on" />
                <input type='email' placeholder='Email' autocomplete="on" />
                <textarea placeholder='Reason for contact' autocomplete="on" />
                <input type='submit' value='Send' />
            </form>
        </div>
    )
}

export default Contact