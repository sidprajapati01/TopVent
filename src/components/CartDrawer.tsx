import React, { useState } from 'react';
import { CartItem, Product, UserProfile } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  user: UserProfile | null;
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onCheckoutComplete: (orderDetails: {
    address: string;
    paymentMethod: string;
    totalAmount: number;
    savingsAmount: number;
    items: CartItem[];
  }) => void;
  onSelectProduct: (product: Product) => void;
  onClearCartAndCheckout: () => void;  // ⭐ નવું
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  user,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onCheckoutComplete,
  onSelectProduct,
  onClearCartAndCheckout,  // ⭐ નવું
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [promoError, setPromoError] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState(
    'Penthouse 4B, Sky Residency, Nariman Point, Mumbai, MH - 400021'
  );
  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'Card' | 'COD'>('UPI');
  const [orderConfirmed, setOrderConfirmed] = useState<string | null>(null);

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const originalTotal = cart.reduce(
    (sum, item) => sum + item.product.originalPrice * item.quantity,
    0
  );
  const initialSavings = originalTotal - subtotal;
  const promoDiscount = appliedPromo === 'TOPVENT10' ? Math.round(subtotal * 0.1) : 0;
  const finalTotal = Math.max(0, subtotal - promoDiscount);
  const totalSavings = initialSavings + promoDiscount;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'TOPVENT10') {
      setAppliedPromo('TOPVENT10');
      setPromoError('');
    } else if (promoCode.trim().toUpperCase() === 'VIP500') {
      setAppliedPromo('VIP500');
      setPromoError('');
    } else {
      setPromoError('Invalid coupon code. Try TOPVENT10 for 10% off');
    }
  };

  const handlePlaceOrder = () => {
    const trackingId = `TPV-ORD-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderConfirmed(trackingId);
    onCheckoutComplete({
      address: deliveryAddress,
      paymentMethod:
        paymentMethod === 'UPI'
          ? 'Instant UPI'
          : paymentMethod === 'Card'
          ? 'Encrypted Credit Card'
          : 'Cash on Delivery',
      totalAmount: finalTotal,
      savingsAmount: totalSavings,
      items: [...cart],
    });
  };

  const handleFinish = () => {
    setOrderConfirmed(null);
    setIsCheckingOut(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-end animate-in fade-in duration-200"
    >
      <div className="w-full max-w-md bg-white dark:bg-[#130424] text-slate-900 dark:text-slate-100 flex flex-col h-full shadow-2xl relative">
        {/* Header */}
        <div className="p-4 bg-[#16062a] text-white flex items-center justify-between border-b border-purple-900/40">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-orange-400 text-[24px]">shopping_bag</span>
            <div>
              <h2 className="font-extrabold text-base">Your Shopping Cart</h2>
              <span className="text-[11px] text-purple-200/80">
                {cart.reduce((sum, i) => sum + i.quantity, 0)} Items Selected
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close cart"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {orderConfirmed ? (
          /* Order Confirmation View */
          <div className="p-6 flex-1 flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-200">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mb-4 ring-8 ring-emerald-500/10">
              <span className="material-symbols-outlined text-[42px]">check_circle</span>
            </div>

            <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 font-extrabold text-[11px] uppercase tracking-wider mb-2">
              VIP Order Placed
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              Thank You, {user?.fullName || 'VIP Customer'}!
            </h3>
            <p className="text-xs text-slate-500 dark:text-purple-300/80 mt-1 max-w-xs leading-relaxed">
              Your order has been confirmed and priority dispatched to our white-glove courier partners.
            </p>

            <div className="w-full my-6 p-4 rounded-2xl bg-slate-100 dark:bg-purple-950/40 border border-slate-200 dark:border-purple-900/50 flex flex-col gap-2 text-left">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-purple-300/70">Tracking ID:</span>
                <span className="font-mono font-bold text-orange-600 dark:text-orange-400">
                  {orderConfirmed}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-purple-300/70">Payment Status:</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">
                  Confirmed ({paymentMethod})
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-purple-300/70">Total Paid:</span>
                <span className="font-extrabold text-slate-900 dark:text-white">
                  ₹{finalTotal.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <button
              onClick={handleFinish}
              className="w-full py-3.5 px-6 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md active:scale-95 transition-all"
            >
              Continue Exploring Drops
            </button>
          </div>
        ) : cart.length === 0 ? (
          /* Empty Cart State */
          <div className="p-6 flex-1 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-[32px]">production_quantity_limits</span>
            </div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Your Cart is Empty</h3>
            <p className="text-xs text-slate-500 dark:text-purple-300/70 mt-1 mb-5 max-w-xs leading-relaxed">
              Explore our hand-curated suits, watches, gowns, and footwear and tap "Add to Cart" or "Buy Now".
            </p>
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-md active:scale-95 transition-all flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">grid_view</span>
              <span>Explore Drops</span>
            </button>
          </div>
        ) : isCheckingOut ? (
          /* Checkout Step */
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-purple-900/50">
              <button
                onClick={() => setIsCheckingOut(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-100 dark:hover:bg-purple-950 text-slate-700 dark:text-white"
              >
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              </button>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Fast VIP Checkout</h3>
            </div>

            {/* Delivery Destination */}
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-purple-950/40 border border-slate-200/80 dark:border-purple-900/50 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800 dark:text-white flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-orange-500">pin_drop</span>
                  <span>Delivery Address</span>
                </span>
                <span className="text-[10px] text-orange-600 dark:text-orange-400 font-semibold">Priority Express</span>
              </div>
              <textarea
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                rows={2}
                className="w-full p-2.5 rounded-xl bg-white dark:bg-[#1a0833] border border-slate-200 dark:border-purple-900 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
            </div>

            {/* Payment Method Selector */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-800 dark:text-white">Payment Method</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'UPI', label: 'Instant UPI', icon: 'bolt' },
                  { id: 'Card', label: 'Credit Card', icon: 'credit_card' },
                  { id: 'COD', label: 'Pay on Delivery', icon: 'payments' },
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setPaymentMethod(m.id as any)}
                    className={`p-3 rounded-xl border flex flex-col items-center gap-1 text-center transition-all ${
                      paymentMethod === m.id
                        ? 'border-orange-500 bg-orange-50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400 font-bold'
                        : 'border-slate-200 dark:border-purple-900 text-slate-600 dark:text-purple-200'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">{m.icon}</span>
                    <span className="text-[11px]">{m.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Final Order Review Summary */}
            <div className="p-3.5 rounded-2xl bg-white dark:bg-[#1a0833] border border-slate-200/80 dark:border-purple-950/60 shadow-sm flex flex-col gap-2 mt-auto">
              <div className="flex items-center justify-between text-xs text-slate-600 dark:text-purple-200">
                <span>Subtotal ({cart.length} items)</span>
                <span className="font-bold text-slate-900 dark:text-white">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              {promoDiscount > 0 && (
                <div className="flex items-center justify-between text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                  <span>VIP Promo ({appliedPromo})</span>
                  <span>-₹{promoDiscount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex items-center justify-between text-xs text-slate-600 dark:text-purple-200">
                <span>VIP Insured Express Shipping</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">FREE</span>
              </div>
              <div className="pt-2 border-t border-slate-100 dark:border-purple-900/40 flex items-center justify-between text-sm">
                <span className="font-extrabold text-slate-900 dark:text-white">Total Amount</span>
                <span className="text-lg font-extrabold text-orange-600 dark:text-orange-400 tabular-nums">
                  ₹{finalTotal.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full py-4 px-6 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              <span>Confirm & Place Order (₹{finalTotal.toLocaleString('en-IN')})</span>
              <span className="material-symbols-outlined text-[18px]">verified</span>
            </button>
          </div>
        ) : (
          /* Normal Cart List View */
          <div className="flex-1 flex flex-col justify-between overflow-hidden">
            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-purple-950/30 border border-slate-200/80 dark:border-purple-900/40 shadow-sm relative group"
                >
                  <div
                    onClick={() => {
                      if(item.product.amazonUrl){
                        window.open(item.product.amazonUrl, '_blank');
                      }  
                    }}
                    className="w-20 h-24 rounded-xl overflow-hidden bg-slate-200 dark:bg-purple-900/60 shrink-0 cursor-pointer"
                  >
                    <img
                      src={item.product.imageUrl}
                      alt={item.product.name}
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
                        <span className="text-[10px] font-extrabold uppercase text-slate-500 dark:text-purple-300/70 truncate">
                          {item.product.brand}
                        </span>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          aria-label="Remove item"
                          className="text-slate-400 hover:text-rose-500 transition-colors p-1 -mr-1"
                        >
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                      <h4
                        onClick={() => {
                          onSelectProduct(item.product);
                          onClose();
                        }}
                        className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1 cursor-pointer hover:text-orange-500"
                      >
                        {item.product.name}
                      </h4>
                      <div className="flex items-center gap-1.5 mt-1 text-[11px] text-slate-500 dark:text-purple-300/80">
                        <span className="px-1.5 py-0.5 rounded bg-white dark:bg-[#1a0833] font-semibold border border-slate-200 dark:border-purple-900">
                          {item.size}
                        </span>
                        <span>•</span>
                        <span className="truncate">{item.color}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-sm font-extrabold text-slate-900 dark:text-white tabular-nums">
                          ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                        <span className="text-[10px] text-slate-400 line-through">
                          ₹{(item.product.originalPrice * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center rounded-lg border border-slate-200 dark:border-purple-900 bg-white dark:bg-[#1a0833] overflow-hidden">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="w-6 h-6 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-purple-900 text-xs font-bold"
                        >
                          -
                        </button>
                        <span className="w-6 text-center text-xs font-bold tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="w-6 h-6 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-purple-900 text-xs font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
                         {/* Bottom Summary */}
            <div className="p-4 bg-white dark:bg-[#16062a] border-t border-slate-200 dark:border-purple-900/50 flex flex-col gap-3 shadow-lg">
              {/* Subtotal Display */}
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-purple-200 font-medium">
                  Total ({cart.reduce((sum, i) => sum + i.quantity, 0)} items)
                </span>
                <span className="text-lg font-extrabold text-orange-500 tabular-nums">
                  ₹{finalTotal.toLocaleString('en-IN')}
                </span>
              </div>

              {/* Info Message */}
              <p className="text-[11px] text-center text-slate-500 dark:text-purple-300/70 flex items-center justify-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-orange-500">touch_app</span>
                <span>Tap any product above to buy on Amazon</span>
              </p>

              {appliedPromo && (
                <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>
                  <span>Coupon {appliedPromo} applied: Extra 10% saved!</span>
                </div>
              )}
              {promoError && (
                <div className="text-[11px] text-rose-500 font-semibold">
                  {promoError}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
