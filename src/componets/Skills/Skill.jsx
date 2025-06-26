import React from 'react';
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";

export const Skill = () => {
  return (
   <section className={styles.container} id="skill">
    <h2 className={styles.title}>Skills</h2>
    <div className={styles.content}>
           <div className={styles.skills}>
               {skills.map((skill, index) => {
                    const total = skills.length;
                    const angle = (360 / total) * index;
                    const radius = 250; // Adjust radius as needed
                    const x = Math.sin((angle * Math.PI) / 180) * radius;
                    const z = Math.cos((angle * Math.PI) / 180) * radius;

    return (
      <div
        key={index}
        className={styles.skill}
        style={{
          transform: `translate3d(${x}px, -50%, ${z}px) rotateY(${angle}deg)`
        }}
      >
        <div className={styles.skillImageContainer}>
          <img src={skill.imageSrc} alt={skill.title} />
        </div>
        <p>{skill.title}</p>
      </div>
    );
  })}
</div>
<div className={styles.skillcontainer2}>
        <img className={styles.skillcontainerImage1} src='./assests/skills/SK3.png'/>
    </div>

    </div>
   </section>
  )
}
