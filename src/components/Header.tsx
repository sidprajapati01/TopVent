import React, { useState } from 'react';
import { TabType, ThemeMode, UserProfile } from '../types';
import { TopventBrandLogo } from './TopventBrandLogo';

interface HeaderProps {
  currentTab: TabType;
  onTabChange: (tab: TabType) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
  wishlistCount?: number;
  cartCount: number;
  onOpenCart: () => void;
  user: UserProfile | null;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onTabChange,
  searchQuery,
  onSearchChange,
  theme,
  onToggleTheme,
  cartCount,
  onOpenCart,
  user,
}) => {
  const [showNotifications, setShowNotifications] = useState(false);

  const getSubtitle = () => {
    switch (currentTab) {
      case 'home': return 'Home Storefront';
      case 'explore': return 'Explore Catalog';
      case 'deals': return 'Exclusive Deals';
      case 'cart': return 'Shopping Cart';
      case 'wishlist': return 'Curated Wardrobe';
      case 'account': return 'VIP Account';
      default: return 'Exclusive Deals';
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#16062a]/95 dark:bg-[#0f041d]/95 backdrop-blur-xl border-b border-purple-950/40 shadow-[0_4px_24px_rgba(20,5,38,0.25)] transition-colors">
      <div className="max-w-2xl mx-auto px-4 pt-3 pb-3 flex flex-col gap-2.5">
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={() => onTabChange('home')}
            className="flex items-center gap-2.5 text-left focus:outline-none group"
            title="TopVent Home"
          >
            <TopventBrandLogo
              size={34}
              showBackground={true}
              className="rounded-xl shadow-md shadow-purple-950/60 group-hover:scale-105 transition-transform"
            />
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="text-orange-500 font-bold text-lg tracking-tight group-hover:text-orange-400 transition-colors">
                TOPVENT
              </span>
              <span className="text-purple-300/40 text-xs hidden sm:inline">•</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-purple-200/80 truncate hidden xs:inline">
                {getSubtitle()}
              </span>
            </div>
          </button>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="w-9 h-9 flex items-center justify-center rounded-full text-purple-200/80 hover:text-orange-400 hover:bg-white/10 active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            <button
              onClick={onOpenCart}
              aria-label="Shopping Cart"
              className="relative w-9 h-9 flex items-center justify-center rounded-full text-purple-200/80 hover:text-orange-400 hover:bg-white/10 active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-1 rounded-full bg-orange-500 text-white text-[9px] font-extrabold flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => onTabChange('account')}
              aria-label="User Account"
              className="pl-1 flex items-center focus:outline-none"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-orange-500/80 p-0.5 bg-gradient-to-tr from-purple-800 to-orange-500">
                {user?.avatarUrl ? (
                  <img src={user.avatarUrl} alt={user.fullName} className="w-full h-full rounded-full object-cover" />
                ) : (
                  <div className="w-full h-full rounded-full bg-[#1b0833] flex items-center justify-center text-white text-[11px] font-bold">
                    {user?.fullName?.charAt(0) || 'V'}
                  </div>
                )}
              </div>
            </button>
          </div>
        </div>

        <div className="relative w-full">
          <div className="flex items-center h-10 w-full px-3 rounded-full bg-white/10 border border-white/10 text-white backdrop-blur-md focus-within:ring-2 focus-within:ring-orange-500/80 transition-all">
            <span className="material-symbols-outlined text-orange-400 text-[18px] mr-2 shrink-0">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search blazers, watches, sarees, brogues, cocktail gowns..."
              className="w-full bg-transparent text-sm text-purple-100 placeholder:text-purple-300/60 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 text-xs ml-1"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};