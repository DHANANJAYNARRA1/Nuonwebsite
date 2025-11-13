import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { UserPlus, UserCog, Sparkles } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "1",
    title: "Register Today",
    description: "Fill out the early access form to secure your spot.",
  },
  {
    icon: UserCog,
    number: "2",
    title: "Complete Your Profile",
    description: "When we launch, you'll add your specialization and experience.",
  },
  {
    icon: Sparkles,
    number: "3",
    title: "Start Growing",
    description: "Get united with mentors, find new opportunities, and nourish your wellbeing.",
  },
];

export function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-purple-900 mb-4">Get Started in 3 Simple Steps</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative text-center"
              >
                {/* Connector line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-purple-300 to-cyan-300"></div>
                )}
                
                {/* Step number badge */}
                <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 mb-6 shadow-lg">
                  <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center">
                    <span className="text-3xl bg-gradient-to-br from-purple-600 to-cyan-600 bg-clip-text text-transparent">{step.number}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-purple-600" />
                </div>
                
                <div className="flex justify-center mb-3">
                  <div className="px-5 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg">
                    <h3 className="text-white">{step.title}</h3>
                  </div>
                </div>
                <p className="text-purple-700">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
