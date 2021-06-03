import React from 'react'
import WhiteLogo from "../Assets/Logos/Elevate Logo Files/WEB/Elevate_Logo_Horizontal_White01_RGB@2x.png"
import { Link } from 'react-router-dom'
import { FaTwitterSquare, FaInstagram, FaFacebookSquare } from 'react-icons/fa'

function Footer() {
    return (
        <div className="footer">
            <img className="footer__logo" src={WhiteLogo} alt="Elevate Recovery Logo" />
            <div className="footer__mid-container" >
                <div className="footer__social">
                    <div><FaFacebookSquare /></div>
                    <div><FaInstagram /></div>
                    <div><FaTwitterSquare /></div>
                    {/* <a target="_blank" rel="noreferrer noopener"><FaFacebookSquare /></a>
                    <a target="_blank" rel="noreferrer noopener"><FaInstagram /></a>
                    <a target="_blank" rel="noreferrer noopener" ><FaTwitterSquare /></a> */}
                </div>
                <hr id="footer-break" />
                <ul className="footer__menu">
                    <li >
                        <Link className="links" to="/" >Home</Link>
                    </li>
                    <li >
                        <Link className="links" to="/about">About us</Link>
                    </li>
                    <li >
                        <Link className="links" to="/location">Location</Link>
                    </li>
                    <li >
                        <Link className="links" to="/program">Program</Link>
                    </li>
                    <li >
                        <Link className="links" to="/admissions">Admissions</Link>
                    </li>
                    <li >
                        <Link className="links" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <p id="copyright">© copyright 2021</p>
        </div>
    )
}

export default Footer
