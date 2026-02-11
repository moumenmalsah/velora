import { useEffect, useRef, useState } from 'react';
import { Target, Heart, Users, Leaf, Award } from 'lucide-react';

const About = () => {
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

  const values = [
    {
      icon: Leaf,
      title: 'Nature',
      description: 'Des ingrédients 100% naturels, sans produits chimiques nocifs',
    },
    {
      icon: Heart,
      title: 'Tradition',
      description: 'Savoir-faire botanique ancestral préservé et transmis',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Science cosmétique naturelle de pointe pour des résultats optimaux',
    },
    {
      icon: Users,
      title: 'Communauté',
      description: 'Partenariats directs avec des coopératives agricoles locales',
    },
  ];

  const stats = [
    { value: '35', label: 'Herbes Médicinales', suffix: '' },
    { value: '100', label: 'Naturel', suffix: '%' },
    { value: '85', label: 'Satisfaction Client', suffix: '%' },
    { value: '50', label: 'Familles Soutenues', suffix: '+' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#F5F0E8] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 leaf-pattern opacity-50" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A962]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2D5A3D]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A962]/10 rounded-full mb-4">
            <Heart className="w-4 h-4 text-[#C9A962]" />
            <span className="text-[#C9A962] font-body text-sm tracking-wider uppercase">Notre Histoire</span>
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
            Né d'une <span className="text-gold-gradient">Expérience Personnelle</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C9A962] to-[#D4BC7E] mx-auto rounded-full" />
        </div>

        {/* Story Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left - Image */}
          <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/93f22d96-5b28-4a6b-a84c-43985b1b3f18.jpeg"
                  alt="VELORA Logo"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/30 to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#C9A962] text-white rounded-2xl p-6 shadow-xl">
                <Award className="w-8 h-8 mb-2" />
                <div className="font-display text-2xl font-bold">100%</div>
                <div className="font-body text-sm opacity-90">Naturel</div>
              </div>

              {/* Decorative Frame */}
              <div className="absolute -inset-4 border-2 border-[#C9A962]/30 rounded-3xl -z-10" />
            </div>
          </div>

          {/* Right - Content */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-6">
              Une Mission Née de la Passion
            </h3>
            
            <div className="space-y-4 font-body text-lg text-[#1A1A1A]/80 leading-relaxed">
              <p>
                L'idée de <strong className="text-[#C9A962]">VELORA</strong> est née d'une expérience personnelle. 
                Pendant mes années de lycée, j'ai souffert de chute de cheveux, et j'ai réalisé que 
                beaucoup de mes amis faisaient face à des problèmes persistants :
              </p>
              
              <ul className="space-y-2 ml-6">
                {['Chute de cheveux', 'Casse capillaire', 'Pellicules', 'Faible densité'].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#C9A962] rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p>
                Cette observation personnelle est fortement soutenue par la recherche scientifique au Maroc. 
                Une étude réalisée parmi les étudiants universitaires à Marrakech a révélé que 
                <strong className="text-[#C9A962]"> 25%</strong> déclarent des problèmes capillaires.
              </p>

              <p>
                Aujourd'hui, VELORA est plus qu'une marque de soins capillaires. C'est une vision holistique 
                qui rassemble la <strong>nature</strong>, la <strong>santé</strong>, la <strong>beauté</strong>, 
                la <strong>tradition</strong> et le <strong>développement durable</strong>.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 pt-6 border-t border-[#C9A962]/20">
              <p className="font-display text-xl italic text-[#C9A962]">
                "Transformez votre lutte personnelle en opportunité sociale"
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover border border-[#C9A962]/10"
            >
              <div className="w-14 h-14 bg-[#C9A962]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#C9A962] transition-colors duration-300">
                <value.icon className="w-7 h-7 text-[#C9A962] group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="font-display text-xl font-bold text-[#1A1A1A] mb-2">{value.title}</h4>
              <p className="font-body text-[#1A1A1A]/70">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`bg-[#1A1A1A] rounded-3xl p-8 lg:p-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-4xl lg:text-5xl font-bold text-[#C9A962] mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="font-body text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
