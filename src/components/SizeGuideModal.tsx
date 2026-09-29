import React from 'react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSize: string;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose, selectedSize }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200"
    >
      <div className="w-full max-w-md bg-white dark:bg-[#16062a] rounded-t-3xl sm:rounded-2xl p-5 flex flex-col gap-4 max-h-[85vh] overflow-y-auto text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-purple-900/40 shadow-2xl">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-purple-900/40">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-orange-500 text-[22px]">straighten</span>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Blazer & Apparel Size Guide (Inches)
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close size guide"
            className="w-8 h-8 rounded-full bg-slate-100 dark:bg-purple-950/60 hover:bg-slate-200 flex items-center justify-center text-slate-600 dark:text-slate-300"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="w-full overflow-x-auto rounded-xl border border-slate-100 dark:border-purple-950">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-100 dark:bg-purple-950/70 text-slate-800 dark:text-purple-200 font-bold">
                <th className="p-3">Size</th>
                <th className="p-3">Chest</th>
                <th className="p-3">Shoulder</th>
                <th className="p-3">Length</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-purple-950/50">
              <tr className={selectedSize === 'S' ? 'bg-orange-500/10 font-bold text-orange-600 dark:text-orange-400' : ''}>
                <td className="p-3">S</td>
                <td className="p-3">38"</td>
                <td className="p-3">17.5"</td>
                <td className="p-3">28.0"</td>
              </tr>
              <tr className={selectedSize === 'M' ? 'bg-orange-500/10 font-bold text-orange-600 dark:text-orange-400' : ''}>
                <td className="p-3">M</td>
                <td className="p-3">40"</td>
                <td className="p-3">18.0"</td>
                <td className="p-3">28.5"</td>
              </tr>
              <tr className={selectedSize === 'L' ? 'bg-orange-500/15 font-bold text-orange-600 dark:text-orange-400' : ''}>
                <td className="p-3">L (Default Fit)</td>
                <td className="p-3">42"</td>
                <td className="p-3">18.5"</td>
                <td className="p-3">29.0"</td>
              </tr>
              <tr className={selectedSize === 'XL' ? 'bg-orange-500/10 font-bold text-orange-600 dark:text-orange-400' : ''}>
                <td className="p-3">XL</td>
                <td className="p-3">44"</td>
                <td className="p-3">19.2"</td>
                <td className="p-3">29.5"</td>
              </tr>
              <tr className={selectedSize === 'XXL' ? 'bg-orange-500/10 font-bold text-orange-600 dark:text-orange-400' : ''}>
                <td className="p-3">XXL</td>
                <td className="p-3">46"</td>
                <td className="p-3">20.0"</td>
                <td className="p-3">30.0"</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 dark:bg-purple-950/40 text-xs text-slate-600 dark:text-purple-200/80 leading-relaxed">
          <p className="font-semibold text-slate-800 dark:text-white mb-0.5">💡 Measurement Tip:</p>
          For a fitted Italian silhouette, go true to size. For relaxed layering over fine-knit merino or casual tees, select one size up.
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-[#16062a] dark:bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm tracking-wide transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  );
};
