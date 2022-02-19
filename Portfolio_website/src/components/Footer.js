import React from 'react';
import linkedin from '../images/icons/linkedin_transparent.png';
import gitHub from '../images/icons/gitHub.png';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <a href="https://github.com/LeandroParisi/" target="_blank" rel="noopener noreferrer"><img className="footer-icon" src={gitHub} alt="GitHub Icon" /></a>
        <p>|</p>
        <a href="https://www.linkedin.com/in/leandro-parisi/" target="_blank" rel="noopener noreferrer"><img className="footer-icon" src={linkedin} alt="Linkedin Icon" /></a>
      </footer>
    );
  };
}

export default Footer;
