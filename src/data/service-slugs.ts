export const SERVICE_SLUGS = [
  "heart",
  "neurology",
  "orthopedics",
  "pediatrics",
  "diagnostics",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export function isServiceSlug(s: string): s is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(s);
}
