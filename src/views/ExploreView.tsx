import React, { useState } from 'react';
import { Product } from '../types';
import { ProductCard } from '../components/ProductCard';

interface ExploreViewProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  wishlist: string[];
  onToggleWishlist: (productId: string, e: React.MouseEvent) => void;
  searchQuery: string;
  onBuyNow?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
}

export const ExploreView: React.FC<ExploreViewProps> = ({
  products,
  onSelectProduct,
  wishlist,
  onToggleWishlist,
  searchQuery,
  onBuyNow,
  onAddToCart,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceTier, setSelectedPriceTier] = useState<string>('all');
  const [minRating, setMinRating] = useState<number>(0);
  const [sortOption, setSortOption] = useState<'popular' | 'price-low' | 'price-high' | 'rating' | 'discount'>('popular');
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const categories = [
    { id: 'all', label: 'All', icon: 'auto_awesome' },
    { id: 'men', label: 'Men' },
    { id: 'women', label: 'Women' },
    { id: 'cup', label: 'Coffee Cup' },       
    //{ id: 'jewellery', label: 'Jewellery' },
    //{ id: 'watches', label: 'Watches' },
    //{ id: 'footwear', label: 'Footwear' },
    //{ id: 'accessories', label: 'Accessories' },
  ];

  // Filtering Logic
  const filteredProducts = products.filter((p) => {
    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = p.name.toLowerCase().includes(q);
      const matchBrand = p.brand.toLowerCase().includes(q);
      const matchCategory = p.category.toLowerCase().includes(q);
      if (!matchName && !matchBrand && !matchCategory) return false;
    }

    // Category
    if (selectedCategory !== 'all' && p.category !== selectedCategory) {
      return false;
    }

    // Price Tier
    if (selectedPriceTier === 'under-500' && p.price >= 500) return false;
    if (selectedPriceTier === '500-1000' && (p.price < 500 || p.price > 1000)) return false;
    if (selectedPriceTier === '1000-2500' && (p.price < 1000 || p.price > 2500)) return false;
    if (selectedPriceTier === '2500-plus' && p.price <= 2500) return false;

    // Rating
    if (minRating > 0 && p.rating < minRating) return false;

    return true;
  });

  // Sorting Logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'price-low') return a.price - b.price;
    if (sortOption === 'price-high') return b.price - a.price;
    if (sortOption === 'rating') return b.rating - a.rating;
    if (sortOption === 'discount') return b.discountPercent - a.discountPercent;
    return b.reviewCount - a.reviewCount; // 'popular'
  });

  const getSortLabel = () => {
    switch (sortOption) {
      case 'price-low':
        return 'Price: Low-High';
      case 'price-high':
        return 'Price: High-Low';
      case 'rating':
        return 'Top Rated';
      case 'discount':
        return 'Deepest Discount';
      default:
        return 'Popular';
    }
  };

  return (
    <div className="w-full flex flex-col pb-8">
      {/* Subtle Ambient Glow Banner */}
      <div className="relative mx-4 mt-3 mb-3 rounded-2xl overflow-hidden bg-gradient-to-br from-[#16062a] via-[#22073d] to-[#16062a] p-4 text-white shadow-md border border-purple-900/40">
        <div className="absolute -right-10 -bottom-10 w-36 h-36 rounded-full bg-orange-500/20 blur-2xl pointer-events-none" />
        <div className="absolute -left-6 -top-6 w-32 h-32 rounded-full bg-purple-500/15 blur-xl pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="material-symbols-outlined text-orange-400 text-[18px]">verified</span>
              <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider">
                Curated Affiliate Drops
              </span>
            </div>
            <p className="font-bold text-sm sm:text-base text-white">Handpicked Luxury Deals</p>
            <p className="text-xs text-purple-200/80">
              Real-time verified price cuts across verified merchants
            </p>
          </div>

          <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-orange-400">
            <span className="material-symbols-outlined text-[20px]">bolt</span>
          </div>
        </div>
      </div>

      {/* Category Scrollable Ribbon */}
      <div className="w-full overflow-x-auto no-scrollbar py-1 px-4 flex items-center gap-1.5">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1 active:scale-95 ${
                isActive
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'bg-white dark:bg-[#1a0833] text-slate-700 dark:text-purple-200 border border-slate-200/80 dark:border-purple-950/70 hover:bg-slate-100 dark:hover:bg-purple-950/50'
              }`}
            >
              {cat.icon && (
                <span className="material-symbols-outlined text-[14px]">{cat.icon}</span>
              )}
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Filter & Sort Strip */}
      <div className="w-full px-4 py-2 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 flex-1">
          {/* Reset Filters / Active indicator */}
          {(selectedPriceTier !== 'all' || minRating > 0 || selectedCategory !== 'all') && (
            <button
              onClick={() => {
                setSelectedPriceTier('all');
                setMinRating(0);
                setSelectedCategory('all');
              }}
              className="shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-orange-500/15 text-orange-600 dark:text-orange-400 text-xs font-bold"
            >
              <span>Reset</span>
              <span className="material-symbols-outlined text-[13px]">close</span>
            </button>
          )}

          {/* Price Chips */}
          <button
            onClick={() => setSelectedPriceTier(selectedPriceTier === 'under-500' ? 'all' : 'under-500')}
            className={`shrink-0 px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
              selectedPriceTier === 'under-500'
                ? 'bg-orange-500 text-white font-bold'
                : 'bg-white dark:bg-[#1a0833] text-slate-600 dark:text-purple-200 border border-slate-200 dark:border-purple-950'
            }`}
          >
            Under ₹500
          </button>

          <button
            onClick={() => setSelectedPriceTier(selectedPriceTier === '500-1000' ? 'all' : '500-1000')}
            className={`shrink-0 px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
              selectedPriceTier === '500-1000'
                ? 'bg-orange-500 text-white font-bold'
                : 'bg-white dark:bg-[#1a0833] text-slate-600 dark:text-purple-200 border border-slate-200 dark:border-purple-950'
            }`}
          >
            ₹500 - ₹1,000
          </button>

          <button
            onClick={() => setSelectedPriceTier(selectedPriceTier === '1000-2500' ? 'all' : '1000-2500')}
            className={`shrink-0 px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
              selectedPriceTier === '1000-2500'
                ? 'bg-orange-500 text-white font-bold'
                : 'bg-white dark:bg-[#1a0833] text-slate-600 dark:text-purple-200 border border-slate-200 dark:border-purple-950'
            }`}
          >
            ₹1,000 - ₹2,500
          </button>

          <button
            onClick={() => setSelectedPriceTier(selectedPriceTier === '2500-plus' ? 'all' : '2500-plus')}
            className={`shrink-0 px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
              selectedPriceTier === '2500-plus'
                ? 'bg-orange-500 text-white font-bold'
                : 'bg-white dark:bg-[#1a0833] text-slate-600 dark:text-purple-200 border border-slate-200 dark:border-purple-950'
            }`}
          >
            ₹2,500+
          </button>

          <button
            onClick={() => setMinRating(minRating === 4 ? 0 : 4)}
            className={`shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
              minRating === 4
                ? 'bg-orange-500 text-white font-bold'
                : 'bg-white dark:bg-[#1a0833] text-slate-600 dark:text-purple-200 border border-slate-200 dark:border-purple-950'
            }`}
          >
            <span className="material-symbols-outlined text-[13px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>
              star
            </span>
            <span>4★ & Above</span>
          </button>
        </div>

        {/* Quick Sort Dropdown Trigger */}
        <div className="shrink-0 relative">
          <button
            onClick={() => setShowSortDropdown(!showSortDropdown)}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white dark:bg-[#1a0833] border border-slate-200 dark:border-purple-950 text-slate-800 dark:text-purple-100 text-xs font-semibold shadow-sm"
          >
            <span className="material-symbols-outlined text-[15px] text-orange-500">swap_vert</span>
            <span>{getSortLabel()}</span>
          </button>

          {showSortDropdown && (
            <div className="absolute right-0 top-8 z-30 w-40 rounded-2xl bg-white dark:bg-[#1a0833] p-1.5 shadow-2xl border border-slate-200 dark:border-purple-900/50 animate-in fade-in duration-100">
              {[
                { id: 'popular', label: 'Popular' },
                { id: 'price-low', label: 'Price: Low-High' },
                { id: 'price-high', label: 'Price: High-Low' },
                { id: 'rating', label: 'Top Rated' },
                { id: 'discount', label: 'Deepest Discount' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setSortOption(opt.id as any);
                    setShowSortDropdown(false);
                  }}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between ${
                    sortOption === opt.id
                      ? 'bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-bold'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-purple-950/40'
                  }`}
                >
                  <span>{opt.label}</span>
                  {sortOption === opt.id && (
                    <span className="material-symbols-outlined text-[14px]">check</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Results Count & Live Alert Bar */}
      <div className="flex items-center justify-between px-4 py-1 text-slate-500 dark:text-purple-300/70">
        <p className="text-xs font-semibold">
          Showing {sortedProducts.length} curated drops
        </p>
        <div className="flex items-center gap-1.5 text-xs text-orange-600 dark:text-orange-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
          </span>
          <span className="text-[11px] font-bold">Live price check: 2m ago</span>
        </div>
      </div>

      {/* 2-Column Responsive Fashion Grid */}
      <div className="px-4 py-2">
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {sortedProducts.map((product) => (
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
              <span className="material-symbols-outlined text-[28px]">search_off</span>
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">No Drops Match Filters</h3>
            <p className="text-xs text-slate-500 dark:text-purple-300/70 mt-1 max-w-xs">
              Try adjusting your price range, category, or search term to discover more hand-picked deals.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedPriceTier('all');
                setMinRating(0);
              }}
              className="mt-3 px-4 py-2 rounded-full bg-orange-500 text-white text-xs font-bold"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

       {/* WhatsApp VIP Deal Alerts Card — 2 Channels */}
      <div className="mx-4 mt-4 rounded-2xl p-4 bg-gradient-to-br from-[#16062a] via-[#1f0933] to-[#0c1f17] text-white shadow-md relative overflow-hidden border border-purple-900/40">
        <div className="absolute right-0 top-0 w-32 h-32 bg-orange-500/10 rounded-full blur-xl pointer-events-none" />
        <div className="relative z-10 flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366]">
              <span className="material-symbols-outlined text-[15px]">forum</span>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-orange-300">
              VIP Deal Alerts
            </span>
          </div>

          <h4 className="font-bold text-sm sm:text-base text-white">
            Never miss lightning price errors
          </h4>
          <p className="text-xs text-purple-200/80 leading-relaxed">
            Join 50,000+ fashion insiders who receive real-time drops 15 minutes before public flash sales.
          </p>

          {/* 2 Channel Buttons */}
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">

            {/* Channel 1: VIP Deals */}
            <a
              href="https://whatsapp.com/channel/0029Vb8pTwMHFxP6oifwK32V"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-1.5 px-4 py-2.5 rounded-xl bg-[#25D366] hover:brightness-110 text-white font-bold text-xs shadow-md active:scale-95 transition-transform"
            >
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">campaign</span>
                <span>Men's Fashion</span>
              </span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>

            {/* Channel 2: Fashion Drops */}
            <a
              href="https://whatsapp.com/channel/0029Vb9OJd63GJOxv9DntB1r"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-1.5 px-4 py-2.5 rounded-xl bg-[#128C7E] hover:brightness-110 text-white font-bold text-xs shadow-md active:scale-95 transition-transform"
            >
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">local_fire_department</span>
                <span>Women's Fashion</span>
              </span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>

          </div>

          <span className="text-[11px] text-purple-300/60 font-medium mt-1">
            Instant Free Join • 2 Channels
          </span>
        </div>
      </div>
    </div>
  );
};
