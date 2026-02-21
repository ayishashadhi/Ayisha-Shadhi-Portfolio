import React, { useState, useEffect } from 'react';
import styles from '../styles/Hero.module.css';
import cvFile from '../assets/cv.pdf';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  const [roles] = useState(["Front-end Developer", "Software Developer", "Documentation Expert", "Web Developer"]);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20; // Max 20px shift
    const y = (clientY / innerHeight - 0.5) * 20;
    setParallax({ x, y });
  };

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500); // Pause at end
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, roles, typingSpeed]);

  return (
    <section 
      className={styles.hero} 
      id="home" 
      onMouseMove={handleMouseMove}
      style={{
        '--px': `${parallax.x}px`,
        '--py': `${parallax.y}px`
      }}
    >
      <div className={styles.ambientOverlay}>
        <div className={styles.orbitalRing}></div>
        <div className={styles.digitalDust}></div>
        {/* Parallax Data Nodes */}
        <div className={styles.dataNode} style={{ top: '20%', left: '15%', '--order': 1 }}>
          <span className={styles.nodePoint}></span>
          <span className={styles.nodeLabel}>_SIGNAL_LOCK</span>
        </div>
        <div className={styles.dataNode} style={{ top: '70%', left: '80%', '--order': 2 }}>
          <span className={styles.nodePoint}></span>
          <span className={styles.nodeLabel}>_UPLINK_STABLE</span>
        </div>
        <div className={styles.dataNode} style={{ top: '15%', left: '85%', '--order': 3 }}>
          <span className={styles.nodePoint}></span>
          <span className={styles.nodeLabel}>_NODE_V.2.4</span>
        </div>
      </div>

      {/* Side HUD Gauges */}
      <div className={styles.sideGaugeLeft}>
        <div className={styles.gaugeBar}></div>
        <span className={styles.gaugeText}>SYS_STABILITY_98%</span>
      </div>
      <div className={styles.sideGaugeRight}>
        <div className={styles.gaugeBar}></div>
        <span className={styles.gaugeText}>P_CORE_ACTIVE</span>
      </div>

      {/* Viewfinder Brackets */}
      <div className={styles.viewfinder}>
        <div className={styles.corner} />
        <div className={styles.corner} />
        <div className={styles.corner} />
        <div className={styles.corner} />
      </div>

      <div className={styles.scanline}></div>
      <div className={styles.greeting}>Welcome to my Universe</div>
      <h1 className={styles.name} data-text="AYISHA SHADHI">AYISHA SHADHI</h1>
      <div className={styles.tagline}>
        I am a <span className={styles.typewriter}>{text}</span>
      </div>
      
      <div className={styles.ctaContainer}>
        <a 
          href="#projects" 
          className={styles.ctaButton}
        >
          EXPLORE WORK
        </a>
        <a 
          href={cvFile} 
          download="Ayisha_Shadhi_CV.pdf" 
          className={`${styles.ctaButton} ${styles.cvButton}`}
        >
          DOWNLOAD CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
