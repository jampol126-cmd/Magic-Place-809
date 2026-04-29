import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, Phone, Calendar, MapPin, Home, Images, Newspaper, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { LanguageSelector } from './LanguageSelector';

export function Navbar() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: t('nav.home'), href: '#hero', icon: Home },
    { name: t('nav.apartment'), href: '#apartment', icon: Building2 },
    { name: t('nav.gallery'), href: '#gallery', icon: Images },
    { name: t('nav.amenities'), href: '#amenities', icon: Calendar },
    { name: t('nav.location'), href: '#location', icon: MapPin },
    { name: t('nav.booking'), href: '#booking', icon: Calendar },
    { name: t('nav.blog'), href: '#blog', icon: Newspaper },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="flex items-center gap-2"
          >
            <div className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-ocean-500' : 'text-white'
            }`}>
              <span className="text-mustard-500">Magic</span> Place
              <span className="text-ocean-500"> 809</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`text-sm font-medium transition-colors hover:text-ocean-500 ${
                  isScrolled ? 'text-slate-700' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button & Language Selector - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSelector isScrolled={isScrolled} />
            <a
              href="https://wa.me/573160489297"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="bg-ocean-500 hover:bg-ocean-600 text-white gap-2"
              >
                <Phone className="w-4 h-4" />
                {t('nav.contact')}
              </Button>
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSelector isScrolled={isScrolled} />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={isScrolled ? 'text-slate-700' : 'text-white'}
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="text-2xl font-bold">
                    <span className="text-mustard-500">Magic</span>{' '}
                    <span className="text-ocean-500">Place 809</span>
                  </div>
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }}
                        className="flex items-center gap-3 text-slate-700 hover:text-ocean-500 transition-colors py-2"
                      >
                        <link.icon className="w-5 h-5" />
                        {link.name}
                      </a>
                    ))}
                  </nav>
                  <a
                    href="https://www.airbnb.com.co/rooms/1528338194549420533"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4"
                  >
                    <Button className="w-full bg-ocean-500 hover:bg-ocean-600 text-white gap-2">
                      <Phone className="w-4 h-4" />
                      {t('nav.contact')} Airbnb
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
