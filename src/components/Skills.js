import React from 'react';
import './Skills.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faPython, faJava } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className="skills-container">
                <div className="skill-box">
                    <h3>Front-End</h3>
                    <div className="skill-item">
                        <FontAwesomeIcon icon={faHtml5} className="skill-icon" />
                        <p>HTML</p>
                    </div>
                    <div className="skill-item">
                        <FontAwesomeIcon icon={faCss3Alt} className="skill-icon" />
                        <p>CSS</p>
                    </div>
                    <div className="skill-item">
                        <FontAwesomeIcon icon={faJs} className="skill-icon" />
                        <p>JavaScript</p>
                    </div>
                    <div className="skill-item">
                        <FontAwesomeIcon icon={faReact} className="skill-icon" />
                        <p>React</p>
                    </div>
                </div>
                <div className="skill-box">
                    <h3>Back-End</h3>
                    <div className="skill-item">
                        <FontAwesomeIcon icon={faNodeJs} className="skill-icon" />
                        <p>Node.js</p>
                    </div>
                    <div className="skill-item">
                        <img src="https://img.icons8.com/ios/50/000000/express-js.png" alt="Express.js Icon" className="skill-icon express-icon" />
                        <p>Express.js</p>
                    </div>
                    <div className="skill-item">
                        <FontAwesomeIcon icon={faDatabase} className="skill-icon" />
                        <p>MongoDB</p>
                    </div>
                </div>
                <div className="skill-box">
                    <h3>UI/UX Design</h3>
                    <div className="skill-item">
                        <img src="https://img.icons8.com/color/48/000000/figma.png" alt="Figma Icon" className="skill-icon ui-ux-icon" />
                        <p>Figma</p>
                    </div>
                    <div className="skill-item">
                        <img src="https://img.icons8.com/ios-filled/50/000000/sketch.png" alt="Sketch Icon" className="skill-icon ui-ux-icon" />
                        <p>Sketch</p>
                    </div>
                    <div className="skill-item">
                        <img src="https://img.icons8.com/color/48/000000/adobe-xd.png" alt="Adobe XD Icon" className="skill-icon ui-ux-icon" />
                        <p>Adobe XD</p>
                    </div>
                </div>
                <div className="skill-box">
                    <h3>Languages Known</h3>
                    <div className="skill-item">
                        <img src="#" alt="C" className="skill-icon" />
                        <p>C</p>
                    </div>
                    <div className="skill-item">
                        <FontAwesomeIcon icon={faJs} className="skill-icon" />
                        <p>JavaScript</p>
                    </div>
                    <div className="skill-item">
                        <FontAwesomeIcon icon={faPython} className="skill-icon" />
                        <p>Python</p>
                    </div>
                    <div className="skill-item">
                        <FontAwesomeIcon icon={faJava} className="skill-icon" />
                        <p>Java</p>
                    </div>
                </div>
                {/* Add more skill boxes as needed */}
            </div>
        </section>
    );
};

export default Skills;
