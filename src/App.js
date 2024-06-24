import React, { useState } from 'react';
import CustomNavbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import ProjectFeedback from './components/ProjectFeedback';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education'; // Import Education component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
    const [mode, setMode] = useState('light');

    const toggleMode = () => {
        setMode(mode === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={`app ${mode}`}>
            <CustomNavbar />
            {/* AboutMe component */}
            <AboutMe />
            {/* Education component */}
            <Education />
            {/* Skills component */}
            <Skills />
            {/* ProjectFeedback component */}
            <ProjectFeedback />
            {/* Contact component */}
            <Contact />
            {/* Footer component */}
            <Footer />
            {/* Mode toggle button */}
            <div className="mode-toggle" onClick={toggleMode}>
                {mode === 'light' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
            </div>
        </div>
    );
}

export default App;
