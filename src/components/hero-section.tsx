import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { indianNurseImage } from "../assets/images";
import { useState, useEffect } from "react";

interface HeroSectionProps {
  onJoinWaitlist: () => void;
}

export function HeroSection({ onJoinWaitlist }: HeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const animatedSequence = [
    { word: "Mentorship", color: "from-yellow-300 via-yellow-200 to-yellow-300" },
    { word: "Wellbeing", color: "from-cyan-300 via-cyan-200 to-cyan-300" },
    { word: "Growth", color: "from-pink-300 via-pink-200 to-pink-300" },
    { word: "Events", color: "from-green-300 via-green-200 to-green-300" },
    { word: "NUON", color: "from-purple-300 via-purple-200 to-purple-300" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % animatedSequence.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative flex items-center overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-cyan-500 pt-20 min-h-[90vh]">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-transparent to-purple-600/30 animate-pulse" style={{ animationDuration: '8s' }}></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * -100 - 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Smaller Headline */}
            <motion.h1 
              className="text-white drop-shadow-2xl mb-8 text-2xl md:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              NUON is 100% for Nurses.
            </motion.h1>
            
            {/* Animated sequence - "for you" constant */}
            <div className="h-20 md:h-24 flex items-center justify-center lg:justify-start mb-6">
              <div className="text-4xl md:text-5xl lg:text-6xl drop-shadow-2xl grid grid-cols-[auto_auto] gap-3 items-baseline">
                <div className="text-center lg:text-left">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentIndex}
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                      className={`bg-gradient-to-r ${animatedSequence[currentIndex].color} bg-clip-text text-transparent`}
                    >
                      {animatedSequence[currentIndex].word}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <div className="flex gap-3 items-baseline">
                  <span className="text-white">for</span>
                  <span className="bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 bg-clip-text text-transparent">you</span>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <motion.p 
              className="text-white/95 text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              The all-in-one platform that unifies your <strong>learning</strong>, <strong>mentorship</strong>, and <strong>wellbeing</strong>. 
              Stop the burnout. Start thriving.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
            >
              <Button
                onClick={onJoinWaitlist}
                size="lg"
                className="bg-white text-purple-700 hover:bg-white/90 hover:scale-105 transition-all shadow-2xl h-14 md:h-16 px-8 md:px-10 text-lg group"
              >
                <span>Join the Waitlist - Free Course</span>
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Smiling Indian Nurse */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Animated glow rings */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 blur-3xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>

              <motion.img
                src={indianNurseImage}
                alt="Smiling Indian nurse"
                className="relative z-10 w-full h-auto rounded-3xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />

              {/* Decorative elements */}
              <motion.div
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-2xl opacity-60"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.6, 0.4]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
