"use client";

import { useState } from "react";
import { news as initialNews } from "@/src/features/news/data/news";

export default function AdminNewsPage() {
  const [data, setData] = useState(initialNews);

  const handleDelete = (slug: string) => {
    setData(data.filter(item => item.slug !== slug));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl font-bold text-foreground">News Content Control</h1>
          <p className="mt-1 text-sm text-muted-foreground">Manage all medical updates and announcements.</p>
        </div>
        <button className="rounded-2xl bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105">
          + Add Article
        </button>
      </div>

      <div className="rounded-3xl border border-border bg-card shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Title</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Date</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {data.slice(0, 10).map((item) => (
              <tr key={item.slug} className="group transition-colors hover:bg-muted/20">
                <td className="px-6 py-4">
                  <p className="font-bold text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground truncate max-w-xs">{item.subtitle}</p>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{item.date}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="rounded-xl border border-border px-3 py-1.5 text-xs font-bold text-foreground transition-all hover:bg-muted">
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(item.slug)}
                      className="rounded-xl border border-red-500/20 px-3 py-1.5 text-xs font-bold text-red-500 transition-all hover:bg-red-500/10"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-center text-xs text-muted-foreground">Showing latest 10 items. Load more functionality in development.</p>
    </div>
  );
}
