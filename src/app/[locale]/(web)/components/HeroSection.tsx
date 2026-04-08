"use client";

import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import RegistanSamarqand from "@/public/img/samarkand-registan.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle: string;
  actionLabel: string;
};

export function HeroSection({ title, subtitle, actionLabel }: Props) {
  return (
    <div className="relative overflow-hidden" style={{ clipPath: "inset(0)" }}>
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="fixed inset-0 z-[-1]"
      >
        <Image
          src={RegistanSamarqand}
          alt="Registan-Samarkand"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>
      <Container className="relative flex min-h-[95.5vh] items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mx-auto max-w-3xl rounded-2xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-sm md:p-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-serif text-3xl text-white md:text-5xl"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mx-auto mt-4 max-w-2xl text-sm text-white/90 md:text-base"
          >
            {subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button href="/services" className="mt-8 px-6 py-3">
              {actionLabel}
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}
