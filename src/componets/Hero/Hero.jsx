import React from 'react'
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I am Ankush Joshi</h1>
            <p className={styles.description}>
                I'm a Aspiring Frontend Developer | Proficient in HTML, CSS, JavaScript, React | Passionate about Building Responsive Web Interfaces
            </p>
            <a href="mailto:ankushjoshi706@gmail.com" className={styles.contentBtn}>Contact Me</a>
        </div>
        <img src="./public/assets/hero/smile-boy.jpg" alt="Hero image of Me" className={styles.heroImg}></img>

        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  )
}
