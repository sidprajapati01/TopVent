import React from 'react';
import { Product, TabType } from '../types';
import { ProductCard } from '../components/ProductCard';

interface WishlistViewProps {
  products: Product[];
  wishlistIds: string[];
  onSelectProduct: (product: Product) => void;
  onToggleWishlist: (productId: string, e: React.MouseEvent) => void;
  onNavigateTab: (tab: TabType) => void;
  onBuyNow?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
}

export const WishlistView: React.FC<WishlistViewProps> = ({
  products,
  wishlistIds,
  onSelectProduct,
  onToggleWishlist,
  onNavigateTab,
  onBuyNow,
  onAddToCart,
}) => {
  const wishlistedProducts = products.filter((p) => wishlistIds.includes(p.id));

  const totalValue = wishlistedProducts.reduce((sum, p) => sum + p.price, 0);
  const totalOriginal = wishlistedProducts.reduce((sum, p) => sum + p.originalPrice, 0);
  const totalSavings = totalOriginal - totalValue;

  return (
    <div className="w-full flex flex-col p-4 pb-12">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#16062a] via-[#240845] to-[#16062a] p-5 text-white shadow-xl mb-4 border border-purple-900/40">
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-300 text-[10px] font-extrabold uppercase tracking-wider mb-1 border border-orange-500/30">
              <span className="material-symbols-outlined text-[13px] text-rose-400" style={{ fontVariationSettings: "'FILL' 1" }}>
                favorite
              </span>
              <span>Saved Wardrobe</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold">Curated Wishlist</h1>
            <p className="text-xs text-purple-200/80">
              {wishlistedProducts.length} items bookmarked for instant price drops
            </p>
          </div>

          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-rose-400">
            <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              favorite
            </span>
          </div>
        </div>

        {wishlistedProducts.length > 0 && (
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
            <div>
              <span className="text-purple-300/80 block text-[11px]">Potential Savings</span>
              <span className="text-base font-extrabold text-orange-400">
                ₹{totalSavings.toLocaleString('en-IN')}
              </span>
            </div>
            <div className="text-right">
              <span className="text-purple-300/80 block text-[11px]">Cart Estimate</span>
              <span className="text-base font-bold text-white">
                ₹{totalValue.toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Products Grid or Empty State */}
      {wishlistedProducts.length > 0 ? (
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {wishlistedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              isWishlisted={true}
              onToggleWishlist={onToggleWishlist}
              onBuyNow={onBuyNow}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 px-4 flex flex-col items-center justify-center text-center bg-white dark:bg-[#1a0833] rounded-3xl border border-slate-200/80 dark:border-purple-950/60 shadow-sm mt-2">
          <div className="w-16 h-16 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center mb-3">
            <span className="material-symbols-outlined text-[32px]">favorite_border</span>
          </div>
          <h2 className="font-bold text-base text-slate-900 dark:text-white">
            Your Wishlist is Empty
          </h2>
          <p className="text-xs text-slate-500 dark:text-purple-300/70 max-w-xs mt-1 mb-5 leading-relaxed">
            Tap the heart icon on any blazer, chronograph, saree, or accessory to track real-time price cuts here.
          </p>
          <button
            onClick={() => onNavigateTab('explore')}
            className="px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm shadow-md active:scale-95 transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[16px]">grid_view</span>
            <span>Explore Drops Now</span>
          </button>
        </div>
      )}
    </div>
  );
};
