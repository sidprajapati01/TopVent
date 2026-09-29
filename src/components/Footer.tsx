import Link from "next/link";
import { BrandLockup, Wordmark } from "@/components/Logo";
import { AFFILIATE_DISCLOSURE, BRAND } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-20 bg-[#0d0018] text-white">
      <div className="h-px bg-gradient-to-r from-transparent via-[#ff6a00] to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <BrandLockup />
          <p className="mt-4 max-w-xs font-display text-xl italic text-white/80">
            Elevate your everyday, Timeless style.
          </p>
          <p className="mt-3 text-sm text-white/50">{BRAND.email}</p>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff8a1f]">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {[
              ["/", "Home"],
              ["/men", "Men"],
              ["/women", "Women"],
              ["/jewellery", "Jewellery"],
              ["/accessories", "Accessories"],
              ["/deals", "Deals"],
              ["/trending", "Trending"],
              ["/about", "About"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="hover:text-[#ff8a1f]">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff8a1f]">Customer</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {[
              ["/help", "Help"],
              ["/privacy", "Privacy Policy"],
              ["/terms", "Terms & Conditions"],
              ["/affiliate-disclosure", "Affiliate Disclosure"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="hover:text-[#ff8a1f]">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff8a1f]">Connect</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              <a href={BRAND.instagram} target="_blank" rel="noreferrer" className="hover:text-[#ff8a1f]">
                Instagram {BRAND.instagramHandle}
              </a>
            </li>
            <li>
              <a href={BRAND.whatsappMen} target="_blank" rel="noreferrer" className="hover:text-[#ff8a1f]">
                Men&apos;s WhatsApp Channel
              </a>
            </li>
            <li>
              <a href={BRAND.whatsappWomen} target="_blank" rel="noreferrer" className="hover:text-[#ff8a1f]">
                Women&apos;s WhatsApp Channel
              </a>
            </li>
          </ul>
          <Wordmark className="mt-6 text-lg opacity-80" />
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-white/45">
        <p>{AFFILIATE_DISCLOSURE}</p>
        <p className="mt-2">© {new Date().getFullYear()} TopVent. All rights reserved.</p>
      </div>
    </footer>
  );
}
