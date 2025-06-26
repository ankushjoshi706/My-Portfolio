import React from 'react'
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img className={styles.aboutImage} src="./assets/about/me1.png" alt='Me searching'/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src="public/assets/about/cursorIcon.png" alt="cusor imgage"/>
                    <div className={styles.aboutText}>
                        <h3>Frontend Developer</h3>
                        <p>
                            I'm a frontend developer with experience in building and optimized sites
                        </p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src="./assets/about/servericon.png" alt="server imgage"/>
                    <div className={styles.aboutText}>
                        <h3>Backend Developer</h3>
                        <p>
                            I have experience developing fast and optimised and APIs
                        </p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src="./assets/about/uiIcon.png" alt="UI  imgage"/>
                    <div className={styles.aboutText}>
                        <h3>UI Designer</h3>
                        <p>
                            I have designed multiple landing pages and have system as well
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
