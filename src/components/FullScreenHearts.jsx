import { motion } from 'framer-motion';

const HEARTS = ['❤️', '💕', '💗', '💖', '💝', '🌸', '✨', '💐'];
const NUM = 40;

export default function FullScreenHearts() {
  return (
    <div
      className="burst-layer"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 45,
      }}
      aria-hidden
    >
      {Array.from({ length: NUM }).map((_, i) => {
        const angle = (360 / NUM) * i + Math.random() * 30;
        const dist = 80 + Math.random() * 120;
        const x = 50 + (Math.cos((angle * Math.PI) / 180) * dist);
        const y = 50 + (Math.sin((angle * Math.PI) / 180) * dist);
        return (
          <motion.span
            key={i}
            style={{
              position: 'absolute',
              left: `${x}%`,
              top: `${y}%`,
              fontSize: 'clamp(1.2rem, 3vw, 2.5rem)',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.3, 1],
              opacity: [0, 0.9, 0.7],
              y: [0, -10, -20],
            }}
            transition={{
              duration: 1.5,
              delay: 0.3 + i * 0.03,
              ease: 'easeOut',
            }}
          >
            {HEARTS[i % HEARTS.length]}
          </motion.span>
        );
      })}
    </div>
  );
}
