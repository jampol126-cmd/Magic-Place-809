import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Building2, 
  Waves, 
  Bed, 
  Sofa, 
  Utensils, 
  Bath, 
  WashingMachine, 
  Wifi, 
  Users,
  Heart,
  Home
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function Apartment() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();

  const features = [
    {
      icon: Building2,
      title: t('apartment.features.floor.title'),
      description: t('apartment.features.floor.description'),
    },
    {
      icon: Waves,
      title: t('apartment.features.balcony.title'),
      description: t('apartment.features.balcony.description'),
    },
    {
      icon: Bed,
      title: t('apartment.features.bedroom.title'),
      description: t('apartment.features.bedroom.description'),
    },
    {
      icon: Sofa,
      title: t('apartment.features.living.title'),
      description: t('apartment.features.living.description'),
    },
    {
      icon: Utensils,
      title: t('apartment.features.kitchen.title'),
      description: t('apartment.features.kitchen.description'),
    },
    {
      icon: Bath,
      title: t('apartment.features.bathroom.title'),
      description: t('apartment.features.bathroom.description'),
    },
    {
      icon: WashingMachine,
      title: t('apartment.features.laundry.title'),
      description: t('apartment.features.laundry.description'),
    },
    {
      icon: Wifi,
      title: t('apartment.features.wifi.title'),
      description: t('apartment.features.wifi.description'),
    },
  ];

  return (
    <section id="apartment" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 fade-in-up ${isVisible ? 'visible' : ''}`}
        >
          <span className="text-ocean-500 font-semibold text-sm uppercase tracking-wider">
            {t('apartment.subtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mt-3 mb-4">
            {t('apartment.title').split('Apartamento')[0]}
            <span className="text-ocean-500">
              {t('apartment.title').includes('Apartamento') ? 'Apartamento' : 
               t('apartment.title').includes('Apartment') ? 'Apartment' : 
               t('apartment.title').includes('Apartamento') ? 'Apartamento' : 'Apartamento'}
            </span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            {t('apartment.description')}
          </p>
        </div>

        {/* Capacity Card */}
        <div
          className={`max-w-4xl mx-auto mb-12 fade-in-up ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '100ms' }}
        >
          <div className="bg-gradient-to-r from-ocean-500 to-ocean-600 rounded-2xl p-6 lg:p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <Users className="w-8 h-8 text-mustard-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{t('apartment.capacity.title')}</h3>
                  <p className="text-white/80">{t('apartment.capacity.subtitle')}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-mustard-400">5</div>
                  <div className="text-sm text-white/80">{t('apartment.capacity.people')}</div>
                </div>
                <div className="h-12 w-px bg-white/30" />
                <div className="flex flex-col gap-1 text-sm text-white/90">
                  <span className="flex items-center gap-2">
                    <Bed className="w-4 h-4" /> 1 {t('apartment.capacity.bed')}
                  </span>
                  <span className="flex items-center gap-2">
                    <Sofa className="w-4 h-4" /> 1 {t('apartment.capacity.sofaSingle')}
                  </span>
                  <span className="flex items-center gap-2">
                    <Sofa className="w-4 h-4" /> 1 {t('apartment.capacity.sofaDouble')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-6 rounded-2xl bg-slate-50 hover:bg-ocean-50 border border-slate-100 hover:border-ocean-200 transition-all duration-300 fade-in-up ${
                isVisible ? 'visible' : ''
              }`}
              style={{ transitionDelay: `${(index + 2) * 75}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-ocean-100 group-hover:bg-ocean-500 flex items-center justify-center mb-4 transition-colors">
                <feature.icon className="w-6 h-6 text-ocean-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-base font-semibold text-slate-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Ideal For */}
        <div
          className={`mt-12 max-w-4xl mx-auto fade-in-up ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="bg-mustard-50 rounded-2xl p-6 lg:p-8 border border-mustard-100">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-mustard-100 flex items-center justify-center flex-shrink-0">
                <Heart className="w-8 h-8 text-mustard-600" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {t('apartment.ideal.title')}
                </h3>
                <p className="text-slate-600">
                  {t('apartment.ideal.description')}
                </p>
              </div>
              <Badge className="bg-mustard-500 text-white border-0 px-4 py-2 text-sm flex-shrink-0">
                <Home className="w-4 h-4 mr-2" />
                {t('apartment.ideal.badge')}
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
