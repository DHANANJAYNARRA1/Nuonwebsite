import { Toaster } from "./components/ui/sonner";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { ProblemSection } from "./components/problem-section";
import { SolutionSection } from "./components/solution-section";
import { HowItWorksSection } from "./components/how-it-works-section";
import { SocialProofSection } from "./components/social-proof-section";
import { PreRegistrationForm } from "./components/pre-registration-form";
import { FAQSection } from "./components/faq-section";
import { ContactSection } from "./components/contact-section";
import { FinalCTASection } from "./components/final-cta-section";
import { Footer } from "./components/footer";

export default function App() {
  const scrollToForm = () => {
    const formElement = document.getElementById(
      "registration-form",
    );
    if (formElement) {
      formElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Header onJoinWaitlist={scrollToForm} />
      <HeroSection onJoinWaitlist={scrollToForm} />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <SocialProofSection />
      <PreRegistrationForm />
      <FAQSection />
      <ContactSection />
      <FinalCTASection onJoinWaitlist={scrollToForm} />
      <Footer />
      <Toaster />
    </div>
  );
}