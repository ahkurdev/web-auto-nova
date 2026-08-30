"use client";

import { motion } from "motion/react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const PRODUCTS = [
  {
    badge: "Best Seller",
    name: "AutoNova Hub Pro",
    desc: "Kontroler pusat untuk mengotomasi perangkat rumah & kantor lewat satu aplikasi.",
    price: "Rp 1.850.000",
    gradient: "from-brand-400 to-brand-600",
  },
  {
    badge: "Baru",
    name: "IoT Sensor Kit",
    desc: "Paket sensor suhu, gerak, dan pintu untuk pemantauan gudang secara real-time.",
    price: "Rp 990.000",
    gradient: "from-sky-300 to-brand-500",
  },
  {
    badge: "Populer",
    name: "Workflow Automation License",
    desc: "Lisensi software otomasi proses bisnis, mendukung 10 workflow aktif.",
    price: "Rp 2.500.000 /tahun",
    gradient: "from-brand-500 to-brand-800",
  },
  {
    badge: "Untuk Bisnis",
    name: "Robotic Arm Starter Kit",
    desc: "Lengan robotik ringan untuk lini produksi skala kecil-menengah, siap integrasi.",
    price: "Rp 6.750.000",
    gradient: "from-brand-600 to-brand-900",
  },
];

export default function Products() {
  return (
    <section id="produk" className="bg-brand-50/60 py-24">
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
            Toko Kami
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl"
          >
            Perangkat Automasi Siap Pakai
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-brand-900/65">
            Tidak perlu jasa instalasi penuh? Pilih perangkat automasi kami
            dan pasang sendiri dengan panduan lengkap.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.name}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              className="flex flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm shadow-brand-900/5"
            >
              <div
                className={`relative flex h-36 items-center justify-center bg-linear-to-br ${product.gradient}`}
              >
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-brand-800">
                  {product.badge}
                </span>
                <div className="h-14 w-14 rounded-2xl bg-white/25" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold text-brand-900">
                  {product.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-900/65">
                  {product.desc}
                </p>
                <p className="mt-4 text-lg font-bold text-brand-700">
                  {product.price}
                </p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="mt-4 rounded-full bg-brand-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                >
                  Tambah ke Keranjang
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
