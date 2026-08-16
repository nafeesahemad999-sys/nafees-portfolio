import React from 'react';
// import { personalInfo } from '../../data/resumeData';
import { FaLinkedin } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>
        Crafted with <span className="heart">♥</span> by{' '}
         <span className="name">Nafees</span>
         {/* <a href='https://www.linkedin.com/in/mudassir5620?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
            <span className='mylinkedin'>
            <FaLinkedin />
            </span>
          </a> */}
        &nbsp;|&nbsp; &copy; {new Date().getFullYear()}
        &nbsp;|&nbsp; <span className="status"> ALL SYSTEMS OPERATIONAL</span>
      </p>
    </footer>
  );
}

export default Footer;
