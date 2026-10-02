import { BlogPost } from '../types';

export const BLOG_DATA: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'best-mens-casual-shirts-under-500',
    title: "Top 5 Men's Casual Shirts Under ₹500 (2026)",
    excerpt: "Discover budget-friendly shirts with premium fit and fabric — perfect for office, travel and everyday wear.",
    category: 'men',
    coverImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    publishedAt: '2026-10-01',
    readTime: '5 min',
    author: 'TopVent Team',
    content: `
      <h2>Introduction</h2>
      <p>Looking for premium shirts under ₹500? We've curated the best budget-friendly options...</p>
      
      <h2>1. DEELMO Cotton Blend Shirt — ₹495</h2>
      <p>Rating: 4.5 ★ (1,621 reviews)</p>
      <p>This shirt features dual flap pockets, breathable cotton blend, and a comfortable regular fit...</p>
      
      <h2>2. THE INDIAN GARAGE Checked Shirt — ₹454</h2>
      <p>Rating: 3.9 ★ (1,896 reviews)</p>
      
      <h2>Conclusion</h2>
      <p>All these shirts offer excellent value for money. Click BUY NOW to check current prices...</p>
    `,
    relatedProducts: ['prod-deelmo-cotton-blend-shirt', 'prod-indian-garage-checked-shirt'],
  },
  // ⭐ More articles add કરો (15-20 total for AdSense)
];