import { useMemo } from 'react';
import { motion } from 'framer-motion';

const EMOJIS = ['❤️', '💕', '💗', '💖', '💝', '🎉', '✨', '🌸', '💐', '💌'];
const PARTICLE_COUNT = 100;

function useBurstData() {
  return useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
        id: i,
        angle: (360 / PARTICLE_COUNT) * i + (i % 7) * 3,
        distance: 120 + (i % 10) * 25,
        emoji: EMOJIS[i % EMOJIS.length],
        delay: (i % 20) * 0.015,
        rotation: (i % 2 === 0 ? 1 : -1) * (180 + (i % 4) * 45),
      })),
    []
  );
}

function Particle({ angle, distance, emoji, delay, rotation }) {
  const endX = Math.cos((angle * Math.PI) / 180) * distance;
  const endY = Math.sin((angle * Math.PI) / 180) * distance;
  return (
    <motion.span
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
      }}
      initial={{ x: 0, y: 0, scale: 0, opacity: 1, rotate: 0 }}
      animate={{
        x: [0, endX * 0.3, endX],
        y: [0, endY * 0.3, endY],
        scale: [0, 1.4, 1.1],
        opacity: [1, 1, 0.85],
        rotate: [0, rotation * 0.5, rotation],
      }}
      transition={{
        duration: 1.4,
        delay,
        ease: [0.2, 0.8, 0.4, 1],
      }}
    >
      {emoji}
    </motion.span>
  );
}

export default function CelebrationBurst() {
  const data = useBurstData();
  return (
    <div className="burst-layer" aria-hidden>
      {data.map((p) => (
        <Particle
          key={p.id}
          angle={p.angle}
          distance={p.distance}
          emoji={p.emoji}
          delay={p.delay}
          rotation={p.rotation}
        />
      ))}
    </div>
  );
}
