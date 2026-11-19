

## Corporate redesign (implementation notes)

- Design system: `app/corporate.css` (tokens, components) — ported from the approved HTML reference.
- Shared UI: `components/ep/` (`ui.tsx`, `ProductCard`, `ProductsBrowser`, `FaqList`, `ContactForm`, `WarrantyForm`, `Bars`).
- 3D hero: `components/ep/Hero3D.tsx` (capability check + fallback to the real product photo) and `HeroScene.tsx` (React Three Fiber, lazy-loaded, no external assets).
- Content/data: `data/products.ts` (all 8 models, from the datasheets), `data/faq.ts`, `data/content.ts`, `lib/site.ts` (email, address, **app store links**).
- Product photos: `public/products/`, datasheets: `public/datasheets/`, logo: `public/brand/`.
- To enable the app download buttons, set the real store URLs in `APP_LINKS` in `lib/site.ts`.
- Contact and warranty-registration forms both post to `/api/contact`; mail is delivered to `CONTACT_TO` (default `contact@earthpowerbattery.com`).
