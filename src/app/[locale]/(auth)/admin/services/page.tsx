"use client";

import { useState } from "react";

export default function AdminServicesPage() {
  const [data, setData] = useState([
    { id: 1, name: "Cardiology", funds: 8 },
    { id: 2, name: "Neurology", funds: 5 },
    { id: 3, name: "Orthopedics", funds: 12 },
    { id: 4, name: "Pediatrics", funds: 6 },
    { id: 5, name: "Diagnostics", funds: 10 },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl font-bold text-foreground">Service Management</h1>
          <p className="mt-1 text-sm text-muted-foreground">Control medical directions and partner fund assignments.</p>
        </div>
        <button className="rounded-2xl bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105">
          + Add Service
        </button>
      </div>

      <div className="rounded-3xl border border-border bg-card shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Direction Name</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Assigned Funds</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {data.map((item) => (
              <tr key={item.id} className="group transition-colors hover:bg-muted/20">
                <td className="px-6 py-4 font-bold text-foreground">{item.name}</td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary ring-1 ring-primary/20">
                    {item.funds} Funds Linked
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="rounded-xl border border-border px-3 py-1.5 text-xs font-bold transition-all hover:bg-muted">
                      Manage Funds
                    </button>
                    <button className="rounded-xl border border-border px-3 py-1.5 text-xs font-bold transition-all hover:bg-muted text-red-500 hover:bg-red-500/10 hover:border-red-500/20">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
