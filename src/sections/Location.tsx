import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MapPin, Plane, Umbrella, ShoppingBag, Mountain, Clock, Car } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const getNearbyPlaces = (t: any) => [
  {
    icon: Plane,
    name: t('location.nearby.airport.name'),
    distance: t('location.nearby.airport.distance'),
    description: t('location.nearby.airport.description'),
  },
  {
    icon: Umbrella,
    name: t('location.nearby.beach.name'),
    distance: t('location.nearby.beach.distance'),
    description: t('location.nearby.beach.description'),
  },
  {
    icon: ShoppingBag,
    name: t('location.nearby.mall.name'),
    distance: t('location.nearby.mall.distance'),
    description: t('location.nearby.mall.description'),
  },
  {
    icon: Mountain,
    name: t('location.nearby.tayrona.name'),
    distance: t('location.nearby.tayrona.distance'),
    description: t('location.nearby.tayrona.description'),
  },
];

export function Location() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();
  const nearbyPlaces = getNearbyPlaces(t);

  return (
    <section id="location" className="py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}
        >
          <span className="text-ocean-500 font-semibold text-sm uppercase tracking-wider">
            {t('location.subtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mt-3 mb-4">
            {t('location.title').split('Bello Horizonte')[0]}
            <span className="text-ocean-500">Bello Horizonte</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            {t('location.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <div
            className={`fade-in-up ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
              <div className="aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps?q=Edificio%20Salinas%20del%20Mar%2C%20Bello%20Horizonte%2C%20Santa%20Marta%2C%20Magdalena%2C%20Colombia&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="eager"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Magic Place 809 Location"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div className="space-y-6">
            {/* Address Card */}
            <div
              className={`bg-white rounded-2xl p-6 lg:p-8 shadow-lg fade-in-up ${
                isVisible ? 'visible' : ''
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-ocean-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-ocean-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {t('location.address.building')}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {t('location.address.city')}
                  </p>
                  <Badge className="bg-mustard-500 text-white border-0">
                    <Clock className="w-3 h-3 mr-1" />
                    {t('location.address.badge')}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Nearby Places */}
            <div
              className={`bg-white rounded-2xl p-6 lg:p-8 shadow-lg fade-in-up ${
                isVisible ? 'visible' : ''
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <h3 className="text-xl font-bold text-slate-800 mb-6">
                {t('location.nearby.title')}
              </h3>
              <div className="space-y-4">
                {nearbyPlaces.map((place, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-ocean-50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-ocean-100 flex items-center justify-center flex-shrink-0">
                      <place.icon className="w-5 h-5 text-ocean-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800">{place.name}</h4>
                      <p className="text-sm text-slate-600">{place.description}</p>
                    </div>
                    <Badge variant="outline" className="border-ocean-200 text-ocean-600">
                      <Car className="w-3 h-3 mr-1" />
                      {place.distance}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Transport Info */}
            <div
              className={`bg-gradient-to-r from-ocean-500 to-ocean-600 rounded-2xl p-6 lg:p-8 text-white fade-in-up ${
                isVisible ? 'visible' : ''
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <h3 className="text-xl font-bold mb-4">{t('location.transport.title')}</h3>
              <div className="space-y-3 text-white/90">
                <p className="flex items-center gap-2">
                  <Plane className="w-5 h-5 text-mustard-400" />
                  <span>{t('location.transport.taxi')}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Car className="w-5 h-5 text-mustard-400" />
                  <span>{t('location.transport.uber')}</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-mustard-400" />
                  <span>{t('location.transport.address')}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
