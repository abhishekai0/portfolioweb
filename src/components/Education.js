import React from 'react';
import './Education.css'; // Import the CSS file for styling

const Education = () => {
    return (
        <section id="education" className="education-section">
            <h2>Education</h2>
            <div className="education-table">
                <table>
                    <thead>
                        <tr>
                            <th>Qualification</th>
                            <th>Board/University</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>High School</td>
                            <td>GREEN VALLY PUBLIC SCHOOL(CBSE)</td>
                            <td>2018-2019</td>
                        </tr>
                        <tr>
                            <td>Intermediate</td>
                            <td>SREE BHAGIRATHI MAHARAJ INTERCOLLAGE (STATEBOARD)</td>
                            <td>2020-2021</td>
                        </tr>
                        <tr>
                            <td>B.Tech</td>
                            <td>G.I.E.T UNIVERSITY </td>
                            <td>2022-2026</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Education;
