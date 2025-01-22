import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container}>
            <h2>About</h2>
            <div>
                <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop" />
                <ul>
                    <li>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="arrow icon" />
                        <div>
                            <h1>Frontend Developer</h1>
                            <p>2+ Years working with JavaScript and its main frameworks React, Angular and NodeJS </p>
                        </div>
                    </li>
                    <li>
                        <img src={getImageUrl("about/serverIcon.png")} alt="arrow icon" />
                        <div>
                            <h1>Backend Developer</h1>
                            <p>2+ Years of Object-Oriented Programming (OOP) experience with Java (Spring Framework) and C# (Asp.net)</p>
                        </div>
                    </li>
                    
                    <li>
                        <img src={getImageUrl("about/uiIcon.png")} alt="arrow icon" />
                        <div>
                            <h1>Database Developer</h1>
                            <p>5+ Years of proven experience working with databases including PL/SQL, SQL Server, MySQL, MongoDB and PostgreSQL</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default About;