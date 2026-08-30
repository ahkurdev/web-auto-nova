# AutoNova

Landing page untuk jasa dan toko automasi bisnis. Dibangun dengan Next.js (App Router, TypeScript, Tailwind CSS v4) dan animasi dari Motion (motion.dev).

## Ringkasan

AutoNova menampilkan satu halaman utama yang menggabungkan dua sisi bisnis:

- Jasa automasi: konsultasi, integrasi sistem, instalasi smart automation, maintenance, dan audit proses bisnis.
- Toko automasi: perangkat siap pakai seperti hub kontrol pintar, sensor IoT, lisensi software workflow, dan starter kit robotic arm.

Seluruh ikon pada halaman menggunakan komponen SVG kustom, bukan karakter emoji, sesuai kebijakan zero-emoji proyek ini.

## Teknologi

- Next.js 16 (App Router, Turbopack)
- React 19 dan TypeScript
- Tailwind CSS v4 (konfigurasi tema lewat `@theme` di `globals.css`)
- Motion (`motion/react`) untuk animasi scroll-reveal, hover, dan micro-interaction

## Struktur Proyek

```
src/
  app/
    layout.tsx        Metadata dan pengaturan font
    page.tsx           Merangkai seluruh section halaman
    globals.css        Tema warna biru muda dan utility class kustom
  components/
    Navbar.tsx          Navigasi sticky dengan efek blur saat scroll
    Hero.tsx            Headline, kartu mengambang, statistik animasi
    LogoMarquee.tsx      Logo klien berjalan otomatis
    Services.tsx         Daftar jasa automasi
    Products.tsx         Daftar produk toko automasi
    HowItWorks.tsx        Tahapan proses kerja
    Features.tsx          Alasan memilih AutoNova
    Testimonials.tsx       Testimoni klien
    Pricing.tsx             Paket harga
    CTA.tsx                  Ajakan kontak/konsultasi
    Footer.tsx                Tautan dan informasi perusahaan
    icons.tsx                 Kumpulan ikon SVG pengganti emoji
    AnimatedCounter.tsx        Komponen angka statistik yang menghitung naik
  lib/
    motion.ts                  Variant animasi Motion yang dipakai bersama
```

## Menjalankan Proyek

Install dependency (skrip instalasi dinonaktifkan lewat `.npmrc` untuk keamanan):

```bash
npm install
```

Jalankan mode pengembangan:

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

Build untuk produksi:

```bash
npm run build
npm run start
```

Menjalankan lint:

```bash
npm run lint
```

## Kustomisasi

- Warna tema biru muda diatur lewat variabel `--brand-*` di `src/app/globals.css`.
- Konten jasa, produk, testimoni, dan paket harga berupa data array di masing-masing komponen pada `src/components/`, dapat diubah langsung tanpa menyentuh logika tampilan.
- Nomor WhatsApp dan email kontak berada pada `src/components/CTA.tsx`.
- Ikon dapat ditambah di `src/components/icons.tsx` mengikuti pola SVG stroke-based yang sudah ada.
