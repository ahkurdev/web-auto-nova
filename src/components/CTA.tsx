"use client";

import { motion } from "motion/react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export default function CTA() {
  return (
    <section id="kontak" className="px-4 py-20">
      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-linear-to-br from-brand-600 to-brand-800 px-8 py-16 text-center shadow-xl shadow-brand-900/20"
      >
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

        <motion.h2
          variants={fadeUp}
          className="relative text-3xl font-bold text-white sm:text-4xl"
        >
          Siap Mengotomatiskan Bisnis Anda?
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="relative mx-auto mt-4 max-w-xl text-white/80"
        >
          Konsultasikan kebutuhan otomasi Anda secara gratis bersama tim
          AutoNova. Tanpa komitmen, tanpa biaya tersembunyi.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row"
        >
          <motion.a
            href="mailto:halo@autonova.id"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-700 shadow-lg"
          >
            Hubungi Kami Sekarang
          </motion.a>
          <motion.a
            href="https://wa.me/6281234567890"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Chat via WhatsApp
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
