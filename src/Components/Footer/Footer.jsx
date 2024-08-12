import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/Smart - Logo.jpg';
import instagram_icon from '../Assets/instagram.png';
import facebook_icon from '../Assets/facebook.png';
import whatsapp_icon from '../Assets/whatsapp.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    const handleClick = () => {
        window.scrollTo(0, 0);
      };

  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>Smart Shopping Assistant</p>
        </div>
        <ul className="footer-links">
            <Link onClick={handleClick()}><li>Company</li></Link>
            <Link onClick={handleClick()} to={'/aboutus'}><li>About</li></Link>
            <Link onClick={handleClick()} to={'/contactus'}><li>Contact</li></Link>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <img src={instagram_icon} alt="Instagram" />
                </a>
            </div>
            <div className="footer-icons-container">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <img src={facebook_icon} alt="Facebook" />
                </a>
            </div>
            <div className="footer-icons-container">
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img src={whatsapp_icon} alt="WhatsApp" />
                </a>
            </div>
        </div>

        <div className="footer-copywrite">
            <hr />
            <p>Copywrite @ 2023 - All Rights Reserved.</p>
        </div>
        <div className='go-up'>
            <a href="#top" className="go_top" data-go-top>
                <button>Go Back up</button>
            </a>
        </div>
    </div>
  );
}

export default Footer;