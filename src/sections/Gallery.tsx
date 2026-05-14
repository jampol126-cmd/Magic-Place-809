import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const getGalleryImages = (t: any) => [
  { src: '/images/IMG_2283.JPG.jpeg', alt: t('gallery.categories.exterior'), category: t('gallery.categories.exterior') },
  { src: '/images/IMG_2287.JPG.jpeg', alt: t('gallery.categories.pool'), category: t('gallery.categories.pool') },
  { src: '/images/IMG_3008.JPG.jpeg', alt: t('gallery.categories.kitchen'), category: t('gallery.categories.kitchen') },
  { src: '/images/IMG_2295.JPG.jpeg', alt: t('gallery.categories.bedroom'), category: t('gallery.categories.bedroom') },
  { src: '/images/IMG_2290.JPG.jpeg', alt: t('gallery.categories.gym'), category: t('gallery.categories.gym') },
  { src: '/images/IMG_2289.JPG.jpeg', alt: t('gallery.categories.terrace'), category: t('gallery.categories.terrace') },
  { src: '/images/IMG_2275.JPG.jpeg', alt: t('gallery.categories.beach'), category: t('gallery.categories.beach') },
  { src: '/images/IMG_2277.JPG.jpeg', alt: t('gallery.categories.pool'), category: t('gallery.categories.pool') },
  { src: '/images/IMG_0495.JPG.jpeg', alt: t('gallery.categories.interior'), category: t('gallery.categories.interior') },
  { src: '/images/IMG_0492.JPG.jpeg', alt: t('gallery.categories.view'), category: t('gallery.categories.view') },
  { src: '/images/IMG_2278.JPG.jpeg', alt: t('gallery.categories.lobby'), category: t('gallery.categories.lobby') },
  { src: '/images/IMG_0523.JPG.jpeg', alt: t('gallery.categories.gym'), category: t('gallery.categories.gym') },
];

export function Gallery() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const galleryImages = getGalleryImages(t);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}
        >
          <span className="text-ocean-500 font-semibold text-sm uppercase tracking-wider">
            {t('gallery.subtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mt-3 mb-4">
            {t('gallery.title').split('Magic Place 809')[0]}
            <span className="text-ocean-500">Magic Place 809</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            {t('gallery.description')}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer fade-in-up ${
                isVisible ? 'visible' : ''
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-medium text-ocean-300 uppercase tracking-wider">
                    {image.category}
                  </span>
                  <h3 className="text-white font-semibold text-sm mt-1">{image.alt}</h3>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className={`mt-16 fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <video
              controls
              poster="/images/IMG_2284.JPG.jpeg"
              className="w-full h-full object-cover"
            >
              <source src="/videos/IMG_3012.MP4" type="video/mp4" />
              {t('common.loading')}
            </video>
          </div>
          <p className="text-center text-slate-600 mt-4">
            {t('gallery.videoCaption')}
          </p>
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-6xl w-[95vw] h-[90vh] p-0 bg-slate-900 border-0">
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={goToPrevious}
              className="absolute left-4 z-50 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 z-50 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {selectedImage !== null && (
              <div className="w-full h-full flex flex-col items-center justify-center p-8">
                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="max-w-full max-h-[80%] object-contain rounded-lg"
                />
                <div className="mt-4 text-center">
                  <span className="text-ocean-400 text-sm uppercase tracking-wider">
                    {galleryImages[selectedImage].category}
                  </span>
                  <h3 className="text-white font-semibold text-lg mt-1">
                    {galleryImages[selectedImage].alt}
                  </h3>
                  <p className="text-white/60 text-sm mt-2">
                    {selectedImage + 1} / {galleryImages.length}
                  </p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
