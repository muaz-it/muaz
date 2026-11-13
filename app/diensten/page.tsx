import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@/components/Icon'
import { CtaBand, PageHero, SectionHeading } from '@/components/sections'
import { CATEGORIES, byCategory, serviceHref } from '@/lib/services'

export const metadata = {
  title: 'Diensten: IT-beheer, cloud, security, websites en online marketing',
  description: 'Alle diensten van Muaz IT: IT-beheer en support, Microsoft 365, cybersecurity, websites, Google Ads, social media campagnes, SEO en branding.',
  alternates: { canonical: '/diensten' },
}

export default function DienstenPage() {
  return (
    <>
      <PageHero
        eyebrow="Diensten"
        title={<>Alles wat uw bedrijf <span className="text-gradient">online nodig heeft</span></>}
        text="Van een veilige IT-omgeving tot campagnes die klanten opleveren. Kies één dienst of laat ons alles regelen."
        image="/images/office.webp"
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#it" className="btn-ghost-dark"><Icon name="monitor" className="size-4" /> IT-diensten</a>
          <a href="#marketing" className="btn-ghost-dark"><Icon name="megaphone" className="size-4" /> Online marketing</a>
        </div>
      </PageHero>

      {(['it', 'marketing'] as const).map((cat, ci) => (
        <section key={cat} id={cat} className={`section ${ci % 2 ? 'bg-night-50/60' : ''}`}>
          <div className="container-x">
            <SectionHeading eyebrow={CATEGORIES[cat].label} title={CATEGORIES[cat].title} text={CATEGORIES[cat].text} />
            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {byCategory(cat).map((s, i) => (
                <Link
                  key={s.slug}
                  href={serviceHref(s.slug)}
                  className="spotlight group card grid overflow-hidden transition duration-500 hover:-translate-y-1 hover:shadow-lift hover:ring-brand-200 sm:grid-cols-[0.9fr_1.1fr]"
                  data-reveal
                  style={{ '--d': `${(i % 2) * 100}ms` } as React.CSSProperties}
                >
                  <div className="relative aspect-[16/10] overflow-hidden sm:aspect-auto">
                    <Image src={s.image} alt={s.imageAlt} fill sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 100vw" className="object-cover transition duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/40 to-transparent" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col p-7">
                    <span className="icon-tile"><Icon name={s.icon} className="size-5" /></span>
                    <h3 className="mt-5 text-2xl font-bold">{s.name}</h3>
                    <p className="mt-2 text-night-500">{s.short}</p>
                    <ul className="mt-5 space-y-2 text-sm text-night-600">
                      {s.features.slice(0, 3).map((f) => (
                        <li key={f.title} className="flex items-center gap-2"><Icon name="check" className="size-4 text-brand-500" strokeWidth={2.5} /> {f.title}</li>
                      ))}
                    </ul>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-brand-600">
                      Bekijk dienst <Icon name="arrow-right" className="size-4 transition group-hover:translate-x-1.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBand title="Niet zeker wat u nodig heeft?" text="Vertel ons over uw bedrijf en doelen. Wij adviseren u eerlijk welke diensten het meeste opleveren, ook als dat minder is dan u dacht." />
    </>
  )
}
