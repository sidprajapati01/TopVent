import React, { useEffect, useState, lazy, Suspense, useCallback, useRef } from 'react';
import { CartItem, Order, Product, Story, TabType, ThemeMode, UserProfile } from './types';
import { PRODUCTS_DATA, STORIES_DATA } from './data/mockData';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { StoryModal } from './views/StoryModal';
import { HomeView } from './views/HomeView';
import { ExploreView } from './views/ExploreView';
import { DealsView } from './views/DealsView';
import { WishlistView } from './views/WishlistView';
import { AccountView } from './views/AccountView';

// ⭐ 3D Background — Lazy Load
const Background3D = lazy(() => import('./components/Background3D'));

export default function App() {
  // ═════════════════════════════════════════
  // 1. બધા STATE પહેલા
  // ═════════════════════════════════════════

  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('topvent_theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedUser = localStorage.getItem('topvent_user');
        if (savedUser) return JSON.parse(savedUser);
      } catch {}
    }
    return {
      id: 'guest-user',
      fullName: 'Guest User',
      email: 'guest@topvent.com',
      mobile: '',
      isEmailVerified: true,
      isMobileVerified: true,
      avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80',
      clothingSize: 'L',
      shoeSize: 'UK 9',
      favoriteCategories: ['men', 'women'],
      joinedDate: 'September 2026',
      vipTier: 'Guest Member',
    };
  });

  const [currentTab, setCurrentTab] = useState<TabType>('home');
  const [searchQuery, setSearchQuery] = useState('');

  const [wishlist, setWishlist] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('topvent_wishlist');
        if (saved) return JSON.parse(saved);
      } catch {}
    }
    return [];
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedCart = localStorage.getItem('topvent_cart');
        if (savedCart) return JSON.parse(savedCart);
      } catch {}
    }
    return [];
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedOrders = localStorage.getItem('topvent_orders');
        if (savedOrders) return JSON.parse(savedOrders);
      } catch {}
    }
    return [];
  });

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeStory, setActiveStory] = useState<Story | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // ═════════════════════════════════════════
  // 2. REFS
  // ═════════════════════════════════════════

  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  // ═════════════════════════════════════════
  // 3. CALLBACKS
  // ═════════════════════════════════════════

  const handleSearchChange = useCallback((query: string) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setSearchQuery(query);
      if (query && currentTab !== 'explore') {
        setCurrentTab('explore');
      }
    }, 300);
  }, [currentTab]);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleSetTheme = (newTheme: ThemeMode) => {
    setTheme(newTheme);
  };

  const handleToggleWishlist = (productId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleOpenStory = (story: Story) => {
    setActiveStory(story);
  };

  const handleShopCategoryFromStory = (_category: string) => {
    setCurrentTab('explore');
  };

  const handleAddToCart = (
    product: Product,
    size?: string,
    color?: string,
    quantity: number = 1
  ) => {
    const chosenSize = size || (product.sizes ? product.sizes[0] : 'L');
    const chosenColor = color || (product.colors ? product.colors[0].name : 'Default');
    const itemId = `${product.id}-${chosenSize}-${chosenColor}`;

    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === itemId);
      if (existing) {
        return prevCart.map((i) =>
          i.id === itemId ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [
        ...prevCart,
        {
          id: itemId,
          productId: product.id,
          product,
          size: chosenSize,
          color: chosenColor,
          quantity,
        },
      ];
    });

    showToast(`✅ ${product.name.substring(0, 30)}... added to cart!`);
  };

  const handleBuyNow = (_product: Product, _size?: string, _color?: string) => {
    // No-op
  };

  const handleUpdateCartQuantity = (id: string, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleCheckoutComplete = (orderDetails: {
    address: string;
    paymentMethod: string;
    totalAmount: number;
    savingsAmount: number;
    items: CartItem[];
  }) => {
    const newOrder: Order = {
      id: `ORD-${Math.floor(100000 + Math.random() * 900000)}-TP`,
      date: 'Today, Just Now',
      items: orderDetails.items,
      totalAmount: orderDetails.totalAmount,
      savingsAmount: orderDetails.savingsAmount,
      status: 'Confirmed',
      shippingAddress: orderDetails.address,
      paymentMethod: orderDetails.paymentMethod,
      trackingNumber: `TPV-TRK-${Math.floor(100000 + Math.random() * 900000)}`,
    };

    setOrders((prev) => [newOrder, ...prev]);
    setCart([]);
  };

  const handleClearCartAndCheckout = () => {
    if (cart.length === 0) return;

    const reversedCart = [...cart].reverse();

    reversedCart.forEach((item, index) => {
      setTimeout(() => {
        if (item.product.amazonUrl) {
          window.open(item.product.amazonUrl, '_blank');
        }
      }, index * 600);
    });

    setTimeout(() => {
      setIsCartOpen(false);
      showToast(`🎉 Opening ${cart.length} product${cart.length > 1 ? 's' : ''} on Amazon!`);
    }, reversedCart.length * 600);
  };

  const handleUpdateUserSizes = (clothingSize: string, shoeSize: string) => {
    if (currentUser) {
      setCurrentUser({
        ...currentUser,
        clothingSize,
        shoeSize,
      });
    }
  };

  const handleUpdateUserProfile = (updates: Partial<UserProfile>) => {
    if (currentUser) {
      setCurrentUser({
        ...currentUser,
        ...updates,
      });
      showToast('✅ Profile updated successfully!');
    }
  };

  const handleLogout = () => {
    setCurrentUser({
      id: 'guest-user',
      fullName: 'Guest User',
      email: 'guest@topvent.com',
      mobile: '',
      isEmailVerified: true,
      isMobileVerified: true,
      avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80',
      clothingSize: 'L',
      shoeSize: 'UK 9',
      favoriteCategories: ['men', 'women'],
      joinedDate: 'September 2026',
      vipTier: 'Guest Member',
    });
    showToast('👋 Signed out successfully');
  };

  // ═════════════════════════════════════════
  // 4. EFFECTS
  // ═════════════════════════════════════════

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('topvent_theme', theme);
  }, [theme]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('topvent_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('topvent_user');
    }
  }, [currentUser]);

  useEffect(() => {
    try {
      localStorage.setItem('topvent_wishlist', JSON.stringify(wishlist));
    } catch {}
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem('topvent_cart', JSON.stringify(cart));
    } catch {}
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('topvent_orders', JSON.stringify(orders));
    } catch {}
  }, [orders]);

  // ═════════════════════════════════════════
  // 5. DERIVED VALUES
  // ═════════════════════════════════════════

  const wishlistedProducts = PRODUCTS_DATA.filter((p) => wishlist.includes(p.id));
  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // ═════════════════════════════════════════
  // 6. RETURN
  // ═════════════════════════════════════════

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0d0417] text-slate-900 dark:text-slate-100 transition-colors duration-200">

      {/* ⭐ 3D Background — Lazy Load */}
      <Suspense fallback={null}>
        <Background3D />
      </Suspense>

      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed top-5 left-1/2 -translate-x-1/2 z-[100] px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2 animate-in slide-in-from-top-2 fade-in ${
            toast.type === 'success' ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
          }`}
        >
          <span className="material-symbols-outlined text-[20px]">
            {toast.type === 'success' ? 'check_circle' : 'error'}
          </span>
          <span className="text-sm font-bold">{toast.message}</span>
        </div>
      )}

      <Header
        currentTab={currentTab}
        onTabChange={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        wishlistCount={wishlist.length}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        user={currentUser}
      />

      <main className="max-w-2xl mx-auto pt-24 pb-32 min-h-screen">
        {currentTab === 'home' && (
          <HomeView
            products={PRODUCTS_DATA}
            stories={STORIES_DATA}
            onSelectProduct={handleSelectProduct}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
            onNavigateTab={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenStory={handleOpenStory}
            isDark={theme === 'dark'}
            onBuyNow={handleBuyNow}
            onAddToCart={handleAddToCart}
          />
        )}

        {currentTab === 'explore' && (
          <ExploreView
            products={PRODUCTS_DATA}
            onSelectProduct={handleSelectProduct}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
            searchQuery={searchQuery}
            onBuyNow={handleBuyNow}
            onAddToCart={handleAddToCart}
          />
        )}

        {currentTab === 'deals' && (
          <DealsView
            products={PRODUCTS_DATA}
            onSelectProduct={handleSelectProduct}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
            onBuyNow={handleBuyNow}
            onAddToCart={handleAddToCart}
          />
        )}

        {currentTab === 'wishlist' && (
          <WishlistView
            products={PRODUCTS_DATA}
            wishlistIds={wishlist}
            onSelectProduct={handleSelectProduct}
            onToggleWishlist={handleToggleWishlist}
            onNavigateTab={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onBuyNow={handleBuyNow}
            onAddToCart={handleAddToCart}
          />
        )}

        {currentTab === 'account' && (
          <AccountView
            user={currentUser}
            theme={theme}
            onToggleTheme={handleToggleTheme}
            onSetTheme={handleSetTheme}
            wishlistProducts={wishlistedProducts}
            onSelectProduct={handleSelectProduct}
            onToggleWishlist={handleToggleWishlist}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            cart={cart}
            orders={orders}
            onOpenCart={() => setIsCartOpen(true)}
            onUpdateUserSizes={handleUpdateUserSizes}
            onUpdateUserProfile={handleUpdateUserProfile}
            onLogout={handleLogout}
          />
        )}
      </main>

      <BottomNav
        currentTab={currentTab}
        onTabChange={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* ⭐ Modals — બધાની ઉપર */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
        isWishlisted={selectedProduct ? wishlist.includes(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        user={currentUser}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onCheckoutComplete={handleCheckoutComplete}
        onSelectProduct={handleSelectProduct}
        onClearCartAndCheckout={handleClearCartAndCheckout}
      />

      <StoryModal
        story={activeStory}
        isOpen={Boolean(activeStory)}
        onClose={() => setActiveStory(null)}
        onShopCategory={handleShopCategoryFromStory}
      />
    </div>
  );
}