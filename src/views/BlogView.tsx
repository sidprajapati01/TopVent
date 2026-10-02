import React from 'react';
import { BLOG_DATA } from '../data/blogData';
import { BlogPost } from '../types';

interface BlogViewProps {
  onSelectPost: (post: BlogPost) => void;
}

export const BlogView: React.FC<BlogViewProps> = ({ onSelectPost }) => {
  return (
    <div className="w-full flex flex-col pb-20 px-4 pt-4">
      <div className="flex items-center gap-2 mb-4">
        <span className="material-symbols-outlined text-orange-500">article</span>
        <h1 className="text-2xl font-bold">Fashion Guides</h1>
      </div>

      <div className="flex flex-col gap-4">
        {BLOG_DATA.map(post => (
          <div
            key={post.id}
            onClick={() => onSelectPost(post)}
            className="bg-white dark:bg-[#1a0833] rounded-2xl overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition"
          >
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <span className="text-xs text-orange-500 font-bold uppercase">
                {post.category}
              </span>
              <h2 className="font-bold text-lg mt-1">{post.title}</h2>
              <p className="text-sm text-gray-500 dark:text-purple-300/70 mt-1 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 mt-3 text-xs text-gray-400">
                <span>{post.publishedAt}</span>
                <span>•</span>
                <span>{post.readTime} read</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};