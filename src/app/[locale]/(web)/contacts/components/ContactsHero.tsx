"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle: string;
};

export function ContactsHero({ title, subtitle }: Props) {
  return (
    <div className="text-center lg:text-left">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="font-serif text-3xl text-foreground md:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="mt-4 max-w-2xl text-sm text-muted-foreground md:text-base"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
