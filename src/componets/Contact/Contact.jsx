import React from 'react'

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer className={styles.container} id='contact'>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src="./assets/contact/emailIcon.png" alt="Email Icon" />
                <a href="mailto:ankushjoshi706@gmail.com">Myemail@email.com</a>
            </li>

            <li className={styles.link}>
                <img src="./assets/contact/linkedinIcon.png" alt="Linkedin Icon" />
                <a href="https://www.linkedin.com/in/ankush-joshi-56a94418b ">Linkedin.com</a>
            </li>

            <li className={styles.link}>
                <img src="./assets/contact/githubIcon.png" alt="Github Icon" />
                <a href="https://github.com/ankushjoshi706">Github.com</a>
            </li>
          
             <li className={styles.link}>
                <img src="./assets/contact/phone.png" alt="Github Icon" />
                <a href="#">+91-9660209413</a>
            </li>
        </ul>
    </footer>
  )
}
