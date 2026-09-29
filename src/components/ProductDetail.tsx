"use client";

import { useEffect, useState } from "react";
import { useShop } from "@/components/ShopProvider";
import type { Product } from "@/db/schema";

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);
  const src = images[active] || "/brand/og-cover.jpg";
  return (
    <div>
      <div className="overflow-hidden rounded-3xl bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={name}
          className="aspect-square w-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "/brand/og-cover.jpg";
          }}
        />
      </div>
      <div className="mt-3 flex gap-2 overflow-x-auto">
        {images.map((img, i) => (
          <button
            key={img + i}
            onClick={() => setActive(i)}
            className={`h-20 w-20 overflow-hidden rounded-2xl border-2 ${
              i === active ? "border-[#ff6a00]" : "border-transparent"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export function ProductActions({ product }: { product: Product }) {
  const { toggleWishlist, wishlist, addToCart, markViewed, toast } = useShop();
  const saved = wishlist.includes(product.id);

  useEffect(() => {
    markViewed(product.id);
    fetch("/api/viewed", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: product.id }),
    }).catch(() => {});
  }, [product.id, markViewed]);

  async function share() {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({ title: product.name, url }).catch(() => {});
    } else {
      await navigator.clipboard.writeText(url);
      toast("Link copied");
    }
  }

  return (
    <div className="mt-8 flex flex-col gap-3">
      <a
        href={`/api/out/${product.id}`}
        target="_blank"
        rel="noreferrer sponsored"
        className="btn-orange orange-glow pulse-ring rounded-full py-4 text-center text-sm"
      >
        Buy on Amazon
      </a>
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => toggleWishlist(product.id, product.name)}
          className={`rounded-full py-3 text-sm font-bold ${
            saved ? "bg-[#ff6a00] text-white" : "bg-white text-[#160428]"
          }`}
        >
          {saved ? "Saved to wishlist" : "Add to wishlist"}
        </button>
        <button
          onClick={() => addToCart(product.id, product.name)}
          className="rounded-full bg-white py-3 text-sm font-bold text-[#160428]"
        >
          Save to bag
        </button>
      </div>
      <button onClick={share} className="text-sm font-semibold text-[#ff6a00]">
        Share this piece
      </button>
    </div>
  );
}
