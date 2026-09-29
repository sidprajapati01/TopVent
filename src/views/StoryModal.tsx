import React, { useEffect, useState } from 'react';
import { Story, Product } from '../types';

interface StoryModalProps {
  story: Story | null;
  isOpen: boolean;
  onClose: () => void;
  onShopCategory: (category: string) => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({
  story,
  isOpen,
  onClose,
  onShopCategory,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isOpen || !story) return;
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onClose();
          return 100;
        }
        return prev + 2.5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isOpen, story, onClose]);

  if (!isOpen || !story) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-sm h-full sm:h-[680px] bg-slate-900 rounded-none sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between">
        {/* Story Background Image */}
        <img
          src={story.storyImage || story.imageUrl}
          alt={story.title}
          onError={(e) => {
            e.currentTarget.src =
              'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85';
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/60 pointer-events-none" />

        {/* Top Header & Progress Bar */}
        <div className="relative z-10 p-4 flex flex-col gap-2.5">
          {/* Progress bar */}
          <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-500 rounded-full transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full ring-2 ring-orange-500 overflow-hidden">
                <img src={story.imageUrl} alt={story.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-white">{story.title} Curations</h3>
                <span className="text-[10px] text-orange-400 font-medium">TopVent Lookbook</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        </div>

        {/* Bottom Story CTA & Details */}
        <div className="relative z-10 p-5 flex flex-col gap-3">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-orange-400">
              {story.featuredProductCount} Hand-Picked Pieces
            </span>
            <h2 className="text-xl font-bold text-white mt-0.5 leading-snug">
              {story.subtitle}
            </h2>
          </div>

          <button
            onClick={() => {
              onShopCategory(story.category);
              onClose();
            }}
            className="w-full py-3 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30 transition-transform active:scale-95"
          >
            <span>Explore {story.title} Drops</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
