import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { 
  Calendar as CalendarIcon, 
  Users, 
  MessageCircle, 
  ExternalLink,
  Star,
  Check,
  ChevronDown
} from 'lucide-react';
import { format } from 'date-fns';
import { es, enUS, ptBR } from 'date-fns/locale';
import i18n from '@/i18n';

const occupiedDates = [
  new Date(2024, 11, 20),
  new Date(2024, 11, 21),
  new Date(2024, 11, 22),
  new Date(2024, 11, 23),
  new Date(2024, 11, 24),
  new Date(2024, 11, 25),
  new Date(2024, 11, 31),
  new Date(2025, 0, 1),
  new Date(2025, 0, 2),
];

const getLocale = (lang: string) => {
  switch (lang) {
    case 'es': return es;
    case 'en': return enUS;
    case 'pt': return ptBR;
    default: return es;
  }
};

export function Booking() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState('2');
  const [showGuests, setShowGuests] = useState(false);

  const locale = getLocale(i18n.language);

  const handleWhatsAppBooking = () => {
    const checkInStr = checkIn ? format(checkIn, 'dd/MM/yyyy', { locale }) : t('booking.form.selectDate');
    const checkOutStr = checkOut ? format(checkOut, 'dd/MM/yyyy', { locale }) : t('booking.form.selectDate');
    
    const message = t('whatsapp.message', {
      checkIn: checkInStr,
      checkOut: checkOutStr,
      guests: guests
    });
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/573160489297?text=${encodedMessage}`, '_blank');
  };

  const isDateOccupied = (date: Date) => {
    return occupiedDates.some(
      (occupiedDate) =>
        occupiedDate.getDate() === date.getDate() &&
        occupiedDate.getMonth() === date.getMonth() &&
        occupiedDate.getFullYear() === date.getFullYear()
    );
  };

  const getGuestLabel = (count: number) => {
    return count === 1 ? t('booking.form.guest') : t('booking.form.guests_plural');
  };

  return (
    <section id="booking" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}
        >
          <span className="text-ocean-500 font-semibold text-sm uppercase tracking-wider">
            {t('booking.subtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mt-3 mb-4">
            {t('booking.title').split('Estadía')[0]}
            <span className="text-ocean-500">
              {i18n.language === 'en' ? 'Stay' : i18n.language === 'pt' ? 'Estadia' : 'Estadía'}
            </span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            {t('booking.description')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className={`bg-white rounded-3xl shadow-2xl overflow-hidden fade-in-up ${
              isVisible ? 'visible' : ''
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            {/* Best Price Badge */}
            <div className="bg-gradient-to-r from-mustard-500 to-mustard-600 px-6 py-3 flex items-center justify-center gap-2">
              <Star className="w-5 h-5 text-white fill-white" />
              <span className="text-white font-semibold">{t('booking.bestPrice')}</span>
            </div>

            <div className="p-6 lg:p-10">
              {/* Booking Form */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Check-in Date */}
                <div className="space-y-2">
                  <Label className="text-slate-700 font-medium">{t('booking.form.checkIn')}</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal h-12"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4 text-ocean-500" />
                        {checkIn ? (
                          format(checkIn, 'dd/MM/yyyy', { locale })
                        ) : (
                          <span className="text-slate-400">{t('booking.form.selectDate')}</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={checkIn}
                        onSelect={setCheckIn}
                        disabled={(date) =>
                          date < new Date() || isDateOccupied(date)
                        }
                        modifiers={{
                          occupied: occupiedDates,
                        }}
                        modifiersStyles={{
                          occupied: { backgroundColor: '#e2e8f0', color: '#94a3b8' },
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Check-out Date */}
                <div className="space-y-2">
                  <Label className="text-slate-700 font-medium">{t('booking.form.checkOut')}</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal h-12"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4 text-ocean-500" />
                        {checkOut ? (
                          format(checkOut, 'dd/MM/yyyy', { locale })
                        ) : (
                          <span className="text-slate-400">{t('booking.form.selectDate')}</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={checkOut}
                        onSelect={setCheckOut}
                        disabled={(date) =>
                          date < new Date() || 
                          (checkIn && date <= checkIn) ||
                          isDateOccupied(date)
                        }
                        modifiers={{
                          occupied: occupiedDates,
                        }}
                        modifiersStyles={{
                          occupied: { backgroundColor: '#e2e8f0', color: '#94a3b8' },
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Guests */}
                <div className="space-y-2">
                  <Label className="text-slate-700 font-medium">{t('booking.form.guests')}</Label>
                  <Popover open={showGuests} onOpenChange={setShowGuests}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-between text-left font-normal h-12"
                      >
                        <span className="flex items-center">
                          <Users className="mr-2 h-4 w-4 text-ocean-500" />
                          {guests} {getGuestLabel(parseInt(guests))}
                        </span>
                        <ChevronDown className="h-4 w-4 text-slate-400" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-56" align="start">
                      <div className="space-y-2">
                        {['1', '2', '3', '4'].map((num) => (
                          <button
                            key={num}
                            onClick={() => {
                              setGuests(num);
                              setShowGuests(false);
                            }}
                            className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                              guests === num
                                ? 'bg-ocean-100 text-ocean-700'
                                : 'hover:bg-slate-100'
                            }`}
                          >
                            {num} {getGuestLabel(parseInt(num))}
                          </button>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white h-14 text-lg font-semibold"
                  onClick={handleWhatsAppBooking}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t('booking.buttons.whatsapp')}
                </Button>
                <a
                  href="https://www.airbnb.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full h-14 text-lg font-semibold border-ocean-500 text-ocean-500 hover:bg-ocean-50"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    {t('booking.buttons.airbnb')}
                  </Button>
                </a>
              </div>

              {/* Benefits */}
              <div className="mt-8 pt-8 border-t border-slate-100">
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-sm text-slate-600">{t('booking.benefits.save')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-sm text-slate-600">{t('booking.benefits.personalized')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-sm text-slate-600">{t('booking.benefits.flexible')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div
            className={`mt-8 text-center fade-in-up ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '200ms' }}
          >
            <p className="text-slate-600">
              {t('booking.contact')}{' '}
              <span className="font-semibold text-ocean-500">{t('booking.monica')}</span>{' '}
              {t('booking.phone')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
