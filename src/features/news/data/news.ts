import type { NewsItem } from "@/src/types/domain";

const lorem =
  "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

export const news: NewsItem[] = Array.from({ length: 24 }).map((_, index) => ({
  slug: `medical-update-${index + 1}`,
  title: `Medical Update ${index + 1} Lorem Ipsum`,
  subtitle: `${lorem}.`,
  date: `2026-04-${String((index % 28) + 1).padStart(2, "0")}`,
  image: "/placeholders/news.svg",
  content: [
    `${lorem} ${lorem}.`,
    `${lorem} ${lorem}.`,
    `${lorem} ${lorem}.`,
  ],
}));
