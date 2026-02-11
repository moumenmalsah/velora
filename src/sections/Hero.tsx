import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Sparkles, Leaf, Heart } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    
    // Create floating particles
    if (particlesRef.current) {
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${6 + Math.random() * 4}s`;
        particlesRef.current.appendChild(particle);
      }
    }
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/1fdb7268-40b3-4136-87c2-c55cf5134833.jpeg"
          alt="VELORA Natural Hair Care"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      </div>

      {/* Floating Particles */}
      <div ref={particlesRef} className="particles-container" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-[#C9A962]/20 rounded-full animate-rotate-slow" />
      <div className="absolute bottom-40 right-20 w-24 h-24 border border-[#C9A962]/20 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }} />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#C9A962] rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-[#C9A962]/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-[#C9A962]/30">
              <Sparkles className="w-4 h-4 text-[#C9A962]" />
              <span className="text-white/90 font-body text-sm tracking-wider">100% Naturel • 35 Herbes Médicinales</span>
            </div>

            {/* Main Title */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              <span className="block">VELORA</span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl font-normal mt-2 text-[#C9A962]">
                Your Hair. We Care.
              </span>
            </h1>

            {/* Description */}
            <p className="text-white/80 font-body text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Découvrez le pouvoir de la nature avec nos soins capillaires 100% naturels, 
              formulés avec 35 herbes médicinales soigneusement sélectionnées pour la santé 
              de vos cheveux et de votre cuir chevelu.
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
              {[
                { icon: Leaf, text: '100% Naturel' },
                { icon: Heart, text: 'Sans Chimie' },
                { icon: Sparkles, text: '35 Herbes' },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-[#C9A962]/20 backdrop-blur-sm rounded-full border border-[#C9A962]/30"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <feature.icon className="w-4 h-4 text-[#C9A962]" />
                  <span className="text-white font-body text-sm">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => {
                  const element = document.querySelector('#products');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-gold px-8 py-4 bg-[#C9A962] text-white font-body text-sm tracking-wider uppercase rounded-full hover:bg-[#A88B4A] transition-all duration-300 animate-pulse-gold"
              >
                Découvrir Nos Produits
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#about');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 border-2 border-white/50 text-white font-body text-sm tracking-wider uppercase rounded-full hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                Notre Histoire
              </button>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className={`relative hidden lg:block transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-[#C9A962]/20 blur-3xl rounded-full scale-75 animate-pulse" />
              
              {/* Product Image */}
              <div className="relative animate-float">
                <img
                  src="/images/1fdb7268-40b3-4136-87c2-c55cf5134833.jpeg"
                  alt="VELORA Product"
                  className="relative z-10 rounded-3xl shadow-2xl border border-[#C9A962]/30"
                />
                
                {/* Decorative Ring */}
                <div className="absolute -inset-4 border-2 border-[#C9A962]/30 rounded-3xl animate-rotate-slow" style={{ animationDuration: '30s' }} />
              </div>

              {/* Stats Cards */}
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-xl animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <div className="text-3xl font-display font-bold text-[#C9A962]">35</div>
                <div className="text-sm font-body text-[#1A1A1A]/70">Herbes Médicinales</div>
              </div>

              <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-xl animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                <div className="text-3xl font-display font-bold text-[#C9A962]">100%</div>
                <div className="text-sm font-body text-[#1A1A1A]/70">Naturel</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-[#C9A962] transition-colors duration-300 animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
