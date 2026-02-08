import { useMemo } from 'react';
import { motion } from 'framer-motion';

const SYMBOLS = ['❤️', '💕', '💗', '💖', '💝', '✨', '🌸', '💐', '🎉', '💌'];
const COUNT = 60;

function useConfettiData() {
  return useMemo(
    () =>
      Array.from({ length: COUNT }, (_, i) => ({
        id: i,
        left: (i * 13 + 5) % 100,
        delay: i * 0.08,
        duration: 4 + (i % 3) * 1.5,
        size: 0.8 + (i % 4) * 0.3,
        symbol: SYMBOLS[i % SYMBOLS.length],
        drift: (i % 2 === 0 ? 1 : -1) * (20 + (i % 5) * 15),
        rotate: (i % 3) * 120,
      })),
    []
  );
}

function Particle({ left, delay, duration, size, symbol, drift, rotate }) {
  return (
    <motion.span
      style={{
        position: 'absolute',
        left: `${left}%`,
        top: '-2rem',
        fontSize: `${size}rem`,
      }}
      initial={{ y: 0, x: 0, rotate: 0, opacity: 0 }}
      animate={{
        y: '100vh',
        x: drift,
        rotate: rotate + 720,
        opacity: [0, 1, 1, 0.8],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {symbol}
    </motion.span>
  );
}

export default function ConfettiRain() {
  const data = useConfettiData();
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 42,
        overflow: 'hidden',
      }}
      aria-hidden
    >
      {data.map((p) => (
        <Particle
          key={p.id}
          left={p.left}
          delay={p.delay}
          duration={p.duration}
          size={p.size}
          symbol={p.symbol}
          drift={p.drift}
          rotate={p.rotate}
        />
      ))}
    </div>
  );
}
