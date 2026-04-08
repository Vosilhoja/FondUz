import { motion } from "framer-motion";

export default function AdminDashboard() {
  const stats = [
    { label: "Total News", value: "24", change: "+2 this week" },
    { label: "FAQs", value: "50", change: "Updated yesterday" },
    { label: "Doctors", value: "12", change: "Stable" },
    { label: "Active Services", value: "5", change: "None pending" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl font-bold text-foreground">Welcome back, Admin</h1>
        <p className="mt-2 text-muted-foreground">Here is what is happening with FondUz today.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div 
            key={stat.label}
            className="group rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
          >
            <p className="text-sm font-semibold text-muted-foreground">{stat.label}</p>
            <p className="mt-2 text-3xl font-bold text-foreground">{stat.value}</p>
            <p className="mt-2 text-xs font-medium text-primary">{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
        <h3 className="font-serif text-xl font-bold text-foreground">Quick Actions</h3>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <button className="flex h-24 items-center justify-center rounded-2xl bg-primary/5 border border-primary/20 text-primary font-bold transition-all hover:bg-primary/10">
            Post New Update
          </button>
          <button className="flex h-24 items-center justify-center rounded-2xl bg-primary/5 border border-primary/20 text-primary font-bold transition-all hover:bg-primary/10">
            Edit FAQ list
          </button>
          <button className="flex h-24 items-center justify-center rounded-2xl bg-primary/5 border border-primary/20 text-primary font-bold transition-all hover:bg-primary/10">
            Manage Services
          </button>
        </div>
      </div>
    </div>
  );
}
