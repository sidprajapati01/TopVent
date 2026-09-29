"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Row = {
  id: string;
  name: string;
  brand: string;
  priceLabel: string;
  categorySlug: string;
  dataSource: string;
  isFeatured: boolean;
  isTrending: boolean;
  isDeal: boolean;
  clickCount: number;
};

export function AdminProductTable({ rows }: { rows: Row[] }) {
  const router = useRouter();
  const [busy, setBusy] = useState<string | null>(null);

  async function patch(id: string, data: Record<string, unknown>) {
    setBusy(id);
    await fetch("/api/admin/products", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...data }),
    });
    setBusy(null);
    router.refresh();
  }

  async function remove(id: string) {
    if (!confirm("Delete this product?")) return;
    setBusy(id);
    await fetch("/api/admin/products", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setBusy(null);
    router.refresh();
  }

  return (
    <div className="mt-6 overflow-x-auto rounded-3xl bg-white">
      <table className="w-full min-w-[720px] text-sm">
        <thead className="bg-[#160428] text-left text-white">
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Brand</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">Flags</th>
            <th className="px-4 py-3">Clicks</th>
            <th className="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className="border-t">
              <td className="px-4 py-3">
                <div className="font-semibold">{r.name}</div>
                <div className="text-xs text-[#8a7f76]">
                  {r.categorySlug} · {r.dataSource}
                </div>
              </td>
              <td className="px-4 py-3">{r.brand}</td>
              <td className="px-4 py-3">{r.priceLabel}</td>
              <td className="px-4 py-3">
                <div className="flex flex-wrap gap-1">
                  <Flag active={r.isFeatured} label="Featured" onClick={() => patch(r.id, { isFeatured: !r.isFeatured })} />
                  <Flag active={r.isTrending} label="Trending" onClick={() => patch(r.id, { isTrending: !r.isTrending })} />
                  <Flag active={r.isDeal} label="Deal" onClick={() => patch(r.id, { isDeal: !r.isDeal })} />
                </div>
              </td>
              <td className="px-4 py-3">{r.clickCount}</td>
              <td className="px-4 py-3 text-right">
                <Link href={`/admin/products/${r.id}`} className="mr-3 text-[#ff6a00]">
                  Edit
                </Link>
                <button disabled={busy === r.id} onClick={() => remove(r.id)} className="text-rose-600">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Flag({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${active ? "bg-[#ff6a00] text-white" : "bg-[#f3eee8] text-[#8a7f76]"}`}
    >
      {label}
    </button>
  );
}
