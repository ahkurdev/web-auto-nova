"use client";

import { motion } from "motion/react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { IconStar } from "./icons";

const TESTIMONIALS = [
  {
    name: "Dewi Anggraini",
    role: "Owner, Griya Logistik",
    quote:
      "Setelah pakai jasa otomasi AutoNova, proses pengiriman & laporan stok kami jadi jauh lebih cepat. ROI terasa dalam 3 bulan.",
    initials: "DA",
  },
  {
    name: "Rizky Pratama",
    role: "Ops Manager, Sinergi Foods",
    quote:
      "Tim AutoNova sangat responsif. Integrasi sistem produksi dan gudang berjalan mulus tanpa mengganggu operasional harian.",
    initials: "RP",
  },
  {
    name: "Farah Nabila",
    role: "Pemilik Rumah Pintar",
    quote:
      "AutoNova Hub Pro gampang dipasang dan aplikasinya intuitif. Sekarang rumah saya bisa diatur otomatis dari mana saja.",
    initials: "FN",
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="bg-brand-50/60 py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <motion.span
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-widest text-brand-600"
          >
            Testimoni
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl"
          >
            Dipercaya Klien di Seluruh Indonesia
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="flex flex-col rounded-2xl border border-brand-100 bg-white p-6 shadow-sm"
            >
              <div className="mb-3 flex gap-1 text-brand-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="h-4 w-4" />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-brand-900/75">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-brand-400 to-brand-700 text-sm font-semibold text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-brand-900/55">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
