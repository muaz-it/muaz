import Image from 'next/image'
import Link from 'next/link'
import { PLATFORMS, STEPS, type Service, serviceHref } from '@/lib/services'
import { SITE } from '@/lib/site'
import { Icon } from './Icon'

export function SectionHeading({
  eyebrow,
  title,
  text,
  center = false,
  dark = false,
}: {
  eyebrow: string
  title: React.ReactNode
  text?: string
  center?: boolean
  dark?: boolean
}) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'} data-reveal>
      <p className={dark ? 'eyebrow-dark' : 'eyebrow'}>{eyebrow}</p>
      <h2 className={`h-section mt-5 ${dark ? 'text-white' : ''}`}>{title}</h2>
      {text && <p className={`mt-5 text-lg ${dark ? 'text-night-300' : 'text-night-500'}`}>{text}</p>}
    </div>
  )
}

/** Donkere hero voor subpagina's, met optionele achtergrondfoto. */
export function PageHero({
  eyebrow,
  title,
  text,
  image,
  children,
}: {
  eyebrow: string
  title: React.ReactNode
  text: string
  image?: string
  children?: React.ReactNode
}) {
  return (
    <section className="noise relative overflow-hidden bg-night-950 pt-36 pb-20 text-white sm:pt-44 sm:pb-28">
      {image && (
        <>
          <Image src={image} alt="" fill priority sizes="100vw" className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-night-950/70 via-night-950/85 to-night-950" aria-hidden="true" />
        </>
      )}
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div className="absolute -top-32 -left-32 size-[30rem] animate-blob rounded-full bg-brand-600/30 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-24 top-10 size-[24rem] animate-blob rounded-full bg-accent-500/20 blur-3xl [animation-delay:-6s]" aria-hidden="true" />
      <div className="container-x relative">
        <div className="max-w-3xl" data-reveal>
          <p className="eyebrow-dark">{eyebrow}</p>
          <h1 className="mt-6 text-5xl font-extrabold text-white sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-night-300 sm:text-xl">{text}</p>
          {children}
        </div>
      </div>
    </section>
  )
}

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  return (
    <Link
      href={serviceHref(service.slug)}
      className="spotlight group card flex h-full flex-col overflow-hidden transition duration-500 hover:-translate-y-1.5 hover:shadow-lift hover:ring-brand-200"
      data-reveal
      style={{ '--d': `${(index % 4) * 80}ms` } as React.CSSProperties}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night-950/70 via-night-950/10 to-transparent" aria-hidden="true" />
        <span className="icon-tile absolute bottom-4 left-4 transition duration-500 group-hover:rotate-[-6deg] group-hover:scale-110">
          <Icon name={service.icon} className="size-5" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold">{service.name}</h3>
        <p className="mt-2 flex-1 text-[0.95rem] text-night-500">{service.short}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-600">
          Meer over {service.name.split(' ')[0]}
          <Icon name="arrow-right" className="size-4 transition duration-300 group-hover:translate-x-1.5" />
        </span>
      </div>
    </Link>
  )
}

export function Marquee() {
  const items = [...PLATFORMS, ...PLATFORMS]
  return (
    <div className="marquee-mask overflow-hidden" aria-label={`Platformen waar wij mee werken: ${PLATFORMS.join(', ')}`}>
      <ul className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]" aria-hidden="true">
        {items.map((p, i) => (
          <li key={i} className="flex items-center gap-2.5 rounded-full bg-white/[0.04] px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-night-300 ring-1 ring-white/10">
            <span className="size-1.5 rounded-full bg-gradient-to-r from-brand-400 to-accent-400" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Steps() {
  return (
    <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <div className="absolute top-8 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-brand-300 via-accent-300 to-brand-300 lg:block" aria-hidden="true" />
      {STEPS.map((s, i) => (
        <li key={s.title} className="relative" data-reveal style={{ '--d': `${i * 120}ms` } as React.CSSProperties}>
          <div className="relative mx-auto grid size-16 place-items-center rounded-2xl bg-white shadow-lift ring-1 ring-night-100">
            <span className="icon-tile size-12"><Icon name={s.icon} className="size-5" /></span>
            <span className="absolute -top-2 -right-2 grid size-7 place-items-center rounded-full bg-night-950 text-xs font-bold text-white ring-4 ring-white">{i + 1}</span>
          </div>
          <div className="mt-6 text-center">
            <h3 className="text-lg font-bold">{s.title}</h3>
            <p className="mt-2 text-[0.95rem] text-night-500">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="space-y-3">
      {faqs.map((f, i) => (
        <details key={f.q} className="group card overflow-hidden transition open:shadow-lift open:ring-brand-200" data-reveal style={{ '--d': `${i * 60}ms` } as React.CSSProperties}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-display font-bold text-night-950 sm:p-6 [&::-webkit-details-marker]:hidden">
            {f.q}
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-night-50 text-night-600 transition duration-300 group-open:rotate-45 group-open:bg-brand-600 group-open:text-white">
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
            </span>
          </summary>
          <p className="px-5 pb-6 text-night-500 sm:px-6">{f.a}</p>
        </details>
      ))}
    </div>
  )
}

export function CtaBand({
  title = 'Klaar om te groeien?',
  text = `Plan een gratis en vrijblijvend adviesgesprek. U krijgt ${SITE.responseTime} reactie en een helder plan met een vaste prijs.`,
}: {
  title?: string
  text?: string
}) {
  return (
    <section className="section pt-0">
      <div className="container-x">
        <div className="noise relative overflow-hidden rounded-[2.5rem] bg-night-950 px-6 py-16 text-center sm:px-12 sm:py-20" data-reveal="zoom">
          <div className="absolute inset-0 animate-gradient bg-[linear-gradient(120deg,#5543e7,#06b6d4,#6660f3,#22d3ee)] bg-[length:300%_300%] opacity-90" aria-hidden="true" />
          <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="absolute -top-20 -left-20 size-72 animate-float-slow rounded-full bg-white/20 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">{title}</h2>
            <p className="mt-5 text-lg text-white/85">{text}</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-light min-h-14 px-8 text-base">
                Plan een adviesgesprek <Icon name="arrow-right" className="size-4" />
              </Link>
              <Link href="/diensten" className="btn min-h-14 bg-white/10 px-8 text-base text-white ring-1 ring-white/30 backdrop-blur hover:bg-white/20">
                Bekijk alle diensten
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
