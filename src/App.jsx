import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingHearts from './components/FloatingHearts';
import CelebrationBurst from './components/CelebrationBurst';
import FullScreenHearts from './components/FullScreenHearts';
import './App.css';

function App() {
  const [step, setStep] = useState('intro'); // 'intro' | 'proposal' | 'accepted'
  const [noHover, setNoHover] = useState(false);

  const handleYes = () => {
    setStep('accepted');
  };

  return (
    <div className="app">
      <FloatingHearts />

      <AnimatePresence mode="wait">
        {step === 'intro' && (
          <motion.section
            key="intro"
            className="section"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.p
              className="subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Something special for you
            </motion.p>
            <motion.h1
              className="title-main"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              For Gayathri 💕
            </motion.h1>
            <motion.p
              className="subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              From Manikandan
            </motion.p>
            <motion.button
              className="btn btn-yes"
              onClick={() => setStep('proposal')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Open 💌
            </motion.button>
          </motion.section>
        )}

        {step === 'proposal' && (
          <motion.section
            key="proposal"
            className="section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="subtitle"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Manikandan has a question for you
            </motion.p>
            <motion.p
              className="proposal-text"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              Gayathri, will you be my Valentine? 💝
            </motion.p>
            <div className="buttons-wrap">
              <motion.button
                className="btn btn-yes"
                onClick={handleYes}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Yes! 💕
              </motion.button>
              <motion.button
                className="btn btn-no"
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: 1,
                  x: noHover ? 180 : 0,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                onMouseEnter={() => setNoHover(true)}
                onMouseLeave={() => setNoHover(false)}
                whileTap={{ scale: 0.9 }}
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
            <motion.section
              key="accepted"
              className="section accepted-screen"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.h1
                  className="greeting-title"
                  animate={{
                    scale: [1, 1.05, 1],
                    textShadow: [
                      '0 0 40px rgba(212, 168, 83, 0.6)',
                      '0 0 60px rgba(212, 168, 83, 0.9)',
                      '0 0 40px rgba(212, 168, 83, 0.6)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
                >
                  You said YES! 🎉
                </motion.h1>
                <motion.p
                  className="greeting-sub"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  Proposal Accepted 💍
                </motion.p>
              </motion.div>
              <motion.p
                className="proposal-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                style={{ maxWidth: '32ch', margin: '1rem auto 0' }}
              >
                Gayathri, you make every day special. Thank you for saying yes. Here’s to many more Valentines together. Love, Manikandan 💕
              </motion.p>
              <motion.p
                className="from-mani"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
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
