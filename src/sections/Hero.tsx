import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Users, Star, ChevronDown, Play, Pause, ExternalLink } from 'lucide-react';

export function Hero() {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          poster="/images/IMG_2283.JPG.jpeg"
        >
          <source src="/videos/IMG_2300.MP4" type="video/mp4" />
          <source src="/videos/IMG_3012.MP4" type="video/mp4" />
          {t('common.loading')}
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80" />
      </div>

      {/* Video Controls */}
      <button
        onClick={toggleVideo}
        className="absolute bottom-32 right-8 z-20 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-white" />
        ) : (
          <Play className="w-5 h-5 text-white" />
        )}
      </button>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="fade-in-up visible">
            <Badge className="mb-6 bg-mustard-500/90 text-white border-0 px-4 py-2 text-sm font-medium">
              <Star className="w-4 h-4 mr-1 fill-current" />
              {t('hero.badge')}
            </Badge>
          </div>

          {/* Title */}
          <h1 className="fade-in-up visible delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t('hero.title').split('809')[0]}
            <span className="text-ocean-400">809</span>
          </h1>

          {/* Subtitle */}
          <p className="fade-in-up visible delay-200 text-xl sm:text-2xl text-white/90 mb-4 font-light">
            {t('hero.subtitle')}
          </p>

          {/* Features */}
          <p className="fade-in-up visible delay-300 text-lg text-white/80 mb-8 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-ocean-400" />
              {t('hero.features.oceanView')}
            </span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="flex items-center gap-2">
              <Users className="w-5 h-5 text-ocean-400" />
              {t('hero.features.pool')}
            </span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-ocean-400" />
              {t('hero.features.gym')}
            </span>
          </p>

          {/* Location Badge */}
          <div className="fade-in-up visible delay-400 mb-10">
            <Badge variant="outline" className="border-white/30 text-white/90 px-4 py-2">
              <MapPin className="w-4 h-4 mr-2" />
              {t('hero.location')}
            </Badge>
          </div>

          {/* CTA Buttons */}
          <div className="fade-in-up visible delay-500 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/573160489297"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-ocean-500 hover:bg-ocean-600 text-white px-8 py-6 text-lg font-semibold shadow-ocean transition-all hover:scale-105"
              >
                {t('hero.cta.bookNow')}
              </Button>
            </a>
            <a
              href="https://www.airbnb.com.co/rooms/1528338194549420533"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/80 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white px-8 py-6 text-lg font-semibold shadow-lg"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Ver en Airbnb
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/80 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white px-8 py-6 text-lg font-semibold shadow-lg"
              onClick={() => scrollToSection('#gallery')}
            >
              {t('hero.cta.viewGallery')}
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="fade-in-up visible delay-500 mt-8">
            <Badge className="bg-white/10 backdrop-blur-sm text-white border-white/20">
              <Star className="w-4 h-4 mr-1 fill-mustard-500 text-mustard-500" />
              {t('hero.bestPrice')}
            </Badge>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <button
          onClick={() => scrollToSection('#gallery')}
          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
          aria-label={t('common.scrollDown')}
        >
          <ChevronDown className="w-6 h-6 text-white" />
        </button>
      </div>
    </section>
  );
}
