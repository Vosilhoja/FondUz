import { Container } from "@/src/components/ui/Container";
import { Accordion } from "@/src/components/ui/Accordion";

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
      <div className="mx-auto max-w-4xl">
        <Accordion items={items} />
      </div>
    </Container>
  );
}
