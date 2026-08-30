"use client";

import { motion } from "motion/react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const STEPS = [
  {
    number: "01",
    title: "Konsultasi Kebutuhan",
    desc: "Diskusikan proses bisnis atau perangkat yang ingin diotomasi bersama tim kami.",
  },
  {
    number: "02",
    title: "Analisis & Desain Solusi",
    desc: "Kami rancang arsitektur otomasi yang sesuai skala dan anggaran bisnis Anda.",
  },
  {
    number: "03",
    title: "Implementasi",
    desc: "Instalasi perangkat, integrasi sistem, dan pengujian dilakukan oleh tim bersertifikat.",
  },
  {
    number: "04",
    title: "Monitoring & Support",
    desc: "Pemantauan performa berkelanjutan dengan dukungan teknis responsif 24/7.",
  },
];

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <motion.span
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-widest text-brand-600"
          >
            Cara Kerja
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl"
          >
            Empat Langkah Menuju Otomasi
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div className="absolute top-7 hidden h-px w-full bg-brand-100 lg:block" />
          {STEPS.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              className="relative flex flex-col items-start"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-brand-500 to-brand-700 text-sm font-bold text-white shadow-md shadow-brand-500/30">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-brand-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-900/65">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
