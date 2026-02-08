import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingHearts from './components/FloatingHearts';
import CelebrationBurst from './components/CelebrationBurst';
import FullScreenHearts from './components/FullScreenHearts';
import AnimatedBackground from './components/AnimatedBackground';
import Sparkles from './components/Sparkles';
import ConfettiRain from './components/ConfettiRain';
import './App.css';

function App() {
  const [step, setStep] = useState('intro');
  const [noHover, setNoHover] = useState(false);

  const handleYes = () => setStep('accepted');

  return (
    <div className="app">
      <AnimatedBackground />
      <FloatingHearts />
      {step !== 'accepted' && <Sparkles />}

      <AnimatePresence mode="wait">
        {step === 'intro' && (
          <motion.section
            key="intro"
            className="section"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: -30 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p
              className="subtitle"
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
            >
              Something special for you
            </motion.p>
            <motion.h1
              className="title-main"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 15 }}
            >
              <motion.span
                animate={{
                  textShadow: [
                    '0 0 30px rgba(200, 69, 105, 0.4)',
                    '0 0 50px rgba(200, 69, 105, 0.7)',
                    '0 0 30px rgba(200, 69, 105, 0.4)',
                  ],
                  scale: [1, 1.02, 1],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ display: 'inline-block' }}
              >
                For Gayathri 💕
              </motion.span>
            </motion.h1>
            <motion.p
              className="subtitle"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              From Manikandan
            </motion.p>
            <motion.button
              className="btn btn-yes"
              onClick={() => setStep('proposal')}
              initial={{ opacity: 0, y: 25, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              <motion.span
                animate={{ opacity: [1, 0.9, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Open 💌
              </motion.span>
            </motion.button>
          </motion.section>
        )}

        {step === 'proposal' && (
          <motion.section
            key="proposal"
            className="section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              className="subtitle"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              Manikandan has a question for you
            </motion.p>
            <motion.p
              className="proposal-text"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{ delay: 0.35, type: 'spring', stiffness: 150 }}
            >
              <motion.span
                animate={{
                  y: [0, -3, 0],
                  textShadow: [
                    '0 2px 20px rgba(0,0,0,0.2)',
                    '0 4px 30px rgba(252, 228, 236, 0.3)',
                    '0 2px 20px rgba(0,0,0,0.2)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{ display: 'inline-block' }}
              >
                Gayathri, will you be my Valentine? 💝
              </motion.span>
            </motion.p>
            <div className="buttons-wrap">
              <motion.button
                className="btn btn-yes"
                onClick={handleYes}
                initial={{ opacity: 0, x: -30, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 180 }}
                whileHover={{ scale: 1.12, rotate: [0, -2, 2, 0] }}
                whileTap={{ scale: 0.92 }}
              >
                <motion.span
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.8 }}
                >
                  Yes! 💕
                </motion.span>
              </motion.button>
              <motion.button
                className="btn btn-no"
                initial={{ opacity: 0, x: 30, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  x: noHover ? 180 : 0,
                  scale: 1,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                onMouseEnter={() => setNoHover(true)}
                onMouseLeave={() => setNoHover(false)}
                whileTap={{ scale: 0.88 }}
              >
                No
              </motion.button>
            </div>
          </motion.section>
        )}

        {step === 'accepted' && (
          <>
            <CelebrationBurst />
            <FullScreenHearts />
            <ConfettiRain />
            <motion.section
              key="accepted"
              className="section accepted-screen"
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
              >
                <motion.h1
                  className="greeting-title"
                  initial={{ scale: 0.5, rotate: -5 }}
                  animate={{
                    scale: [0.9, 1.08, 1],
                    rotate: [0, 1, -1, 0],
                    textShadow: [
                      '0 0 40px rgba(212, 168, 83, 0.6)',
                      '0 0 70px rgba(212, 168, 83, 0.95)',
                      '0 0 40px rgba(212, 168, 83, 0.6)',
                    ],
                  }}
                  transition={{
                    scale: { duration: 0.8, delay: 0.7 },
                    rotate: { duration: 0.6, delay: 0.8 },
                    textShadow: { duration: 2, repeat: Infinity, repeatDelay: 0.3 },
                  }}
                >
                  You said YES! 🎉
                </motion.h1>
                <motion.p
                  className="greeting-sub"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <motion.span
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 0.5 }}
                    style={{ display: 'inline-block' }}
                  >
                    Proposal Accepted 💍
                  </motion.span>
                </motion.p>
              </motion.div>
              <motion.p
                className="proposal-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                style={{ maxWidth: '32ch', margin: '1rem auto 0' }}
              >
                Gayathri, you make every day special. Thank you for saying yes. Here’s to many more Valentines together. Love, Manikandan 💕
              </motion.p>
              <motion.p
                className="from-mani"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6 }}
              >
                — With love, Manikandan
              </motion.p>
            </motion.section>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
