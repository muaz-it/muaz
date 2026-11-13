/**
 * Eén bron van waarheid voor de bedrijfsgegevens van Muaz IT.
 * Pas hier aan; alle pagina's, JSON-LD, footer en het contactformulier lezen deze waarden.
 */

export const SITE = {
  name: 'Muaz IT',
  legalName: 'Muaz IT',
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.muazit.nl').replace(/\/$/, ''),
  tagline: 'IT en online marketing onder één dak',
  description:
    'Muaz IT helpt ondernemers met betrouwbare IT en online marketing: IT-beheer, cloud en Microsoft 365, cybersecurity, websites, Google Ads, social media campagnes en SEO. Eén partner, één aanspreekpunt.',
  locale: 'nl_NL',

  kvk: '85333050',
  btw: 'NL004080536B31',

  // TODO: vervang deze placeholders door de echte gegevens.
  email: 'info@muazit.nl',
  phone: null as null | { display: string; e164: string },
  whatsapp: null as null | { display: string; e164: string },
  /** Laat null zolang er geen publiek bezoekadres is. */
  address: null as null | { street: string; postalCode: string; city: string },

  hours: { label: 'Maandag t/m vrijdag, 09:00 tot 18:00', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
  /** Belofte die op de site staat; pas aan als dit niet klopt. */
  responseTime: 'binnen 1 werkdag',

  /** Vul in zodra de profielen bestaan (LinkedIn, Instagram, ...). */
  sameAs: [] as string[],
}

export const absoluteUrl = (path = '/') => `${SITE.url}${path === '/' ? '' : path}`
export const mailHref = `mailto:${SITE.email}`
export const telHref = SITE.phone ? `tel:${SITE.phone.e164}` : null
export const waHref = SITE.whatsapp
  ? `https://wa.me/${SITE.whatsapp.e164.replace('+', '')}?text=${encodeURIComponent('Hallo Muaz IT, ik heb een vraag over ')}`
  : null

export const NAV = [
  { href: '/diensten', label: 'Diensten' },
  { href: '/#werkwijze', label: 'Werkwijze' },
  { href: '/over-ons', label: 'Over ons' },
  { href: '/contact', label: 'Contact' },
]
