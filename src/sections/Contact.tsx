import { useEffect, useRef, useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Instagram, 
  Facebook, 
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    { icon: Phone, label: 'Téléphone', value: '+212 6XX-XXXXXX', href: 'tel:+212600000000' },
    { icon: Mail, label: 'Email', value: 'contact@velora.ma', href: 'mailto:contact@velora.ma' },
    { icon: MapPin, label: 'Adresse', value: 'Marrakech, Maroc', href: '#' },
  ];

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: MessageCircle, label: 'WhatsApp', href: '#' },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#1A1A1A] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C9A962]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2D5A3D]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A962]/10 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-[#C9A962]" />
            <span className="text-[#C9A962] font-body text-sm tracking-wider uppercase">Contact</span>
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Commencez Votre <span className="text-gold-gradient">Transformation</span>
          </h2>
          <p className="font-body text-lg text-white/70 max-w-2xl mx-auto">
            Prête à découvrir le pouvoir de la nature pour vos cheveux ? 
            Contactez-nous ou commandez dès maintenant.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C9A962] to-[#D4BC7E] mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Contact Info */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">
              Parlons de Vos Cheveux
            </h3>
            <p className="font-body text-white/70 mb-8">
              Notre équipe d'experts est là pour vous conseiller et vous aider à trouver 
              les produits les plus adaptés à vos besoins capillaires.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 bg-[#C9A962]/20 rounded-xl flex items-center justify-center group-hover:bg-[#C9A962] transition-colors duration-300">
                    <info.icon className="w-6 h-6 text-[#C9A962] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="font-body text-white/50 text-sm">{info.label}</p>
                    <p className="font-body text-white group-hover:text-[#C9A962] transition-colors duration-300">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="font-body text-white/50 text-sm mb-4">Suivez-nous</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#C9A962] transition-colors duration-300 group"
                  >
                    <social.icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="mt-10 bg-gradient-to-br from-[#C9A962]/20 to-[#C9A962]/5 rounded-2xl p-6 border border-[#C9A962]/30">
              <h4 className="font-display text-xl font-bold text-white mb-2">
                Livraison Gratuite
              </h4>
              <p className="font-body text-white/70 mb-4">
                Pour toute commande supérieure à 500 MAD
              </p>
              <button
                onClick={() => {
                  const element = document.querySelector('#products');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-gold flex items-center gap-2 px-6 py-3 bg-[#C9A962] text-white font-body rounded-full hover:bg-[#A88B4A] transition-colors duration-300"
              >
                Commander Maintenant
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="font-display text-2xl font-bold text-white mb-6">
                Envoyez-nous un Message
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h4 className="font-display text-2xl font-bold text-white mb-2">
                    Message Envoyé !
                  </h4>
                  <p className="font-body text-white/70">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-body text-white/70 text-sm mb-2">Nom complet</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-body placeholder:text-white/30 focus:border-[#C9A962] focus:outline-none transition-colors duration-300"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-white/70 text-sm mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-body placeholder:text-white/30 focus:border-[#C9A962] focus:outline-none transition-colors duration-300"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-white/70 text-sm mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-body placeholder:text-white/30 focus:border-[#C9A962] focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Comment pouvons-nous vous aider ?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-gold flex items-center justify-center gap-2 px-6 py-4 bg-[#C9A962] text-white font-body rounded-xl hover:bg-[#A88B4A] transition-colors duration-300"
                  >
                    <Send className="w-4 h-4" />
                    Envoyer le Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
