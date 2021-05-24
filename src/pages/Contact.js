import React from 'react'
import ContactForm from '../Components/ContactForm'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"

function Contact() {
    return (
        <div className="contact">
            <div className="contact__form-parent">
                <div className="contact__form-container">
                    <div>
                        <h2>ARE YOU READY TO TAKE BACK CONTROL?</h2>
                        <h2>Are you ready to take back control?</h2>
                        <p>For more information on our Sober Living Community, either call us or fill out the contact form and we will be in touch with you soon.</p>
                    </div>
                    <ContactForm />
                </div>
                <div className="contact__form-parent--address-container">
                    <div className="contact__form-container--header">
                        <h3>Contact Info</h3>
                        <hr />
                    </div>
                    <div>
                        <FaMapMarkerAlt className="contact__icons" />
                        <h5>3004 W TUFTS AVE,<br /> ENGLEWOOD, CO 80110</h5>
                    </div>
                    <div>
                        <FaPhone className="contact__icons" />
                        <h5>(720) 300-3861</h5>
                    </div>
                    <div>
                        <FaEnvelope className="contact__icons" />
                        <h5>INFO@ELEVATERECOVERYHOMES.COM</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
