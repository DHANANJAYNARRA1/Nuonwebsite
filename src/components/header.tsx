import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { nuonLogo } from "../assets/images";

interface HeaderProps {
  onJoinWaitlist: () => void;
}

export function Header({ onJoinWaitlist }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-purple-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={nuonLogo}
              alt="NUON - Nurses United Opportunities Nourished"
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-purple-900 hover:text-purple-600 transition-colors font-bold"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("product")}
              className="text-purple-900 hover:text-purple-600 transition-colors font-bold"
            >
              Product
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-purple-900 hover:text-purple-600 transition-colors font-bold"
            >
              Contact Us
            </button>
            <Button
              onClick={onJoinWaitlist}
              className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white font-bold"
            >
              Join Waitlist
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-purple-900 p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-purple-100">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-purple-900 hover:text-purple-600 transition-colors text-left py-2 font-bold"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("product")}
                className="text-purple-900 hover:text-purple-600 transition-colors text-left py-2 font-bold"
              >
                Product
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-purple-900 hover:text-purple-600 transition-colors text-left py-2 font-bold"
              >
                Contact Us
              </button>
              <Button
                onClick={onJoinWaitlist}
                className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white w-full font-bold"
              >
                Join Waitlist
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
