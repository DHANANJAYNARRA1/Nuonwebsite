import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ozoneHospitalLogo } from "../assets/images";

export function SocialProofSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-purple-900 mb-4">Built for Nurses, With Healthcare Leaders.</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Partnership */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="backdrop-blur-md bg-white/60 border border-white/80 rounded-2xl p-8 shadow-xl"
          >
            <p className="text-purple-700 text-sm mb-4">Proudly in collaboration with</p>
            <div className="flex items-center justify-center mb-6 bg-white rounded-xl p-4">
              <img
                src={ozoneHospitalLogo}
                alt="Ozone Hospital"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-purple-700">
              Working together with leading healthcare institutions to bring you the best professional development experience.
            </p>
          </motion.div>

          {/* Right - Statistic */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="backdrop-blur-md bg-white/60 border border-white/80 rounded-2xl p-8 shadow-xl text-center"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-cyan-500 mb-6 mx-auto">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="mb-4">
              <span className="text-5xl md:text-6xl bg-gradient-to-br from-purple-600 to-cyan-600 bg-clip-text text-transparent">500+</span>
            </div>
            <p className="text-purple-700 text-lg">
              Nurses are interested!
            </p>
          </motion.div>
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="backdrop-blur-md bg-white/60 border border-white/80 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1654762930571-dcf2ebc11542?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBudXJzZSUyMGhvc3BpdGFsfGVufDF8fHx8MTc2Mjg0NTgxOHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Priya S."
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div className="text-center md:text-left">
                <h4 className="text-purple-900">Priya S.</h4>
                <p className="text-purple-600">Senior Nurse, Critical Care</p>
              </div>
            </div>
            <blockquote className="text-purple-700 text-lg md:text-xl italic">
              "As a critical care nurse, finding time for professional development has always been a challenge. The idea of having everything—courses, mentorship, and wellness resources—in one place is exactly what we need. I can't wait for NUON to launch!"
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
