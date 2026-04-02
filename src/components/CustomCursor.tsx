import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 250 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [isVisible]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
      {/* Main Crosshair */}
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -16,
          top: -16,
        }}
        className="absolute w-8 h-8 border border-blue-500/50 rounded-full flex items-center justify-center"
      >
        <div className="w-1 h-1 bg-blue-500 rounded-full" />
        {/* Crosshair lines */}
        <div className="absolute w-full h-[1px] bg-blue-500/20" />
        <div className="absolute w-[1px] h-full bg-blue-500/20" />
      </motion.div>

      {/* Trailing Ring */}
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -32,
          top: -32,
        }}
        transition={{ type: 'spring', damping: 15, stiffness: 100 }}
        className="absolute w-16 h-16 border border-blue-500/10 rounded-full"
      />
    </div>
  );
}
