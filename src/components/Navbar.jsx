import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import logo from '../assets/logo.svg';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {isOpen && <div className={styles.backdrop} onClick={toggleMenu} />}
      <nav className={`${styles.navbar} ${isOpen ? styles.navOpen : ''} ${scrolled ? styles.scrolled : ''}`}>
        <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle Theme">
          <div className={styles.toggleTrack}>
             <span className={styles.toggleIcon}>{theme === 'light' ? '🌙' : '☀️'}</span>
          </div>
        </button>

        <div className={styles.container}>
          {/* Menu Drawer */}
          <div className={`${styles.menuContainer} ${isOpen ? styles.open : ''}`}>
             <div className={styles.menuHeader}>
               <span className={styles.menuLabel}>Navigation</span>
             </div>
             <div className={styles.linksWrapper}>
               {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map((item) => (
                 <button 
                   key={item}
                   onClick={() => scrollToSection(item.toLowerCase())} 
                   className={styles.link}
                 >
                   <span className={styles.linkNumber}>0{['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].indexOf(item) + 1}</span>
                   {item}
                 </button>
               ))}
             </div>
          </div>

          {/* Logo Toggle */}
          <div className={styles.logo} onClick={toggleMenu}>
             <div className={styles.logoCircle}>
               <img src={logo} alt="Menu" className={styles.logoImage} />
               <div className={styles.logoRipple}></div>
             </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
