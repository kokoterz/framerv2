# Erie — AI Creative Platform (high-fidelity clone)

A pixel-faithful recreation of the [Erie](https://erie.framer.website/) AI image &
video generation landing page, rebuilt as a clean, production-ready React app.

## Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** for the design system (tokens in `tailwind.config.ts`)
- **Framer Motion** for scroll reveals, the cloud parallax, and the animated card/marquees
- **lucide-react** for UI icons

Fonts are self-hosted **Switzer** (display) with **Inter** (body). All imagery, logos,
clouds and the laurel badge were pulled directly from the original site and live under
`public/assets`.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Architecture

```
src/
  data/
    assets.ts        # semantic map of every downloaded image
    content.ts       # all copy + structured section data
  components/
    ui/              # Button, Cloud (parallax), Reveal, icons, primitives
    Navbar, Hero, LogosStrip, CoreFeatures, WiredQuote, CommunityGallery,
    UseCases, Comparison, Stats, Pricing, Testimonials, Tutorials, FAQ,
    FinalCTA, Footer
  App.tsx            # composes the page in order
```

Each section is a self-contained, reusable component driven by typed data, so copy and
imagery can be edited in one place (`src/data`).

## Sections

Sticky navbar (transparent → frosted on scroll) · sky-gradient hero with a rotating
generation card and animated clouds · partner logos · core-features grid · WIRED quote ·
community gallery (dual marquee) · use-cases accordion · comparison table · animated
stats · 3-tier pricing · testimonials masonry · tutorials grid · FAQ + award card ·
image-marquee CTA · footer.
