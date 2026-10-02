import React, { memo } from 'react';
import { TabType } from '../types';

interface BottomNavProps {
  currentTab: TabType;
  onTabChange: (tab: TabType) => void;
  cartCount: number;
  onOpenCart?: () => void;
}

const BottomNavComponent: React.FC<BottomNavProps> = ({
  currentTab,
  onTabChange,
  cartCount,
  onOpenCart,
}) => {
    const tabs = [
    { id: 'home' as TabType, label: 'Home', icon: 'home' },
    { id: 'explore' as TabType, label: 'Explore', icon: 'explore' },
    { id: 'blog' as TabType, label: 'Blog', icon: 'article' },
    { id: 'deals' as TabType, label: 'Deals', icon: 'local_fire_department', badge: 'SALE' },
    { id: 'cart' as TabType, label: 'Cart', icon: 'shopping_cart', count: cartCount },
    { id: 'account' as TabType, label: 'Account', icon: 'person' },
  ];

  const handleTabClick = (tabId: TabType) => {
    if (tabId === 'cart') {
      if (onOpenCart) {
        onOpenCart();
      } else {
        onTabChange('cart');
      }
    } else {
      onTabChange(tabId);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 pb-[max(0.75rem,env(safe-area-inset-bottom))] px-3 sm:px-4 pointer-events-none">
      <div className="w-full max-w-md mx-auto">
        <nav
          role="navigation"
          aria-label="Bottom Navigation"
          className="pointer-events-auto flex items-center justify-around h-16 w-full rounded-2xl sm:rounded-full bg-[#1b0833]/95 dark:bg-[#120524]/95 backdrop-blur-sm border border-purple-900/40 shadow-[0_8px_32px_rgba(10,2,20,0.5)] px-1 sm:px-2"
        >
          {tabs.map((tab) => {
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`relative flex-1 min-w-0 h-12 flex flex-col items-center justify-center rounded-xl sm:rounded-full transition-all active:scale-95 ${
                  isActive
                    ? 'text-orange-500 bg-orange-500/15 font-semibold shadow-inner'
                    : 'text-purple-200/70 hover:text-white'
                }`}
              >
                {tab.badge && (
                  <span className="absolute -top-1 px-1.5 py-0.2 rounded-full bg-orange-500 text-white text-[8px] font-extrabold tracking-wider leading-tight shadow-sm animate-pulse">
                    {tab.badge}
                  </span>
                )}

                {typeof tab.count === 'number' && tab.count > 0 && (
                  <span className="absolute -top-1 right-2 min-w-[16px] h-3.5 px-1 rounded-full bg-orange-500 text-white text-[8px] font-extrabold flex items-center justify-center leading-tight shadow-sm">
                    {tab.count}
                  </span>
                )}

                <span
                  className="material-symbols-outlined text-[20px] sm:text-[22px]"
                  style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  {tab.icon}
                </span>
                <span className="text-[10px] sm:text-[11px] mt-0.5 tracking-tight font-medium truncate w-full text-center">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export const BottomNav = memo(BottomNavComponent);