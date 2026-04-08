"use client";

import { Container } from "@/src/components/ui/Container";
import { SectionHeader } from "@/src/components/ui/SectionHeader";
import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle: string;
};

export function FaqsHero({ title, subtitle }: Props) {
  return (
    <Container className="pt-12 md:pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <SectionHeader title={title} subtitle={subtitle} />
      </motion.div>
    </Container>
  );
}
