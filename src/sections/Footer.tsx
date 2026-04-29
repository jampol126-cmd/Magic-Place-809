import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Instagram, 
  Phone, 
  MapPin, 
  Star,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    {
      title: t('footer.navigation'),
      links: [
        { name: t('nav.home'), href: '#hero' },
        { name: t('nav.gallery'), href: '#gallery' },
        { name: t('nav.amenities'), href: '#amenities' },
        { name: t('nav.location'), href: '#location' },
        { name: t('nav.booking'), href: '#booking' },
        { name: t('nav.blog'), href: '#blog' },
      ],
    },
    {
      title: t('footer.information'),
      links: [
        { name: t('footer.links.cancellation'), href: '#politicas' },
        { name: t('footer.links.terms'), href: '#terminos' },
        { name: t('footer.links.faq'), href: '#faq' },
      ],
    },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* CTA Section */}
      <div className="border-b border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div
            ref={ref}
            className={`flex flex-col lg:flex-row items-center justify-between gap-8 fade-in-up ${
              isVisible ? 'visible' : ''
            }`}
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                {t('footer.cta.title').split('Magic Place')[0]}
                <span className="text-ocean-400">Magic Place</span>?
              </h3>
              <p className="text-slate-400">
                {t('footer.cta.description')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/573160489297"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {t('footer.buttons.whatsapp')}
                </Button>
              </a>
              <a
                href="https://www.airbnb.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <Star className="w-5 h-5 mr-2" />
                  {t('footer.buttons.airbnb')}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-mustard-400">Magic</span>{' '}
              <span className="text-white">Place</span>{' '}
              <span className="text-ocean-400">809</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="space-y-3">
              <a
                href="tel:+573160489297"
                className="flex items-center gap-3 text-slate-300 hover:text-ocean-400 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">{t('footer.contact.label')}</div>
                  <div className="font-medium">+57 316 0489297</div>
                </div>
              </a>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">{t('footer.contact.locationLabel')}</div>
                  <div className="font-medium">{t('location.address.building')}, Bello Horizonte</div>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }
                      }}
                      className="text-slate-400 hover:text-ocean-400 transition-colors flex items-center gap-1"
                    >
                      <ChevronRight className="w-4 h-4" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              {t('footer.copyright', { year: new Date().getFullYear() })}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/magicplace809"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-ocean-500 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/573160489297"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-green-500 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
