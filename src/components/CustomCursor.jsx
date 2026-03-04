import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import styles from '../styles/CustomCursor.module.css';
import gsap from 'gsap';

const CustomCursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useLayoutEffect(() => {
        if (!dotRef.current || !ringRef.current) return;

        // Set initial centered state using GSAP's optimized percent transforms
        gsap.set([dotRef.current, ringRef.current], { 
            xPercent: -50, 
            yPercent: -50,
            opacity: 0 
        });

        // Create ultra-performance setters
        // The Dot: Snappy but with a tiny bit of weight (0.05s)
        const xDotTo = gsap.quickTo(dotRef.current, "x", { duration: 0.05, ease: "none" });
        const yDotTo = gsap.quickTo(dotRef.current, "y", { duration: 0.05, ease: "none" });
        
        // The Ring: Elegant, velvet-smooth trail (0.8s with Expo easing)
        const xRingTo = gsap.quickTo(ringRef.current, "x", { duration: 0.8, ease: "expo.out" });
        const yRingTo = gsap.quickTo(ringRef.current, "y", { duration: 0.8, ease: "expo.out" });

        const handleMouseMove = (e) => {
            const { clientX, clientY, target } = e;
            
            if (!isVisible) {
                setIsVisible(true);
                gsap.to([dotRef.current, ringRef.current], { opacity: 1, duration: 0.3 });
            }

            xDotTo(clientX);
            yDotTo(clientY);
            xRingTo(clientX);
            yRingTo(clientY);

            const isSelectable = target.closest('a, button, [role="button"], input, textarea');
            setIsHovering(!!isSelectable);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isVisible]);

    return (
        <>
            <div 
                ref={dotRef}
                className={`${styles.cursorDot} ${isClicking ? styles.clicking : ''}`} 
                style={{ visibility: isVisible ? 'visible' : 'hidden' }}
            />
            <div 
                ref={ringRef}
                className={`${styles.cursorRing} ${isHovering ? styles.hovering : ''}`} 
                style={{ visibility: isVisible ? 'visible' : 'hidden' }}
            />
        </>
    );
};

export default CustomCursor;
