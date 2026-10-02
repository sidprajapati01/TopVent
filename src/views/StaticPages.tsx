import React from 'react';

// Privacy Policy
export const PrivacyView: React.FC = () => (
  <div className="w-full flex flex-col pb-20 px-4 pt-6">
    <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
    <div className="text-sm text-slate-700 dark:text-purple-100 leading-relaxed flex flex-col gap-4">
      <p>Last updated: October 2026</p>
      
      <h2 className="text-lg font-bold mt-2">1. Information We Collect</h2>
      <p>TopVent collects minimal information to provide our service. We do not sell user data to third parties.</p>
      
      <h2 className="text-lg font-bold mt-2">2. Cookies</h2>
      <p>We use cookies to enhance your browsing experience. Google AdSense may use cookies to serve personalized ads.</p>
      
      <h2 className="text-lg font-bold mt-2">3. Third-Party Services</h2>
      <p>We use Google AdSense, Amazon Affiliate Program, and Vercel for hosting. These services have their own privacy policies.</p>
      
      <h2 className="text-lg font-bold mt-2">4. Affiliate Disclosure</h2>
      <p>TopVent is a participant in the Amazon Services LLC Associates Program. We earn commissions from qualifying purchases at no extra cost to you.</p>
      
      <h2 className="text-lg font-bold mt-2">5. Contact</h2>
      <p>For privacy concerns, email: privacy@topvent.com</p>
    </div>
  </div>
);

// About Us
export const AboutView: React.FC = () => (
  <div className="w-full flex flex-col pb-20 px-4 pt-6">
    <h1 className="text-2xl font-bold mb-4">About TopVent</h1>
    <div className="text-sm text-slate-700 dark:text-purple-100 leading-relaxed flex flex-col gap-4">
      <p>TopVent is your destination for hand-curated luxury fashion finds at unbeatable prices.</p>
      <p>We partner with Amazon India to bring you the best deals on Men's, Women's, Unisex clothing, and Coffee Mugs.</p>
      <h2 className="text-lg font-bold mt-2">Our Mission</h2>
      <p>To make premium fashion accessible to everyone through verified deals and honest curation.</p>
    </div>
  </div>
);

// Contact
export const ContactView: React.FC = () => (
  <div className="w-full flex flex-col pb-20 px-4 pt-6">
    <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
    <div className="text-sm text-slate-700 dark:text-purple-100 leading-relaxed flex flex-col gap-4">
      <p>Have questions or suggestions? We'd love to hear from you!</p>
      <div className="bg-slate-100 dark:bg-purple-950/40 rounded-2xl p-4 flex flex-col gap-2">
        <p><strong>Email:</strong> hello@topvent.com</p>
        <p><strong>WhatsApp:</strong> +91 98765 43210</p>
        <p><strong>Response Time:</strong> Within 24 hours</p>
      </div>
    </div>
  </div>
);