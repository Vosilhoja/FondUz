"use client";

import { useState } from "react";
import { faqs as initialFaqs } from "@/src/features/faqs/data/faqs";

export default function AdminFaqsPage() {
  const [data, setData] = useState(initialFaqs);

  const handleDelete = (index: number) => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl font-bold text-foreground">FAQ Control</h1>
          <p className="mt-1 text-sm text-muted-foreground">Manage frequently asked questions and answers.</p>
        </div>
        <button className="rounded-2xl bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105">
          + Add FAQ
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {data.slice(0, 8).map((item, i) => (
          <div 
            key={i}
            className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-bold text-foreground">{item.question}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{item.answer}</p>
              </div>
              <div className="flex flex-col gap-2">
                <button className="rounded-xl border border-border px-3 py-1.5 text-xs font-bold text-foreground transition-all hover:bg-muted">
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(i)}
                  className="rounded-xl border border-red-500/20 px-3 py-1.5 text-xs font-bold text-red-500 transition-all hover:bg-red-500/10"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-muted-foreground">Showing latest 8 items.</p>
    </div>
  );
}
