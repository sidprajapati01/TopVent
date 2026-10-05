import React from 'react';

interface FooterProps {
  onNavigateTab?: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTab }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#16062a] text-white mt-8 border-t border-purple-900/40">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Brand Column */}
          <div>
            <h3 className="font-bold text-orange-400 mb-2 text-sm">TOPVENT</h3>
            <p className="text-purple-200/70 text-xs leading-relaxed">
              Hand-curated luxury fashion drops with verified Amazon deals up to 80% off.
            </p>
            <div className="flex items-center gap-2 mt-3">
              <span className="material-symbols-outlined text-orange-500 text-[16px]">verified</span>
              <span className="text-[10px] text-purple-200/60 font-bold uppercase tracking-wider">
                Amazon Affiliate Partner
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-orange-400 mb-2 text-sm">Quick Links</h3>
            <ul className="space-y-1.5 text-xs text-purple-200/70">
              <li>
                <button
                  onClick={() => onNavigateTab?.('home')}
                  className="hover:text-orange-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab?.('explore')}
                  className="hover:text-orange-400 transition-colors"
                >
                  Explore Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab?.('deals')}
                  className="hover:text-orange-400 transition-colors"
                >
                  VIP Deals
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab?.('blog')}
                  className="hover:text-orange-400 transition-colors"
                >
                  Fashion Blog
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Row */}
        <div className="grid grid-cols-3 gap-4 mb-6 pt-4 border-t border-purple-900/40">
          <div>
            <h4 className="font-bold text-orange-400 mb-1.5 text-xs">Legal</h4>
            <ul className="space-y-1 text-[11px] text-purple-200/60">
              <li>
                <button
                  onClick={() => onNavigateTab?.('privacy')}
                  className="hover:text-orange-400 transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab?.('terms')}
                  className="hover:text-orange-400 transition-colors"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab?.('disclaimer')}
                  className="hover:text-orange-400 transition-colors"
                >
                  Affiliate Disclaimer
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-orange-400 mb-1.5 text-xs">Support</h4>
            <ul className="space-y-1 text-[11px] text-purple-200/60">
              <li>
                <button
                  onClick={() => onNavigateTab?.('about')}
                  className="hover:text-orange-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab?.('contact')}
                  className="hover:text-orange-400 transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab?.('faq')}
                  className="hover:text-orange-400 transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-orange-400 mb-1.5 text-xs">Follow</h4>
            <ul className="space-y-1 text-[11px] text-purple-200/60">
              <li>
                <a
                  href="https://whatsapp.com/channel/0029Vb8pTwMHFxP6oifwK32V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition-colors"
                >
                  WhatsApp Men's
                </a>
              </li>
              <li>
                <a
                  href="https://whatsapp.com/channel/0029Vb9OJd63GJOxv9DntB1r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition-colors"
                >
                  WhatsApp Women's
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-purple-900/40 text-center">
          <p className="text-[11px] text-purple-300/50">
            © {currentYear} TopVent. All rights reserved. | Prices verified at time of publishing.
          </p>
          <p className="text-[10px] text-purple-300/40 mt-1 max-w-md mx-auto">
            As an Amazon Associate, TopVent earns from qualifying purchases at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
};