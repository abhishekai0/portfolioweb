import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '1rem',  }}>
            <div style={{ marginBottom: '1rem' }}>
                <a href="mailto:your-email@example.com" style={{ margin: '0 10px', color: '#000' }}>
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/your-linkedin-profile" style={{ margin: '0 10px', color: '#0e76a8' }}>
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://twitter.com/your-twitter-handle" style={{ margin: '0 10px', color: '#00acee' }}>
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
            </div>
            <p>© 2024 ABHISHEK AI. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
