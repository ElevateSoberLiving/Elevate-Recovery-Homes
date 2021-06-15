import React from 'react'
import FaqCollapse from '../Components/FaqCollapse'
import { FAQ as FAQData } from '../Assets/Data/FAQ'
import { Link } from 'react-router-dom'

function FAQ() {
    const handleFaqData = () => {
        return FAQData.map(({ q, a }, index) => {
            return (
                <FaqCollapse question={q} key={index}>
                    {a}
                </FaqCollapse>
            )
        })
    }
    return (
        <div className="faq">
            <div className="faq__header">
                <h2>FAQ</h2>
                <h3>FREQUENTLY ASKED QUESTIONS</h3>
                <hr/>
                <div>
                    <p>Still have questions after reading through the FAQ?  Please contact us.</p>
                    <Link id="faq-button" to="/contact">CONTACT US</Link>
                </div>
            </div>
            {handleFaqData()}
            <h4 id="faq-bottom-line">DIDN'T FIND THE ANSWER YOU WERE LOOKING FOR? PLEASE CONTACT US, AND WE WILL GET BACK TO YOU AS SOON AS POSSIBLE. <Link id="smaller-contact" to="/contact">CONTACT</Link></h4>
        </div>
    )
}

export default FAQ
