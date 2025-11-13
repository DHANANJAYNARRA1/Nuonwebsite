import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { nuonLogo, indianNurseImage } from "../assets/images";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" ref={ref} className="py-20 bg-gradient-to-br from-purple-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-purple-900 mb-4">Get in Touch</h2>
          <p className="text-purple-700 text-lg max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Reach out to our team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center md:justify-start mb-8">
              <img
                src={nuonLogo}
                alt="NUON"
                className="h-20 w-auto object-contain"
              />
            </div>

            <div className="backdrop-blur-md bg-white/60 border border-white/80 rounded-2xl p-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-purple-900 mb-2">Email</h3>
                  <p className="text-purple-700">support@nuon.app</p>
                  <p className="text-purple-700">partnerships@nuon.app</p>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-md bg-white/60 border border-white/80 rounded-2xl p-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-purple-900 mb-2">Phone</h3>
                  <p className="text-purple-700">+91 (800) 123-4567</p>
                  <p className="text-purple-600 text-sm">Mon-Fri, 9am-6pm IST</p>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-md bg-white/60 border border-white/80 rounded-2xl p-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-purple-900 mb-2">Location</h3>
                  <p className="text-purple-700">Mumbai, Maharashtra</p>
                  <p className="text-purple-700">India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center"
          >
            <div className="backdrop-blur-md bg-white/60 border border-white/80 rounded-2xl p-4 shadow-xl w-full">
              <img
                src={indianNurseImage}
                alt="NUON Healthcare Professional"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
