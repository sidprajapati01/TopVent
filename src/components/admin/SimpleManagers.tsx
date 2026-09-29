"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export function CategoryManager({
  rows,
}: {
  rows: { id: string; name: string; slug: string; description: string | null }[];
}) {
  const router = useRouter();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    await fetch("/api/admin/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: fd.get("name"),
        slug: fd.get("slug"),
        description: fd.get("description"),
        imageUrl: fd.get("imageUrl"),
        featured: true,
      }),
    });
    e.currentTarget.reset();
    router.refresh();
  }

  return (
    <>
      <form onSubmit={onSubmit} className="mt-6 grid gap-3 rounded-3xl bg-white p-6 md:grid-cols-2">
        <input name="name" required placeholder="Name" className="rounded-2xl border px-4 py-3" />
        <input name="slug" placeholder="slug" className="rounded-2xl border px-4 py-3" />
        <input name="description" placeholder="Description" className="rounded-2xl border px-4 py-3 md:col-span-2" />
        <input name="imageUrl" placeholder="Image URL" className="rounded-2xl border px-4 py-3 md:col-span-2" />
        <button className="btn-orange rounded-full px-5 py-2 text-sm">Add category</button>
      </form>
      <div className="mt-6 overflow-hidden rounded-3xl bg-white">
        {rows.map((c) => (
          <div key={c.id} className="flex items-center justify-between border-b px-4 py-3 last:border-0">
            <div>
              <p className="font-semibold">{c.name}</p>
              <p className="text-xs text-[#8a7f76]">{c.slug}</p>
            </div>
            <button
              onClick={async () => {
                await fetch("/api/admin/categories", {
                  method: "DELETE",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ id: c.id }),
                });
                router.refresh();
              }}
              className="text-sm text-rose-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export function BannerManager({
  rows,
}: {
  rows: { id: string; title: string; subtitle: string | null; isActive: boolean; ctaLink: string | null }[];
}) {
  const router = useRouter();
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    await fetch("/api/admin/banners", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: fd.get("title"),
        subtitle: fd.get("subtitle"),
        imageUrl: fd.get("imageUrl"),
        ctaText: fd.get("ctaText"),
        ctaLink: fd.get("ctaLink"),
      }),
    });
    e.currentTarget.reset();
    router.refresh();
  }
  return (
    <>
      <form onSubmit={onSubmit} className="mt-6 grid gap-3 rounded-3xl bg-white p-6">
        <input name="title" required placeholder="Title" className="rounded-2xl border px-4 py-3" />
        <input name="subtitle" placeholder="Subtitle" className="rounded-2xl border px-4 py-3" />
        <input name="imageUrl" placeholder="Image URL" className="rounded-2xl border px-4 py-3" />
        <div className="grid gap-3 md:grid-cols-2">
          <input name="ctaText" placeholder="CTA text" className="rounded-2xl border px-4 py-3" />
          <input name="ctaLink" placeholder="CTA link" className="rounded-2xl border px-4 py-3" />
        </div>
        <button className="btn-orange w-fit rounded-full px-5 py-2 text-sm">Add banner</button>
      </form>
      <div className="mt-6 overflow-hidden rounded-3xl bg-white">
        {rows.map((b) => (
          <div key={b.id} className="flex items-center justify-between border-b px-4 py-3">
            <div>
              <p className="font-semibold">{b.title}</p>
              <p className="text-xs text-[#8a7f76]">{b.subtitle}</p>
            </div>
            <div className="flex gap-3 text-sm">
              <button
                onClick={async () => {
                  await fetch("/api/admin/banners", {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ id: b.id, isActive: !b.isActive }),
                  });
                  router.refresh();
                }}
              >
                {b.isActive ? "Active" : "Off"}
              </button>
              <button
                className="text-rose-600"
                onClick={async () => {
                  await fetch("/api/admin/banners", {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ id: b.id }),
                  });
                  router.refresh();
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export function UserManager({
  rows,
}: {
  rows: { id: string; name: string; email: string; role: string }[];
}) {
  const router = useRouter();
  return (
    <div className="mt-6 overflow-hidden rounded-3xl bg-white">
      {rows.map((u) => (
        <div key={u.id} className="flex flex-wrap items-center justify-between gap-3 border-b px-4 py-3">
          <div>
            <p className="font-semibold">{u.name}</p>
            <p className="text-xs text-[#8a7f76]">{u.email}</p>
          </div>
          <div className="flex gap-3 text-sm">
            <select
              defaultValue={u.role}
              onChange={async (e) => {
                await fetch("/api/admin/users", {
                  method: "PATCH",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ id: u.id, role: e.target.value }),
                });
                router.refresh();
              }}
              className="rounded-full border px-3 py-1"
            >
              <option value="user">user</option>
              <option value="admin">admin</option>
            </select>
            <button
              className="text-rose-600"
              onClick={async () => {
                await fetch("/api/admin/users", {
                  method: "DELETE",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ id: u.id }),
                });
                router.refresh();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
