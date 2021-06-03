import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function FaqCollapse({ question, children, key}) {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    const findLink = (answer) => {
        if(/LINK TO CONTACT US/.test(answer) ){
            let newAnswer = answer.replace(/LINK TO CONTACT US/g, '')
            return {
                newAnswer,
                show: true
            }
        } else{
            return {newAnswer: answer}
        }
    }

    return (
        <div className="cards" key={key}>
            <div className="faq__question-container">
                <h4 className="faq__question">Q: {question}</h4>
                <div className="arrows" onClick={handleClick} >
                    {clicked ? <FaAngleUp /> : <FaAngleDown />}
                </div>
            </div>
            {
                clicked
                    ? (
                        <div className="faq__answer-container">
                            <p className="faq__answer"><b>A:</b> {findLink(children).newAnswer} {findLink(children).show ? <Link id="contact-in-answer" to="contact">CONTACT US</Link> : null }</p>
                        </div>
                    )
                    : ''
            }

        </div>
    )
}

export default FaqCollapse
