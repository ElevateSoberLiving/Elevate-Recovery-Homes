import React from 'react'

function Hamburger({ setShowMenu, showMenu }) {
    const handleClick = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className="hamburger" onClick={handleClick}>
            <div className={`hamburger__one${!showMenu ? `--active`  : ''}`}></div>
            <div className={`hamburger__two${!showMenu ? `--active` : ''}`}></div>
            <div className={`hamburger__three${!showMenu ? `--active` : ''}`}></div>
        </div>
    )
}

export default Hamburger
