import React from 'react';
import { BlogPost, Product } from '../types';
import { ProductCard } from '../components/ProductCard';

interface ArticleViewProps {
  post: BlogPost;
  products: Product[];
  onBack: () => void;
  onSelectProduct: (p: Product) => void;
  wishlist: string[];
  onToggleWishlist: (productId: string, e: React.MouseEvent) => void;
  onBuyNow?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  post,
  products,
  onBack,
  onSelectProduct,
  wishlist,
  onToggleWishlist,
  onBuyNow,
  onAddToCart,
}) => {
  const relatedProducts = products.filter(p =>
    post.relatedProducts?.includes(p.id)
  );

  return (
    <div className="w-full flex flex-col pb-20">
      {/* Back button */}
      <button
        onClick={onBack}
        className="p-4 text-left flex items-center gap-1 text-orange-500 font-bold text-sm"
      >
        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
        Back to Blog
      </button>

      {/* Cover */}
      <img
        src={post.coverImage}
        alt={post.title}
        className="w-full h-64 object-cover"
      />

      {/* Content */}
      <article className="px-4 py-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">{post.title}</h1>
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <span>By {post.author}</span>
          <span>•</span>
          <span>{post.publishedAt}</span>
          <span>•</span>
          <span>{post.readTime} read</span>
        </div>

        {/* ⭐ AdSense Slot 1 */}
        <div id="adsense-article-top" className="my-6 min-h-[90px]" />

        {/* Article HTML */}
        <div
          className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-purple-100 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* ⭐ AdSense Slot 2 */}
        <div id="adsense-article-middle" className="my-6 min-h-[90px]" />

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">🛍️ Products in This Article</h2>
            <div className="grid grid-cols-2 gap-4">
              {relatedProducts.map(p => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onSelect={onSelectProduct}
                  isWishlisted={wishlist.includes(p.id)}
                  onToggleWishlist={onToggleWishlist}
                  onBuyNow={onBuyNow}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          </div>
        )}

        {/* ⭐ AdSense Slot 3 */}
        <div id="adsense-article-bottom" className="my-6 min-h-[90px]" />
      </article>
    </div>
  );
};