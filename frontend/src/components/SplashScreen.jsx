import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/splash.css';

const SplashScreen = ({ finishLoading }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => finishLoading(), 1000);
    }, 2000);
    return () => clearTimeout(timer);
  }, [finishLoading]);

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          className="splash-container"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.1, 
            filter: 'blur(10px)',
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
        >
          <div className="splash-content">
            <motion.div
              className="splash-logo"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="splash-text-wrapper">
                <h1 className="splash-name">NAVEEN KUMAR KM</h1>
                <motion.div 
                  className="splash-underline"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
