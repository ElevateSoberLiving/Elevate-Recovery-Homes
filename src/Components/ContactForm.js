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
        console.log(formData)
        event.preventDefault()
        fetch("/", {
            method: 'POST',
            headers: { "Content-Type": 'application/x-www-form-urlencoded'},
            body: encode({ 
                "form-name": "contact",
                ...formData
                })
            })
            .then((message) => {
                console.log(message)
                setFormSuccess(!formSuccess)
                setFormData(initialState)
            })
            .catch(error => {
                console.log(error)
                alert(error)
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
            { false ?
                <h3>Thank you for interest well be in contact soon</h3>
                :
                <form className="contact__form" name="contact"  method="post" onSubmit={handleSubmit} >
                    <label>Name:</label>
                    <input name="name"value={formData.name} onChange={handleChange} />
                    <label>Phone Number:</label>
                    <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}/>
                    <label>Email Address:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                    <label>Comments</label>
                    <textarea id="" name="comments" value={formData.comments} onChange={handleChange}/>
                    <input type="hidden" name="contact" value="contact" />
                    <input type="submit" value="Contact Us"/>
                </form>
            }
        </div>
    )
}

export default ContactForm
