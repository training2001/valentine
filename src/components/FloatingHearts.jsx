import { useMemo } from 'react';
import { motion } from 'framer-motion';

const HEARTS = ['❤️', '💕', '💗', '💖', '💝', '🌸', '✨', '💐', '💌'];
const COUNT = 40;

function useHeartsData() {
  return useMemo(
    () =>
      Array.from({ length: COUNT }, (_, i) => ({
        id: i,
        delay: i * 0.5,
        x: (i * 17 + 3) % 100,
        size: 0.85 + (i % 6) * 0.2,
        duration: 12 + (i % 8),
        emoji: HEARTS[i % HEARTS.length],
        drift: (i % 2 === 0 ? 1 : -1) * (15 + (i % 4) * 10),
        rotateEnd: 360 + (i % 3) * 120,
        floatDelay: (i * 0.4) % 5,
      })),
    []
  );
}

function Heart({ delay, x, size, duration, emoji, drift, rotateEnd, floatDelay }) {
  return (
    <motion.span
      className="heart-float"
      style={{
        left: `${x}%`,
        fontSize: `${size}rem`,
      }}
      initial={{ y: '110vh', x: 0, rotate: 0, opacity: 0, scale: 0.5 }}
      animate={{
        y: '-10vh',
        x: [0, drift, -drift * 0.5, drift],
        rotate: rotateEnd,
        opacity: [0, 0.7, 0.6, 0.4, 0],
        scale: [0.5, 1.1, 1, 1, 0.8],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay: delay + floatDelay,
        ease: 'easeInOut',
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
          drift={item.drift}
          rotateEnd={item.rotateEnd}
          floatDelay={item.floatDelay}
        />
      ))}
    </div>
  );
}
