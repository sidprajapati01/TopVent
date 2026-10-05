import React, { useEffect, useState } from 'react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-24 right-4 z-30 w-12 h-12 rounded-full bg-orange-500 text-white shadow-lg flex items-center justify-center active:scale-95 transition-all hover:bg-orange-600 animate-in fade-in slide-in-from-bottom-2"
    >
      <span className="material-symbols-outlined text-[24px]">arrow_upward</span>
    </button>
  );
};