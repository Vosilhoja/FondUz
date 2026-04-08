import { Container } from "@/src/components/ui/Container";
import { SectionHeader } from "@/src/components/ui/SectionHeader";

type Props = {
  title: string;
  subtitle: string;
};

export function NewsHero({ title, subtitle }: Props) {
  return (
    <Container className="py-12 md:py-16">
      <SectionHeader title={title} subtitle={subtitle} />
    </Container>
  );
}
