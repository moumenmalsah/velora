import { useEffect, useRef, useState } from 'react';
import { 
  Globe, 
  Users, 
  TreePine, 
  Heart, 
  TrendingUp, 
  HandHeart,
  Sprout,
  Award,
  ArrowUpRight
} from 'lucide-react';

const Impact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const sdgs = [
    {
      number: '03',
      title: 'Bonne Santé',
      description: 'Produits sains sans produits chimiques nocifs',
      icon: Heart,
      color: '#4C9F38',
    },
    {
      number: '05',
      title: 'Égalité des Sexes',
      description: 'Autonomisation des femmes rurales',
      icon: Users,
      color: '#FF3A21',
    },
    {
      number: '08',
      title: 'Travail Décent',
      description: 'Création d\'emplois stables et saisonniers',
      icon: TrendingUp,
      color: '#A21942',
    },
    {
      number: '12',
      title: 'Consommation Responsable',
      description: 'Production écologique et durable',
      icon: Sprout,
      color: '#BF8B2E',
    },
    {
      number: '15',
      title: 'Vie Terrestre',
      description: 'Protection de la biodiversité locale',
      icon: TreePine,
      color: '#56C02B',
    },
  ];

  const impacts = [
    {
      level: 'Local',
      icon: HandHeart,
      items: [
        'Soutien aux économies rurales',
        'Création d\'emplois pour femmes et jeunes',
        'Valorisation des ressources naturelles',
        'Préservation du savoir-faire traditionnel',
      ],
    },
    {
      level: 'National',
      icon: Award,
      items: [
        'Renforcement des produits naturels marocains',
        'Réduction des importations cosmétiques',
        'Contribution à l\'économie verte',
        'Rayonnement du Maroc à l\'international',
      ],
    },
    {
      level: 'International',
      icon: Globe,
      items: [
        'Produits capillaires naturels de qualité',
        'Promotion des herbes médicinales marocaines',
        'Diffusion de la culture de beauté durable',
        'Inspiration pour d\'autres initiatives',
      ],
    },
  ];

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#F5F0E8] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 leaf-pattern opacity-30" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2D5A3D]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C9A962]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D5A3D]/10 rounded-full mb-4">
            <Globe className="w-4 h-4 text-[#2D5A3D]" />
            <span className="text-[#2D5A3D] font-body text-sm tracking-wider uppercase">Notre Impact</span>
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
            Un Impact <span className="text-[#2D5A3D]">Positif</span>
          </h2>
          <p className="font-body text-lg text-[#1A1A1A]/70 max-w-2xl mx-auto">
            VELORA s'aligne sur les Objectifs de Développement Durable des Nations Unies 
            et l'Initiative Nationale pour le Développement Humain (INDH).
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2D5A3D] to-[#C9A962] mx-auto rounded-full mt-6" />
        </div>

        {/* SDGs Grid */}
        <div className={`mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1A1A1A] text-center mb-10">
            Objectifs de Développement Durable
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {sdgs.map((sdg, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover overflow-hidden"
              >
                {/* SDG Number */}
                <div 
                  className="absolute -top-4 -right-4 w-20 h-20 rounded-full flex items-end justify-start pb-4 pl-4 font-display text-3xl font-bold text-white/20"
                  style={{ backgroundColor: sdg.color }}
                >
                  {sdg.number}
                </div>
                
                {/* Icon */}
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
                  style={{ backgroundColor: `${sdg.color}20` }}
                >
                  <sdg.icon className="w-6 h-6" style={{ color: sdg.color }} />
                </div>
                
                {/* Content */}
                <h4 className="font-display text-lg font-bold text-[#1A1A1A] mb-2">{sdg.title}</h4>
                <p className="font-body text-sm text-[#1A1A1A]/60">{sdg.description}</p>
                
                {/* Hover Effect */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"
                  style={{ backgroundColor: sdg.color }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Impact Levels */}
        <div className={`grid lg:grid-cols-3 gap-8 mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover border border-[#C9A962]/10"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#C9A962] to-[#2D5A3D] rounded-xl flex items-center justify-center">
                  <impact.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="font-body text-sm text-[#C9A962] uppercase tracking-wider">Impact</span>
                  <h4 className="font-display text-2xl font-bold text-[#1A1A1A]">{impact.level}</h4>
                </div>
              </div>

              {/* Items */}
              <ul className="space-y-3">
                {impact.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowUpRight className="w-5 h-5 text-[#C9A962] flex-shrink-0 mt-0.5" />
                    <span className="font-body text-[#1A1A1A]/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Partnership Banner */}
        <div className={`bg-gradient-to-r from-[#1A1A1A] to-[#2D2D2D] rounded-3xl p-8 lg:p-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                Partenariats avec des Coopératives Agricoles
              </h3>
              <p className="font-body text-white/70 mb-6">
                VELORA s'appuie sur des partenariats directs avec des coopératives agricoles locales 
                dans les régions rurales et reculées. Ces coopératives cultivent et collectent 
                les herbes médicinales de manière durable.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-[#C9A962]/20 rounded-full">
                  <TreePine className="w-4 h-4 text-[#C9A962]" />
                  <span className="text-white/80 font-body text-sm">Agriculture Durable</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-[#C9A962]/20 rounded-full">
                  <Users className="w-4 h-4 text-[#C9A962]" />
                  <span className="text-white/80 font-body text-sm">Équité Sociale</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-[#C9A962]/20 rounded-full">
                  <Sprout className="w-4 h-4 text-[#C9A962]" />
                  <span className="text-white/80 font-body text-sm">Biodiversité</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
                <div className="font-display text-4xl font-bold text-[#C9A962] mb-2">50+</div>
                <div className="font-body text-white/60 text-sm">Familles Soutenues</div>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
                <div className="font-display text-4xl font-bold text-[#C9A962] mb-2">12</div>
                <div className="font-body text-white/60 text-sm">Coopératives Partenaires</div>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
                <div className="font-display text-4xl font-bold text-[#C9A962] mb-2">100%</div>
                <div className="font-body text-white/60 text-sm">Recolte Durable</div>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
                <div className="font-display text-4xl font-bold text-[#C9A962] mb-2">0</div>
                <div className="font-body text-white/60 text-sm">Intermédiaires</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
