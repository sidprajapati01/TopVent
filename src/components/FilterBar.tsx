"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PRICE_FILTERS, SORT_OPTIONS } from "@/lib/constants";

export function FilterBar() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  function setParam(key: string, value: string) {
    const next = new URLSearchParams(params.toString());
    if (!value) next.delete(key);
    else next.set(key, value);
    router.push(`${pathname}?${next.toString()}`);
  }

  return (
    <div className="flex flex-wrap gap-2">
      {PRICE_FILTERS.map((f) => (
        <button
          key={f.id}
          onClick={() => setParam("price", params.get("price") === f.id ? "" : f.id)}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
            params.get("price") === f.id ? "bg-[#ff6a00] text-white" : "bg-white text-[#160428]"
          }`}
        >
          {f.label}
        </button>
      ))}
      {["trending", "bestseller", "new"].map((flag) => (
        <button
          key={flag}
          onClick={() => setParam("flag", params.get("flag") === flag ? "" : flag)}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold capitalize ${
            params.get("flag") === flag ? "bg-[#160428] text-white" : "bg-white text-[#160428]"
          }`}
        >
          {flag === "bestseller" ? "Best Sellers" : flag === "new" ? "New Arrivals" : "Trending"}
        </button>
      ))}
      <select
        value={params.get("sort") || "popular"}
        onChange={(e) => setParam("sort", e.target.value)}
        className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#160428]"
      >
        {SORT_OPTIONS.map((s) => (
          <option key={s.id} value={s.id}>
            {s.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function priceFromParam(id: string | undefined) {
  const f = PRICE_FILTERS.find((x) => x.id === id);
  if (!f) return {};
  return { minPrice: f.min, maxPrice: f.max ?? undefined };
}
