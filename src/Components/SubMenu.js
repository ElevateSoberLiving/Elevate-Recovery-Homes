import React from 'react'

function SubMenu({ children }) {
    return (
        <ul className="navbar__menu--submenu">
            {children}
        </ul>
    )
}

export default SubMenu
