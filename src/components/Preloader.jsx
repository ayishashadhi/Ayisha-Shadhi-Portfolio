import React, { useEffect, useState } from 'react';
import styles from '../styles/Preloader.module.css';

const Preloader = ({ theme }) => {
  return (
    <div className={`${styles.preloader} ${theme === 'light' ? styles.lightTheme : ''}`}>
      <div className={styles.loaderContent}>
        <div className={styles.spinner}></div>
        <div className={styles.text}>
          System Initializing<span className={styles.dots}></span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
