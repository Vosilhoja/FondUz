import { Container } from "@/src/components/ui/Container";

export function AboutContent({ children }: { children: React.ReactNode }) {
  return (
    <Container className="mt-12 md:mt-16">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-10">
        <p className="text-sm leading-7 text-muted-foreground md:text-base">
          {children}
        </p>
      </div>
    </Container>
  );
}
