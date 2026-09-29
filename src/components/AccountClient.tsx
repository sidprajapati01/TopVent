"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useShop } from "@/components/ShopProvider";

export function LogoutButton() {
  const router = useRouter();
  const { refreshUser } = useShop();
  async function out() {
    await fetch("/api/auth/logout", { method: "POST" });
    await refreshUser();
    router.push("/");
    router.refresh();
  }
  return (
    <button onClick={out} className="rounded-full border border-[#160428]/20 px-5 py-2 text-sm font-bold">
      Logout
    </button>
  );
}

export function PreferencesForm({ initial }: { initial: { gender?: string; priceAlerts?: boolean } }) {
  const { toast } = useShop();
  const [gender, setGender] = useState(initial.gender || "");
  const [priceAlerts, setPriceAlerts] = useState(!!initial.priceAlerts);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/account", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ preferences: { gender, priceAlerts } }),
    });
    if (res.ok) toast("Preferences saved");
    else toast("Could not save", "err");
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-white p-6">
      <h2 className="font-display text-2xl italic">Preferences</h2>
      <label className="mt-4 block text-sm font-semibold">Fashion focus</label>
      <select value={gender} onChange={(e) => setGender(e.target.value)} className="mt-1 w-full rounded-2xl border px-3 py-2">
        <option value="">No preference</option>
        <option value="men">Men&apos;s</option>
        <option value="women">Women&apos;s</option>
      </select>
      <label className="mt-4 flex items-center gap-2 text-sm">
        <input type="checkbox" checked={priceAlerts} onChange={(e) => setPriceAlerts(e.target.checked)} />
        Notify me about catalog price changes when supported
      </label>
      <button className="btn-orange mt-4 rounded-full px-5 py-2 text-sm">Save</button>
    </form>
  );
}
