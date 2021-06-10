import React from 'react'

function ContactForm() {
    return (
        <form className="contact__form" netlify>
            <label>Name:</label>
            <input name="name"/>
            <label>Phone Number:</label>
            <input name="phone-number"/>
            <label>Email Address:</label>
            <input type="email" name="email" />
            <label>Comments</label>
            <textarea name="comments"/>
            <input type="submit" value="Contact Us"/>
        </form>
    )
}

export default ContactForm
