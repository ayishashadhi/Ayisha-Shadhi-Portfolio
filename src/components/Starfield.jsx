import React, { useMemo } from 'react';
import '../index.css';

const Starfield = ({ starCount = 100 }) => {
  const stars = useMemo(() => {
    return Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${2 + Math.random() * 3}s`,
        opacity: Math.random(),
        transform: `scale(${0.5 + Math.random()})`
      }
    }));
  }, [starCount]);

  return (
    <div className="starfield">
      {stars.map((star) => (
        <div key={star.id} className="star" style={star.style}></div>
      ))}
    </div>
  );
};

export default Starfield;
