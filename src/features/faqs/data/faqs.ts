import type { FAQItem } from "@/src/types/domain";

const loremQ = "Lorem ipsum dolor sit amet consectetur adipiscing elit";
const loremA =
  "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export const faqs: FAQItem[] = Array.from({ length: 50 }).map((_, index) => ({
  question: `${loremQ} ${index + 1}?`,
  answer: `${loremA} ${loremA}`
}));
