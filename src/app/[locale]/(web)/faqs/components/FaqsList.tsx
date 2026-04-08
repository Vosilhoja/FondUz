"use client";

import { Container } from "@/src/components/ui/Container";
import { Accordion } from "@/src/components/ui/Accordion";
import { MotionViewport } from "@/src/components/ui/MotionViewport";

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  items: FAQItem[];
};

export function FaqsList({ items }: Props) {
  return (
    <Container className="pb-16 md:pb-24">
      <MotionViewport
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-4xl"
      >
        <Accordion items={items} />
      </MotionViewport>
    </Container>
  );
}
