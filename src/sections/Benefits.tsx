import { useEffect, useRef, useState } from 'react';
import { 
  Sparkles, 
  Droplets, 
  Shield, 
  Zap, 
  Leaf, 
  Heart,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const Benefits = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeBenefit, setActiveBenefit] = useState(0);

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

  const benefits = [
    {
      icon: Droplets,
      title: 'Hydratation Profonde',
      description: 'Nos herbes médicinales pénètrent en profondeur pour hydrater le cuir chevelu et les cheveux de l\'intérieur.',
      herbs: ['Aloe Vera', 'Rosemary', 'Lavender'],
    },
    {
      icon: Shield,
      title: 'Protection Naturelle',
      description: 'Un bouclier naturel contre les agressions environnementales et les dommages causés par la chaleur.',
      herbs: ['Argan Oil', 'Shea Butter', 'Green Tea'],
    },
    {
      icon: Zap,
      title: 'Croissance Accélérée',
      description: 'Stimule la circulation sanguine du cuir chevelu pour favoriser une croissance saine et rapide.',
      herbs: ['Castor Oil', 'Peppermint', 'Nettle'],
    },
    {
      icon: Heart,
      title: 'Réparation Intense',
      description: 'Répare les cheveux abîmés et prévient la casse pour des cheveux plus forts et résistants.',
      herbs: ['Keratin Plant', 'Biotin', 'Vitamin E'],
    },
  ];

  const keyHerbs = [
    { name: 'Romarin', benefit: 'Stimulation capillaire' },
    { name: 'Lavande', benefit: 'Apaisement cuir chevelu' },
    { name: 'Argan', benefit: 'Nutrition profonde' },
    { name: 'Ricin', benefit: 'Croissance rapide' },
    { name: 'Menthe', benefit: 'Revitalisation' },
    { name: 'Ortie', benefit: 'Force & brillance' },
    { name: 'Aloe Vera', benefit: 'Hydratation' },
    { name: 'Karité', benefit: 'Protection' },
  ];

  const problems = [
    { problem: 'Chute de cheveux', solution: '95% de réduction constatée' },
    { problem: 'Casse capillaire', solution: '80% moins de casse' },
    { problem: 'Pellicules', solution: '90% d\'élimination' },
    { problem: 'Cheveux ternes', solution: 'Brillance naturelle +300%' },
  ];

  return (
    <section
      id="benefits"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#1A1A1A] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#C9A962]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#2D5A3D]/10 rounded-full blur-3xl" />
      </div>

      {/* Floating Leaves */}
      <div className="absolute top-20 left-10 opacity-10">
        <Leaf className="w-16 h-16 text-[#C9A962] animate-float" />
      </div>
      <div className="absolute bottom-40 right-20 opacity-10">
        <Leaf className="w-20 h-20 text-[#C9A962] animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A962]/10 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-[#C9A962]" />
            <span className="text-[#C9A962] font-body text-sm tracking-wider uppercase">Nos Bienfaits</span>
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            35 Herbes <span className="text-gold-gradient">Médicinales</span>
          </h2>
          <p className="font-body text-lg text-white/70 max-w-2xl mx-auto">
            Chaque ingrédient est soigneusement sélectionné pour ses propriétés thérapeutiques 
            et cosmétiques uniques pour votre cuir chevelu et vos cheveux.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C9A962] to-[#D4BC7E] mx-auto rounded-full mt-6" />
        </div>

        {/* Benefits Cards */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-500 cursor-pointer ${
                activeBenefit === index 
                  ? 'border-[#C9A962] bg-[#C9A962]/10' 
                  : 'border-white/10 hover:border-[#C9A962]/50'
              }`}
              onClick={() => setActiveBenefit(index)}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${
                activeBenefit === index ? 'bg-[#C9A962]' : 'bg-[#C9A962]/20'
              }`}>
                <benefit.icon className={`w-7 h-7 transition-colors duration-300 ${
                  activeBenefit === index ? 'text-white' : 'text-[#C9A962]'
                }`} />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="font-body text-white/60 text-sm mb-4">{benefit.description}</p>
              
              {/* Herbs Tags */}
              <div className="flex flex-wrap gap-2">
                {benefit.herbs.map((herb, i) => (
                  <span key={i} className="px-3 py-1 bg-[#C9A962]/20 text-[#C9A962] text-xs font-body rounded-full">
                    {herb}
                  </span>
                ))}
              </div>

              {/* Active Indicator */}
              {activeBenefit === index && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#C9A962] rounded-full" />
              )}
            </div>
          ))}
        </div>

        {/* Key Herbs Grid */}
        <div className={`mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white text-center mb-10">
            Herbes Clés de Nos Formules
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {keyHerbs.map((herb, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#C9A962]/20 to-[#C9A962]/5 rounded-xl p-4 border border-[#C9A962]/20 hover:border-[#C9A962]/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-[#C9A962]/20 rounded-lg flex items-center justify-center">
                    <Leaf className="w-4 h-4 text-[#C9A962]" />
                  </div>
                  <span className="font-display font-bold text-white">{herb.name}</span>
                </div>
                <p className="font-body text-sm text-white/60">{herb.benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Problems & Solutions */}
        <div className={`bg-gradient-to-br from-[#C9A962]/20 to-[#2D5A3D]/20 rounded-3xl p-8 lg:p-12 border border-[#C9A962]/20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">
                Résultats Prouvés
              </h3>
              <p className="font-body text-white/70 mb-8">
                Nos clients constatent des résultats visibles dès les premières semaines d'utilisation. 
                Découvrez comment VELORA transforme vos cheveux.
              </p>
              
              <button
                onClick={() => {
                  const element = document.querySelector('#products');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-gold inline-flex items-center gap-2 px-6 py-3 bg-[#C9A962] text-white font-body rounded-full hover:bg-[#A88B4A] transition-colors duration-300"
              >
                Voir Nos Produits
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              {problems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white/5 rounded-xl p-4 border border-white/10"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C9A962]" />
                    <span className="font-body text-white">{item.problem}</span>
                  </div>
                  <span className="font-display font-bold text-[#C9A962]">{item.solution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
