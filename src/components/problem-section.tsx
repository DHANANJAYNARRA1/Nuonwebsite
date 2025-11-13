import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { burnoutImage, isolatedImage, fragmentedImage } from "../assets/images";

const challenges = [
  {
    image: fragmentedImage,
    title: "Your Growth is Fragmented",
    highlight: "Fragmented",
    description: "With no single, trusted system, you're forced to hunt for courses across clunky portals. This scatters your achievements, buries your certificates in emails, and leaves your real opportunities lost in the chaos.",
  },
  {
    image: isolatedImage,
    title: "You're Professionally Isolated",
    highlight: "Isolated",
    description: "You have real questions about your next career step, but who can you ask? There's no clear, trusted path to find a mentor. You're left to navigate the biggest moments of your career completely on your own.",
  },
  {
    image: burnoutImage,
    title: "You're Burned Out, Not Nourished",
    highlight: "Burned Out",
    description: "The stress of the shift follows you home. The mental load is constant, and 'burnout' feels less like a buzzword and more like your daily reality. There is no dedicated, professional space for you to be nourished.",
  },
];

export function ProblemSection() {
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
          <div className="flex justify-center mb-6">
            <div className="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl shadow-2xl">
              <h2 className="text-white">Your Career Shouldn't Be This Hard.</h2>
            </div>
          </div>
          <p className="text-purple-700 text-lg md:text-xl max-w-3xl mx-auto">
            We understand the challenges. Your career feels isolated, your growth is fragmented, and you feel more 'burned out' than 'nourished.'
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => {
            return (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="mb-6 overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={challenge.image}
                    alt={challenge.title}
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
                  />
                </div>
                <div className="flex flex-col items-center mb-4">
                  <div className="px-5 py-3 bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 rounded-xl shadow-lg">
                    <h3 className="text-white">{challenge.highlight}</h3>
                  </div>
                </div>
                <p className="text-purple-700 text-base leading-relaxed">{challenge.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
