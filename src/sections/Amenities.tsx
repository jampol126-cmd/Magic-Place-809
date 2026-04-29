import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Wifi, 
  Waves, 
  Dumbbell, 
  Wind, 
  ChefHat, 
  Car, 
  Shield, 
  Tv,
  Sparkles
} from 'lucide-react';

const getAmenities = (t: any) => [
  { icon: Wifi, title: t('amenities.items.wifi.title'), description: t('amenities.items.wifi.description') },
  { icon: Waves, title: t('amenities.items.pool.title'), description: t('amenities.items.pool.description') },
  { icon: Dumbbell, title: t('amenities.items.gym.title'), description: t('amenities.items.gym.description') },
  { icon: Wind, title: t('amenities.items.ac.title'), description: t('amenities.items.ac.description') },
  { icon: ChefHat, title: t('amenities.items.kitchen.title'), description: t('amenities.items.kitchen.description') },
  { icon: Car, title: t('amenities.items.parking.title'), description: t('amenities.items.parking.description') },
  { icon: Shield, title: t('amenities.items.security.title'), description: t('amenities.items.security.description') },
  { icon: Tv, title: t('amenities.items.tv.title'), description: t('amenities.items.tv.description') },
];

export function Amenities() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();
  const amenities = getAmenities(t);

  return (
    <section id="amenities" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}
        >
          <span className="text-ocean-500 font-semibold text-sm uppercase tracking-wider">
            {t('amenities.subtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mt-3 mb-4">
            {t('amenities.title').split('Premium')[0]}
            <span className="text-ocean-500">Premium</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            {t('amenities.description')}
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className={`group p-6 lg:p-8 rounded-2xl bg-slate-50 hover:bg-ocean-500 transition-all duration-300 fade-in-up ${
                isVisible ? 'visible' : ''
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-ocean-100 group-hover:bg-white/20 flex items-center justify-center mb-5 transition-colors">
                <amenity.icon className="w-7 h-7 text-ocean-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 group-hover:text-white mb-2 transition-colors">
                {amenity.title}
              </h3>
              <p className="text-slate-600 group-hover:text-white/80 text-sm leading-relaxed transition-colors">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className={`mt-16 fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '600ms' }}>
          <div className="bg-gradient-to-r from-ocean-500 to-ocean-600 rounded-2xl p-8 lg:p-12 text-white">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-mustard-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">{t('amenities.premium.title')}</h3>
                  <p className="text-white/80">{t('amenities.premium.subtitle')}</p>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-mustard-400">100%</div>
                  <div className="text-sm text-white/80">{t('amenities.premium.equipped')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-mustard-400">24/7</div>
                  <div className="text-sm text-white/80">{t('amenities.premium.security')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-mustard-400">5★</div>
                  <div className="text-sm text-white/80">{t('amenities.premium.rating')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
