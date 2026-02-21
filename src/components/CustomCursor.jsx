import React, { useEffect, useState, useRef } from 'react';
import styles from '../styles/CustomCursor.module.css';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      // Direct dot movement
      if (dotRef.current) {
        dotRef.current.style.left = `${clientX}px`;
        dotRef.current.style.top = `${clientY}px`;
      }

      // Trailing ring movement (using linear interpolation for smoothness)
      if (ringRef.current) {
        ringRef.current.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          { duration: 500, fill: "forwards", easing: "ease-out" }
        );
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const handleHoverStart = (e) => {
      if (e.target.closest('a, button, [role="button"], .socialLink')) {
        setIsHovering(true);
      }
    };

    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', handleHoverStart);
    document.addEventListener('mouseout', handleHoverEnd);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', handleHoverStart);
      document.removeEventListener('mouseout', handleHoverEnd);
    };
  }, []);

  return (
    <div className={styles.cursorContainer}>
      <div 
        ref={dotRef} 
        className={`${styles.dot} ${isHovering ? styles.dotHovered : ''}`} 
      />
      <div 
        ref={ringRef} 
        className={`${styles.ring} ${isHovering ? styles.ringHovered : ''} ${isClicked ? styles.clicked : ''}`} 
      />
    </div>
  );
};

export default CustomCursor;
