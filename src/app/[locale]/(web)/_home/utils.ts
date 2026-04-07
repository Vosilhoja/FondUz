import { faqs } from "@/src/features/faqs/data/faqs";
import { news } from "@/src/features/news/data/news";
import type { HomeFaqItem, HomeNewsCard } from "./types";

export function getHomePreviewNews(): HomeNewsCard[] {
  return news.slice(0, 6);
}

export function getHomePreviewFaqs(): HomeFaqItem[] {
  return faqs.slice(0, 4);
}
