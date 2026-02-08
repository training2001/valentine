import { motion } from 'framer-motion';

const EMOJIS = ['❤️', '💕', '💗', '💖', '💝', '🎉', '✨', '🌸', '💐'];
const PARTICLE_COUNT = 80;

function Particle({ i, angle, distance }) {
  const emoji = EMOJIS[i % EMOJIS.length];
  const rotation = angle + (i % 2 === 0 ? 180 : 0);
  return (
    <motion.span
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        fontSize: '1.8rem',
        originX: '0px',
        originY: '0px',
      }}
      initial={{
        x: 0,
        y: 0,
        scale: 0,
        opacity: 1,
        rotate: 0,
      }}
      animate={{
        x: Math.cos((angle * Math.PI) / 180) * distance,
        y: Math.sin((angle * Math.PI) / 180) * distance,
        scale: [0, 1.2, 1],
        opacity: [1, 1, 0.8],
        rotate: rotation,
      }}
      transition={{
        duration: 1.2,
        delay: i * 0.01,
        ease: 'easeOut',
      }}
    >
      {emoji}
    </motion.span>
  );
}

export default function CelebrationBurst() {
  return (
    <div className="burst-layer" aria-hidden>
      {Array.from({ length: PARTICLE_COUNT }).map((_, i) => (
        <Particle
          key={i}
          i={i}
          angle={(360 / PARTICLE_COUNT) * i + Math.random() * 20}
          distance={150 + Math.random() * 250}
        />
      ))}
    </div>
  );
}
