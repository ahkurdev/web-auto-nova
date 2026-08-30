const LINK_GROUPS = [
  {
    title: "Layanan",
    links: [
      "Otomasi Proses Bisnis",
      "Integrasi Sistem",
      "Smart Automation",
      "Konsultasi Custom",
    ],
  },
  {
    title: "Produk",
    links: [
      "AutoNova Hub Pro",
      "IoT Sensor Kit",
      "Workflow License",
      "Robotic Arm Kit",
    ],
  },
  {
    title: "Perusahaan",
    links: ["Tentang Kami", "Karier", "Blog", "Hubungi Kami"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-brand-900 py-14 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-brand-400 to-brand-600 text-sm font-bold text-white">
                AN
              </span>
              <span className="text-lg font-semibold">AutoNova</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Jasa &amp; toko automasi terpercaya — membantu bisnis dan rumah
              Anda berjalan lebih efisien dengan teknologi otomasi.
            </p>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-white/90">
                {group.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/55 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} AutoNova. Seluruh hak cipta dilindungi.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white">Syarat &amp; Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
