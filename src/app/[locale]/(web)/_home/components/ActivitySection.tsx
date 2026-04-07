import { Container } from "@/src/components/ui/Container";

type Props = {
  title: string;
  text: string;
};

export function ActivitySection({ title, text }: Props) {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="rounded-2xl border border-border bg-gradient-to-br from-card to-muted/50 p-6 shadow-sm md:p-10">
          <h2 className="font-serif text-2xl text-foreground md:text-3xl">{title}</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-muted-foreground md:text-base">{text}</p>
          <div className="mt-6 grid grid-cols-1 gap-3 text-sm text-muted-foreground md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card/80 p-4">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.</div>
            <div className="rounded-xl border border-border bg-card/80 p-4">Ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation.</div>
            <div className="rounded-xl border border-border bg-card/80 p-4">Ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
