import React from 'react'

function ContactForm() {
    return (
        <form className="contact__form" >
            <label>Name:</label>
            <input />
            <label>Phone Number:</label>
            <input />
            <label>Email Address:</label>
            <input />
            <label>Comments</label>
            <textarea />
            <input type="submit" />
        </form>
    )
}

export default ContactForm
