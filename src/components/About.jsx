import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/About.module.css';
import DecipherText from './DecipherText';
import profileImg from '../assets/profile.jpeg';

const useScrambleText = (text, speed = 30) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

  useEffect(() => {
    let interval;
    if (isHovered) {
      let iteration = 0;
      interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, speed);
    } else {
      setDisplayText(text);
    }
    return () => clearInterval(interval);
  }, [isHovered, text, speed]);

  return { displayText, setIsHovered };
};

const About = () => {
  const { displayText, setIsHovered } = useScrambleText("Ayisha Shadhi");
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate tilt based on mouse position relative to center
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = -((y - centerY) / centerY) * 4; // Max 4 degrees for professional subtly
      const rotateY = ((x - centerX) / centerX) * 4; 
      
      cardRef.current.style.setProperty('--mouse-x', `${x}px`);
      cardRef.current.style.setProperty('--mouse-y', `${y}px`);
      cardRef.current.style.setProperty('--rotate-x', `${rotateX}deg`);
      cardRef.current.style.setProperty('--rotate-y', `${rotateY}deg`);
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.setProperty('--rotate-x', `0deg`);
      cardRef.current.style.setProperty('--rotate-y', `0deg`);
    }
  };

  return (
    <section className={styles.about} id="about" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className={styles.gridOverlay}></div>
      <div className={styles.container}>
        <div className={styles.bioCard} ref={cardRef}>
          <div className={styles.spotlight}></div>
          
          <div className={styles.cardLayout}>
            {/* Left Side: Unified Hologram */}
            <div className={styles.imageSide}>
              <div className={styles.hologramWrapper}>
                <div className={styles.scanLine}></div>
                <img 
                  src={profileImg} 
                  alt="Profile" 
                  className={styles.profileImage} 
                />
                <div className={styles.hologramBase}></div>
              </div>
            </div>

            {/* Right Side: Content Side */}
            <div className={styles.contentSide}>
              <h2 className={styles.heading}>
                <DecipherText text="Mission Briefing" delay={300} /> <span className={styles.rocket}>🚀</span>
              </h2>

              <div className={styles.bioContent}>
                <p className={styles.bio}>
                  I'm <span 
                    className={styles.highlight} 
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {displayText}
                  </span>. A forward-thinking MCA graduate on a mission to engineer high-impact digital solutions.
                </p>
                
                <p className={styles.bioSummary}>
                  <strong>Objective:</strong> To bridge the gap between complex logic and seamless user experience through technical precision and creative exploration.
                </p>

                <div className={styles.statsGrid}>
                  <div className={styles.statItem}>
                    <span className={styles.statValue}>100%</span>
                    <span className={styles.statLabel}>Commitment</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statValue}>MCA</span>
                    <span className={styles.statLabel}>Qualified</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statValue}>∞</span>
                    <span className={styles.statLabel}>Curiosity</span>
                  </div>
                </div>

                <p className={styles.bioFooter}>
                  Currently focused on mastering the cosmic arts of full-stack development. One pixel, one logic block, one breakthrough at a time.
                </p>
              </div>

              <div className={styles.skillsPreview}>
                {["React ⚛️", "Full Stack 🛠️", "UI Engineering 💎", "Problem Solving 🧩"].map(skill => (
                  <span key={skill} className={styles.badge}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
