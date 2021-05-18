import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp} from 'react-icons/fa'

function Collapsible({header, children}) {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <div className="cards">
            <h4>{header}</h4>
            {
            clicked 
            ? (
                <ul>
                    {children}
                </ul>
            )
            : ''
            }
            <div className="arrows" onClick={handleClick} >
                { clicked ? <FaAngleUp /> : <FaAngleDown />}
            </div>
        </div>
    )
}

export default Collapsible