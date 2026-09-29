"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { AFFILIATE_DISCLOSURE, BRAND, FEATURED_CATEGORIES } from "@/lib/constants";
import { useShop } from "@/components/ShopProvider";

export function Hero() {
  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/hero-fashion.jpg" alt="" className="kenburns absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0018]/85 via-[#160428]/55 to-transparent" />
      <div className="absolute -left-10 top-20 h-40 w-40 rounded-full bg-[#ff6a00]/20 blur-3xl floaty" />
      <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-[#6b2d9a]/40 blur-3xl floaty" />
      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-28">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#ff8a1f]">TopVent Fashion</p>
        <h1 className="mt-4 max-w-2xl font-display text-5xl italic leading-[0.95] text-white md:text-7xl">
          Elevate Your Everyday
        </h1>
        <p className="mt-5 max-w-lg text-base text-white/75 md:text-lg">
          Discover timeless style, trending fashion and premium finds — all in one place.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/men" className="btn-orange orange-glow rounded-full px-6 py-3 text-sm">
            Explore Men&apos;s Fashion
          </Link>
          <Link
            href="/women"
            className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white hover:bg-white hover:text-[#160428]"
          >
            Explore Women&apos;s Fashion
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ff6a00]">Shop by world</p>
          <h2 className="font-display text-4xl italic text-[#160428] md:text-5xl">Fashion, curated.</h2>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {FEATURED_CATEGORIES.map((c) => (
          <Link key={c.slug} href={c.href} className="group relative aspect-[4/5] overflow-hidden rounded-3xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={c.image} alt={c.name} className="zoom-img h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0018]/80 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 font-display text-2xl italic text-white">{c.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function FollowTopVent() {
  return (
    <section className="tv-wave px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ff8a1f]">Follow TopVent</p>
        <h2 className="mt-2 font-display text-4xl italic md:text-5xl">Stay close to the edit.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <a
            href={BRAND.whatsappMen}
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-[#ff6a00]/50 hover:bg-white/10"
          >
            <p className="text-xs uppercase tracking-widest text-[#25D366]">WhatsApp</p>
            <h3 className="mt-2 font-display text-3xl italic">Men&apos;s Fashion Updates</h3>
            <p className="mt-2 text-sm text-white/70">Drops, fits and menswear finds — straight to the channel.</p>
            <span className="mt-6 inline-block rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-[#073b16]">
              Join Men&apos;s Channel
            </span>
          </a>
          <a
            href={BRAND.whatsappWomen}
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-[#ff6a00]/50 hover:bg-white/10"
          >
            <p className="text-xs uppercase tracking-widest text-[#25D366]">WhatsApp</p>
            <h3 className="mt-2 font-display text-3xl italic">Women&apos;s Fashion Updates</h3>
            <p className="mt-2 text-sm text-white/70">Silhouettes, jewellery and seasonal dressing, daily.</p>
            <span className="mt-6 inline-block rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-[#073b16]">
              Join Women&apos;s Channel
            </span>
          </a>
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#ff6a00]/30 to-[#6b2d9a]/40 p-6 transition hover:border-[#ff6a00]"
          >
            <p className="text-xs uppercase tracking-widest text-[#ff8a1f]">Instagram</p>
            <h3 className="mt-2 font-display text-3xl italic">Follow {BRAND.instagramHandle}</h3>
            <p className="mt-2 text-sm text-white/70">Lookbooks, stories and the TopVent point of view.</p>
            <span className="btn-orange mt-6 inline-block rounded-full px-4 py-2 text-xs">Follow @topvent.co</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function Newsletter() {
  const { toast } = useShop();
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setBusy(false);
    if (res.ok) {
      toast("You are on the list.");
      setEmail("");
    } else {
      const data = await res.json().catch(() => ({}));
      toast(data.error || "Could not subscribe", "err");
    }
  }

  return (
    <section className="relative overflow-hidden bg-[#160428] px-6 py-20 text-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/og-cover.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-[#160428]/70" />
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl italic md:text-6xl">Stay Ahead of the Trend</h2>
        <p className="mt-4 text-white/70">
          Get the latest fashion finds, trending products and exclusive updates from TopVent.
        </p>
        <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white placeholder:text-white/50"
          />
          <button disabled={busy} className="btn-orange rounded-full px-8 py-3 text-sm">
            {busy ? "Subscribing…" : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}

export function DisclosureBar() {
  return (
    <p className="mx-auto max-w-7xl px-6 pb-6 text-center text-[11px] leading-relaxed text-[#8a7f76]">
      {AFFILIATE_DISCLOSURE} {BRAND.name} is an independent fashion discovery platform and is not Amazon. Catalog items
      are demo data until live Amazon feeds are connected. Prices are dynamic and may change on Amazon.
    </p>
  );
}

export function PageHero({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <section className="relative isolate h-[42vh] min-h-[280px] overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt="" className="kenburns absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[#0d0018]/60" />
      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-10">
        <h1 className="font-display text-5xl italic text-white md:text-6xl">{title}</h1>
        <p className="mt-2 max-w-xl text-white/75">{subtitle}</p>
      </div>
    </section>
  );
}
