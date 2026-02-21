import React from 'react';
import styles from '../styles/Skills.module.css';
import DecipherText from './DecipherText';

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5 & CSS3", level: 97 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "React.js", level: 80 },
      { name: "Tailwind CSS", level: 60 },
      { name: "Sass", level: 60 }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Mysql", level: 70 },
      { name: "Php", level: 65 },
      { name: "Python", level: 60 },
      { name: "Java", level: 60 }
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Documentation Tools", level: 98 },
      { name: "Responsive Design", level: 95 },
      { name: "VS Code", level: 90 },
      { name: "Git", level: 85 },
      { name: "GitHub", level: 70 }
    ]
  }
];

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.gridOverlay}></div>
      <h2 className={styles.heading}>
        <DecipherText text="Skills" delay={300} />
      </h2>
      <div className={styles.container}>
        {skillsData.map((category, index) => (
          <div key={index} className={styles.categoryCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.categoryTitle}>{category.category}</h3>
              <div className={styles.headerLine}></div>
            </div>
            
            <div className={styles.skillGrid}>
              {category.skills.map((skill, idx) => (
                <div key={idx} className={styles.skillNode}>
                  <div className={styles.gaugeWrapper}>
                    <svg className={styles.gauge} viewBox="0 0 100 100">
                      <circle className={styles.gaugeBg} cx="50" cy="50" r="45" />
                      <circle 
                        className={styles.gaugeValue} 
                        cx="50" 
                        cy="50" 
                        r="45" 
                        style={{ 
                          strokeDasharray: `${2 * Math.PI * 45}`,
                          strokeDashoffset: `${2 * Math.PI * 45 * (1 - skill.level / 100)}` 
                        }} 
                      />
                    </svg>
                    <div className={styles.skillPercent}>{skill.level}%</div>
                  </div>
                  <span className={styles.skillName}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
