import React, { useState } from 'react'

const initialState = {
    name: '',
    phoneNumber: '',
    email: '',
    comments: ''
}

const encode = (data) => {
    return Object.keys(data).map(key => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
    }).join("&")
}

function ContactForm() {
    const [formData, setFormData] = useState(initialState)
    const [formSuccess, setFormSuccess] = useState(false)


    const handleSubmit = ( event ) => {
        event.preventDefault()
        fetch("/", {
            method: 'POST',
            headers: { "Content-Type": 'application/x-www-form-urlencoded'},
            body: encode({ 
                "form-name": "contact",
                ...formData
            })
            .then(() => {
                setFormSuccess(!formSuccess)
                setFormData(initialState)
            })
            .catch(error => alert(error))

        })

    }

    const handleChange = ( event ) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div>
            {formSuccess ?
                <h3>Thank you for interest well be in contact soon</h3>
                :
                <form className="contact__form" name="contact"  method="post">
                    <label>Name:</label>
                    <input name="name"/>
                    <label>Phone Number:</label>
                    <input name="phoneNumber"/>
                    <label>Email Address:</label>
                    <input type="email" name="email" />
                    <label>Comments</label>
                    <textarea name="comments"/>
                    <input type="hidden" name="contact" value="contact" />
                    <input type="submit" value="Contact Us"/>
                </form>
            }
        </div>
    )
}

export default ContactForm
{/* <form className="contact__form" name="contact" onSubmit={handleSubmit} method="post">
                    <label>Name:</label>
                    <input name="name" value={formData.name} onChange={handleChange}/>
                    <label>Phone Number:</label>
                    <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}/>
                    <label>Email Address:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                    <label>Comments</label>
                    <textarea name="comments" value={formData.comments} onChange={handleChange}/>
                    <input type="hidden" name="contact" value="contact" />
                    <input type="submit" value="Contact Us"/>
                </form> */}