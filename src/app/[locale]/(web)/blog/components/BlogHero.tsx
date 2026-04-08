import { Container } from "@/src/components/ui/Container";

type Props = {
  title: string;
  subtitle: string;
};

export function BlogHero({ title, subtitle }: Props) {
  return (
    <section className="border-b border-border bg-muted/40 py-12 md:py-16">
      <Container>
        <h1 className="font-serif text-3xl text-foreground md:text-4xl lg:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">{subtitle}</p>
      </Container>
    </section>
  );
}
