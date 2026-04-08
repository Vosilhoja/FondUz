"use client";

import { Container } from "@/src/components/ui/Container";
import { Link } from "@/src/i18n/routing";
import { motion, type Variants } from "framer-motion";
import { MotionViewport } from "@/src/components/ui/MotionViewport";

import { useTranslations } from "next-intl";

type Profession = {
  slug: string;
  name: string;
  fundsCount: number;
};

type Props = {
  professions: Profession[];
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export function ProfessionList({ professions }: Props) {
  const t = useTranslations("services");

  return (
    <Container className="mt-10 md:mt-14">
      <MotionViewport className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {professions.map((profession, i) => (
          <motion.li
            key={profession.slug}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="group list-none"
          >
            <Link
              href={`/services/${profession.slug}`}
              className="flex items-center justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:bg-muted/70 hover:shadow-md hover:border-border"
            >
              <div>
                <h2 className="font-serif text-xl text-foreground font-bold">{profession.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground font-medium">
                  {t("fundsCount", { count: profession.fundsCount })}
                </p>
              </div>
              <span className="text-sm font-bold text-primary transition-transform group-hover:translate-x-1">
                {t("open")} →
              </span>
            </Link>
          </motion.li>
        ))}
      </MotionViewport>
    </Container>
  );
}
