"use client";

import { motion } from "motion/react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { IconCheck } from "./icons";

const PLANS = [
  {
    name: "Starter",
    price: "Rp 2.500.000",
    period: "/proyek",
    desc: "Untuk usaha kecil yang ingin mengotomasi 1-2 proses bisnis.",
    features: [
      "Konsultasi awal",
      "1 workflow otomatis",
      "Instalasi & pengujian",
      "Support 30 hari",
    ],
    highlighted: false,
  },
  {
    name: "Business",
    price: "Rp 7.500.000",
    period: "/proyek",
    desc: "Untuk bisnis berkembang dengan banyak proses yang perlu diintegrasikan.",
    features: [
      "Semua fitur Starter",
      "Hingga 5 workflow otomatis",
      "Integrasi API & sistem",
      "Support prioritas 90 hari",
      "Dashboard monitoring",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Kustom",
    period: "",
    desc: "Solusi automasi skala besar dengan kebutuhan khusus & SLA.",
    features: [
      "Semua fitur Business",
      "Workflow tanpa batas",
      "Dedicated automation engineer",
      "SLA & support 24/7",
      "Perangkat automasi custom",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="harga" className="bg-white py-24">
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
            Paket Harga
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl"
          >
            Pilih Paket Sesuai Kebutuhan
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 lg:grid-cols-3"
        >
          {PLANS.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className={`relative flex flex-col rounded-3xl p-7 ${
                plan.highlighted
                  ? "border-2 border-brand-500 bg-brand-600 text-white shadow-xl shadow-brand-500/30"
                  : "border border-brand-100 bg-white text-brand-900 shadow-sm"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-7 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm">
                  Paling Populer
                </span>
              )}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p
                className={`mt-2 text-sm ${
                  plan.highlighted ? "text-white/80" : "text-brand-900/60"
                }`}
              >
                {plan.desc}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span
                  className={
                    plan.highlighted ? "text-white/70" : "text-brand-900/50"
                  }
                >
                  {plan.period}
                </span>
              </div>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <IconCheck
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        plan.highlighted ? "text-white" : "text-brand-500"
                      }`}
                    />
                    <span
                      className={
                        plan.highlighted ? "text-white/90" : "text-brand-900/75"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#kontak"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`mt-8 rounded-full py-3 text-center text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-white text-brand-700 hover:bg-brand-50"
                    : "bg-brand-600 text-white hover:bg-brand-700"
                }`}
              >
                Pilih Paket
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
