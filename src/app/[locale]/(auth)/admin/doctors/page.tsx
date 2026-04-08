"use client";

import { useState } from "react";
import { Link } from "@/src/i18n/routing";

export default function AdminDoctorsPage() {
  const [data, setData] = useState([
    { id: 1, name: "Dr. Sherzod Olimov", specialty: "Cardiologist", email: "sherzod@fond.uz" },
    { id: 2, name: "Dr. Malika Karimova", specialty: "Pediatrician", email: "malika@fond.uz" },
    { id: 3, name: "Dr. Jasur Mansurov", specialty: "Neurologist", email: "jasur@fond.uz" },
  ]);

  const handleDelete = (id: number) => {
    setData(data.filter(item => item.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl font-bold text-foreground">Doctor Management</h1>
          <p className="mt-1 text-sm text-muted-foreground">Manage specialist profiles and contact information.</p>
        </div>
        <button className="rounded-2xl bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105">
          + Add Doctor
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <div 
            key={item.id}
            className="group rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex flex-col items-center text-center">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                {item.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h3 className="mt-4 font-bold text-foreground">{item.name}</h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mt-1">{item.specialty}</p>
              <p className="mt-4 text-xs text-muted-foreground">{item.email}</p>
              
              <div className="mt-6 flex w-full gap-2">
                <button className="flex-1 rounded-xl border border-border py-2 text-xs font-bold transition-all hover:bg-muted">
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(item.id)}
                  className="flex-1 rounded-xl border border-red-500/20 py-2 text-xs font-bold text-red-500 transition-all hover:bg-red-500/10"
                >
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
