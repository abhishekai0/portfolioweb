import React from 'react';
import './AboutMe.css'; // Corrected import statement

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <img src="https://media.licdn.com/dms/image/D5603AQG8gke_84jKsg/profile-displayphoto-shrink_400_400/0/1718479240882?e=1724889600&v=beta&t=JlIFKcMpDu0tyktSH9sHMJTUBLyBB0SExe7fdZflgB8" alt="Abhishek Kumar" className="profile-pic" />
      <h1>Abhishek Kumar</h1>
      <table className="details-table">
        <tbody>
          <tr>
            <td><strong>profession</strong></td>
            <td><p> MEAN STACK WEB DEVELOPER </p>
            </td>
          </tr>
          <tr>
            <td><strong>Address:</strong></td>
            <td>BARAHI NEWADA <h4>VARANASI (221207)</h4></td>
          </tr>
          <tr>
            <td><strong>Birthday:</strong></td>
            <td><h4>JUNE,20,2006</h4></td>
          </tr>
          <tr>
            <td><strong>Study:</strong></td>
            <td>B.TECH ,CSE from G.I.E.T UNIVERSITY</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AboutMe;
