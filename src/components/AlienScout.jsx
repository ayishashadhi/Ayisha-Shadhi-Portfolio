import React, { useState, useEffect } from 'react';

const AlienScout = () => {
    // We can have multiple ships or just one that respawns
    const [isVisible, setIsVisible] = useState(false);
    const [path, setPath] = useState({ start: 0, end: 100, top: 20 });

    useEffect(() => {
        const triggerShip = (isInitial = false) => {
            const delay = isInitial ? 3000 : 20000; // 3s for first, 20s after
            setTimeout(() => {
                const startsAtLeft = Math.random() > 0.5;
                setPath({
                    start: startsAtLeft ? -15 : 115,
                    end: startsAtLeft ? 115 : -15,
                    top: 15 + Math.random() * 60
                });
                setIsVisible(true);
                
                // Hide after animation finishes (15 seconds)
                setTimeout(() => {
                    setIsVisible(false);
                    triggerShip();
                }, 15000);
            }, delay);
        };

        triggerShip(true);
    }, []);

    if (!isVisible) return null;

    const direction = path.start < path.end ? 1 : -1;

    return (
        <div 
            className="ufo-container" 
            style={{ 
                '--ufo-start': `${path.start}%`, 
                '--ufo-end': `${path.end}%`, 
                '--ufo-top': `${path.top}%`,
                '--ufo-dir': direction
            }}
        >
            <div className="ufo-ship">
                <div className="ufo-dome"></div>
                <div className="ufo-body">
                    <div className="ufo-lights">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="ufo-glow"></div>
            </div>
        </div>
    );
};

export default AlienScout;
