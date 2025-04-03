import React from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Herbert Parasio - Full Stack Developer</h1>
      <p className={styles.description}>
        Full Stack developer with strong background working with Databases, Javascript and C#/Java -`{'>'}` .Net/Spring!
    </p>
    <a href="mailto:herbert.parasio@gmail.com" className={styles.contactBtn}> Contact Me</a>
    </div>
    <img src={getImageUrl('hero/Hero.png')} alt="Hero" className={styles.heroImg} />
    <div className={StyleSheet.topBlur}/>
    <div className={StyleSheet.bottomBlur}/>
    </section>
  );
};