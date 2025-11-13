import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { toast } from "sonner";

interface FormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  hospital: string;
  specialization: string;
  experience: string;
  interests: string[];
}

const specializations = [
  "Critical Care",
  "Emergency Medicine",
  "Pediatrics",
  "Oncology",
  "Cardiology",
  "Mental Health",
  "Wound Care",
  "General Nursing",
  "Other",
];

const experienceLevels = [
  "< 1 year",
  "1-3 years",
  "3-5 years",
  "5-10 years",
  "10+ years",
];

const interestOptions = [
  { id: "courses", label: "Courses and Learning" },
  { id: "mentorship", label: "Mentorship" },
  { id: "wellness", label: "Wellness" },
  { id: "workshops", label: "Workshops" },
  { id: "events", label: "Events" },
  { id: "mentor", label: "To become a Mentor" },
];


export function PreRegistrationForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Validate required fields
    if (!selectedSpecialization) {
      toast.error("Please select your nursing specialization");
      return;
    }
    if (!selectedExperience) {
      toast.error("Please select your years of experience");
      return;
    }

    // Combine form data with selected values
    const fullData = {
      ...data,
      specialization: selectedSpecialization,
      experience: selectedExperience,
      interests: selectedInterests,
    };

    setIsSubmitting(true);

    try {
      // Send to backend API
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fullData),
      });

      if (response.ok) {
        // Show success toast
        toast.success("You're on the list! Check your email for a confirmation.", {
          duration: 5000,
        });

        // Reset form
        reset();
        setSelectedInterests([]);
        setSelectedSpecialization("");
        setSelectedExperience("");
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Something went wrong. Please try again.", {
          duration: 5000,
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong. Please try again.", {
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleInterest = (interestId: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interestId)
        ? prev.filter((id) => id !== interestId)
        : [...prev, interestId]
    );
  };

  return (
    <section id="registration-form" ref={ref} className="py-20 bg-gradient-to-br from-purple-600 via-pink-500 to-cyan-500 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-white mb-4 text-4xl md:text-5xl lg:text-6xl">Be the First to Join Nuon.</h2>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
            We're launching soon. Sign up for the exclusive waitlist to get early access and <strong>one free course</strong>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          {/* Glassmorphism form container */}
          <div className="backdrop-blur-xl bg-white/20 border border-white/40 rounded-3xl p-8 md:p-12 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Full Name */}
              <div>
                <Label htmlFor="fullName" className="text-white mb-2 block">
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  {...register("fullName", { required: "Full name is required" })}
                  className="bg-white/90 border-white/50 text-purple-900 placeholder:text-purple-400"
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="text-red-200 text-sm mt-1">{errors.fullName.message}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <Label htmlFor="phoneNumber" className="text-white mb-2 block">
                  Phone Number *
                </Label>
                <div className="flex gap-2">
                  <div className="bg-white/90 border border-white/50 rounded-md px-3 py-2 text-purple-900 min-w-fit">
                    +91
                  </div>
                  <Input
                    id="phoneNumber"
                    {...register("phoneNumber", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Please enter a valid 10-digit phone number",
                      },
                    })}
                    className="bg-white/90 border-white/50 text-purple-900 placeholder:text-purple-400 flex-1"
                    placeholder="9876543210"
                    maxLength={10}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="text-red-200 text-sm mt-1">{errors.phoneNumber.message}</p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <Label htmlFor="email" className="text-white mb-2 block">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email address",
                    },
                  })}
                  className="bg-white/90 border-white/50 text-purple-900 placeholder:text-purple-400"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-200 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Current Hospital/Clinic */}
              <div>
                <Label htmlFor="hospital" className="text-white mb-2 block">
                  Current Hospital/Clinic (Optional)
                </Label>
                <Input
                  id="hospital"
                  {...register("hospital")}
                  className="bg-white/90 border-white/50 text-purple-900 placeholder:text-purple-400"
                  placeholder="Enter your hospital or clinic name"
                />
              </div>

              {/* Nursing Specialization */}
              <div>
                <Label htmlFor="specialization" className="text-white mb-2 block">
                  Nursing Specialization *
                </Label>
                <Select value={selectedSpecialization} onValueChange={setSelectedSpecialization}>
                  <SelectTrigger className="bg-white/90 border-white/50 text-purple-900">
                    <SelectValue placeholder="Select your specialization" />
                  </SelectTrigger>
                  <SelectContent>
                    {specializations.map((spec) => (
                      <SelectItem key={spec} value={spec}>
                        {spec}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {!selectedSpecialization && errors.specialization && (
                  <p className="text-red-200 text-sm mt-1">Specialization is required</p>
                )}
              </div>

              {/* Years of Experience */}
              <div>
                <Label htmlFor="experience" className="text-white mb-2 block">
                  Years of Experience *
                </Label>
                <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                  <SelectTrigger className="bg-white/90 border-white/50 text-purple-900">
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    {experienceLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {!selectedExperience && errors.experience && (
                  <p className="text-red-200 text-sm mt-1">Experience is required</p>
                )}
              </div>

              {/* Interests */}
              <div>
                <Label className="text-white mb-3 block">
                  What would you access NUON for? (Select all that apply)
                </Label>
                <div className="space-y-3">
                  {interestOptions.map((interest) => (
                    <div key={interest.id} className="flex items-center space-x-3">
                      <Checkbox
                        id={interest.id}
                        checked={selectedInterests.includes(interest.id)}
                        onCheckedChange={() => toggleInterest(interest.id)}
                        className="bg-white/90 border-white/50"
                      />
                      <Label
                        htmlFor={interest.id}
                        className="text-white cursor-pointer"
                      >
                        {interest.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-700 to-cyan-600 hover:from-purple-800 hover:to-cyan-700 text-white shadow-xl h-14 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Secure My Spot"}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
