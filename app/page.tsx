import Image from 'next/image'
import Link from 'next/link'
import { Icon, type IconName } from '@/components/Icon'
import { JsonLd } from '@/components/JsonLd'
import { CtaBand, FaqList, Marquee, SectionHeading, ServiceCard, Steps } from '@/components/sections'
import { faqSchema, graph } from '@/lib/schema'
import { CATEGORIES, FAQS, SERVICES, byCategory, serviceHref } from '@/lib/services'
import { SITE } from '@/lib/site'

export const metadata = {
  title: { absolute: `${SITE.name} | IT-diensten & online marketing voor ondernemers` },
  description: SITE.description,
  alternates: { canonical: '/' },
}

const WHY: { icon: IconName; title: string; text: string; wide?: boolean }[] = [
  { icon: 'users', title: 'Eén aanspreekpunt', text: 'IT én marketing bij één partner. Geen losse leveranciers die naar elkaar wijzen: wij regelen het.', wide: true },
  { icon: 'chart', title: 'Meetbaar resultaat', text: 'Heldere rapportages in begrijpelijke taal. U ziet precies wat uw investering oplevert.' },
  { icon: 'zap', title: 'Snel geregeld', text: `Reactie ${SITE.responseTime}, korte lijnen en geen eindeloze trajecten.` },
  { icon: 'lock', title: 'Veilig & AVG-proof', text: 'Beveiliging zit in alles wat wij bouwen en beheren, van laptop tot advertentie-account.' },
  { icon: 'euro', title: 'Vaste, eerlijke prijzen', text: 'Een duidelijke offerte vooraf en maandelijks opzegbaar. Geen kleine lettertjes.', wide: true },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={graph(faqSchema(FAQS))} />

      {/* ───────── HERO ───────── */}
      <section className="noise relative overflow-hidden bg-night-950 pt-32 text-white sm:pt-40">
        <div className="bg-grid absolute inset-0" aria-hidden="true" />
        <div className="absolute -top-40 -left-40 size-[38rem] animate-blob rounded-full bg-brand-600/35 blur-3xl" aria-hidden="true" />
        <div className="absolute top-20 -right-32 size-[30rem] animate-blob rounded-full bg-accent-500/25 blur-3xl [animation-delay:-7s]" aria-hidden="true" />
        <div className="absolute bottom-0 left-1/3 size-[26rem] animate-blob rounded-full bg-fuchsia-500/15 blur-3xl [animation-delay:-12s]" aria-hidden="true" />

        <div className="container-x relative grid gap-16 pb-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:pb-28">
          <div data-reveal>
            <p className="eyebrow-dark">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-accent-400" />
              </span>
              IT &amp; marketing onder één dak
            </p>
            <h1 className="mt-6 text-[clamp(2.6rem,7.5vw,5rem)] font-extrabold leading-[1.02] text-white">
              Technologie die werkt. Marketing die <span className="text-gradient">groeit.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg text-night-300 sm:text-xl">
              Muaz IT zorgt dat uw IT veilig en zorgeloos draait, en dat de juiste klanten u online vinden. Met slimme advertentiecampagnes, sterke websites en betrouwbare support.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary min-h-14 px-8 text-base">
                Gratis adviesgesprek <Icon name="arrow-right" className="size-4" />
              </Link>
              <Link href="/diensten" className="btn-ghost-dark min-h-14 px-8 text-base">
                Bekijk onze diensten
              </Link>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-night-300">
              {['Vaste prijs vooraf', 'Maandelijks opzegbaar', `Reactie ${SITE.responseTime}`].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Icon name="check-circle" className="size-4 text-accent-400" /> {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative" data-reveal="zoom" style={{ '--d': '150ms' } as React.CSSProperties}>
            <div className="ring-gradient relative rounded-[2rem] bg-white/5 p-2 shadow-2xl shadow-brand-900/40">
              <div className="relative aspect-[4/3.4] overflow-hidden rounded-[1.6rem]">
                <Image src="/images/hero.webp" alt="Team van Muaz IT werkt samen aan laptops" fill priority sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/50 via-transparent to-accent-500/10" aria-hidden="true" />
              </div>
            </div>

            {/* Zwevende glaskaarten */}
            <div className="glass absolute -top-6 -left-4 hidden animate-float items-center gap-3 rounded-2xl p-3.5 pr-5 shadow-2xl sm:flex lg:-left-10">
              <span className="grid size-10 place-items-center rounded-xl bg-emerald-400/15 text-emerald-300"><Icon name="shield-check" className="size-5" /></span>
              <span>
                <span className="block text-sm font-bold text-white">Systemen beveiligd</span>
                <span className="block text-xs text-night-300">Updates &amp; back-ups actief</span>
              </span>
            </div>

            <div className="glass absolute -right-3 bottom-16 hidden w-60 animate-float-slow rounded-2xl p-4 shadow-2xl sm:block lg:-right-8">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-white">Campagne live</span>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-accent-300">
                  <span className="size-1.5 animate-pulse rounded-full bg-accent-300" /> actief
                </span>
              </div>
              <div className="mt-4 flex h-16 items-end gap-1.5" aria-hidden="true">
                {[35, 48, 40, 62, 55, 74, 68, 88, 82, 100].map((h, i) => (
                  <span key={i} className="flex-1 rounded-t bg-gradient-to-t from-brand-500 to-accent-400" style={{ height: `${h}%`, opacity: 0.45 + i * 0.055 }} />
                ))}
              </div>
              <p className="mt-3 text-xs text-night-300">Google · Meta · TikTok</p>
            </div>

            <div className="glass absolute -bottom-6 left-8 hidden animate-float items-center gap-3 rounded-2xl p-3.5 pr-5 shadow-2xl [animation-delay:-3s] sm:flex">
              <span className="grid size-10 place-items-center rounded-xl bg-brand-400/20 text-brand-200"><Icon name="headphones" className="size-5" /></span>
              <span>
                <span className="block text-sm font-bold text-white">Eén vast aanspreekpunt</span>
                <span className="block text-xs text-night-300">Voor IT én marketing</span>
              </span>
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/10 py-8">
          <p className="container-x mb-5 text-center text-xs font-bold tracking-[0.18em] text-night-400 uppercase">Platformen &amp; technologie waar wij mee werken</p>
          <Marquee />
        </div>
      </section>

      {/* ───────── TWEE PIJLERS ───────── */}
      <section className="section bg-dots relative">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Wat wij doen"
            title={<>Twee vakgebieden, <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">één sterke partner</span></>}
            text="Uw IT en uw marketing hangen meer samen dan u denkt. Een snelle, veilige website maakt uw advertenties beter. Goede tracking maakt uw campagnes slimmer. Wij combineren het."
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {(['it', 'marketing'] as const).map((cat, ci) => (
              <article key={cat} className="spotlight group card relative overflow-hidden p-3" data-reveal={ci === 0 ? 'left' : 'right'}>
                <div className="relative aspect-[16/8] overflow-hidden rounded-[1.25rem]">
                  <Image src={cat === 'it' ? '/images/team.webp' : '/images/google-ads.webp'} alt="" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-950/85 via-night-950/30 to-transparent" aria-hidden="true" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="eyebrow-dark">{CATEGORIES[cat].label}</p>
                    <h3 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">{CATEGORIES[cat].title}</h3>
                  </div>
                </div>
                <div className="p-5 sm:p-7">
                  <p className="text-night-500">{CATEGORIES[cat].text}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {byCategory(cat).map((s) => (
                      <li key={s.slug}>
                        <Link href={serviceHref(s.slug)} className="group/l flex items-center gap-3 rounded-2xl p-2.5 ring-1 ring-night-100 transition hover:bg-night-50 hover:ring-brand-200">
                          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600"><Icon name={s.icon} className="size-5" /></span>
                          <span className="flex-1 text-sm font-bold text-night-900">{s.name}</span>
                          <Icon name="arrow-up-right" className="size-4 text-night-300 transition group-hover/l:-translate-y-0.5 group-hover/l:translate-x-0.5 group-hover/l:text-brand-600" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── ALLE DIENSTEN ───────── */}
      <section className="section bg-night-50/60 pt-20">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Onze diensten" title="Alles voor een sterke online aanwezigheid" />
            <Link href="/diensten" className="btn-ghost shrink-0" data-reveal>
              Alle diensten <Icon name="arrow-right" className="size-4" />
            </Link>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
          </div>
        </div>
      </section>

      {/* ───────── WAAROM ───────── */}
      <section className="noise section relative overflow-hidden bg-night-950 text-white">
        <div className="bg-grid absolute inset-0" aria-hidden="true" />
        <div className="absolute top-1/3 -right-40 size-[34rem] animate-blob rounded-full bg-brand-600/25 blur-3xl" aria-hidden="true" />
        <div className="container-x relative grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              dark
              eyebrow="Waarom Muaz IT"
              title={<>Een partner die <span className="text-gradient">met u meedenkt</span></>}
              text="Wij zijn geen groot bureau met accountmanagers en lange wachttijden. Bij Muaz IT spreekt u direct met de mensen die het werk doen."
            />
            <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-3xl ring-1 ring-white/10" data-reveal="zoom">
              <Image src="/images/meeting.webp" alt="Presentatie van een strategie aan een team in een modern kantoor" fill sizes="(min-width: 1024px) 520px, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-night-950/60 to-transparent" aria-hidden="true" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {WHY.map((w, i) => (
              <div
                key={w.title}
                className={`spotlight spotlight-dark glass rounded-3xl p-7 transition duration-500 hover:-translate-y-1 hover:bg-white/[0.09] ${w.wide ? 'sm:col-span-2' : ''}`}
                data-reveal
                style={{ '--d': `${i * 90}ms` } as React.CSSProperties}
              >
                <span className="icon-tile"><Icon name={w.icon} className="size-5" /></span>
                <h3 className="mt-5 text-xl font-bold text-white">{w.title}</h3>
                <p className="mt-2 text-night-300">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── WERKWIJZE ───────── */}
      <section id="werkwijze" className="section">
        <div className="container-x">
          <SectionHeading center eyebrow="Werkwijze" title="In vier stappen naar resultaat" text="Duidelijk, persoonlijk en zonder verrassingen. Zo werken wij met elke klant." />
          <div className="mt-16"><Steps /></div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="section bg-night-50/60">
        <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="Veelgestelde vragen" title="Goed om te weten" text="Staat uw vraag er niet bij? Stuur ons een bericht, wij helpen u graag." />
            <Link href="/contact" className="btn-primary mt-8" data-reveal>
              Stel uw vraag <Icon name="arrow-right" className="size-4" />
            </Link>
          </div>
          <FaqList faqs={FAQS} />
        </div>
      </section>

      <div className="bg-night-50/60 pt-px"><CtaBand /></div>
    </>
  )
}
