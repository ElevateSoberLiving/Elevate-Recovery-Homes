import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

function FaqCollapse({ question, children}) {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <div className="cards">
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
                            <p className="faq__answer"><b>A:</b> {children}</p>
                        </div>
                    )
                    : ''
            }

        </div>
    )
}

export default FaqCollapse
