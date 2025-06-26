import React from 'react'

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer className={styles.container} id='contact'>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Fell free to react out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src="./assests/contact/emailIcon.png" alt="Email Icon" />
                <a href="mailto:ankushjoshi706@hmail.com">Myemail@email.com</a>
            </li>

            <li className={styles.link}>
                <img src="./assests/contact/linkedinIcon.png" alt="Linkedin Icon" />
                <a href="https://www.linkedin.com/in/ankush-joshi-56a94418b ">Linkedin.com</a>
            </li>

            <li className={styles.link}>
                <img src="./assests/contact/githubIcon.png" alt="Github Icon" />
                <a href="https://github.com/ankushjoshi706">Github.com</a>
            </li>
            
        </ul>
    </footer>
  )
}
