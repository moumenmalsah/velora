import { useEffect, useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, User } from 'lucide-react';

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: 'Fatima Zahra',
      location: 'Marrakech',
      image: null,
      rating: 5,
      text: 'Après seulement 3 semaines d\'utilisation, j\'ai remarqué une réduction significative de la chute de mes cheveux. Le sérum VELORA est devenu indispensable dans ma routine capillaire !',
      result: '95% moins de chute',
    },
    {
      name: 'Amina Benali',
      location: 'Casablanca',
      image: null,
      rating: 5,
      text: 'J\'ai essayé de nombreux produits avant, mais VELORA est le seul qui a vraiment fonctionné pour mes cheveux. La qualité naturelle se sent dès la première utilisation.',
      result: 'Croissance +40%',
    },
    {
      name: 'Sofia El Amrani',
      location: 'Rabat',
      image: null,
      rating: 5,
      text: 'Mes cheveux étaient très abîmés par les traitements chimiques. Grâce à VELORA, ils ont retrouvé leur brillance naturelle et leur force. Je recommande à 100% !',
      result: 'Brillance +300%',
    },
    {
      name: 'Nadia Moussaoui',
      location: 'Tanger',
      image: null,
      rating: 5,
      text: 'J\'adore l\'odeur naturelle et la texture légère du sérum. Mes cheveux sont plus doux, plus faciles à coiffer et surtout beaucoup plus sains. Merci VELORA !',
      result: '80% moins de frisottis',
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#F5F0E8] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 leaf-pattern opacity-30" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 opacity-10">
        <Quote className="w-32 h-32 text-[#C9A962]" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-10">
        <Quote className="w-24 h-24 text-[#C9A962] rotate-180" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A962]/10 rounded-full mb-4">
            <Star className="w-4 h-4 text-[#C9A962]" />
            <span className="text-[#C9A962] font-body text-sm tracking-wider uppercase">Témoignages</span>
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
            Ce Que Disent Nos <span className="text-gold-gradient">Clientes</span>
          </h2>
          <p className="font-body text-lg text-[#1A1A1A]/70 max-w-2xl mx-auto">
            Découvrez les histoires inspirantes de nos clientes qui ont transformé 
            leurs cheveux avec VELORA.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C9A962] to-[#D4BC7E] mx-auto rounded-full mt-6" />
        </div>

        {/* Main Testimonial */}
        <div className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-[#C9A962] rounded-xl flex items-center justify-center">
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Content */}
            <div className="pt-4">
              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C9A962] text-[#C9A962]" />
                ))}
              </div>

              {/* Text */}
              <p className="font-body text-xl lg:text-2xl text-[#1A1A1A] leading-relaxed mb-8">
                "{testimonials[activeIndex].text}"
              </p>

              {/* Result Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A962]/10 rounded-full mb-8">
                <span className="text-[#C9A962] font-body text-sm font-medium">Résultat :</span>
                <span className="text-[#1A1A1A] font-body text-sm font-bold">{testimonials[activeIndex].result}</span>
              </div>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#C9A962]/20 rounded-full flex items-center justify-center">
                    <User className="w-7 h-7 text-[#C9A962]" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-[#1A1A1A]">{testimonials[activeIndex].name}</h4>
                    <p className="font-body text-[#1A1A1A]/60 text-sm">{testimonials[activeIndex].location}</p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 bg-[#F5F0E8] rounded-full flex items-center justify-center hover:bg-[#C9A962] hover:text-white transition-colors duration-300"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 bg-[#F5F0E8] rounded-full flex items-center justify-center hover:bg-[#C9A962] hover:text-white transition-colors duration-300"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-8 bg-[#C9A962]' : 'bg-[#C9A962]/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 ${
                index === activeIndex 
                  ? 'ring-2 ring-[#C9A962] scale-105' 
                  : 'hover:shadow-xl hover:scale-102'
              }`}
            >
              {/* Mini Rating */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#C9A962] text-[#C9A962]" />
                ))}
              </div>

              {/* Mini Text */}
              <p className="font-body text-[#1A1A1A]/70 text-sm line-clamp-3 mb-4">
                "{testimonial.text}"
              </p>

              {/* Mini Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#C9A962]/20 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-[#C9A962]" />
                </div>
                <div>
                  <h5 className="font-display font-bold text-[#1A1A1A] text-sm">{testimonial.name}</h5>
                  <p className="font-body text-[#1A1A1A]/50 text-xs">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className={`mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { value: '10K+', label: 'Clientes Satisfaites' },
            { value: '4.9', label: 'Note Moyenne' },
            { value: '95%', label: 'Recommandent' },
            { value: '3', label: 'Semaines pour Voir les Résultats' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-3xl lg:text-4xl font-bold text-[#C9A962] mb-1">{stat.value}</div>
              <div className="font-body text-[#1A1A1A]/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
