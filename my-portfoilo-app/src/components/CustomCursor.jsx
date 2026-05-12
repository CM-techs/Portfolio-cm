import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const moveCursor = (e) => {
      setDotPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
      
      // Delay for the outer ring
      setTimeout(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      }, 50);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.tagName === 'LI' ||
        target.closest('.project-card') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(isClickable);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div className={`cursor-wrapper ${isHidden ? 'hidden' : ''}`}>
      <div 
        className={`cursor-dot ${isPointer ? 'pointer' : ''}`}
        style={{ left: `${dotPosition.x}px`, top: `${dotPosition.y}px` }}
      />
      <div 
        className={`cursor-ring ${isPointer ? 'pointer' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </div>
  );
};

export default CustomCursor;
