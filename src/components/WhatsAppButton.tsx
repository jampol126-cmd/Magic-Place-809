import { ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const AIRBNB_LINK = "https://www.airbnb.com.co/rooms/1528338194549420533";

export function WhatsAppButton() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href={AIRBNB_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Airbnb"
    >
      <div className="group relative">
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-slate-700 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <span className="text-sm font-medium">{t('whatsapp.tooltip')}</span>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-white rotate-45" />
        </div>

        {/* Button */}
        <div className="w-14 h-14 bg-[#FF5A5F] hover:bg-[#FF7A7F] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110">
          <ExternalLink className="w-7 h-7 text-white" />
        </div>

        {/* Pulse animation */}
        <div className="absolute inset-0 bg-[#FF5A5F] rounded-full animate-ping opacity-20" />
      </div>
    </a>
  );
}
