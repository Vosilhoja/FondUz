"use client";

import { Container } from "@/src/components/ui/Container";
import { MotionViewport } from "@/src/components/ui/MotionViewport";

type Props = {
  title: string;
  text: string;
};

export function ActivitySection({ title, text }: Props) {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <MotionViewport className="rounded-2xl border border-border bg-linear-to-br from-card to-muted/50 p-6 shadow-sm md:p-10">
          <h2 className="font-serif text-2xl text-foreground md:text-3xl">{title}</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-muted-foreground md:text-base">{text}</p>
          <div className="mt-8 grid grid-cols-1 gap-4 text-sm text-muted-foreground md:grid-cols-3">
            {[
              "FondUz работает как мост между пользователем и профильными фондами: система структурирует направления.",
              "Мы делаем навигацию по медицинским услугам спокойной и прозрачной, чтобы человек быстро находил маршрут.",
              "Платформа выступает мостом между пользователями и партнерскими фондами для ориентации по профессиям."
            ].map((item, i) => (
              <MotionViewport
                key={i}
                delay={0.2 + i * 0.1}
                className="rounded-xl border border-border bg-card/80 p-5 shadow-sm transition-all hover:shadow-md"
              >
                {item}
              </MotionViewport>
            ))}
          </div>
        </MotionViewport>
      </Container>
    </section>
  );
}
