import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";

type Props = {
  title: string;
  subtitle: string;
  actionLabel: string;
};

export function HeroSection({ title, subtitle, actionLabel }: Props) {
  return (
    <section
      className="relative min-h-[70vh] bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/placeholders/news.svg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/40 to-black/55" />
      <Container className="relative flex min-h-[70vh] items-center justify-center">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-sm md:p-10">
          <h1 className="font-serif text-3xl text-white md:text-5xl">{title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/90 md:text-base">{subtitle}</p>
          <Button href="/services" className="mt-8 px-6 py-3">
            {actionLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
