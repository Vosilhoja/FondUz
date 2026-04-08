import { Container } from "@/src/components/ui/Container";
import { SectionHeader } from "@/src/components/ui/SectionHeader";

type Props = {
  title: string;
  subtitle: string;
};

export function DoctorsHero({ title, subtitle }: Props) {
  return (
    <section className="border-b border-border bg-muted/40 py-12 md:py-16">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />
      </Container>
    </section>
  );
}
