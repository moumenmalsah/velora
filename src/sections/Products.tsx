import { useEffect, useRef, useState } from 'react';
import { 
  ShoppingBag, 
  Star, 
  Leaf, 
  Droplets, 
  Sparkles,
  Check,
  ArrowRight,
  Heart
} from 'lucide-react';

const Products = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [likedProducts, setLikedProducts] = useState<number[]>([]);

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

  const toggleLike = (index: number) => {
    setLikedProducts(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const products = [
    {
      name: 'Sérum Capillaire VELORA',
      subtitle: 'Formule Intense',
      description: 'Sérum concentré avec 35 herbes médicinales pour stimuler la croissance et réparer les cheveux abîmés.',
      price: '349',
      currency: 'MAD',
      image: '/images/1fdb7268-40b3-4136-87c2-c55cf5134833.jpeg',
      rating: 4.9,
      reviews: 128,
      badge: 'Best Seller',
      features: ['Croissance rapide', 'Réparation intense', 'Sans silicone'],
      size: '100ml',
    },
    {
      name: 'Shampooing Naturel VELORA',
      subtitle: 'Nettoyage Doux',
      description: 'Shampooing doux enrichi aux huiles essentielles naturelles pour un cuir chevelu sain.',
      price: '189',
      currency: 'MAD',
      image: '/images/1fdb7268-40b3-4136-87c2-c55cf5134833.jpeg',
      rating: 4.8,
      reviews: 96,
      badge: 'Nouveau',
      features: ['pH équilibré', 'Sans sulfate', 'Hydratation profonde'],
      size: '250ml',
    },
    {
      name: 'Masque Capillaire VELORA',
      subtitle: 'Nutrition Profonde',
      description: 'Masque intensif pour nourrir en profondeur et restaurer la brillance naturelle.',
      price: '249',
      currency: 'MAD',
      image: '/images/1fdb7268-40b3-4136-87c2-c55cf5134833.jpeg',
      rating: 4.7,
      reviews: 84,
      badge: null,
      features: ['Brillance +300%', 'Anti-casse', 'Protection UV'],
      size: '200ml',
    },
  ];

  const bundles = [
    {
      name: 'Pack Découverte',
      description: 'Sérum + Shampooing',
      originalPrice: '538',
      price: '449',
      savings: '89',
      popular: true,
    },
    {
      name: 'Pack Complet',
      description: 'Sérum + Shampooing + Masque',
      originalPrice: '787',
      price: '649',
      savings: '138',
      popular: false,
    },
  ];

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#1A1A1A] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C9A962]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#2D5A3D]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A962]/10 rounded-full mb-4">
            <ShoppingBag className="w-4 h-4 text-[#C9A962]" />
            <span className="text-[#C9A962] font-body text-sm tracking-wider uppercase">Nos Produits</span>
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Découvrez la <span className="text-gold-gradient">Gamme VELORA</span>
          </h2>
          <p className="font-body text-lg text-white/70 max-w-2xl mx-auto">
            Des soins capillaires 100% naturels, formulés avec amour et expertise 
            pour révéler la beauté naturelle de vos cheveux.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C9A962] to-[#D4BC7E] mx-auto rounded-full mt-6" />
        </div>

        {/* Products Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-[#C9A962]/50 transition-all duration-500 card-hover"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
                
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#C9A962] text-white font-body text-xs tracking-wider uppercase rounded-full">
                    {product.badge}
                  </div>
                )}
                
                {/* Like Button */}
                <button
                  onClick={() => toggleLike(index)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <Heart 
                    className={`w-5 h-5 transition-colors duration-300 ${
                      likedProducts.includes(index) ? 'fill-red-500 text-red-500' : 'text-white'
                    }`} 
                  />
                </button>

                {/* Size Badge */}
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-white/10 backdrop-blur-sm text-white font-body text-sm rounded-full">
                  {product.size}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-[#C9A962] text-[#C9A962]" />
                    <span className="text-white font-body text-sm">{product.rating}</span>
                  </div>
                  <span className="text-white/40 font-body text-sm">({product.reviews} avis)</span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-white mb-1">{product.name}</h3>
                <p className="text-[#C9A962] font-body text-sm mb-3">{product.subtitle}</p>
                
                {/* Description */}
                <p className="font-body text-white/60 text-sm mb-4 line-clamp-2">{product.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, i) => (
                    <span key={i} className="flex items-center gap-1 px-2 py-1 bg-[#C9A962]/10 text-[#C9A962] text-xs font-body rounded-full">
                      <Check className="w-3 h-3" />
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-display text-2xl font-bold text-[#C9A962]">{product.price}</span>
                    <span className="text-white/60 font-body text-sm ml-1">{product.currency}</span>
                  </div>
                  <button className="btn-gold flex items-center gap-2 px-5 py-2.5 bg-[#C9A962] text-white font-body text-sm rounded-full hover:bg-[#A88B4A] transition-colors duration-300">
                    <ShoppingBag className="w-4 h-4" />
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bundles Section */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white text-center mb-10">
            Packs Économiques
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {bundles.map((bundle, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br rounded-2xl p-6 border transition-all duration-300 ${
                  bundle.popular 
                    ? 'from-[#C9A962]/20 to-[#C9A962]/5 border-[#C9A962]/50' 
                    : 'from-white/5 to-white/0 border-white/10 hover:border-[#C9A962]/30'
                }`}
              >
                {bundle.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#C9A962] text-white font-body text-xs tracking-wider uppercase rounded-full">
                    Plus Populaire
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-display text-xl font-bold text-white">{bundle.name}</h4>
                    <p className="font-body text-white/60 text-sm">{bundle.description}</p>
                  </div>
                  <div className="w-12 h-12 bg-[#C9A962]/20 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-[#C9A962]" />
                  </div>
                </div>

                <div className="flex items-end gap-3 mb-4">
                  <div>
                    <span className="font-display text-3xl font-bold text-[#C9A962]">{bundle.price}</span>
                    <span className="text-white/60 font-body text-sm ml-1">MAD</span>
                  </div>
                  <div className="mb-1">
                    <span className="text-white/40 font-body text-sm line-through">{bundle.originalPrice} MAD</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-6 px-3 py-2 bg-green-500/10 rounded-lg">
                  <Leaf className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-body text-sm">Économisez {bundle.savings} MAD</span>
                </div>

                <button className="w-full btn-gold flex items-center justify-center gap-2 px-6 py-3 bg-[#C9A962] text-white font-body rounded-full hover:bg-[#A88B4A] transition-colors duration-300">
                  Commander le Pack
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className={`mt-16 flex flex-wrap justify-center gap-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { icon: Leaf, text: '100% Naturel' },
            { icon: Droplets, text: 'Sans Parabènes' },
            { icon: Sparkles, text: 'Cruelty-Free' },
            { icon: Check, text: 'Certifié Bio' },
          ].map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-white/60">
              <badge.icon className="w-5 h-5 text-[#C9A962]" />
              <span className="font-body text-sm">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
