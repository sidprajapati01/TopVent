import React, { useState } from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string, e: React.MouseEvent) => void;
  onBuyNow?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
}

const FALLBACK_CATEGORY_IMAGES: Record<string, string> = {
  men: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
  women: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=80',
  watches: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80',
  jewellery: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
  footwear: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=600&q=80',
  accessories: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  isWishlisted,
  onToggleWishlist,
  onBuyNow,
  onAddToCart,
}) => {
  const [imgError, setImgError] = useState(false);

  const fallbackUrl =
    FALLBACK_CATEGORY_IMAGES[product.category] ||
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80';


  return (
    <article
      onClick={() => onSelect(product)}
      className="group relative flex flex-col rounded-2xl bg-white dark:bg-[#1a0833] border border-slate-200/80 dark:border-purple-950/50 p-2.5 shadow-[0_8px_24px_-4px_rgba(20,5,38,0.06)] hover:shadow-lg dark:hover:shadow-purple-950/40 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Media Aspect 3:4 Thumbnail Zone */}
      <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-slate-100 dark:bg-purple-950/30 mb-2">
        <img
          src={!imgError && product.imageUrl ? product.imageUrl : fallbackUrl}
          alt={product.name}
          loading="lazy"
          decoding="async"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Discount Badge */}
        <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-orange-500 text-white text-[10px] uppercase font-extrabold tracking-tight shadow-md flex items-center gap-0.5">
          <span>{product.discountPercent}% OFF</span>
        </div>

        {/* Wishlist Floating Button */}
        <button
          type="button"
          aria-label={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
          onClick={(e) => onToggleWishlist(product.id, e)}
          className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md shadow-sm transition-transform active:scale-90 ${
            isWishlisted
              ? 'bg-rose-500 text-white'
              : 'bg-white/85 dark:bg-black/60 text-slate-700 dark:text-white hover:text-orange-500'
          }`}
        >
          <span
            className="material-symbols-outlined text-[18px]"
            style={isWishlisted ? { fontVariationSettings: "'FILL' 1" } : {}}
          >
            favorite
          </span>
        </button>

        {/* Curated Tags */}
        {product.isAmazonChoice && (
          <div className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded-md bg-[#16062a]/90 backdrop-blur-sm text-amber-300 font-bold text-[9px] flex items-center gap-0.5">
            <span className="material-symbols-outlined text-[11px] text-amber-400">award_star</span>
            <span>TOP SELECTION</span>
          </div>
        )}
        {product.isFastSeller && (
          <div className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded-md bg-[#16062a]/90 backdrop-blur-sm text-orange-300 font-bold text-[9px] flex items-center gap-0.5">
            <span className="material-symbols-outlined text-[11px] text-orange-400">local_fire_department</span>
            <span>FAST SELLER</span>
          </div>
        )}
      </div>

      {/* Info Zone */}
      <div className="flex flex-col flex-1 px-1 justify-between">
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-purple-300/70 truncate max-w-[100px]">
              {product.brand}
            </span>
            <div className="flex items-center gap-0.5 text-amber-500 dark:text-amber-400">
              <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200">
                {product.rating}
              </span>
              <span className="text-[9px] text-slate-400 dark:text-purple-300/50">
                ({product.reviewCount > 999 ? `${(product.reviewCount / 1000).toFixed(1)}k` : product.reviewCount})
              </span>
            </div>
          </div>

          <h3 className="text-xs sm:text-[13px] font-semibold text-slate-900 dark:text-slate-100 line-clamp-2 leading-snug mb-1.5 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
            {product.name}
          </h3>
        </div>

        <div className="mt-auto pt-1">
          <div className="flex items-baseline gap-1.5 flex-wrap">
            <span className="text-base font-extrabold text-slate-900 dark:text-white tabular-nums tracking-tight">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            <span className="text-[11px] text-slate-400 dark:text-slate-500 line-through tabular-nums">
              ₹{product.originalPrice.toLocaleString('en-IN')}
            </span>
          </div>
          <span className="text-[10px] font-semibold text-orange-600 dark:text-orange-400 block mb-2">
            You save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
          </span>

          <a
            href={product.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-full py-2.5 px-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center gap-1.5 text-xs font-extrabold active:scale-95 transition-all shadow-md shadow-orange-500/20"
          >
            <span>BUY NOW</span>
            <span className="material-symbols-outlined text-[15px]">open_in_new</span>
          </a>
        </div>
      </div>
    </article>
  );
};