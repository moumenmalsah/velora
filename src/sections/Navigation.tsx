import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'Notre Histoire', href: '#about' },
    { name: 'Bienfaits', href: '#benefits' },
    { name: 'Impact', href: '#impact' },
    { name: 'Produits', href: '#products' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="flex items-center gap-2 group"
          >
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 rounded-full border-2 border-[#C9A962] group-hover:scale-110 transition-transform duration-300" />
              <Leaf className="absolute inset-0 m-auto w-5 h-5 text-[#C9A962]" />
            </div>
            <span className={`font-display text-2xl font-bold tracking-wide transition-colors duration-300 ${
              isScrolled ? 'text-[#1A1A1A]' : 'text-white'
            }`}>
              VELORA
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`font-body text-sm tracking-wider uppercase transition-all duration-300 hover:text-[#C9A962] relative group ${
                  isScrolled ? 'text-[#1A1A1A]' : 'text-white'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C9A962] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-gold px-6 py-2.5 bg-[#C9A962] text-white font-body text-sm tracking-wider uppercase rounded-full hover:bg-[#A88B4A] transition-colors duration-300"
            >
              Commander
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-[#1A1A1A]' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <div className="glass rounded-2xl p-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="block py-3 px-4 text-[#1A1A1A] font-body text-sm tracking-wider uppercase hover:bg-[#C9A962]/10 rounded-lg transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="w-full mt-4 py-3 bg-[#C9A962] text-white font-body text-sm tracking-wider uppercase rounded-lg hover:bg-[#A88B4A] transition-colors duration-300"
            >
              Commander
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
