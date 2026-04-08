import { Accordion } from "@/src/components/ui/Accordion";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import type { HomeFaqItem } from "../utils/types";

type Props = {
  title: string;
  subtitle: string;
  items: HomeFaqItem[];
  viewAll: string;
};

export function FaqPreviewSection({ title, subtitle, items, viewAll }: Props) {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <Accordion title={title} subtitle={subtitle} items={items} />
        <div className="mt-8 text-center">
          <Button href="/faqs">{viewAll}</Button>
        </div>
      </Container>
    </section>
  );
}
