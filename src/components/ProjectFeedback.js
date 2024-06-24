import React from 'react';
import './ProjectFeedback.css'; // Import the CSS file
const ProjectFeedback = () => {
    return (
        <section id="project-feedback" className="instagram-post">
            <h2>Projects</h2>
            <div className="post-container">
            <h3>youtube clone</h3>
                <img src="https://www.searchenginejournal.com/wp-content/uploads/2019/11/73973896-5e16-4c43-98c4-39b8bccce5f2-5dc4af58e0ff1-680x357.jpeg" alt="Project" className="post-image" />
                <p className="post-description">
                    Insert project description here. 
                    Check out the <a href="https://github.com/Abhishek-ai966/Abhi" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
                </p>
            </div>
            <div className="post-container">
            <h3>Hospital Management System</h3>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH9D56a3MJd-7NDGAi8Oso6_gGjvxHmxEP-w&s" alt="Project" className="post-image" />
                <p className="post-description">
                    Insert project description here. 
                    Check out the <a href="https://github.com/abhishekai0/hospital-managment.git" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
                </p>
            </div><div className="post-container">
                <img src="a.png" alt="ABHITV" className="post-image" />
                <p className="post-description">
                    Insert project description here. 
                    Check out the <a href="https://github.com/your-repo-link" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
                </p>
            </div>
        </section>
    );
};

export default ProjectFeedback;
