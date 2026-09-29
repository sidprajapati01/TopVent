import React, { useState } from 'react';
import { CartItem, Order, Product, ThemeMode, UserProfile } from '../types';

interface AccountViewProps {
  user: UserProfile | null;
  theme: ThemeMode;
  onToggleTheme: () => void;
  onSetTheme: (theme: ThemeMode) => void;
  wishlistProducts: Product[];
  onSelectProduct: (product: Product) => void;
  onToggleWishlist: (productId: string, e: React.MouseEvent) => void;
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
  cart: CartItem[];
  orders: Order[];
  onOpenCart: () => void;
  onUpdateUserSizes: (clothingSize: string, shoeSize: string) => void;
  onUpdateUserProfile?: (updates: Partial<UserProfile>) => void;
  onLogout: () => void;
}

const CLOTHING_SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const SHOE_SIZES = ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12'];

const PRESET_AVATARS = [
  'https://plus.unsplash.com/premium_photo-1739786996022-5ed5b56834e2?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1740252117044-2af197eea287?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1739786996040-32bde1db0610?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1740252117070-7aa2955b25f8?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1740252117027-4275d3f84385?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1723028769916-a767a6b0f719?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

export const AccountView: React.FC<AccountViewProps> = ({
  user,
  theme,
  onToggleTheme,
  onSetTheme,
  wishlistProducts,
  onSelectProduct,
  onToggleWishlist,
  onAddToCart,
  onBuyNow,
  cart,
  orders,
  onOpenCart,
  onUpdateUserSizes,
  onUpdateUserProfile,
  onLogout,
}) => {
  const [dealAlerts, setDealAlerts] = useState(true);
  const [priceErrors, setPriceErrors] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(true);
  const [isEditingSizes, setIsEditingSizes] = useState(false);
  const [tempClothingSize, setTempClothingSize] = useState(user?.clothingSize || 'L');
  const [tempShoeSize, setTempShoeSize] = useState(user?.shoeSize || 'UK 9');
  const [savedFeedback, setSavedFeedback] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'wishlist'>('profile');

  // ⭐ Edit Profile Modal state
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [editName, setEditName] = useState(user?.fullName || '');
  const [editEmail, setEditEmail] = useState(user?.email || '');
  const [editMobile, setEditMobile] = useState(user?.mobile || '');
  const [editAvatar, setEditAvatar] = useState(user?.avatarUrl || PRESET_AVATARS[0]);

  const handleSaveSizes = () => {
    onUpdateUserSizes(tempClothingSize, tempShoeSize);
    setIsEditingSizes(false);
    setSavedFeedback(true);
    setTimeout(() => setSavedFeedback(false), 2500);
  };

  // ⭐ Open Edit Profile Modal
  const handleOpenEditProfile = () => {
    setEditName(user?.fullName || '');
    setEditEmail(user?.email || '');
    setEditMobile(user?.mobile || '');
    setEditAvatar(user?.avatarUrl || PRESET_AVATARS[0]);
    setShowEditProfile(true);
  };

  // ⭐ Save Profile
  const handleSaveProfile = () => {
    if (!editName.trim()) {
      alert('Please enter your name');
      return;
    }
    if (onUpdateUserProfile) {
      onUpdateUserProfile({
        fullName: editName.trim(),
        email: editEmail.trim(),
        mobile: editMobile.trim(),
        avatarUrl: editAvatar,
      });
    }
    setShowEditProfile(false);
  };

  // ⭐ Handle Photo Upload
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Image must be less than 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setEditAvatar(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const categoryLabels: Record<string, string> = {
    men: "Men's Fashion",
    women: "Women's Couture",
    watches: 'Luxury Watches',
    jewellery: 'Fine Jewellery',
    footwear: 'Artisanal Footwear',
    accessories: 'Bags & Accessories',
  };

  return (
    <div className="w-full flex flex-col p-4 pb-24 gap-4">
      {/* Profile Card */}
      <div className="relative overflow-hidden rounded-3xl p-5 bg-gradient-to-br from-[#16062a] via-[#240845] to-[#16062a] text-white shadow-xl border border-purple-900/40">
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-orange-500/20 blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden ring-2 ring-orange-500 p-0.5 bg-purple-950 shadow-lg shrink-0">
              <img
                src={user?.avatarUrl || PRESET_AVATARS[0]}
                alt={user?.fullName || 'Guest'}
                className="w-full h-full object-cover rounded-[14px]"
              />
              <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-[#16062a]" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 flex-wrap">
                <h1 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                  {user?.fullName || 'Guest User'}
                </h1>
                <span
                  className="material-symbols-outlined text-orange-400 text-[20px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                  title="Verified Member"
                >
                  verified
                </span>
              </div>

              <div className="inline-flex items-center gap-1 mt-1 px-2.5 py-0.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-[10px] font-bold w-fit">
                <span className="material-symbols-outlined text-[12px]">diamond</span>
                <span>{user?.vipTier || 'Guest Member'}</span>
              </div>

              <span className="text-[11px] text-purple-200/70 mt-1">
                {user?.email || 'guest@topvent.com'}
              </span>
            </div>
          </div>

          <div className="flex gap-2 self-end sm:self-center">
            {/* ⭐ Edit Profile Button */}
            <button
              onClick={handleOpenEditProfile}
              className="px-3.5 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 shadow-md"
            >
              <span className="material-symbols-outlined text-[16px]">edit</span>
              <span>Edit Profile</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-3 gap-2 mt-5 pt-4 border-t border-purple-900/40">
          <button
            onClick={() => setActiveTab('profile')}
            className={`py-2 px-1 rounded-xl text-center text-xs font-bold transition-all flex flex-col sm:flex-row items-center justify-center gap-1 ${
              activeTab === 'profile'
                ? 'bg-orange-500 text-white shadow-md'
                : 'bg-white/10 text-purple-200/80 hover:bg-white/15'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">person</span>
            <span>Profile & Sizes</span>
          </button>

          <button
            onClick={() => setActiveTab('orders')}
            className={`py-2 px-1 rounded-xl text-center text-xs font-bold transition-all flex flex-col sm:flex-row items-center justify-center gap-1 ${
              activeTab === 'orders'
                ? 'bg-orange-500 text-white shadow-md'
                : 'bg-white/10 text-purple-200/80 hover:bg-white/15'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">receipt_long</span>
            <span>Orders ({cart.length + orders.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('wishlist')}
            className={`py-2 px-1 rounded-xl text-center text-xs font-bold transition-all flex flex-col sm:flex-row items-center justify-center gap-1 ${
              activeTab === 'wishlist'
                ? 'bg-orange-500 text-white shadow-md'
                : 'bg-white/10 text-purple-200/80 hover:bg-white/15'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">favorite</span>
            <span>Saved ({wishlistProducts.length})</span>
          </button>
        </div>
      </div>

      {savedFeedback && (
        <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-semibold flex items-center justify-center gap-1.5 animate-in fade-in">
          <span className="material-symbols-outlined text-[16px]">check_circle</span>
          <span>Profile updated successfully!</span>
        </div>
      )}

      {activeTab === 'profile' && (
        <div className="flex flex-col gap-4">
          {/* Sizes Card */}
          <div className="rounded-2xl p-4 bg-white dark:bg-[#1a0833] border border-slate-200/80 dark:border-purple-950/60 shadow-sm flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">checkroom</span>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                    Personalized Size Preferences
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-purple-300/70">
                    Used to pre-select fits on drops & flash sales
                  </p>
                </div>
              </div>

              {!isEditingSizes ? (
                <button
                  onClick={() => setIsEditingSizes(true)}
                  className="px-3 py-1 rounded-full bg-slate-100 dark:bg-purple-950 text-slate-900 dark:text-purple-200 text-xs font-bold hover:bg-orange-500 hover:text-white transition-colors"
                >
                  Edit Sizes
                </button>
              ) : (
                <button
                  onClick={handleSaveSizes}
                  className="px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold shadow-sm"
                >
                  Save
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-purple-950/40 border border-slate-200/60 dark:border-purple-900/40 flex flex-col">
                <span className="text-[10px] font-extrabold uppercase text-slate-500 dark:text-purple-300/70">
                  Clothing / Tops
                </span>
                <span className="text-xl font-extrabold text-orange-600 dark:text-orange-400 mt-0.5">
                  Size {user?.clothingSize || 'L'}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-purple-950/40 border border-slate-200/60 dark:border-purple-900/40 flex flex-col">
                <span className="text-[10px] font-extrabold uppercase text-slate-500 dark:text-purple-300/70">
                  Footwear / Shoes
                </span>
                <span className="text-xl font-extrabold text-orange-600 dark:text-orange-400 mt-0.5">
                  {user?.shoeSize || 'UK 9'}
                </span>
              </div>
            </div>

            {isEditingSizes && (
              <div className="p-3 rounded-xl bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/40 flex flex-col gap-3 animate-in fade-in">
                <div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white block mb-1.5">
                    Select Clothing Size:
                  </span>
                  <div className="grid grid-cols-6 gap-1">
                    {CLOTHING_SIZES.map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setTempClothingSize(sz)}
                        className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                          tempClothingSize === sz
                            ? 'bg-orange-500 text-white shadow-md'
                            : 'bg-white dark:bg-[#1a0833] text-slate-700 dark:text-purple-200'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white block mb-1.5">
                    Select Shoe Size (UK):
                  </span>
                  <div className="grid grid-cols-7 gap-1">
                    {SHOE_SIZES.map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setTempShoeSize(sz)}
                        className={`py-1.5 rounded-lg text-[11px] font-bold transition-all ${
                          tempShoeSize === sz
                            ? 'bg-orange-500 text-white shadow-md'
                            : 'bg-white dark:bg-[#1a0833] text-slate-700 dark:text-purple-200'
                        }`}
                      >
                        {sz.replace('UK ', '')}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Categories Card */}
          <div className="rounded-2xl p-4 bg-white dark:bg-[#1a0833] border border-slate-200/80 dark:border-purple-950/60 shadow-sm flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">category</span>
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  Favorite Curation Categories
                </h3>
                <p className="text-xs text-slate-500 dark:text-purple-300/70">
                  Prioritized in your feed and lightning alerts
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {user?.favoriteCategories && user.favoriteCategories.length > 0 ? (
                user.favoriteCategories.map((catKey) => (
                  <span
                    key={catKey}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-900 text-orange-700 dark:text-orange-300 text-xs font-bold"
                  >
                    <span className="material-symbols-outlined text-[14px]">check</span>
                    <span>{categoryLabels[catKey] || catKey}</span>
                  </span>
                ))
              ) : (
                <span className="text-xs text-slate-500">All luxury categories selected</span>
              )}
            </div>
          </div>

          {/* Theme Card */}
          <div className="rounded-2xl p-4 bg-white dark:bg-[#1a0833] border border-slate-200/80 dark:border-purple-950/60 shadow-sm flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">
                    {theme === 'dark' ? 'dark_mode' : 'light_mode'}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                    System-Wide Appearance
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-purple-300/70">
                    Switch between Cosmic Dark and Clean Light
                  </p>
                </div>
              </div>

              <button
                onClick={onToggleTheme}
                className="px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-purple-950 text-slate-900 dark:text-white text-xs font-bold flex items-center gap-1 hover:bg-orange-500 hover:text-white transition-colors"
              >
                <span>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
                <span className="material-symbols-outlined text-[16px]">sync</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={() => onSetTheme('light')}
                className={`p-3 rounded-xl border flex items-center gap-2 text-xs font-bold transition-all ${
                  theme === 'light'
                    ? 'border-orange-500 bg-orange-50/50 text-orange-600 shadow-sm'
                    : 'border-slate-200 dark:border-purple-950 text-slate-600 dark:text-purple-200'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">light_mode</span>
                <span>Light Mode</span>
              </button>

              <button
                onClick={() => onSetTheme('dark')}
                className={`p-3 rounded-xl border flex items-center gap-2 text-xs font-bold transition-all ${
                  theme === 'dark'
                    ? 'border-orange-500 bg-orange-950/20 text-orange-400 shadow-sm'
                    : 'border-slate-200 dark:border-purple-950 text-slate-600 dark:text-purple-200'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">dark_mode</span>
                <span>Cosmic Dark</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'orders' && (
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl p-4 bg-white dark:bg-[#1a0833] border border-slate-200/80 dark:border-purple-950/60 shadow-sm flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-orange-500 text-[22px]">shopping_cart</span>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  Active Shopping Cart
                </h3>
              </div>
              <span className="text-xs font-bold text-orange-600 dark:text-orange-400">
                {cart.length} item{cart.length === 1 ? '' : 's'}
              </span>
            </div>

            {cart.length > 0 ? (
              <div className="flex flex-col gap-2.5">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onSelectProduct(item.product)}
                    className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-purple-950/30 border border-slate-200/60 dark:border-purple-900/30 cursor-pointer hover:border-orange-500/40 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <img
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                          {item.product.name}
                        </h4>
                        <span className="text-[11px] text-slate-500 dark:text-purple-300/70">
                          {item.size} • Qty: {item.quantity}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-extrabold text-slate-900 dark:text-white tabular-nums shrink-0 ml-2">
                      ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                ))}

                <button
                  onClick={onOpenCart}
                  className="w-full py-3 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md shadow-orange-500/20 active:scale-95 transition-all mt-1"
                >
                  <span>Open Cart & Complete Checkout</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            ) : (
              <div className="py-4 text-center">
                <p className="text-xs text-slate-500 dark:text-purple-300/70">
                  Your cart is currently empty.
                </p>
              </div>
            )}
          </div>

          <div className="rounded-2xl p-4 bg-white dark:bg-[#1a0833] border border-slate-200/80 dark:border-purple-950/60 shadow-sm flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-orange-500 text-[22px]">history</span>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  Past Orders & Tracking
                </h3>
              </div>
              <span className="text-xs text-slate-400 font-semibold">{orders.length} Orders</span>
            </div>

            {orders.length > 0 ? (
              <div className="flex flex-col gap-3">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="p-3.5 rounded-2xl bg-slate-50 dark:bg-purple-950/30 border border-slate-200/70 dark:border-purple-900/40 flex flex-col gap-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-mono text-xs font-bold text-slate-900 dark:text-white">
                          {order.id}
                        </span>
                        <span className="text-[10px] text-slate-400">{order.date}</span>
                      </div>

                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide ${
                          order.status === 'Delivered'
                            ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300'
                            : 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 animate-pulse'
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1.5 pt-1 border-t border-slate-200/50 dark:border-purple-900/30">
                      {order.items.map((i) => (
                        <div key={i.id} className="flex items-center justify-between text-xs">
                          <span className="text-slate-700 dark:text-purple-200 truncate max-w-[200px]">
                            {i.quantity}x {i.product.name} ({i.size})
                          </span>
                          <span className="text-slate-500 dark:text-purple-300/70 tabular-nums">
                            ₹{(i.product.price * i.quantity).toLocaleString('en-IN')}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-slate-200/50 dark:border-purple-900/30 text-xs">
                      <span className="text-slate-500 dark:text-purple-300/70 font-mono text-[11px]">
                        Track: {order.trackingNumber}
                      </span>
                      <span className="font-extrabold text-slate-900 dark:text-white">
                        Total: ₹{order.totalAmount.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-6 text-center text-xs text-slate-400">No past orders yet.</div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'wishlist' && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">
              Curated Wardrobe & Liked Items
            </h3>
            <span className="text-xs font-bold text-orange-600 dark:text-orange-400">
              {wishlistProducts.length} Saved
            </span>
          </div>

          {wishlistProducts.length > 0 ? (
            <div className="flex flex-col gap-3">
              {wishlistProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className="flex gap-3 p-3 rounded-2xl bg-white dark:bg-[#1a0833] border border-slate-200/80 dark:border-purple-950/60 shadow-sm cursor-pointer hover:shadow-md transition-all group"
                >
                  <div className="w-20 h-24 rounded-xl overflow-hidden bg-slate-100 dark:bg-purple-950/50 shrink-0">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      onError={(e) => {
                        e.currentTarget.src =
                          'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=300&q=80';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-extrabold uppercase text-slate-500 dark:text-purple-300/70">
                          {product.brand}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleWishlist(product.id, e);
                          }}
                          className="text-rose-500 hover:scale-110 transition-transform p-1"
                          title="Remove from saved"
                        >
                          <span
                            className="material-symbols-outlined text-[18px]"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            favorite
                          </span>
                        </button>
                      </div>

                      <h4 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1 group-hover:text-orange-500">
                        {product.name}
                      </h4>

                      <div className="flex items-baseline gap-1.5 mt-1">
                        <span className="text-sm font-extrabold text-slate-900 dark:text-white tabular-nums">
                          ₹{product.price.toLocaleString('en-IN')}
                        </span>
                        <span className="text-[10px] text-slate-400 line-through">
                          ₹{product.originalPrice.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddToCart(product);
                        }}
                        className="flex-1 py-1.5 px-2.5 rounded-lg bg-slate-100 dark:bg-purple-950/60 hover:bg-orange-500 hover:text-white text-[11px] font-bold text-slate-800 dark:text-purple-200 transition-colors flex items-center justify-center gap-1"
                      >
                        <span className="material-symbols-outlined text-[14px]">add_shopping_cart</span>
                        <span>ADD TO CART</span>
                      </button>

                      <a
                        href={product.amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 py-1.5 px-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-[11px] font-extrabold text-white transition-colors flex items-center justify-center gap-1 shadow-sm"
                      >
                        <span>BUY NOW</span>
                        <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center rounded-2xl bg-white dark:bg-[#1a0833] border border-slate-200/80 dark:border-purple-950/60">
              <span className="material-symbols-outlined text-[36px] text-slate-300 dark:text-purple-900 block mb-1">
                favorite_border
              </span>
              <p className="text-xs text-slate-500 dark:text-purple-300/70">
                You haven't saved any products yet.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Privacy Card */}
      <div className="rounded-2xl p-4 bg-slate-100 dark:bg-[#16062a] border border-slate-200/80 dark:border-purple-950/40 flex flex-col gap-1.5 text-xs text-slate-500 dark:text-purple-300/70 mt-2">
        <div className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200 font-bold">
          <span className="material-symbols-outlined text-orange-500 text-[16px]">verified_user</span>
          <span>Privacy & Affiliate Disclosure</span>
        </div>
        <p className="leading-relaxed text-[11px]">
          Your account credentials and email address are never exposed publicly. All purchases are secure and verified.
        </p>
      </div>

      {/* ⭐ EDIT PROFILE MODAL */}
      {showEditProfile && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
        >
          <div className="relative w-full max-w-md bg-white dark:bg-[#1a0833] text-slate-900 dark:text-white rounded-3xl border border-slate-200 dark:border-purple-800/40 shadow-2xl overflow-hidden my-auto">
            {/* Header */}
            <div className="px-5 py-4 bg-gradient-to-r from-[#16062a] to-[#240845] flex items-center justify-between border-b border-purple-900/40">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-orange-400 text-[22px]">edit</span>
                <h2 className="font-extrabold text-base text-white">Edit Your Profile</h2>
              </div>
              <button
                onClick={() => setShowEditProfile(false)}
                aria-label="Close"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            {/* Body */}
            <div className="px-5 py-4 max-h-[70vh] overflow-y-auto flex flex-col gap-4">
              {/* Avatar */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-700 dark:text-purple-200">
                  Profile Photo
                </label>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-orange-500 bg-purple-950 shrink-0">
                    <img src={editAvatar} alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col gap-1.5">
                    <label className="cursor-pointer inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-xs font-bold text-white transition-colors">
                      <span className="material-symbols-outlined text-[16px]">upload</span>
                      <span>Upload Photo</span>
                      <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                    </label>
                    <span className="text-[10px] text-slate-500 dark:text-purple-300/70">Or pick below:</span>
                  </div>
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {PRESET_AVATARS.map((url, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setEditAvatar(url)}
                      className={`aspect-square rounded-xl overflow-hidden transition-all ${
                        editAvatar === url
                          ? 'ring-2 ring-orange-500 scale-105 shadow-md'
                          : 'opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={url} alt={`Avatar ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-purple-200">Full Name</label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  placeholder="Your full name"
                  className="h-11 px-3.5 rounded-xl bg-slate-50 dark:bg-purple-950/40 border border-slate-200 dark:border-purple-900/50 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-purple-200">Email Address</label>
                <input
                  type="email"
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="h-11 px-3.5 rounded-xl bg-slate-50 dark:bg-purple-950/40 border border-slate-200 dark:border-purple-900/50 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Mobile */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-purple-200">Mobile Number</label>
                <input
                  type="tel"
                  value={editMobile}
                  onChange={(e) => setEditMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  placeholder="9876543210"
                  maxLength={10}
                  className="h-11 px-3.5 rounded-xl bg-slate-50 dark:bg-purple-950/40 border border-slate-200 dark:border-purple-900/50 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="px-5 py-4 bg-slate-50 dark:bg-purple-950/30 border-t border-slate-200 dark:border-purple-900/40 flex gap-2">
              <button
                onClick={() => setShowEditProfile(false)}
                className="flex-1 py-3 rounded-xl bg-slate-200 dark:bg-purple-950 text-slate-700 dark:text-purple-200 font-bold text-sm hover:bg-slate-300 dark:hover:bg-purple-900 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveProfile}
                className="flex-1 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[18px]">save</span>
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};