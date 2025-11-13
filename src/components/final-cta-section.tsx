import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";

interface FinalCTASectionProps {
  onJoinWaitlist: () => void;
}

export function FinalCTASection({ onJoinWaitlist }: FinalCTASectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-purple-600 via-pink-500 to-cyan-500 relative overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-transparent to-purple-600/30 animate-pulse" style={{ animationDuration: '10s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-white mb-6">
            Don't Just Let Your Career Happen. Actively Nourish It.
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-10">
            The future of nursing is <em>United</em> and filled with <em>Opportunity</em>. Join the Nuon waitlist today.
          </p>
          <Button
            onClick={onJoinWaitlist}
            size="lg"
            className="bg-white text-purple-700 hover:bg-white/90 shadow-2xl h-14 px-8 gap-2"
          >
            Join the Early Access Waitlist
            <ArrowUp className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
