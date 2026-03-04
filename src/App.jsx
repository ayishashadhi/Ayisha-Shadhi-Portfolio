import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Starfield from './components/Starfield';
import AlienScout from './components/AlienScout';
import AlienFX from './components/AlienFX';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import './index.css';

function App() {
  // Check system preference or localStorage for theme
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark'); // Default to dark/cosmic
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 40;
      const y = (clientY / innerHeight - 0.5) * 40;
      
      // Update global CSS variables for all components to use
      document.documentElement.style.setProperty('--mouse-x', `${clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${clientY}px`);
      document.documentElement.style.setProperty('--global-px', `${x}px`);
      document.documentElement.style.setProperty('--global-py', `${y}px`);
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, []);

  return (
    <div 
      className="app-container" 
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      {loading ? (
        <Preloader theme={theme} />
      ) : (
        <>
          <CustomCursor />
          <AlienScout />
          <AlienFX />
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <main style={{ flex: 1 }}>
            <div id="home"><Hero /></div>
            <div id="about"><About /></div>
            <div id="education"><Education /></div>
            <div id="skills"><Skills /></div>
            <div id="projects"><Projects /></div>
            <div id="contact"><Contact /></div>
          </main>
          <Footer />
          <BackToTop />
        </>
      )}
    </div>
  );
}

export default App;
