"use client";

import { motion } from "motion/react";

const CLIENTS = [
  "Nusantara Retail",
  "Griya Logistik",
  "Bakti Manufaktur",
  "Sinergi Foods",
  "Karya Digital",
  "Mega Warehouse",
  "Cipta Agro",
  "Lentera Group",
];

export default function LogoMarquee() {
  return (
    <section className="border-y border-brand-100 bg-white/60 py-8">
      <div className="mx-auto max-w-6xl px-4">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-brand-700/60">
          Dipercaya oleh 500+ bisnis di seluruh Indonesia
        </p>
        <div className="no-scrollbar relative flex overflow-hidden">
          <motion.div
            className="flex w-max shrink-0 items-center gap-14 pr-14"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          >
            {[...CLIENTS, ...CLIENTS].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="whitespace-nowrap text-lg font-semibold text-brand-900/40"
              >
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
