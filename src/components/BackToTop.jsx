import React, { useState, useEffect } from 'react';

const btnStyle = {
  position: 'fixed',
  bottom: '2rem',
  right: '2rem',
  backgroundColor: 'var(--primary-color)',
  color: 'white',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.5rem',
  boxShadow: 'var(--shadow)',
  zIndex: 1000,
  transition: 'opacity 0.3s, transform 0.3s',
  border: 'none',
  cursor: 'pointer'
};

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {visible && (
        <button onClick={scrollToTop} style={btnStyle} aria-label="Back to top">
          ↑
        </button>
      )}
    </>
  );
};

export default BackToTop;
