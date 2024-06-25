import React, { useState, useRef, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import '../components/Navbar.css'; // Import the CSS file

const useOutsideClick = (ref, callback) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, callback]);
};

const CustomNavbar = () => {
    const [aboutOpen, setAboutOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    useOutsideClick(aboutRef, () => setAboutOpen(false));
    useOutsideClick(contactRef, () => setContactOpen(false));

    const handleAboutToggle = () => {
        setAboutOpen(!aboutOpen);
    };

    const handleContactToggle = () => {
        setContactOpen(!contactOpen);
    };

    return (
        <Navbar expand="lg" className="navbar-custom">
            <Container>
                <Navbar.Brand href="http://localhost:3000/#home">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtEZKXbu76czE7aU6Fpk8Bpo5_ZdJDjqDhuA&s" // Replace with your logo path
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Brand logo"
                    />{' '}
                    <h1>ABHISHEK KUMAR</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* Empty Nav to push right items to the right */}
                    </Nav>
                    <Nav className="right-items">
                        <div className="dropdown" ref={aboutRef}>
                            <button
                                className="dropdown-toggle"
                                onClick={handleAboutToggle}
                            >
                                About
                            </button>
                            <div
                                className={`dropdown-menu ${aboutOpen ? 'show' : ''}`}
                                aria-labelledby="aboutDropdown"
                            >
                                <NavDropdown.Item href="#about">
                                    About Us
                                </NavDropdown.Item>
                            </div>
                        </div>
                        <div className="dropdown" ref={contactRef}>
                            <button
                                className="dropdown-toggle"
                                onClick={handleContactToggle}
                            >
                                Contact
                            </button>
                            <div
                                className={`dropdown-menu ${contactOpen ? 'show' : ''}`}
                                aria-labelledby="contactDropdown"
                            >
                                <NavDropdown.Item href="mailto:kumarabhishek44279@gmail.com">
                                    Mail
                                </NavDropdown.Item>
                                <NavDropdown.Item href="tel:+917518531311">
                                    phone no.
                                </NavDropdown.Item>
                                <NavDropdown.Item href="https://chat.whatsapp.com/JdbD2Hx8Mi2FiZqMy4hgfH">
                                    whatshapp
                                </NavDropdown.Item>
                                <NavDropdown.Item href="https://www.github.com/abhishekai0.git">
                                    github
                                </NavDropdown.Item>
                                <NavDropdown.Item href="https://www.instagram.com/kumar.abhishek44279/?igsh=MXJ0aDV6dGpsNjIzNg%3D%3D">
                                    Instagram
                                </NavDropdown.Item>
                                <NavDropdown.Item href="https://www.linkedin.com/in/abhishekkumarai0">
                                    LinkedIn
                                </NavDropdown.Item>
                            </div>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;
