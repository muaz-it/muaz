import Image from 'next/image'
import { Icon, type IconName } from '@/components/Icon'
import { CtaBand, PageHero, SectionHeading } from '@/components/sections'
import { SITE } from '@/lib/site'

export const metadata = {
  title: 'Over ons',
  description: 'Maak kennis met Muaz IT: uw partner voor IT en online marketing. Persoonlijk, transparant en gericht op resultaat.',
  alternates: { canonical: '/over-ons' },
}

const VALUES: { icon: IconName; title: string; text: string }[] = [
  { icon: 'users', title: 'Persoonlijk', text: 'U spreekt direct met de specialist die het werk doet. Geen callcenter, geen doorverbinden.' },
  { icon: 'chart', title: 'Resultaatgericht', text: 'Wij meten alles en sturen bij op wat werkt. Mooi is leuk, resultaat is beter.' },
  { icon: 'shield-check', title: 'Betrouwbaar', text: 'Heldere afspraken, eerlijke prijzen en uw data en accounts altijd op uw naam.' },
  { icon: 'rocket', title: 'Vooruitstrevend', text: 'Wij volgen de nieuwste technologie en platformen, zodat u voorloopt op uw concurrenten.' },
]

export default function OverOnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Over ons"
        title={<>Wij maken technologie <span className="text-gradient">eenvoudig</span></>}
        text="Muaz IT helpt ondernemers met alles wat met IT en online groei te maken heeft. Zodat u zich kunt richten op waar u goed in bent: uw bedrijf."
        image="/images/team.webp"
      />

      <section className="section">
        <div className="container-x grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative" data-reveal="left">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift">
              <Image src="/images/office.webp" alt="Licht en modern kantoor" fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
            </div>
            <div className="absolute -right-4 -bottom-8 w-56 overflow-hidden rounded-3xl shadow-lift ring-8 ring-white sm:-right-10 sm:w-72">
              <div className="relative aspect-[4/3]">
                <Image src="/images/meeting.webp" alt="Strategiesessie met een klant" fill sizes="300px" className="object-cover" />
              </div>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Ons verhaal" title="IT en marketing horen bij elkaar" />
            <div className="mt-6 space-y-4 text-lg text-night-500" data-reveal>
              <p>
                Veel ondernemers werken met een IT-bedrijf voor hun systemen, een webbouwer voor hun website en een bureau voor hun advertenties. Die partijen kennen elkaar niet, en de ondernemer moet alles coördineren.
              </p>
              <p>
                Muaz IT is ontstaan om dat anders te doen. Wij combineren technische kennis met marketingexpertise, zodat uw website, systemen en campagnes als één geheel werken. Snel, veilig en meetbaar.
              </p>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-4" data-reveal>
              <div className="card p-5">
                <dt className="text-xs font-bold tracking-[0.14em] text-night-400 uppercase">KvK-nummer</dt>
                <dd className="mt-1 font-display text-xl font-extrabold text-night-950">{SITE.kvk}</dd>
              </div>
              <div className="card p-5">
                <dt className="text-xs font-bold tracking-[0.14em] text-night-400 uppercase">Btw-nummer</dt>
                <dd className="mt-1 font-display text-xl font-extrabold text-night-950">{SITE.btw}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="noise section relative overflow-hidden bg-night-950 text-white">
        <div className="bg-grid absolute inset-0" aria-hidden="true" />
        <div className="absolute -bottom-40 -left-20 size-[30rem] animate-blob rounded-full bg-brand-600/25 blur-3xl" aria-hidden="true" />
        <div className="container-x relative">
          <SectionHeading dark center eyebrow="Onze waarden" title="Waar wij voor staan" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <div key={v.title} className="spotlight spotlight-dark glass rounded-3xl p-7 transition duration-500 hover:-translate-y-1" data-reveal style={{ '--d': `${i * 100}ms` } as React.CSSProperties}>
                <span className="icon-tile"><Icon name={v.icon} className="size-5" /></span>
                <h3 className="mt-5 text-xl font-bold text-white">{v.title}</h3>
                <p className="mt-2 text-night-300">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-20 sm:pt-24 lg:pt-32"><CtaBand title="Laten we kennismaken" /></div>
    </>
  )
}
