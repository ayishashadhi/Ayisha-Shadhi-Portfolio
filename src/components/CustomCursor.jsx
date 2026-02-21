import React, { useState, useEffect } from 'react';
import styles from '../styles/CustomCursor.module.css';

const CustomCursor = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const updateCoords = (e) => {
            setCoords({ x: e.clientX, y: e.clientY });
            const target = e.target;
            const isSelectable = target.closest('a, button, [role="button"]');
            setIsHovering(!!isSelectable);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener('mousemove', updateCoords);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', updateCoords);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <>
            {/* Inner Main Dot */}
            <div 
                className={`${styles.cursorDot} ${isClicking ? styles.clicking : ''}`}
                style={{ left: `${coords.x}px`, top: `${coords.y}px` }}
            />
            {/* Outer Magnetic Ring */}
            <div 
                className={`${styles.cursorRing} ${isHovering ? styles.hovering : ''}`}
                style={{ left: `${coords.x}px`, top: `${coords.y}px` }}
            />
        </>
    );
};

export default CustomCursor;
