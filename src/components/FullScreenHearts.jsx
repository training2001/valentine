import { useMemo } from 'react';
import { motion } from 'framer-motion';

const HEARTS = ['❤️', '💕', '💗', '💖', '💝', '🌸', '✨', '💐', '💌'];
const NUM = 50;

function useHeartsData() {
  return useMemo(
    () =>
      Array.from({ length: NUM }, (_, i) => {
        const angle = (360 / NUM) * i + (i % 5) * 8;
        const dist = 70 + (i % 12) * 8;
        const x = 50 + Math.cos((angle * Math.PI) / 180) * dist;
        const y = 50 + Math.sin((angle * Math.PI) / 180) * dist;
        return {
          id: i,
          x,
          y,
          delay: 0.2 + (i % 15) * 0.025,
          duration: 1.2 + (i % 5) * 0.2,
          emoji: HEARTS[i % HEARTS.length],
          size: 0.9 + (i % 4) * 0.3,
        };
      }),
    []
  );
}

function HeartParticle({ x, y, delay, duration, emoji, size }) {
  return (
    <motion.span
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        fontSize: `clamp(${size * 0.9}rem, ${size * 2}vw, ${size * 1.8}rem)`,
      }}
      initial={{ scale: 0, opacity: 0, y: 0 }}
      animate={{
        scale: [0, 1.4, 1],
        opacity: [0, 0.95, 0.75],
        y: [0, -15, -35],
        rotate: [0, 15, -10, 5],
      }}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
    >
      <motion.span
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 1.5, delay: delay + 0.5, repeat: Infinity, repeatDelay: 1 }}
      >
        {emoji}
      </motion.span>
    </motion.span>
  );
}

export default function FullScreenHearts() {
  const data = useHeartsData();
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 45,
        overflow: 'hidden',
      }}
      aria-hidden
    >
      {data.map((item) => (
        <HeartParticle
          key={item.id}
          x={item.x}
          y={item.y}
          delay={item.delay}
          duration={item.duration}
          emoji={item.emoji}
          size={item.size}
        />
      ))}
    </div>
  );
}
