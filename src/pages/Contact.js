import React from 'react'

function Contact() {
    return (
        <div className="contact">
            <div className="contact__form-container">
                <div className="contact__form-container--header">
                    <h2>Contact Us</h2>
                    <hr />
                </div>
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
            </div>
        </div>
    )
}

export default Contact
