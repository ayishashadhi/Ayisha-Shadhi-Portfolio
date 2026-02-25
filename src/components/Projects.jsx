import React from 'react';
import styles from '../styles/Projects.module.css';
import DecipherText from './DecipherText';
import projectImg1 from '../assets/projectImg1.png';
import projectImg2 from '../assets/projectImg2.png';
import projectImg3 from '../assets/projectImg3.png';

const projectsData = [
  {
    id: "MANIFEST_NODE_01",
    binaryId: "00000001",
    coords: "LAT: 42.36 | LNG: 71.05",
    title: "Military Data Transfer System",
    description: "A secure military data transfer system developed using Python, implementing steganography and a block rotation algorithm to ensure confidential and tamper-resistant communication.",
    tags: ["Python", "Steganography", "Security"],
    status: "VERIFIED",
    build: "v2.1.0-alpha",
    security: "LEVEL_5",
    image: projectImg1,
    link: "https://github.com/ayishashadhi"
  },
  {
    id: "MANIFEST_NODE_02",
    binaryId: "00000010",
    coords: "LAT: 34.05 | LNG: 118.24",
    title: "Shop Your Hood",
    description: "An offline shopping management system built using Python and Django to support local vendors by enabling product listing, order management, and customer interaction without reliance on online marketplaces.",
    tags: ["Python", "Django", "Offline System"],
    status: "ACTIVE",
    build: "v1.8.4-stable",
    security: "LEVEL_3",
    image: projectImg3,
    link: "https://github.com/ayishashadhi"
  },
  {
    id: "MANIFEST_NODE_03",
    binaryId: "00000011",
    coords: "LAT: 51.50 | LNG: 0.12",
    title: "EV Charging Station System",
    description: "A smart alert-based system developed with Python and Django that detects nearby electric vehicles and notifies them about available EV charging stations to improve accessibility and reduce range anxiety.",
    tags: ["Python", "Django", "EV Alerts"],
    status: "SYNCED",
    build: "v1.2.9-beta",
    security: "LEVEL_4",
    image: projectImg2, // Reusing 1 if 3rd doesn't exist
    link: "https://github.com/ayishashadhi"
  }
];

const Projects = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.gridOverlay}></div>
      <h2 className={styles.heading}>
        <DecipherText text="Projects" delay={500} />
      </h2>
      <div className={styles.grid}>
        {projectsData.map((project) => (
          <div key={project.id} className={styles.card}>
            {/* Manifest Header */}
            <div className={styles.manifestHeader}>
              <div className={styles.headerInfo}>
                <span className={styles.nodeId}>{project.id}</span>
                <span className={styles.buildTag}>{project.build}</span>
              </div>
              <div className={styles.statusIndicator}>
                <span className={styles.statusDot}></span>
                <span className={styles.statusText}>{project.status}</span>
              </div>
            </div>

            <div className={styles.cardBrackets}></div>
            <div className={styles.imageWrapper}>
              <div className={styles.scanline}></div>
              <div className={styles.hudOverlay}>
                <span className={styles.idTag}>ID: {project.binaryId}</span>
                <span className={styles.coordTag}>{project.coords}</span>
              </div>
              <div className={styles.projectImage}>
                {project.image ? (
                  <img src={project.image} alt={project.title} className={styles.actualImage} />
                ) : (
                  <span>// DATA_ENCRYPTED_{project.security}</span>
                )}
              </div>
              <div className={styles.overlay}>
                <a 
                  href={project.link} 
                  className={styles.viewBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DECRYPT_LOG
                </a>
              </div>
            </div>
            
            <div className={styles.content}>
              <h3 className={styles.projectTitle}>
                {project.title}
              </h3>
              <p className={styles.description}>{project.description}</p>
              
              <div className={styles.footerInfo}>
                <div className={styles.tags}>
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <div className={styles.securitySeal}>
                  SEC_LEVEL: {project.security}
                </div>
              </div>
            </div>

            {/* Micro Decorations */}
            <div className={styles.decoLine}></div>
            <div className={styles.noiseOverlay}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
