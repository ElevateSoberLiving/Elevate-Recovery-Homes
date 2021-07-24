import React from 'react'
import WhiteLogo from "../Assets/Logos/Elevate Logo Files/WEB/Elevate_Logo_Horizontal_White01_RGB@2x.png"
import { FaInstagram, FaFacebookSquare } from 'react-icons/fa'

function Footer() {
    return (
        <div className="footer">
            <img className="footer__logo" src={WhiteLogo} alt="Elevate Recovery Logo" />
            <div className="footer__mid-container" >
                <div className="footer__social">
                    <div><a href="https://www.facebook.com/elevaterecoveryhomes" target="_blank" rel="noreferrer noopener"><FaFacebookSquare /></a></div>
                    <div></div>
                    <div><a href="https://www.instagram.com/elevaterecoveryhomes" target="_blank" rel="noreferrer noopener"><FaInstagram /></a></div>
                </div>
            </div>
            <p id="copyright">© copyright 2021</p>
        </div>
    )
}

export default Footer
