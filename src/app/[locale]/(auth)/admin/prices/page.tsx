"use client";

import { useState } from "react";

export default function AdminPricesPage() {
  const [data, setData] = useState([
    { id: 1, name: "Consultation", price: "$50", billing: "One-time" },
    { id: 2, name: "Full Checkup", price: "$250", billing: "Per session" },
    { id: 3, name: "Lab Tests", price: "$120", billing: "Variable" },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl font-bold text-foreground">Pricing Control</h1>
          <p className="mt-1 text-sm text-muted-foreground">Manage service costs and billing descriptions.</p>
        </div>
        <button className="rounded-2xl bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105">
          + Add Price Item
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {data.map((item) => (
          <div 
            key={item.id}
            className="group flex flex-col items-start justify-between gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md sm:flex-row sm:items-center"
          >
            <div>
              <h3 className="font-bold text-foreground">{item.name}</h3>
              <p className="text-sm text-muted-foreground">{item.billing}</p>
            </div>
            <div className="flex items-center gap-6 self-end sm:self-auto">
              <span className="text-2xl font-black text-primary">{item.price}</span>
              <div className="flex gap-2">
                <button className="rounded-xl border border-border px-4 py-2 text-xs font-bold transition-all hover:bg-muted">
                  Edit
                </button>
                <button className="rounded-xl border border-border px-4 py-2 text-xs font-bold transition-all hover:bg-red-500/10 text-red-500 hover:border-red-500/20">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
