import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  slug: string;
}

const getBlogPosts = (t: any): BlogPost[] => [
  {
    id: 1,
    title: t('blog.articles.article1.title'),
    excerpt: t('blog.articles.article1.excerpt'),
    image: '/images/IMG_2275.JPG.jpeg',
    category: t('blog.categories.guide'),
    readTime: '8',
    date: '2024-12-15',
    slug: '/blog/apartamentos-santa-marta-bello-horizonte/',
  },
  {
    id: 2,
    title: t('blog.articles.article2.title'),
    excerpt: t('blog.articles.article2.excerpt'),
    image: '/images/IMG_0499.JPG.jpeg',
    category: t('blog.categories.tips'),
    readTime: '6',
    date: '2024-12-10',
    slug: '/blog/reservar-airbnb-santa-marta-vs-directo/',
  },
  {
    id: 3,
    title: t('blog.articles.article3.title'),
    excerpt: t('blog.articles.article3.excerpt'),
    image: '/images/IMG_2283.JPG.jpeg',
    category: t('blog.categories.location'),
    readTime: '5',
    date: '2024-12-05',
    slug: '/blog/aeropuerto-santa-marta-donde-hospedarte/',
  },
  {
    id: 4,
    title: t('blog.articles.article4.title'),
    excerpt: t('blog.articles.article4.excerpt'),
    image: '/images/IMG_2275.JPG.jpeg',
    category: t('blog.categories.beaches'),
    readTime: '7',
    date: '2024-11-28',
    slug: '/blog/playa-salguero-santa-marta/',
  },
  {
    id: 5,
    title: t('blog.articles.article5.title'),
    excerpt: t('blog.articles.article5.excerpt'),
    image: '/images/IMG_2289.JPG.jpeg',
    category: t('blog.categories.activities'),
    readTime: '9',
    date: '2024-11-20',
    slug: '/blog/que-hacer-bello-horizonte/',
  },
  {
    id: 6,
    title: t('blog.articles.article6.title'),
    excerpt: t('blog.articles.article6.excerpt'),
    image: '/images/IMG_0495.JPG.jpeg',
    category: t('blog.categories.guide'),
    readTime: '10',
    date: '2024-11-15',
    slug: '/blog/apartamentos-amoblados-santa-marta/',
  },
];

export function Blog() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();
  const blogPosts = getBlogPosts(t);

  return (
    <section id="blog" className="py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}
        >
          <span className="text-ocean-500 font-semibold text-sm uppercase tracking-wider">
            {t('blog.subtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mt-3 mb-4">
            {t('blog.title').split('Viaje')[0]}
            <span className="text-ocean-500">
              {t('blog.title').includes('Viaje') ? 'Viaje' : 
               t('blog.title').includes('Trip') ? 'Trip' : 
               t('blog.title').includes('Viagem') ? 'Viagem' : 'Viaje'}
            </span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            {t('blog.description')}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 fade-in-up ${
                isVisible ? 'visible' : ''
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="eager"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-1 bg-ocean-100 text-ocean-700 rounded text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime} {t('blog.readTime')}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-ocean-500 transition-colors">
                  {post.title}
                </h3>

                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <a
                  href={post.slug}
                  className="inline-flex items-center text-ocean-500 font-semibold text-sm hover:text-ocean-600 transition-colors"
                >
                  {t('blog.readMore')}
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
}
