"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";

const NAV_LINKS = [
  { href: "#layanan", label: "Layanan" },
  { href: "#produk", label: "Produk" },
  { href: "#cara-kerja", label: "Cara Kerja" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#harga", label: "Harga" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 16);
  });

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [open]);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <div
        className={`flex w-full max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
          scrolled
            ? "border border-brand-100 bg-white/80 shadow-lg shadow-brand-900/5 backdrop-blur-xl"
            : "border border-transparent bg-white/40 backdrop-blur-sm"
        }`}
      >
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-brand-400 to-brand-700 text-sm font-bold text-white shadow-md shadow-brand-500/30">
            AN
          </span>
          <span className="text-lg font-semibold tracking-tight text-brand-900">
            AutoNova
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-800/80 transition-colors hover:text-brand-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <motion.a
            href="#kontak"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-500/30 transition-colors hover:bg-brand-700"
          >
            Konsultasi Gratis
          </motion.a>
        </div>

        <button
          aria-label="Buka menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg md:hidden"
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
            className="h-0.5 w-5 rounded-full bg-brand-800"
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1 }}
            className="h-0.5 w-5 rounded-full bg-brand-800"
          />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
            className="h-0.5 w-5 rounded-full bg-brand-800"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-4 top-[76px] z-40 flex flex-col gap-1 rounded-2xl border border-brand-100 bg-white/95 p-4 shadow-xl shadow-brand-900/10 backdrop-blur-xl md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-brand-900 hover:bg-brand-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontak"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-brand-600 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Konsultasi Gratis
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
