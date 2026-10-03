import React, { useEffect, useState } from 'react';
import { Product } from '../types';
import { ScrollBackground3D } from '../components/ScrollBackground3D';
import { FloatingFashionIcons } from '../components/FloatingFashionIcons';

interface DealsViewProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  wishlist: string[];
  onToggleWishlist: (productId: string, e: React.MouseEvent) => void;
  onBuyNow?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
}

export const DealsView: React.FC<DealsViewProps> = ({
  products,
  onSelectProduct,
  wishlist,
  onToggleWishlist,
  onBuyNow,
  onAddToCart,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'men' | 'women' | 'cup' | 'unisex' | 'accessories' | 'under-999'>('all');
  const [secondsLeft, setSecondsLeft] = useState(4 * 3600 + 22 * 60 + 15);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev <= 1 ? 14400 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = () => {
    const hours = Math.floor(secondsLeft / 3600);
    const minutes = Math.floor((secondsLeft % 3600) / 60);
    const seconds = secondsLeft % 60;
    const pad = (n: number) => String(n).padStart(2, '0');
    return `Ends in ${pad(hours)}h : ${pad(minutes)}m : ${pad(seconds)}s`;
  };

  const dealsList = products.filter((p) => {
    if (selectedFilter === 'all') return p.discountPercent >= 30;
    if (selectedFilter === 'men') return p.category === 'men' || p.category === 'footwear';
    if (selectedFilter === 'women') return p.category === 'women' || p.category === 'jewellery';
    if (selectedFilter === 'cup') return p.category === 'cup';
    if (selectedFilter === 'unisex') return p.category === 'unisex';
    if (selectedFilter === 'accessories') return p.category === 'accessories';
    if (selectedFilter === 'under-999') return p.price <= 999;
    return true;
  });

  return (
    <div className="w-full flex flex-col pb-10 relative" style={{ zIndex: 10 }}>

      {/* ⭐ 3D Background + Floating Icons (behind everything) */}
      <ScrollBackground3D />
      <FloatingFashionIcons />

      {/* ⭐ Content Wrapper (in front, z-10) */}
      <div className="p-4 flex flex-col gap-4 relative" style={{ zIndex: 10 }}>

        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#16062a] via-[#240845] to-[#16062a] p-5 shadow-xl text-white border border-purple-900/40">
          <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-orange-500/20 blur-2xl pointer-events-none" />
          <div className="absolute -left-12 -top-12 w-40 h-40 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-500/20 text-orange-300 text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md border border-orange-500/30">
                <span className="material-symbols-outlined text-[14px] text-orange-400" style={{ fontVariationSettings: "'FILL' 1" }}>
                  bolt
                </span>
                <span>Live Flash Drops</span>
              </div>

              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-bold border border-white/10">
                <span className="material-symbols-outlined text-[14px] text-orange-400">timer</span>
                <span className="tracking-tight tabular-nums">{formatTimer()}</span>
              </div>
            </div>

            <div className="pt-1">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Curated Steals & <br />
                <span className="text-orange-400">VIP Flash Cuts</span>
              </h1>
              <p className="text-xs text-purple-200/80 mt-1 max-w-[300px] leading-relaxed">
                Real-time verified price cuts and limited luxury inventory up to 75% off.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <div className="flex -space-x-1.5">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white text-[10px] font-bold">
                  4.9★
                </span>
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-300 text-purple-950 text-[10px] font-bold">
                  12k
                </span>
              </div>
              <span className="text-xs font-semibold text-orange-300">
                Verified luxury curations
              </span>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 py-1">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`shrink-0 px-3.5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 active:scale-95 ${
              selectedFilter === 'all'
                ? 'bg-orange-500 text-white shadow-md'
                : 'bg-white dark:bg-[#1a0833] text-slate-700 dark:text-purple-200 border border-slate-200 dark:border-purple-950'
            }`}
          >
            <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              local_fire_department
            </span>
            <span>All Deals (30%+ Off)</span>
          </button>

          <button
            onClick={() => setSelectedFilter('men')}
            className={`shrink-0 px-3.5 py-2 rounded-full text-xs font-bold transition-all active:scale-95 ${
              selectedFilter === 'men'
                ? 'bg-orange-500 text-white shadow-md'
                : 'bg-white dark:bg-[#1a0833] text-slate-700 dark:text-purple-200 border border-slate-200 dark:border-purple-950'
            }`}
          >
            Men's Steals
          </button>

          <button
            onClick={() => setSelectedFilter('women')}
            className={`shrink-0 px-3.5 py-2 rounded-full text-xs font-bold transition-all active:scale-95 ${
              selectedFilter === 'women'
                ? 'bg-orange-500 text-white shadow-md'
                : 'bg-white dark:bg-[#1a0833] text-slate-700 dark:text-purple-200 border border-slate-200 dark:border-purple-950'
            }`}
          >
            Women's Couture
          </button>

          <button
            onClick={() => setSelectedFilter('cup')}
            className={`shrink-0 px-3.5 py-2 rounded-full text-xs font-bold transition-all active:scale-95 ${
              selectedFilter === 'cup'
                ? 'bg-orange-500 text-white shadow-md'
                : 'bg-white dark:bg-[#1a0833] text-slate-700 dark:text-purple-200 border border-slate-200 dark:border-purple-950'
            }`}
          >
            Mugs
          </button>

          <button
            onClick={() => setSelectedFilter('unisex')}
            className={`shrink-0 px-3.5 py-2 rounded-full text-xs font-bold transition-all active:scale-95 ${
              selectedFilter === 'unisex'
                ? 'bg-orange-500 text-white shadow-md'
                : 'bg-white dark:bg-[#1a0833] text-slate-700 dark:text-purple-200 border border-slate-200 dark:border-purple-950'
            }`}
          >
            Unisex
          </button>

          <button
            onClick={() => setSelectedFilter('accessories')}
            className={`shrink-0 px-3.5 py-2 rounded-full text-xs font-bold transition-all active:scale-95 ${
              selectedFilter === 'accessories'
                ? 'bg-orange-500 text-white shadow-md'
                : 'bg-white dark:bg-[#1a0833] text-slate-700 dark:text-purple-200 border border-slate-200 dark:border-purple-950'
            }`}
          >
            Accessories
          </button>


          <button
            onClick={() => setSelectedFilter('under-999')}
            className={`shrink-0 px-3.5 py-2 rounded-full text-xs font-bold transition-all active:scale-95 ${
              selectedFilter === 'under-999'
                ? 'bg-orange-500 text-white shadow-md'
                : 'bg-white dark:bg-[#1a0833] text-slate-700 dark:text-purple-200 border border-slate-200 dark:border-purple-950'
            }`}
          >
            Under ₹999
          </button>
        </div>

        {/* Deals List */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
              <h2 className="font-bold text-base text-slate-900 dark:text-white">
                Steals of the Hour
              </h2>
            </div>
            <span className="text-[11px] font-bold text-slate-500 dark:text-purple-300/70 uppercase tracking-wider">
              {dealsList.length} Expiring Soon
            </span>
          </div>

          {dealsList.map((product) => {
            const isFav = wishlist.includes(product.id);
            const claimed = product.claimedPercent || 78;
            const unitsLeft = product.unitsLeft || 6;

            return (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="bg-white dark:bg-[#1a0833] rounded-2xl border border-slate-200/80 dark:border-purple-950/60 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col cursor-pointer group"
              >
                <div className="relative w-full h-56 sm:h-64 bg-slate-100 dark:bg-purple-950/40 overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=85';
                    }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    <span className="px-2.5 py-1 rounded-full bg-orange-500 text-white text-xs font-extrabold tracking-wide shadow-md">
                      {product.discountPercent}% OFF
                    </span>
                    {product.isAmazonChoice && (
                      <span className="px-2 py-0.5 rounded-full bg-[#16062a]/90 backdrop-blur-sm text-amber-300 text-[10px] font-bold">
                        VIP SELECTION
                      </span>
                    )}
                    {product.unitsLeft && product.unitsLeft <= 3 && (
                      <span className="px-2 py-0.5 rounded-full bg-rose-600 text-white text-[10px] font-extrabold animate-pulse">
                        ALMOST GONE
                      </span>
                    )}
                    {product.isPrime && (
                      <span className="px-2 py-0.5 rounded-full bg-[#16062a]/90 backdrop-blur-sm text-cyan-300 text-[10px] font-bold">
                        PRIME CURATION
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    aria-label="Save Deal"
                    onClick={(e) => onToggleWishlist(product.id, e)}
                    className={`absolute top-3 right-3 w-9 h-9 rounded-full backdrop-blur-md flex items-center justify-center shadow-md transition-transform active:scale-90 ${
                      isFav
                        ? 'bg-rose-500 text-white'
                        : 'bg-white/90 dark:bg-black/60 text-slate-700 dark:text-white hover:text-orange-500'
                    }`}
                  >
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={isFav ? { fontVariationSettings: "'FILL' 1" } : {}}
                    >
                      favorite
                    </span>
                  </button>
                </div>

                <div className="p-4 flex flex-col gap-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-extrabold tracking-wider uppercase text-slate-500 dark:text-purple-300/70">
                      {product.brand}
                    </span>
                    <span className="inline-flex items-center gap-1 text-orange-600 dark:text-orange-400 font-bold">
                      <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span>
                        {product.rating} ({product.reviewCount})
                      </span>
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white line-clamp-1 group-hover:text-orange-500 transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-baseline gap-2 pt-0.5">
                    <span className="text-xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500 line-through tabular-nums">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs font-bold text-orange-600 dark:text-orange-400">
                      Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5 pt-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-rose-600 dark:text-rose-400 font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">local_fire_department</span>
                        {claimed}% Claimed
                      </span>
                      <span className="text-slate-400 dark:text-purple-300/60 font-medium">
                        Only {unitsLeft} units left
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 dark:bg-purple-950 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 rounded-full transition-all duration-500"
                        style={{ width: `${claimed}%` }}
                      />
                    </div>
                  </div>

                  <a
                    href={product.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-1 w-full py-3.5 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md shadow-orange-500/25 transition-transform active:scale-[0.98]"
                  >
                    <span>BUY NOW</span>
                    <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* WhatsApp VIP Card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#16062a] via-[#240845] to-[#16062a] p-5 text-white shadow-xl flex flex-col gap-3.5 border border-purple-900/40">
          <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-orange-500/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex items-start gap-3">
            <div className="shrink-0 w-11 h-11 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-orange-400 shadow-inner">
              <span className="material-symbols-outlined text-[24px]">chat</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wider text-orange-300">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                VIP Fast-Track Access
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Never miss a price drop again!
              </h3>
              <p className="text-xs text-purple-200/80 pt-0.5 leading-relaxed">
                Join our VIP WhatsApp Channels for 10-minute early access to lightning deals before products sell out.
              </p>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-2 gap-2.5 pt-1">
            <a
              href="https://whatsapp.com/channel/0029Vb8pTwMHFxP6oifwK32V"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs shadow-md transition-transform active:scale-95 text-center"
            >
              <span className="material-symbols-outlined text-[16px] text-[#25D366]">check_circle</span>
              <span>Men's Hub</span>
            </a>
            <a
              href="https://whatsapp.com/channel/0029Vb9OJd63GJOxv9DntB1r"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-md transition-transform active:scale-95 text-center"
            >
              <span className="material-symbols-outlined text-[16px]">check_circle</span>
              <span>Women's Hub</span>
            </a>
          </div>

          <div className="relative z-10 flex items-center justify-center gap-1.5 text-[11px] text-purple-300/70">
            <span className="material-symbols-outlined text-[14px]">shield</span>
            <span>Zero spam • 1-tap unsubscribe anytime</span>
          </div>
        </div>
      </div>
    </div>
  );
};