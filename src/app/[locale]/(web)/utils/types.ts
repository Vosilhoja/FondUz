import type { FAQItem, NewsItem } from "@/src/types/domain";

export type HomeNewsCard = Pick<NewsItem, "slug" | "title" | "subtitle" | "image">;
export type HomeFaqItem = FAQItem;
