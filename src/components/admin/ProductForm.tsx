"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import type { Product } from "@/db/schema";

export function ProductForm({ product }: { product?: Product }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const split = (key: string) =>
      String(fd.get(key) || "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
    const payload = {
      id: product?.id,
      name: fd.get("name"),
      brand: fd.get("brand"),
      description: fd.get("description"),
      categorySlug: fd.get("categorySlug"),
      subcategory: fd.get("subcategory"),
      imageUrl: fd.get("imageUrl"),
      images: split("images"),
      features: split("features"),
      colors: split("colors"),
      sizes: split("sizes"),
      price: Number(fd.get("price")) * 100,
      originalPrice: fd.get("originalPrice") ? Number(fd.get("originalPrice")) * 100 : null,
      availability: fd.get("availability"),
      amazonUrl: fd.get("amazonUrl"),
      affiliateUrl: fd.get("affiliateUrl"),
      asin: fd.get("asin"),
      material: fd.get("material"),
      gender: fd.get("gender"),
      style: fd.get("style"),
      dataSource: fd.get("dataSource"),
      isFeatured: fd.get("isFeatured") === "on",
      isTrending: fd.get("isTrending") === "on",
      isBestSeller: fd.get("isBestSeller") === "on",
      isNewArrival: fd.get("isNewArrival") === "on",
      isDeal: fd.get("isDeal") === "on",
    };
    setBusy(true);
    setError("");
    const res = await fetch("/api/admin/products", {
      method: product ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setBusy(false);
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Save failed");
      return;
    }
    router.push("/admin/products");
    router.refresh();
  }

  const rupees = product ? product.price / 100 : 0;
  const original = product?.originalPrice ? product.originalPrice / 100 : "";

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-4 rounded-3xl bg-white p-6">
      {error && <p className="text-sm text-rose-600">{error}</p>}
      <input name="name" required defaultValue={product?.name} placeholder="Product name" className="rounded-2xl border px-4 py-3" />
      <div className="grid gap-4 md:grid-cols-2">
        <input name="brand" defaultValue={product?.brand} placeholder="Brand" className="rounded-2xl border px-4 py-3" />
        <input name="categorySlug" defaultValue={product?.categorySlug} placeholder="Category slug" className="rounded-2xl border px-4 py-3" />
        <input name="subcategory" defaultValue={product?.subcategory || ""} placeholder="Subcategory" className="rounded-2xl border px-4 py-3" />
        <input name="gender" defaultValue={product?.gender || "unisex"} placeholder="Gender" className="rounded-2xl border px-4 py-3" />
        <input name="style" defaultValue={product?.style || ""} placeholder="Style" className="rounded-2xl border px-4 py-3" />
        <input name="availability" defaultValue={product?.availability} placeholder="Availability" className="rounded-2xl border px-4 py-3" />
        <input name="price" type="number" step="1" required defaultValue={rupees || ""} placeholder="Price ₹" className="rounded-2xl border px-4 py-3" />
        <input name="originalPrice" type="number" step="1" defaultValue={original} placeholder="Original ₹" className="rounded-2xl border px-4 py-3" />
      </div>
      <textarea name="description" defaultValue={product?.description} placeholder="Description" rows={4} className="rounded-2xl border px-4 py-3" />
      <input name="imageUrl" defaultValue={product?.imageUrl} placeholder="Primary image URL" className="rounded-2xl border px-4 py-3" />
      <input name="images" defaultValue={(product?.images || []).join(", ")} placeholder="More images, comma separated" className="rounded-2xl border px-4 py-3" />
      <input name="features" defaultValue={(product?.features || []).join(", ")} placeholder="Features, comma separated" className="rounded-2xl border px-4 py-3" />
      <input name="colors" defaultValue={(product?.colors || []).join(", ")} placeholder="Colors" className="rounded-2xl border px-4 py-3" />
      <input name="sizes" defaultValue={(product?.sizes || []).join(", ")} placeholder="Sizes" className="rounded-2xl border px-4 py-3" />
      <input name="material" defaultValue={product?.material || ""} placeholder="Material" className="rounded-2xl border px-4 py-3" />
      <input name="amazonUrl" defaultValue={product?.amazonUrl || ""} placeholder="Amazon URL" className="rounded-2xl border px-4 py-3" />
      <input name="affiliateUrl" defaultValue={product?.affiliateUrl || ""} placeholder="Affiliate URL" className="rounded-2xl border px-4 py-3" />
      <input name="asin" defaultValue={product?.asin || ""} placeholder="ASIN (when available)" className="rounded-2xl border px-4 py-3" />
      <input name="dataSource" defaultValue={product?.dataSource || "demo"} placeholder="dataSource: demo | amazon" className="rounded-2xl border px-4 py-3" />
      <div className="flex flex-wrap gap-4 text-sm">
        {[
          ["isFeatured", "Featured", product?.isFeatured],
          ["isTrending", "Trending", product?.isTrending],
          ["isBestSeller", "Best seller", product?.isBestSeller],
          ["isNewArrival", "New arrival", product?.isNewArrival],
          ["isDeal", "Deal", product?.isDeal],
        ].map(([name, label, checked]) => (
          <label key={String(name)} className="flex items-center gap-2">
            <input type="checkbox" name={String(name)} defaultChecked={!!checked} />
            {label}
          </label>
        ))}
      </div>
      <button disabled={busy} className="btn-orange rounded-full px-6 py-3 text-sm">
        {busy ? "Saving…" : "Save product"}
      </button>
    </form>
  );
}
