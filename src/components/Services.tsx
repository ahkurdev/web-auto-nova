"use client";

import { motion } from "motion/react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import {
  IconGear,
  IconLink,
  IconHome,
  IconSliders,
  IconWrench,
  IconBarChart,
} from "./icons";

const SERVICES = [
  {
    icon: IconGear,
    title: "Otomasi Proses Bisnis",
    desc: "Rancang ulang alur kerja manual jadi otomatis — invoicing, approval, hingga laporan berkala.",
  },
  {
    icon: IconLink,
    title: "Integrasi Sistem & API",
    desc: "Hubungkan ERP, CRM, toko online, dan aplikasi internal Anda agar data mengalir tanpa input ulang.",
  },
  {
    icon: IconHome,
    title: "Instalasi Smart Automation",
    desc: "Pemasangan perangkat otomasi untuk rumah, kantor, hingga gudang & lini produksi.",
  },
  {
    icon: IconSliders,
    title: "Konsultasi & Custom Dev",
    desc: "Butuh sistem otomasi khusus? Tim kami merancang solusi sesuai kebutuhan bisnis Anda.",
  },
  {
    icon: IconWrench,
    title: "Maintenance & Support",
    desc: "Pemantauan sistem, pembaruan berkala, dan dukungan teknis responsif kapan pun dibutuhkan.",
  },
  {
    icon: IconBarChart,
    title: "Automation Audit",
    desc: "Analisis proses bisnis Anda dan temukan peluang otomasi dengan potensi ROI tertinggi.",
  },
];

export default function Services() {
  return (
    <section id="layanan" className="bg-white py-24">
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
            Layanan Kami
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl"
          >
            Jasa Automasi End-to-End
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-brand-900/65">
            Dari konsultasi, implementasi, sampai dukungan jangka panjang —
            kami menemani perjalanan otomasi bisnis Anda.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="card-surface rounded-2xl border border-brand-100 p-6 shadow-sm shadow-brand-900/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-brand-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-900/65">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
