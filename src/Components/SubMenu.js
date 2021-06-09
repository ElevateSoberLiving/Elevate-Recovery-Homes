import React, { useState } from 'react'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'

function SubMenu({ children }) {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => setClicked(!clicked)

    return (
        <>
            <div className="nav-arrows" onClick={handleClick} >
                {clicked ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <ul className={clicked ? "navbar__menu--submenu active" : "navbar__menu--submenu"}>
                {children}
            </ul>
        </>
    )
}

export default SubMenu
