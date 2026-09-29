import { Suspense } from "react";
import Link from "next/link";
import { ProductGrid } from "@/components/ProductCard";
import { DisclosureBar, PageHero } from "@/components/sections";
import { FilterBar } from "@/components/FilterBar";
import { searchProducts, type ProductQuery } from "@/lib/data";

export async function ShopView({
  title,
  subtitle,
  image,
  query,
  subs,
}: {
  title: string;
  subtitle: string;
  image: string;
  query: ProductQuery;
  subs?: { href: string; label: string }[];
}) {
  const { products, total } = await searchProducts({ ...query, limit: 48 });
  return (
    <>
      <PageHero title={title} subtitle={subtitle} image={image} />
      {subs && subs.length > 0 && (
        <div className="no-scrollbar flex gap-2 overflow-x-auto bg-white px-6 py-4">
          {subs.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="shrink-0 rounded-full border border-[#160428]/10 px-4 py-2 text-sm text-[#160428] hover:border-[#ff6a00] hover:text-[#ff6a00]"
            >
              {s.label}
            </Link>
          ))}
        </div>
      )}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-[#8a7f76]">{total} pieces in this edit</p>
        </div>
        <Suspense fallback={<div className="skeleton h-9 rounded-full" />}>
          <FilterBar />
        </Suspense>
        <div className="mt-6">
          <ProductGrid products={products} />
        </div>
      </section>
      <DisclosureBar />
    </>
  );
}
