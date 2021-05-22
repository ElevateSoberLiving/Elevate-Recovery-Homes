import React from 'react'
import ContactForm from '../Components/ContactForm'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"

function Contact() {
    return (
        <div className="contact">
            <div className="contact__form-container">
                <div>
                    <div className="contact__form-container--header">
                        <h2>Contact Us</h2>
                        <hr />
                    </div>
                    <ContactForm />

                </div>
                <div>
                    <div>
                        <FaMapMarkerAlt />
                        <h4>3004 W TUFTS AVE,<br /> ENGLEWOOD, CO 80110</h4>
                    </div>
                    <div>
                        <FaPhone />
                        <h4>(720) 300-3861</h4>
                    </div>
                    <div>
                        <FaEnvelope />
                        <h4>INFO@ELEVATERECOVERYHOMES.COM</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
