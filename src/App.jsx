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
    // Keep theme toggling if user really wants, but cosmic is primarily dark
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {loading ? (
        <Preloader theme={theme} />
      ) : (
        <>
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
