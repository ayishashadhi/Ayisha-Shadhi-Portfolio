import React, { useState, useEffect } from 'react';
import styles from '../styles/CustomCursor.module.css';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const checkHover = (e) => {
            const target = e.target;
            const isSelectable = target.closest('a, button, [role="button"], input, textarea');
            setIsHovering(!!isSelectable);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener('mousemove', checkHover);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', checkHover);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <>
            {/* Inner Main Dot - Uses plain CSS variables for ultra-smooth movement */}
            <div className={`${styles.cursorDot} ${isClicking ? styles.clicking : ''}`} />
            {/* Outer Magnetic Ring - Uses plain CSS variables for ultra-smooth movement */}
            <div className={`${styles.cursorRing} ${isHovering ? styles.hovering : ''}`} />
        </>
    );
};

export default CustomCursor;
