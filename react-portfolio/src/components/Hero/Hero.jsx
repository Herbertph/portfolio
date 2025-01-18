import React from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Herbert Parasio - Full Stack Developer</h1>
      <p className={styles.description}>
        5+ Years of proven experience working with databases including PL/SQL, SQL Server, MySQL, MongoDB and PostgreSQL<br/>
        2+ Years working with JavaScript and its main frameworks React, Angular and NodeJS<br/> 
        2+ Years of Object-Oriented Programming (OOP) experience with Java (Spring Boot)
    </p>
    <a href="mailto:herbert.parasio@gmail.com" className={styles.contactBtn}> Contact Me</a>
    </div>
    <img src={getImageUrl('hero/Hero.png')} alt="Hero" className={styles.heroImg} />
    <div className={StyleSheet.topBlur}/>
    <div className={StyleSheet.bottomBlur}/>
    </section>
  );
};