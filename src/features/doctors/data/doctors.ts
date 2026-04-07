import type { Doctor } from "@/src/types/domain";

const roles = ["Cardiologist", "Neurosurgeon", "Surgeon", "Therapist", "Pediatrician", "Radiologist"];
const lorem =
  "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export const doctors: Doctor[] = Array.from({ length: 20 }).map((_, index) => ({
  id: String(index + 1),
  name: `Doctor ${index + 1} Lorem`,
  profession: roles[index % roles.length],
  email: `doctor${index + 1}@example.com`,
  phone: `+998 90 ${String(100 + index).padStart(3, "0")} ${String(10 + (index % 90)).padStart(2, "0")} ${String(10 + (index % 90)).padStart(2, "0")}`,
  bio: `${lorem} ${lorem}`,
  image: "/placeholders/doctor.svg",
}));
