import { Leaf, Heart, Instagram, Facebook, MessageCircle, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    produits: [
      { name: 'Sérum Capillaire', href: '#products' },
      { name: 'Shampooing Naturel', href: '#products' },
      { name: 'Masque Capillaire', href: '#products' },
      { name: 'Packs Économiques', href: '#products' },
    ],
    entreprise: [
      { name: 'Notre Histoire', href: '#about' },
      { name: 'Nos Valeurs', href: '#about' },
      { name: 'Notre Impact', href: '#impact' },
      { name: 'Partenariats', href: '#impact' },
    ],
    support: [
      { name: 'Contact', href: '#contact' },
      { name: 'FAQ', href: '#' },
      { name: 'Livraison', href: '#' },
      { name: 'Retours', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: MessageCircle, href: '#', label: 'WhatsApp' },
    { icon: Mail, href: 'mailto:contact@velora.ma', label: 'Email' },
  ];

  return (
    <footer className="relative bg-[#0D0D0D] overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A962] via-[#D4BC7E] to-[#C9A962]" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <a href="#hero" className="flex items-center gap-2 mb-6">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 rounded-full border-2 border-[#C9A962]" />
                <Leaf className="absolute inset-0 m-auto w-5 h-5 text-[#C9A962]" />
              </div>
              <span className="font-display text-2xl font-bold text-white tracking-wide">
                VELORA
              </span>
            </a>
            <p className="font-body text-white/60 text-sm mb-6 leading-relaxed">
              Votre Hair. We Care. Des soins capillaires 100% naturels formulés avec 35 herbes médicinales.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#C9A962] transition-colors duration-300 group"
                >
                  <social.icon className="w-4 h-4 text-white/60 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-4">Produits</h4>
            <ul className="space-y-3">
              {footerLinks.produits.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-body text-white/60 text-sm hover:text-[#C9A962] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-4">Entreprise</h4>
            <ul className="space-y-3">
              {footerLinks.entreprise.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-body text-white/60 text-sm hover:text-[#C9A962] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-body text-white/60 text-sm hover:text-[#C9A962] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <h4 className="font-display text-lg font-bold text-white mb-4">Newsletter</h4>
            <p className="font-body text-white/60 text-sm mb-4">
              Recevez nos offres exclusives et conseils capillaires.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white font-body text-sm placeholder:text-white/30 focus:border-[#C9A962] focus:outline-none transition-colors duration-300"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#C9A962] text-white rounded-lg hover:bg-[#A88B4A] transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-white/40 text-sm text-center md:text-left">
              © 2024 VELORA. Tous droits réservés. Fait avec{' '}
              <Heart className="w-3 h-3 inline text-[#C9A962] fill-[#C9A962]" /> au Maroc.
            </p>
            
            <div className="flex items-center gap-6">
              <a href="#" className="font-body text-white/40 text-sm hover:text-[#C9A962] transition-colors duration-300">
                Politique de Confidentialité
              </a>
              <a href="#" className="font-body text-white/40 text-sm hover:text-[#C9A962] transition-colors duration-300">
                Conditions d'Utilisation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#C9A962] rounded-full flex items-center justify-center shadow-lg hover:bg-[#A88B4A] transition-colors duration-300 z-50 group"
      >
        <ArrowUp className="w-5 h-5 text-white group-hover:-translate-y-0.5 transition-transform duration-300" />
      </button>
    </footer>
  );
};

export default Footer;
