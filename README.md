# Muaz IT: website

Next.js 16 (App Router, statisch gegenereerd) + Tailwind CSS 4. Zelfde opzet als de andere sites (ICT Hulpteam).

Pagina's: home, /diensten, 8 dienstpagina's (/diensten/[slug]), /over-ons, /contact, /privacy, plus sitemap.xml en robots.txt.

## Snel starten

```bash
npm install
npm run dev            # http://localhost:3000
npm run build && npm start
npm run images         # foto's (opnieuw) downloaden van Unsplash → public/images/*.webp
```

## Eén plek voor alle gegevens

- `lib/site.ts`: naam, e-mail, telefoon, WhatsApp, adres, KvK, btw, openingstijden en reactietijd.
- `lib/services.ts`: alle diensten (teksten, iconen, foto's), werkwijze-stappen en veelgestelde vragen.

## Vóór livegang

- [ ] Echt e-mailadres in `lib/site.ts` (nu placeholder `info@muazit.nl`)
- [ ] Telefoon/WhatsApp invullen (worden automatisch getoond zodra ze niet `null` zijn)
- [ ] Domein in `.env.local`: `NEXT_PUBLIC_SITE_URL=https://www.jouwdomein.nl`
- [ ] SMTP-gegevens voor het contactformulier (zie `.env.example`)
- [ ] Controleer de reactietijd-belofte (`SITE.responseTime`) en de platformlijst (`PLATFORMS`)
- [ ] Eventueel eigen teamfoto's in `public/images/` (zelfde bestandsnamen)

## Effecten

Alles zonder extra libraries: scroll-reveal (`data-reveal`), muis-spotlight op kaarten (`.spotlight`),
zwevende glaskaarten, bewegende gradient-blobs, lopende platform-marquee en een glans op de knoppen.
`prefers-reduced-motion` zet alle animaties uit.

Foto's: Unsplash (gratis voor commercieel gebruik, Unsplash-licentie).
