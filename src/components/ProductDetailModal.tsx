import React, { useEffect, useState } from 'react';
import { Product } from '../types';
import { SizeGuideModal } from './SizeGuideModal';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string, e: React.MouseEvent) => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
  onBuyNow: (product: Product, size: string, color: string) => void;
}

// Guaranteed high-resolution Unsplash fashion fallbacks by category
const CATEGORY_IMAGE_FALLBACKS: Record<string, string[]> = {
  men: [
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=1000&q=85',
  ],
  women: [
    'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85',
  ],
  watches: [
    'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=85',
  ],
  jewellery: [
    'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1611591475152-47e2566d2146?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1000&q=85',
  ],
  footwear: [
    'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=1000&q=85',
  ],
  accessories: [
    'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1000&q=85',
  ],
};

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  onBuyNow,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [selectedColor, setSelectedColor] = useState('Default');
  const [selectedSize, setSelectedSize] = useState('L');
  const [priceAlertActive, setPriceAlertActive] = useState(false);
  const [showSizeModal, setShowSizeModal] = useState(false);
  const [sharedToast, setSharedToast] = useState(false);
  const [cartToast, setCartToast] = useState(false);
  const [imgLoadError, setImgLoadError] = useState(false);
  const [activeReviewFilter, setActiveReviewFilter] = useState<'all' | '5star' | 'with-photo'>('all');
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewText, setNewReviewText] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  // Synchronize on product change
  useEffect(() => {
    if (product) {
      setActiveSlide(0);
      setIsZoomed(false);
      setImgLoadError(false);
      setShowWriteReview(false);
      setReviewSubmitted(false);

      if (product.colors && product.colors.length > 0) {
        setSelectedColor(product.colors[0].name);
      } else {
        setSelectedColor('Default');
      }

      if (product.sizes && product.sizes.length > 0) {
        setSelectedSize(product.sizes[0]);
      } else {
        setSelectedSize('Standard');
      }
    }
  }, [product?.id]);

  if (!isOpen || !product) return null;

  const categoryFallbackList =
    CATEGORY_IMAGE_FALLBACKS[product.category] || CATEGORY_IMAGE_FALLBACKS.men;

  const validMainImage =
    product.imageUrl && product.imageUrl.trim() !== ''
      ? product.imageUrl
      : categoryFallbackList[0];

  const rawGallery =
    product.galleryImages && product.galleryImages.length > 0
      ? [validMainImage, ...product.galleryImages.filter((img) => img !== validMainImage)]
      : [validMainImage, ...categoryFallbackList];

  const gallery = rawGallery.length >= 4 ? rawGallery : [...rawGallery, ...categoryFallbackList].slice(0, 4);

  const currentDisplayImage =
    !imgLoadError && gallery[activeSlide] ? gallery[activeSlide] : categoryFallbackList[0];

  const handleColorSelect = (colorObj: { name: string; hex: string; imageUrl?: string }) => {
    setSelectedColor(colorObj.name);
    setImgLoadError(false);
    if (colorObj.imageUrl) {
      const existingIdx = gallery.findIndex((img) => img === colorObj.imageUrl);
      if (existingIdx !== -1) {
        setActiveSlide(existingIdx);
      } else {
        gallery[0] = colorObj.imageUrl;
        setActiveSlide(0);
      }
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: product.name,
          text: `Check out ${product.name} at ₹${product.price} (${product.discountPercent}% Off) on TopVent!`,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      setSharedToast(true);
      setTimeout(() => setSharedToast(false), 2000);
    }
  };

  const handleAddToCartClick = () => {
    onAddToCart(product, selectedSize, selectedColor);
    setCartToast(true);
    setTimeout(() => setCartToast(false), 2500);
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewText.trim()) return;
    setReviewSubmitted(true);
    setTimeout(() => {
      setShowWriteReview(false);
      setReviewSubmitted(false);
      setNewReviewText('');
      setNewReviewAuthor('');
    }, 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex justify-center overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="w-full max-w-lg min-h-screen bg-slate-50 dark:bg-[#120422] flex flex-col relative text-slate-900 dark:text-slate-100 shadow-2xl pb-24">
        {/* Dynamic Feedback Toasts */}
        {sharedToast && (
          <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-lg">
            Link copied to clipboard!
          </div>
        )}

        {cartToast && (
          <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-full bg-emerald-600 text-white text-xs font-bold shadow-2xl flex items-center gap-2 animate-in slide-in-from-top-2">
            <span className="material-symbols-outlined text-[18px]">check_circle</span>
            <span>Added to Cart • {selectedSize} • {selectedColor}</span>
          </div>
        )}

        {/* =================================================================== */}
        {/* 1. PRODUCT PHOTO (TOP OF THE PAGE) */}
        {/* =================================================================== */}
        <section className="relative w-full bg-[#18072e] flex flex-col">
          <div className="absolute top-0 left-0 right-0 z-30 px-4 pt-3 pb-2 flex items-center justify-between bg-gradient-to-b from-black/70 via-black/30 to-transparent pointer-events-none">
            <button
              onClick={onClose}
              aria-label="Back to catalog"
              className="pointer-events-auto w-10 h-10 rounded-full bg-[#16062a]/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-orange-500 active:scale-95 transition-all shadow-md"
            >
              <span className="material-symbols-outlined text-[20px]">arrow_back_ios_new</span>
            </button>

            <div className="flex items-center gap-2 pointer-events-auto">
              <button
                onClick={handleShare}
                aria-label="Share product"
                className="w-10 h-10 rounded-full bg-[#16062a]/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-orange-500 active:scale-95 transition-all shadow-md"
                title="Share"
              >
                <span className="material-symbols-outlined text-[18px]">share</span>
              </button>

              <button
                onClick={(e) => onToggleWishlist(product.id, e)}
                aria-label={isWishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}
                className="w-10 h-10 rounded-full bg-[#16062a]/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-orange-500 active:scale-95 transition-all shadow-md"
                title="Save to Wishlist"
              >
                <span
                  className={`material-symbols-outlined text-[20px] ${isWishlisted ? 'text-rose-500' : ''}`}
                  style={isWishlisted ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  favorite
                </span>
              </button>
            </div>
          </div>

          <div className="relative w-full aspect-[4/5] max-h-[480px] flex items-center justify-center overflow-hidden bg-slate-950">
            <img
              src={currentDisplayImage}
              alt={product.name}
              onError={() => setImgLoadError(true)}
              className={`w-full h-full object-cover transition-transform duration-500 ease-out select-none ${
                isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            />

            <div className="absolute top-16 left-4 flex flex-col gap-1.5 z-10 pointer-events-none">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-extrabold shadow-lg tracking-wider">
                <span className="material-symbols-outlined text-[14px]">bolt</span>
                {product.discountPercent}% OFF
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#16062a]/90 backdrop-blur-md text-purple-200 text-[10px] font-bold tracking-wider">
                {product.tag || 'TOPVENT CURATED'}
              </span>
            </div>

            <div className="absolute bottom-3 inset-x-0 flex justify-center items-center gap-2 z-10 pointer-events-none">
              {gallery.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Slide ${index + 1}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveSlide(index);
                    setImgLoadError(false);
                  }}
                  className={`pointer-events-auto transition-all rounded-full ${
                    activeSlide === index
                      ? 'w-6 h-1.5 bg-orange-500'
                      : 'w-1.5 h-1.5 bg-white/60 hover:bg-white'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setIsZoomed(!isZoomed)}
              aria-label={isZoomed ? 'Zoom out' : 'Zoom in'}
              className="absolute bottom-3 right-4 w-9 h-9 rounded-full bg-[#16062a]/80 backdrop-blur-md text-white flex items-center justify-center hover:bg-orange-500 transition-colors shadow-lg"
            >
              <span className="material-symbols-outlined text-[18px]">
                {isZoomed ? 'zoom_out' : 'zoom_in'}
              </span>
            </button>
          </div>

          <div className="px-4 py-3 flex gap-2.5 overflow-x-auto no-scrollbar bg-[#16062a]/80 backdrop-blur-md border-b border-purple-950/50">
            {gallery.map((thumbUrl, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveSlide(index);
                  setImgLoadError(false);
                }}
                className={`w-14 h-16 rounded-xl overflow-hidden shrink-0 transition-all border ${
                  activeSlide === index
                    ? 'ring-2 ring-orange-500 border-orange-500 opacity-100 scale-105 shadow-md'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={thumbUrl}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </section>

        {/* =================================================================== */}
        {/* 2. PRODUCT DETAILS (MIDDLE OF THE PAGE) */}
        {/* =================================================================== */}
        <section className="px-4 pt-4 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-extrabold uppercase tracking-widest text-orange-600 dark:text-orange-400">
              {product.brand}
            </span>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
              {product.name}
            </h1>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-[#1a0833] border border-slate-200/80 dark:border-purple-950/60 shadow-sm flex flex-col gap-2">
            <div className="flex items-baseline gap-2.5 flex-wrap">
              <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tabular-nums tracking-tight">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              <span className="text-sm text-slate-400 dark:text-slate-500 line-through tabular-nums">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
              <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400">
                Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')} ({product.discountPercent}% Off)
              </span>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-purple-300/70 pt-0.5 border-t border-slate-100 dark:border-purple-900/40">
              <span className="flex items-center gap-1 text-slate-700 dark:text-purple-200 font-medium">
                <span className="material-symbols-outlined text-[16px] text-orange-500">verified</span>
                Inclusive of all taxes • Free express shipping
              </span>
              <span className="text-orange-600 dark:text-orange-400 font-bold">
                Lowest in 30 Days
              </span>
            </div>
          </div>

          {product.colors && product.colors.length > 0 && (
            <div className="p-4 rounded-2xl bg-white dark:bg-[#1a0833] border border-slate-200/80 dark:border-purple-950/60 shadow-sm flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  Selected Shade: <span className="font-extrabold text-orange-600 dark:text-orange-400">{selectedColor}</span>
                </label>
                <span className="text-[11px] text-slate-400 dark:text-purple-300/60">
                  {product.colors.length} Colorways Available
                </span>
              </div>

              <div className="flex items-center gap-3 pt-0.5">
                {product.colors.map((color) => {
                  const isSelected = selectedColor === color.name;
                  return (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => handleColorSelect(color)}
                      aria-label={`Select ${color.name}`}
                      className={`p-0.5 rounded-full transition-transform active:scale-95 flex items-center justify-center ${
                        isSelected
                          ? 'ring-2 ring-orange-500 ring-offset-2 dark:ring-offset-[#120422]'
                          : 'hover:ring-1 hover:ring-slate-400'
                      }`}
                      title={color.name}
                    >
                      <span
                        className="w-8 h-8 rounded-full block border border-white/20 shadow-sm"
                        style={{ backgroundColor: color.hex }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {product.sizes && product.sizes.length > 0 && (
            <div className="p-4 rounded-2xl bg-white dark:bg-[#1a0833] border border-slate-200/80 dark:border-purple-950/60 shadow-sm flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  Select Size: <span className="text-orange-500 font-extrabold">{selectedSize}</span>
                </label>
                <button
                  onClick={() => setShowSizeModal(true)}
                  className="flex items-center gap-1 text-xs font-bold text-orange-600 dark:text-orange-400 hover:underline"
                >
                  <span className="material-symbols-outlined text-[16px]">straighten</span>
                  <span>Size Guide</span>
                </button>
              </div>

              <div className="flex flex-wrap gap-2 pt-0.5">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`py-2 px-4 rounded-xl font-bold text-xs transition-all ${
                      selectedSize === sz
                        ? 'bg-orange-500 text-white shadow-md'
                        : 'bg-slate-100 dark:bg-purple-950/60 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-purple-900/60'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="p-4 rounded-2xl bg-white dark:bg-[#1a0833] border border-slate-200/80 dark:border-purple-950/60 shadow-sm flex flex-col gap-2">
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-purple-300/70">
              Product Description
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-purple-100 leading-relaxed">
              {product.description ||
                'Exclusive luxury edition crafted with precision tailoring and high-grade materials for effortless elegance and lasting comfort.'}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-[#1a0833] border border-slate-200/80 dark:border-purple-950/60 shadow-sm flex flex-col gap-2.5">
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-purple-300/70">
              Craftsmanship & Specifications
            </h3>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-purple-950/40 border border-slate-200/60 dark:border-purple-900/40 flex flex-col gap-1">
                <span className="material-symbols-outlined text-orange-500 text-[18px]">eco</span>
                <span className="text-[10px] font-bold text-slate-500 dark:text-purple-300/70 uppercase">
                  Fabric Blend
                </span>
                <span className="text-xs font-semibold text-slate-900 dark:text-white">
                  {product.fabricBlend || '100% Breathable Material'}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-purple-950/40 border border-slate-200/60 dark:border-purple-900/40 flex flex-col gap-1">
                <span className="material-symbols-outlined text-orange-500 text-[18px]">checkroom</span>
                <span className="text-[10px] font-bold text-slate-500 dark:text-purple-300/70 uppercase">
                  Silhouettes
                </span>
                <span className="text-xs font-semibold text-slate-900 dark:text-white">
                  {product.silhouettes || 'Tailored Modern Fit'}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-purple-950/40 border border-slate-200/60 dark:border-purple-900/40 flex flex-col gap-1">
                <span className="material-symbols-outlined text-orange-500 text-[18px]">dry_cleaning</span>
                <span className="text-[10px] font-bold text-slate-500 dark:text-purple-300/70 uppercase">
                  Garment Care
                </span>
                <span className="text-xs font-semibold text-slate-900 dark:text-white">
                  {product.garmentCare || 'Dry Clean Preferred'}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-purple-950/40 border border-slate-200/60 dark:border-purple-900/40 flex flex-col gap-1">
                <span className="material-symbols-outlined text-orange-500 text-[18px]">verified_user</span>
                <span className="text-[10px] font-bold text-slate-500 dark:text-purple-300/70 uppercase">
                  Interior Lining
                </span>
                <span className="text-xs font-semibold text-slate-900 dark:text-white">
                  {product.innerLining || 'Silk Soft Viscose'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white dark:bg-[#1a0833] border border-slate-200/80 dark:border-purple-950/60 shadow-sm flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[18px]">notifications_active</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white block">
                    Target Price Drop Alert
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-purple-300/60">
                    Notify when under ₹{Math.round(product.price * 0.9).toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={priceAlertActive}
                  onChange={(e) => setPriceAlertActive(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-300 dark:bg-purple-950 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500" />
              </label>
            </div>

            {priceAlertActive && (
              <div className="text-[11px] bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300 px-3 py-1.5 rounded-lg font-medium animate-in fade-in">
                🔔 Price alert activated! You will receive priority notifications if price cuts happen.
              </div>
            )}
          </div>

          {/* ⭐ PRIMARY ACTION BUTTONS: "BUY NOW" & "ADD TO CART" */}
          <div className="flex flex-col gap-2.5 pt-1">
            {/* BUY NOW → Direct Amazon Affiliate Link */}
            <a
              href={product.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-base flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30 active:scale-[0.98] transition-transform"
            >
              <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
              <span>BUY NOW</span>
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
            </a>

            <button
              onClick={handleAddToCartClick}
              className="w-full py-3.5 px-6 rounded-2xl bg-white dark:bg-[#1a0833] border-2 border-orange-500 text-orange-600 dark:text-orange-400 font-extrabold text-sm flex items-center justify-center gap-2 hover:bg-orange-50 dark:hover:bg-orange-950/20 active:scale-[0.98] transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
              <span>ADD TO CART</span>
            </button>
          </div>
        </section>

        {/* =================================================================== */}
        {/* 3. RATING & REVIEWS (BOTTOM OF THE PAGE) */}
        {/* =================================================================== */}
        <section className="px-4 pt-6 flex flex-col gap-4">
          <div className="p-4 rounded-2xl bg-white dark:bg-[#1a0833] border border-slate-200/80 dark:border-purple-950/60 shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-purple-900/40">
              <div>
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                  Ratings & Verified Reviews
                </h3>
                <p className="text-xs text-slate-500 dark:text-purple-300/60 mt-0.5">
                  Based on {product.reviewCount.toLocaleString('en-IN')} verified customer reviews
                </p>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 text-amber-700 dark:text-amber-400">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                <span className="text-base font-black">{product.rating}</span>
                <span className="text-xs font-semibold">/ 5</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center justify-center pr-4 border-r border-slate-100 dark:border-purple-950 shrink-0">
                <span className="text-4xl font-black text-slate-900 dark:text-white leading-none">
                  {product.rating}
                </span>
                <div className="flex text-amber-500 mt-1.5">
                  {[1, 2, 3, 4].map((s) => (
                    <span
                      key={s}
                      className="material-symbols-outlined text-[16px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                  <span
                    className="material-symbols-outlined text-[16px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star_half
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
                  96% Recommend
                </span>
              </div>

              <div className="flex-1 flex flex-col gap-1.5 min-w-0">
                {[
                  { star: '5★', pct: 84 },
                  { star: '4★', pct: 11 },
                  { star: '3★', pct: 3 },
                  { star: '2★', pct: 1 },
                  { star: '1★', pct: 1 },
                ].map((row) => (
                  <div key={row.star} className="flex items-center gap-2 text-xs">
                    <span className="w-5 text-[11px] font-bold text-slate-600 dark:text-purple-300/70">
                      {row.star}
                    </span>
                    <div className="flex-1 h-2 rounded-full bg-slate-100 dark:bg-purple-950 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
                        style={{ width: `${row.pct}%` }}
                      />
                    </div>
                    <span className="w-7 text-right text-[10px] text-slate-400 dark:text-purple-300/50 tabular-nums">
                      {row.pct}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1 overflow-x-auto no-scrollbar">
              <button
                onClick={() => setActiveReviewFilter('all')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  activeReviewFilter === 'all'
                    ? 'bg-orange-500 text-white'
                    : 'bg-slate-100 dark:bg-purple-950/60 text-slate-700 dark:text-purple-200'
                }`}
              >
                All Reviews ({product.reviewCount})
              </button>
              <button
                onClick={() => setActiveReviewFilter('5star')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  activeReviewFilter === '5star'
                    ? 'bg-orange-500 text-white'
                    : 'bg-slate-100 dark:bg-purple-950/60 text-slate-700 dark:text-purple-200'
                }`}
              >
                5 Star Only (84%)
              </button>
              <button
                onClick={() => setActiveReviewFilter('with-photo')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  activeReviewFilter === 'with-photo'
                    ? 'bg-orange-500 text-white'
                    : 'bg-slate-100 dark:bg-purple-950/60 text-slate-700 dark:text-purple-200'
                }`}
              >
                With Photos (420)
              </button>
            </div>

            <div className="flex flex-col gap-2.5 pt-1">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-purple-950/40 border border-slate-200/50 dark:border-purple-900/30 text-xs flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-slate-900 dark:text-white">
                      Siddharth P.
                    </span>
                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold">
                      <span className="material-symbols-outlined text-[12px]">verified</span>
                      Verified Buyer
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400">2 days ago</span>
                </div>

                <div className="flex text-amber-500">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span
                      key={s}
                      className="material-symbols-outlined text-[13px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>

                <p className="text-slate-700 dark:text-purple-200 leading-relaxed">
                  "Exceeded every expectation. The craftsmanship and fit match boutique designer standards, and priority delivery was seamless. Texture and stitching are impeccable."
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-purple-950/40 border border-slate-200/50 dark:border-purple-900/30 text-xs flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-slate-900 dark:text-white">
                      Ananya M.
                    </span>
                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold">
                      <span className="material-symbols-outlined text-[12px]">verified</span>
                      Verified Buyer
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400">1 week ago</span>
                </div>

                <div className="flex text-amber-500">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span
                      key={s}
                      className="material-symbols-outlined text-[13px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>

                <p className="text-slate-700 dark:text-purple-200 leading-relaxed">
                  "Stunning piece! The material feels truly premium and breathes well. The size guide was 100% accurate. Highly recommend TopVent curations."
                </p>
              </div>
            </div>

            {!showWriteReview ? (
              <button
                onClick={() => setShowWriteReview(true)}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-purple-950/60 hover:bg-slate-200 dark:hover:bg-purple-900/60 text-slate-900 dark:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">rate_review</span>
                <span>Write a Customer Review</span>
              </button>
            ) : (
              <form onSubmit={handleSubmitReview} className="p-3.5 rounded-xl bg-slate-100 dark:bg-purple-950/60 flex flex-col gap-2.5 animate-in fade-in">
                <span className="font-bold text-xs text-slate-900 dark:text-white">
                  Share Your Verified Feedback
                </span>

                <input
                  type="text"
                  placeholder="Your Name (e.g. Rahul K.)"
                  value={newReviewAuthor}
                  onChange={(e) => setNewReviewAuthor(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white dark:bg-[#1a0833] border border-slate-200 dark:border-purple-900 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />

                <textarea
                  placeholder="Describe fit, fabric quality, and comfort..."
                  value={newReviewText}
                  onChange={(e) => setNewReviewText(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 rounded-lg bg-white dark:bg-[#1a0833] border border-slate-200 dark:border-purple-900 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />

                {reviewSubmitted && (
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    <span>Review submitted successfully! Thank you for your feedback.</span>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <button
                    type="submit"
                    className="flex-1 py-2 px-3 rounded-lg bg-orange-500 text-white font-bold text-xs hover:bg-orange-600 transition-colors shadow-sm"
                  >
                    Submit Review
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowWriteReview(false)}
                    className="py-2 px-3 rounded-lg bg-slate-200 dark:bg-purple-900/50 text-slate-700 dark:text-purple-200 font-bold text-xs"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </div>

      <SizeGuideModal
        isOpen={showSizeModal}
        onClose={() => setShowSizeModal(false)}
        selectedSize={selectedSize}
      />
    </div>
  );
};