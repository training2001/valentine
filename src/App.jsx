import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingHearts from './components/FloatingHearts';
import CelebrationBurst from './components/CelebrationBurst';
import FullScreenHearts from './components/FullScreenHearts';
import './App.css';

const ACCEPTED_IMAGES_DURATION_MS = 3500; // 3.5 seconds of only flowers/hearts

const NO_BUTTON_LABELS = [
  'No',
  'Are you sure, NO',
  'Definitely No 😟😔',
  'Say Yes something special for you 😔',
  'Press yes 👈🏻👈🏻👈🏻',
  '👈🏻👈🏻',
  '👈🏻👈🏻',
  '', // 7: show only 💘
  '', // 8: show only 💔
];

function App() {
  const [step, setStep] = useState('intro'); // 'intro' | 'proposal' | 'accepted'
  const [noClickCount, setNoClickCount] = useState(0);
  const [showAcceptedText, setShowAcceptedText] = useState(false);

  const handleYes = () => {
    setStep('accepted');
    setShowAcceptedText(false);
  };

  const handleNoClick = () => {
    if (noClickCount >= 8) {
      handleYes();
      return;
    }
    setNoClickCount((c) => c + 1);
  };

  // After "Yes": show only images for 3–4s, then reveal text
  useEffect(() => {
    if (step !== 'accepted') return;
    const t = setTimeout(() => setShowAcceptedText(true), ACCEPTED_IMAGES_DURATION_MS);
    return () => clearTimeout(t);
  }, [step]);

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
              For Gayathri miss💕
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
              Gayathri sri, will you be my Valentine? 💝
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
                onClick={handleNoClick}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                {noClickCount === 7 ? '💘' : noClickCount >= 8 ? '💔' : NO_BUTTON_LABELS[noClickCount]}
              </motion.button>
            </div>
          </motion.section>
        )}

        {step === 'accepted' && (
          <>
            <CelebrationBurst />
            <FullScreenHearts />
            <AnimatePresence>
              {showAcceptedText && (
                <motion.section
                  key="accepted-text"
                  className="section accepted-screen"
                  initial={{ opacity: 0, scale: 0.2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
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
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      Proposal Accepted 💍
                    </motion.p>
                  </motion.div>
                  <motion.p
                    className="proposal-text"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    style={{ maxWidth: '32ch', margin: '1rem auto 0' }}
                  >
                Gayu ma, you make every day special. I will respect and take care of you for entire life. Here’s to many more Valentines together. Love, Manikandan 💕
                  </motion.p>
                  <motion.p
                    className="from-mani"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    — With love, Manikandan
                  </motion.p>
                </motion.section>
              )}
            </AnimatePresence>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
