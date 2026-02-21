import React from 'react';
import styles from '../styles/Education.module.css';
import DecipherText from './DecipherText';

const educationData = [
  {
    id: "001",
    binaryId: "01000001",
    degree: "Master of Computer Applications (MCA)",
    institution: "APJ Abdul Kalam Technological University, Kerala",
    terraCycle: "2023 - 2025",
    description: "Specializing in Advanced Web Technologies and Artificial Intelligence. Leading projects in full-stack development and cloud computing."
  },
  {
    id: "002",
    binaryId: "01000010",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "University of Calicut",
    terraCycle: "2020 - 2023",
    description: "Graduated with honors. Focused on core programming paradigms, database management, and modern web application architectures."
  },
  {
    id: "003",
    binaryId: "01000011",
    degree: "Secondary Education",
    institution: "St. Gemma's Girls' HSS, Malappuram",
    terraCycle: "2018 - 2020",
    description: "Major in Computer Applications. Developed early interest in coding and software logic."
  }
];

const Education = () => {
  return (
    <section className={styles.education} id="education">
      <div className={styles.gridOverlay}></div>
      
      <h2 className={styles.heading}>
        <DecipherText text="Education" delay={300} />
      </h2>
      
      <div className={styles.moduleGrid}>
        {educationData.map((item) => (
          <div key={item.id} className={styles.moduleCard}>
            <div className={styles.techRingWrapper}>
              <svg className={styles.techRing} viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" className={styles.ringOuter} />
                <circle cx="50" cy="50" r="35" className={styles.ringInner} />
                <path d="M 50 10 A 40 40 0 0 1 90 50" className={styles.ringPath} />
              </svg>
            </div>

            <div className={styles.cardHeader}>
              <span className={styles.entryId}>NODE_ID: {item.binaryId}</span>
              <span className={styles.cycle}>TERRA_CYCLE: {item.terraCycle}</span>
            </div>
            
            <div className={styles.cardContent}>
              <h3 className={styles.degree}>{item.degree}</h3>
              <h4 className={styles.institution}>{item.institution}</h4>
              <p className={styles.description}>{item.description}</p>
            </div>

            <div className={styles.cardFooter}>
              <span className={styles.status}>// STATUS: VERIFIED</span>
              <div className={styles.scanBar}></div>
            </div>
            
            <div className={styles.brackets}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
