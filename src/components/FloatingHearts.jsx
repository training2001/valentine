import { useMemo } from 'react';
import { motion } from 'framer-motion';

const HEARTS = ['❤️', '💕', '💗', '💖', '💝', '🌸', '✨'];
const COUNT = 25;

// Stable random values so hearts don't jump on re-render
function useHeartsData() {
  return useMemo(() =>
    Array.from({ length: COUNT }, (_, i) => ({
      id: i,
      delay: i * 0.7,
      x: (i * 17 + 3) % 100,
      size: 0.9 + (i % 5) * 0.2,
      duration: 14 + (i % 7),
      emoji: HEARTS[i % HEARTS.length],
    })),
    []
  );
}

function Heart({ delay, x, size, duration, emoji }) {
  return (
    <motion.span
      className="heart-float"
      style={{
        left: `${x}%`,
        fontSize: `${size}rem`,
      }}
      initial={{ y: '100vh', rotate: 0, opacity: 0 }}
      animate={{
        y: '-15vh',
        rotate: 360,
        opacity: [0, 0.65, 0.5, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
      }}
    >
      {emoji}
    </motion.span>
  );
}

export default function FloatingHearts() {
  const data = useHeartsData();
  return (
    <div className="hearts-layer" aria-hidden>
      {data.map((item) => (
        <Heart
          key={item.id}
          delay={item.delay}
          x={item.x}
          size={item.size}
          duration={item.duration}
          emoji={item.emoji}
        />
      ))}
    </div>
  );
}
