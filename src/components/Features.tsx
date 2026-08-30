"use client";

import { motion } from "motion/react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import {
  IconZap,
  IconAward,
  IconShield,
  IconMessageCircle,
  IconTag,
  IconTrendingUp,
} from "./icons";

const FEATURES = [
  { icon: IconZap, title: "Cepat & Efisien", desc: "Implementasi rata-rata selesai dalam 2-4 minggu." },
  { icon: IconAward, title: "Tim Bersertifikat", desc: "Engineer berpengalaman di bidang automation & IoT." },
  { icon: IconShield, title: "Garansi Layanan", desc: "Garansi perangkat & pendampingan pasca implementasi." },
  { icon: IconMessageCircle, title: "Dukungan 24/7", desc: "Tim support siap membantu kapan pun dibutuhkan." },
  { icon: IconTag, title: "Harga Transparan", desc: "Tanpa biaya tersembunyi, penawaran jelas dari awal." },
  { icon: IconTrendingUp, title: "Skalabel", desc: "Sistem tumbuh mengikuti perkembangan bisnis Anda." },
];

export default function Features() {
  return (
    <section className="grid-glow py-24">
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
            Kenapa AutoNova
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl"
          >
            Partner Automasi yang Bisa Diandalkan
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="flex items-start gap-4 rounded-2xl border border-brand-100 bg-white/70 p-5 backdrop-blur-sm"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                <feature.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-900">{feature.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-brand-900/65">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
