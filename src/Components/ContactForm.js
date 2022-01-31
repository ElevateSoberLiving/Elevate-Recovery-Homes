import React from 'react'

// const initialState = {
//     name: '',
//     phoneNumber: '',
//     email: '',
//     comments: ''
// }

// const encode = (data) => {
//     return Object.keys(data).map(key => {
//         return encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
//     }).join("&")
// }

function ContactForm() {
    // const [formData, setFormData] = useState(initialState)
    // const [formSuccess, setFormSuccess] = useState(false)


    // const handleSubmit = ( event ) => {
    //     console.log(formData)
    //     event.preventDefault()
    //     fetch("/", {
    //         method: 'POST',
    //         headers: { "Content-Type": 'application/x-www-form-urlencoded'},
    //         body: encode({ 
    //             "form-name": "contact",
    //             ...formData
    //             })
    //         })
    //         .then((message) => {
    //             setFormSuccess(!formSuccess)
    //             setFormData(initialState)
    //         })
    //         .catch(error => {
    //             alert(error)
    //         })
    // }

    // const handleChange = ( event ) => {
    //     setFormData({
    //         ...formData,
    //         [event.target.name]: event.target.value
    //     })
    // }

    return (
        <div className="contact__form">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSer_CXzGXLVpYM-7s1NBXEHm6J5mNb1eUWErN3wzpRSd3ZOAQ/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0" title="Elevate Recovery Home Intake/Contact Form">Loading…</iframe>
        </div>
    )
}

export default ContactForm
