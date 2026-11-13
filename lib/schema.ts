import { SITE, absoluteUrl } from './site'
import type { Service } from './services'

type Json = Record<string, unknown>

const ORG_ID = `${SITE.url}/#organization`

export function organizationSchema(): Json {
  return {
    '@type': 'ProfessionalService',
    '@id': ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: absoluteUrl('/icon.svg'),
    image: absoluteUrl('/images/hero.webp'),
    description: SITE.description,
    email: SITE.email,
    ...(SITE.phone ? { telephone: SITE.phone.e164 } : {}),
    address: SITE.address
      ? { '@type': 'PostalAddress', streetAddress: SITE.address.street, postalCode: SITE.address.postalCode, addressLocality: SITE.address.city, addressCountry: 'NL' }
      : { '@type': 'PostalAddress', addressCountry: 'NL' },
    areaServed: { '@type': 'Country', name: 'Nederland' },
    vatID: SITE.btw,
    identifier: { '@type': 'PropertyValue', propertyID: 'KvK', value: SITE.kvk },
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: SITE.hours.days, opens: SITE.hours.opens, closes: SITE.hours.closes },
    ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {}),
  }
}

export function serviceSchema(s: Service): Json {
  return {
    '@type': 'Service',
    name: s.name,
    description: s.intro,
    serviceType: s.name,
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'Country', name: 'Nederland' },
    url: absoluteUrl(`/diensten/${s.slug}`),
  }
}

export function faqSchema(faqs: { q: string; a: string }[]): Json {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }
}

export const graph = (...nodes: Json[]) => ({ '@context': 'https://schema.org', '@graph': nodes })
