import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Icon } from '@/components/Icon'
import { JsonLd } from '@/components/JsonLd'
import { CtaBand, SectionHeading, ServiceCard, Steps } from '@/components/sections'
import { graph, serviceSchema } from '@/lib/schema'
import { CATEGORIES, SERVICES, getService } from '@/lib/services'
import { SITE } from '@/lib/site'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false
export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getService((await params).slug)
  if (!s) return {}
  return {
    title: s.name,
    description: `${s.short} ${s.intro}`.slice(0, 158),
    alternates: { canonical: `/diensten/${s.slug}` },
    openGraph: { images: [{ url: s.image, alt: s.imageAlt }] },
  }
}

export default async function ServicePage({ params }: Props) {
  const s = getService((await params).slug)
  if (!s) notFound()
  const related = SERVICES.filter((x) => x.slug !== s.slug && x.category === s.category).slice(0, 3)
  const other = SERVICES.find((x) => x.category !== s.category)

  return (
    <>
      <JsonLd data={graph(serviceSchema(s))} />

      {/* HERO */}
      <section className="noise relative overflow-hidden bg-night-950 pt-36 pb-20 text-white sm:pt-40 lg:pb-28">
        <div className="bg-grid absolute inset-0" aria-hidden="true" />
        <div className="absolute -top-32 -left-32 size-[30rem] animate-blob rounded-full bg-brand-600/30 blur-3xl" aria-hidden="true" />
        <div className="absolute right-0 bottom-0 size-[24rem] animate-blob rounded-full bg-accent-500/20 blur-3xl [animation-delay:-6s]" aria-hidden="true" />
        <div className="container-x relative grid gap-14 lg:grid-cols-2 lg:items-center">
          <div data-reveal>
            <nav aria-label="Kruimelpad" className="flex items-center gap-2 text-sm text-night-400">
              <Link href="/" className="hover:text-white">Home</Link><span>/</span>
              <Link href="/diensten" className="hover:text-white">Diensten</Link><span>/</span>
              <span className="text-night-200">{s.name}</span>
            </nav>
            <p className="eyebrow-dark mt-8"><Icon name={s.icon} className="size-3.5" /> {CATEGORIES[s.category].label}</p>
            <h1 className="mt-5 text-5xl font-extrabold text-white sm:text-6xl">{s.name}</h1>
            <p className="mt-6 text-xl text-night-200">{s.short}</p>
            <p className="mt-4 max-w-xl text-night-300">{s.intro}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href={`/contact?dienst=${encodeURIComponent(s.name)}`} className="btn-primary min-h-14 px-8">
                Vraag advies aan <Icon name="arrow-right" className="size-4" />
              </Link>
              <a href="#aanpak" className="btn-ghost-dark min-h-14 px-8">Onze aanpak</a>
            </div>
          </div>
          <div className="relative" data-reveal="zoom">
            <div className="ring-gradient rounded-[2rem] bg-white/5 p-2 shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem]">
                <Image src={s.image} alt={s.imageAlt} fill priority sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="glass absolute -bottom-6 -left-4 hidden animate-float items-center gap-3 rounded-2xl p-4 pr-6 shadow-2xl sm:flex">
              <span className="icon-tile size-11"><Icon name={s.icon} className="size-5" /></span>
              <span>
                <span className="block text-sm font-bold text-white">Voor wie?</span>
                <span className="block max-w-56 text-xs text-night-300">{s.forWho}</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section">
        <div className="container-x">
          <SectionHeading center eyebrow="Wat wij doen" title={<>{s.name}: alles <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">goed geregeld</span></>} />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {s.features.map((f, i) => (
              <div key={f.title} className="spotlight card p-7 transition duration-500 hover:-translate-y-1 hover:shadow-lift" data-reveal style={{ '--d': `${(i % 3) * 90}ms` } as React.CSSProperties}>
                <span className="grid size-11 place-items-center rounded-xl bg-brand-50 font-display text-sm font-extrabold text-brand-600 ring-1 ring-brand-100">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-night-500">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAT U KRIJGT */}
      <section className="section bg-night-50/60">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Wat u krijgt" title="Concreet en zonder vage beloftes" text={`${s.forWho} U weet vooraf precies wat u krijgt en wat het kost.`} />
            <ul className="mt-8 space-y-3">
              {s.deliverables.map((d, i) => (
                <li key={d} className="card flex items-center gap-4 p-4" data-reveal="left" style={{ '--d': `${i * 80}ms` } as React.CSSProperties}>
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-white"><Icon name="check" className="size-4" strokeWidth={3} /></span>
                  <span className="font-semibold text-night-900">{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="noise relative overflow-hidden rounded-[2rem] bg-night-950 p-8 text-white sm:p-10" data-reveal="right">
            <div className="absolute -top-24 -right-24 size-72 rounded-full bg-brand-600/40 blur-3xl" aria-hidden="true" />
            <div className="relative">
              <span className="icon-tile"><Icon name="sparkles" className="size-5" /></span>
              <h3 className="mt-6 text-3xl font-extrabold text-white">Combineer en versterk</h3>
              <p className="mt-4 text-night-300">
                {s.category === 'it'
                  ? 'Een sterke IT-basis maakt uw marketing effectiever. Denk aan een snelle website die beter scoort in Google Ads, of correcte tracking voor uw campagnes.'
                  : 'Goede marketing staat op een sterke technische basis. Wij zorgen ook voor een snelle website, juiste tracking en veilige accounts.'}
              </p>
              {other && (
                <Link href={`/diensten/${other.slug}`} className="btn-ghost-dark mt-8">
                  Bekijk ook {other.name} <Icon name="arrow-right" className="size-4" />
                </Link>
              )}
              <p className="mt-8 border-t border-white/10 pt-6 text-sm text-night-400">
                Reactie {SITE.responseTime} · Vaste prijs vooraf · Maandelijks opzegbaar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AANPAK */}
      <section id="aanpak" className="section">
        <div className="container-x">
          <SectionHeading center eyebrow="Aanpak" title="Zo pakken wij het aan" />
          <div className="mt-16"><Steps /></div>
        </div>
      </section>

      {/* GERELATEERD */}
      <section className="section bg-night-50/60 pt-20">
        <div className="container-x">
          <SectionHeading eyebrow="Gerelateerd" title={`Meer ${CATEGORIES[s.category].label.toLowerCase()}`} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => <ServiceCard key={r.slug} service={r} index={i} />)}
          </div>
        </div>
      </section>

      <div className="bg-night-50/60 pt-px">
        <CtaBand title={`Aan de slag met ${s.name}?`} />
      </div>
    </>
  )
}
