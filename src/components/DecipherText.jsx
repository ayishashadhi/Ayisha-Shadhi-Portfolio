import React, { useState, useEffect, useRef } from 'react';

const DecipherText = ({ text, delay = 0, speed = 50, revealSpeed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isRevealing, setIsRevealing] = useState(false);
  const glyphs = "ᐰᑥᓬᔦᗔᗱᚙ⍝⏦⌬";
  const timerRef = useRef(null);
  const revealRef = useRef(null);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsRevealing(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!isRevealing) return;

    let iterations = 0;
    
    timerRef.current = setInterval(() => {
      setDisplayText(prev => {
        return text
          .split("")
          .map((char, index) => {
            if (index < iterations) {
              return text[index];
            }
            return glyphs[Math.floor(Math.random() * glyphs.length)];
          })
          .join("");
      });

      iterations += 1 / 3;
      
      if (iterations >= text.length) {
        clearInterval(timerRef.current);
        setDisplayText(text);
      }
    }, speed);

    return () => clearInterval(timerRef.current);
  }, [isRevealing, text, speed]);

  return <span>{displayText || " ".repeat(text.length)}</span>;
};

export default DecipherText;
