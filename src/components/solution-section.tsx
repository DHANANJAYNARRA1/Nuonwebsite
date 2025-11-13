import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { BookOpen, Users, Leaf, UserCircle, Award, TrendingUp } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Learning Hub",
    description: "Nourish Your Opportunities: A curated marketplace of courses like 'Advanced Patient Care' and 'Wound Care Management'.",
  },
  {
    icon: Users,
    title: "Mentorship",
    description: "Get United: Find and book 1-on-1 video sessions with vetted mentors in 'Critical Care' or 'Emergency Medicine'.",
  },
  {
    icon: Leaf,
    title: "Wellness Hub",
    description: "Get Nourished: A dedicated space with mindfulness sessions and support groups to prevent burnout.",
  },
  {
    icon: UserCircle,
    title: "Dynamic Profile",
    description: "Track Your Opportunities: A living portfolio showing your completed courses, sessions, and workshops.",
  },
  {
    icon: Award,
    title: "Achievement Hub",
    description: "See Your Achievements: All your 'Certifications & Awards' in one, verified, easy-to-find place.",
  },
  {
    icon: TrendingUp,
    title: "Career Advancement",
    description: "Find New Opportunities: Join the 'Nightingale Programme' to become a Champion Mentor.",
  },
];

export function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="product" ref={ref} className="py-20 bg-gradient-to-br from-purple-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-xl shadow-2xl">
              <h2 className="text-white">Get United. Get Nourished. Get Nuon.</h2>
            </div>
          </div>
          <p className="text-purple-700 text-lg md:text-xl max-w-3xl mx-auto">
            Nuon is the app built to solve your biggest challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Glassmorphism card */}
                <div className="relative backdrop-blur-md bg-white/40 border border-white/60 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="flex justify-center mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex justify-center mb-3">
                    <div className="px-5 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl shadow-lg">
                      <h3 className="text-white">{feature.title}</h3>
                    </div>
                  </div>
                  <p className="text-purple-700 text-center">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
