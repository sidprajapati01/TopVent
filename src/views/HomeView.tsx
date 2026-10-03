import React, { useState, useEffect } from 'react';
import { Product, Story, TabType } from '../types';
import { ProductCard } from '../components/ProductCard';
import { ScrollBackground3D } from '../components/ScrollBackground3D';
import { FloatingFashionIcons } from '../components/FloatingFashionIcons';

interface HomeViewProps {
  products: Product[];
  stories: Story[];
  onSelectProduct: (product: Product) => void;
  wishlist: string[];
  onToggleWishlist: (productId: string, e: React.MouseEvent) => void;
  onNavigateTab: (tab: TabType) => void;
  onOpenStory: (story: Story) => void;
  isDark: boolean;
  onBuyNow?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
  onNavigateToCategory?: (category: string) => void;   // ⭐ NEW
}

export const HomeView: React.FC<HomeViewProps> = ({
  products,
  stories,
  onSelectProduct,
  wishlist,
  onToggleWishlist,
  onNavigateTab,
  onOpenStory,
  isDark,
  onBuyNow,
  onAddToCart,
  onNavigateToCategory,   // ⭐ NEW
}) => {
  const [trendingFilter, setTrendingFilter] = useState<'all' | 'men' | 'women' | 'cup' | 'unisex' | 'Accessories'>('all');

  // ⭐ Hero slideshow state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slide every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  // ⭐ Smart Filter: All tab shows 2 from each category | Category tab shows 2 from that category
  const filteredTrending = (() => {
    const LIMIT = 4;

    const getTopFromCategory = (category: string, count: number) =>
      products
        .filter((p) => p.category === category)
        .sort((a, b) => b.discountPercent - a.discountPercent)
        .slice(0, count);

    if (trendingFilter === 'all') {
      return [
        ...getTopFromCategory('men', LIMIT),
        ...getTopFromCategory('women', LIMIT),
        ...getTopFromCategory('cup', LIMIT),
        ...getTopFromCategory('unisex', LIMIT),
        ...getTopFromCategory('Accessories', LIMIT),
      ];
    }

    return getTopFromCategory(trendingFilter, LIMIT);
  })();

  // ⭐ Story click handler — direct to explore with category
  const handleStoryClick = (story: Story) => {
    if (onNavigateToCategory) {
      // Direct navigation with category filter
      onNavigateToCategory(story.category);
    } else {
      // Fallback: open story modal (old behavior)
      onOpenStory(story);
    }
  };

  return (
    <div className="w-full flex flex-col relative" style={{ zIndex: 10 }}>

      {/* ⭐ Background layers (behind everything) */}
      <ScrollBackground3D />
      <FloatingFashionIcons />

      {/* ⭐ Editorial Brand Hero Section with Blur Frame Slideshow */}
      <section
        className="relative w-full overflow-hidden bg-gradient-to-b from-[#16062a] via-[#1a0833] to-[#270845] px-4 pt-5 pb-7 text-white shadow-xl"
        style={{ zIndex: 10 }}
      >
        {/* Ambient atmospheric glowing shapes */}
        <div className="absolute -top-16 -right-12 w-64 h-64 rounded-full bg-orange-500/15 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-16 w-56 h-56 rounded-full bg-purple-500/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Hand-Curated Drops Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 backdrop-blur-md mb-3 border border-orange-500/30">
            <span className="material-symbols-outlined text-orange-400 text-[16px]">verified</span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-orange-300">
              Hand-Curated Drops
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2 max-w-sm leading-tight">
            Elevate Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              Everyday
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-purple-200/80 max-w-xs mb-3 leading-relaxed">
            Discover timeless style, trending fashion, and premium finds — all in one place.
          </p>

          {/* BLUR-BORDER FRAME + SLIDESHOW HERO CARD */}
          <div className="relative w-full mb-4">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-orange-500/40 via-purple-500/40 to-orange-500/40 blur-2xl opacity-70 animate-pulse-slow pointer-events-none" />

            <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 bg-black/20 backdrop-blur-md p-1.5 shadow-2xl">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3QUYeGS0rBwkIGib-mi82zG7gL4CFInlZGu-m417cRw&s=10"
                  alt="TopVent Luxury Editorial 1"
                  loading="eager"
                  className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-1000 ease-in-out ${
                    currentSlide === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                  }`}
                />

                <img
                  src="https://img.magnific.com/free-photo/cheerful-model-sitting-floor-wearing-modern-oversize-black-jacket-creamy-long-dress-high-heel-shoes-her-feet-curly-hairstyle-makeup_343629-61.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="TopVent Luxury Editorial 2"
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-1000 ease-in-out ${
                    currentSlide === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                  }`}
                />

                <img
                  src="https://img.magnific.com/premium-photo/young-man-relaxed-pose-casual-style-natural-light-fashion-photography-modern-aesthetics-brown_1288522-2032.jpg"
                  alt="TopVent Luxury Editorial 3"
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-1000 ease-in-out ${
                    currentSlide === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                  }`}
                />

                <img
                  src="https://plus.unsplash.com/premium_photo-1716196101576-db778a2e7e5f?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="TopVent Luxury Editorial 4"
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-1000 ease-in-out ${
                    currentSlide === 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#16062a] via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#16062a]/30 via-transparent to-[#16062a]/30 pointer-events-none" />

                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
                  <span className="text-[10px] font-bold tracking-wider uppercase text-white">
                    New Season Drop
                  </span>
                </div>

                <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15">
                  <span className="text-[10px] font-bold text-white">
                    {currentSlide + 1} / 4
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <div className="bg-black/55 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                    <span className="block text-[9px] uppercase tracking-widest text-orange-400 font-extrabold">
                      Autumn / Winter '26
                    </span>
                    <span className="block text-xs font-semibold text-white drop-shadow">
                      High-Fashion Atelier Line
                    </span>
                  </div>
                  <div className="bg-orange-500 text-white font-extrabold text-[10px] px-2.5 py-1 rounded-lg uppercase tracking-wider shadow-lg">
                    Exclusive
                  </div>
                </div>

                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                  {[0, 1, 2, 3].map((idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`transition-all rounded-full ${
                        currentSlide === idx
                          ? 'w-5 h-1.5 bg-orange-500'
                          : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Micro Metrics */}
          <div className="grid grid-cols-3 gap-2 w-full max-w-xs mt-4 pt-3 bg-white/5 rounded-2xl backdrop-blur-sm p-3 border border-white/10">
            <div className="flex flex-col items-center">
              <span className="text-base sm:text-lg text-orange-400 font-extrabold tabular-nums">50k+</span>
              <span className="text-[10px] text-purple-200/70 font-medium">Curations</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-base sm:text-lg text-orange-400 font-extrabold tabular-nums">Up to 70%</span>
              <span className="text-[10px] text-purple-200/70 font-medium">Verified Off</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-base sm:text-lg text-orange-400 font-extrabold tabular-nums">4.8★</span>
              <span className="text-[10px] text-purple-200/70 font-medium">Community</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Visual Stories Carousel */}
      <section className="w-full py-4 px-4 bg-slate-50 dark:bg-[#120422] transition-colors relative z-10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <h2 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
              Explore Curations
            </h2>
          </div>
          <span className="text-[11px] font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
            Swipe All
          </span>
        </div>

        {/* Stories Horizontal Ribbon — Story click navigates to Explore with category */}
        <div className="flex items-center gap-3.5 overflow-x-auto pb-2 pt-1 no-scrollbar -mx-4 px-4">
          {stories.map((story) => (
            <div
              key={story.id}
              onClick={() => handleStoryClick(story)}   // ⭐ Updated
              className="flex flex-col items-center shrink-0 w-16 cursor-pointer group active:scale-95 transition-transform"
            >
              <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-orange-500 via-purple-600 to-amber-400 shadow-sm group-hover:shadow-md">
                <div className="w-14 h-14 rounded-full overflow-hidden p-0.5 bg-white dark:bg-[#16062a]">
                  <img
                    src={story.imageUrl}
                    alt={story.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <span className="text-[11px] font-semibold text-slate-800 dark:text-slate-200 mt-1.5 text-center truncate w-full">
                {story.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* VIP Lightning Deals Live Pulse Banner */}
      <section className="px-4 mb-4 relative z-10">
        <div
          onClick={() => onNavigateTab('deals')}
          className="w-full rounded-2xl bg-white dark:bg-[#1a0833] border border-slate-200/80 dark:border-purple-950/60 p-3.5 flex items-center justify-between shadow-sm cursor-pointer hover:border-orange-500/40 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-500/15 flex items-center justify-center text-orange-500 shrink-0">
              <span className="material-symbols-outlined text-[24px]">timer</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs uppercase font-extrabold tracking-wide text-orange-600 dark:text-orange-400">
                  VIP Lightning Deals
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
              </div>
              <p className="text-xs text-slate-500 dark:text-purple-200/70">
                Top Amazon discounts hand-picked today
              </p>
            </div>
          </div>
          <div className="px-2.5 py-1 rounded-full bg-orange-500 text-white text-xs font-bold shadow-sm">
            Live
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <div className="px-4 flex items-center gap-2 overflow-x-auto pb-3 no-scrollbar relative z-10">
        {[
          { key: 'all', label: 'All' },
          { key: 'men', label: "Men's" },
          { key: 'women', label: "Women's" },
          { key: 'cup', label: 'Mugs' },
          { key: 'unisex', label: 'Unisex' },
          { key: 'Accessories', label: 'Accessories' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setTrendingFilter(tab.key as any)}
            className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border ${
              trendingFilter === tab.key
                ? 'bg-orange-500 text-white border-orange-500 shadow-md'
                : 'bg-white dark:bg-[#1a0833] text-slate-700 dark:text-purple-200 border-slate-200 dark:border-purple-950/60 hover:border-orange-500/40'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Curated Trending Drops: ALL Products Grid */}
      <section className="px-4 mb-6 relative z-10">
        <div className="flex items-baseline justify-between mb-3">
          <div>
            <h2 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
              Trending Drops
            </h2>
            <p className="text-xs text-slate-500 dark:text-purple-300/70">
              {filteredTrending.length} curated pieces • Highest price drops
            </p>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => onNavigateTab('explore')}
              className="text-xs font-bold text-orange-600 dark:text-orange-400 flex items-center gap-0.5 hover:underline"
            >
              <span>Filter</span>
              <span className="material-symbols-outlined text-[16px]">tune</span>
            </button>
          </div>
        </div>

        {filteredTrending.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {filteredTrending.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
                isWishlisted={wishlist.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
                onBuyNow={onBuyNow}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="py-12 px-4 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-[28px]">inventory_2</span>
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">No Products Yet</h3>
            <p className="text-xs text-slate-500 dark:text-purple-300/70 mt-1">
              Products will appear here once added
            </p>
          </div>
        )}
      </section>
    </div>
  );
};