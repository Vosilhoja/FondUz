import { Container } from "@/src/components/ui/Container";
import { SectionHeader } from "@/src/components/ui/SectionHeader";

type Props = {
  title: string;
  subtitle: string;
};

export function FaqsHero({ title, subtitle }: Props) {
  return (
    <Container className="pt-12 md:pt-16">
      <SectionHeader title={title} subtitle={subtitle} />
    </Container>
  );
}
