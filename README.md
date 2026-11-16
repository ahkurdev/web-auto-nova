# AutoNova

Bahasa Indonesia version: [readme.id.md](readme.id.md)

Landing page for business automation services and store. Built with Next.js (App Router, TypeScript, Tailwind CSS v4) and animations from Motion (motion.dev).

## Overview

AutoNova presents a single main page that combines two sides of the business:

- Automation services: consulting, system integration, smart automation installation, maintenance, and business process audits.
- Automation store: ready-to-use devices such as smart control hubs, IoT sensors, workflow software licences, and robotic arm starter kits.

All icons on the page use custom SVG components, not emoji characters, in line with this project's zero-emoji policy.

## Technologies

- Next.js 16 (App Router, Turbopack)
- React 19 and TypeScript
- Tailwind CSS v4 (theme configured via `@theme` in `globals.css`)
- Motion (`motion/react`) for scroll-reveal, hover, and micro-interaction animations

## Project Structure

```
src/
  app/
    layout.tsx        Metadata and font settings
    page.tsx           Assembles all page sections
    globals.css        Light-blue colour theme and custom utility classes
  components/
    Navbar.tsx          Sticky navigation with a blur effect on scroll
    Hero.tsx            Headline, floating cards, animated statistics
    LogoMarquee.tsx      Automatically scrolling client logos
    Services.tsx         Automation services list
    Products.tsx         Automation store product list
    HowItWorks.tsx        Work process stages
    Features.tsx          Reasons to choose AutoNova
    Testimonials.tsx       Client testimonials
    Pricing.tsx             Pricing packages
    CTA.tsx                  Contact/consultation call to action
    Footer.tsx                Company links and information
    icons.tsx                 Collection of SVG icons replacing emoji
    AnimatedCounter.tsx        Statistics number component that counts up
  lib/
    motion.ts                  Shared Motion animation variants
```

## Running the Project

Install dependencies (the install script is disabled via `.npmrc` for security):

```bash
npm install
```

Run development mode:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in the browser.

Build for production:

```bash
npm run build
npm run start
```

Run lint:

```bash
npm run lint
```

## Customisation

- The light-blue theme colour is set via the `--brand-*` variables in `src/app/globals.css`.
- Service, product, testimonial, and pricing content is array data in each component under `src/components/`, and can be changed directly without touching the display logic.
- The WhatsApp number and contact email are in `src/components/CTA.tsx`.
- Icons can be added in `src/components/icons.tsx` following the existing stroke-based SVG pattern.
