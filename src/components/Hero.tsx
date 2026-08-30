"use client";

import { motion } from "motion/react";
import AnimatedCounter from "./AnimatedCounter";
import { fadeUp, staggerContainer } from "@/lib/motion";

const STATS = [
  { value: 500, suffix: "+", label: "Klien Terlayani" },
  { value: 1200, suffix: "+", label: "Proyek Selesai" },
  { value: 98, suffix: "%", label: "Kepuasan Klien" },
  { value: 24, suffix: "/7", label: "Dukungan Teknis" },
];

const FLOATING_CARDS = [
  {
    title: "Invoice Otomatis",
    desc: "Terkirim 2 detik lalu",
    color: "from-brand-400 to-brand-600",
    className: "left-0 top-6",
    delay: 0,
  },
  {
    title: "Stok Tersinkron",
    desc: "Toko & gudang up to date",
    color: "from-sky-300 to-brand-500",
    className: "right-0 top-32",
    delay: 0.8,
  },
  {
    title: "Laporan Harian",
    desc: "Terkirim otomatis ke email",
    color: "from-brand-500 to-brand-800",
    className: "left-6 bottom-0",
    delay: 1.6,
  },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="grid-glow relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28"
    >
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-300/30 blur-3xl" />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-4">
        <motion.div
          variants={staggerContainer(0.14)}
          initial="hidden"
          animate="show"
          className="flex max-w-2xl flex-col items-center text-center"
        >
          <motion.span
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-brand-700 shadow-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Jasa &amp; Toko Automasi #1 di Indonesia
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-bold leading-tight tracking-tight text-brand-900 sm:text-5xl md:text-6xl"
          >
            Otomatiskan Bisnis Anda,{" "}
            <span className="text-gradient-brand">Lebih Cepat &amp; Efisien</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-brand-900/70 sm:text-lg"
          >
            AutoNova menyediakan jasa integrasi sistem otomasi dan perangkat
            smart automation siap pakai — dari proses bisnis, gudang, hingga
            rumah &amp; kantor Anda. Satu partner, semua kebutuhan otomasi.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <motion.a
              href="#kontak"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/35 transition-colors hover:bg-brand-700"
            >
              Mulai Konsultasi Gratis
            </motion.a>
            <motion.a
              href="#produk"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-brand-200 bg-white px-7 py-3.5 text-sm font-semibold text-brand-800 shadow-sm transition-colors hover:border-brand-300 hover:bg-brand-50"
            >
              Lihat Produk
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative mt-20 h-64 w-full max-w-3xl sm:h-72"
        >
          <div className="absolute inset-x-6 top-8 h-40 rounded-3xl bg-linear-to-r from-brand-200/60 via-brand-100/40 to-transparent blur-2xl" />
          {FLOATING_CARDS.map((card) => (
            <motion.div
              key={card.title}
              className={`card-surface absolute w-52 rounded-2xl p-4 shadow-xl shadow-brand-900/10 ${card.className}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { duration: 0.6, delay: card.delay },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: card.delay,
                },
              }}
            >
              <div
                className={`mb-3 h-8 w-8 rounded-lg bg-linear-to-br ${card.color}`}
              />
              <p className="text-sm font-semibold text-brand-900">
                {card.title}
              </p>
              <p className="mt-0.5 text-xs text-brand-700/70">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1, 0.4)}
          initial="hidden"
          animate="show"
          className="mt-16 grid w-full grid-cols-2 gap-6 rounded-3xl border border-brand-100 bg-white/70 p-6 shadow-sm backdrop-blur-sm sm:grid-cols-4"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="flex flex-col items-center text-center"
            >
              <AnimatedCounter
                to={stat.value}
                suffix={stat.suffix}
                className="text-2xl font-bold text-brand-700 sm:text-3xl"
              />
              <span className="mt-1 text-xs font-medium text-brand-900/60 sm:text-sm">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
