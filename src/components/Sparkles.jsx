import { useMemo } from 'react';
import { motion } from 'framer-motion';

const COUNT = 20;

function useSparkleData() {
  return useMemo(
    () =>
      Array.from({ length: COUNT }, (_, i) => ({
        id: i,
        left: (i * 19 + 7) % 100,
        top: (i * 23 + 11) % 100,
        delay: i * 0.2,
        duration: 2 + (i % 3) * 0.8,
        size: 0.5 + (i % 3) * 0.25,
      })),
    []
  );
}

function Sparkle({ left, top, delay, duration, size }) {
  return (
    <motion.span
      style={{
        position: 'absolute',
        left: `${left}%`,
        top: `${top}%`,
        width: `${size}rem`,
        height: `${size}rem`,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,220,240,0.9) 0%, rgba(212,168,83,0.4) 100%)',
        boxShadow: '0 0 10px rgba(255,220,240,0.8)',
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [0, 1.2, 0],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: 0.5 + (delay % 1),
      }}
    />
  );
}

export default function Sparkles() {
  const data = useSparkleData();
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 2,
        overflow: 'hidden',
      }}
      aria-hidden
    >
      {data.map((s) => (
        <Sparkle
          key={s.id}
          left={s.left}
          top={s.top}
          delay={s.delay}
          duration={s.duration}
          size={s.size}
        />
      ))}
    </div>
  );
}
