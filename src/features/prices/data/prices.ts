import type { PriceItem } from "@/src/types/domain";

const procedures = [
  "Heart Valve Installation",
  "Coronary Bypass Surgery",
  "Neurosurgical Consultation",
  "Joint Replacement",
  "Spine Stabilization Procedure",
  "Pediatric Diagnostics Panel",
  "Advanced MRI Screening",
  "Therapeutic Care Session"
];

export const prices: PriceItem[] = Array.from({ length: 40 }).map((_, index) => {
  const base = 120 + index * 9;
  const procedure = procedures[index % procedures.length];
  return {
    id: `p${index + 1}`,
    title: `${procedure} Lorem Ipsum ${index + 1}`,
    price: `$${base}.00`,
    includes: [
      "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse."
    ]
  };
});
