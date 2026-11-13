import { ContactForm } from '@/components/ContactForm'
import { Icon } from '@/components/Icon'
import { PageHero } from '@/components/sections'
import { SITE, mailHref, telHref, waHref } from '@/lib/site'

export const metadata = {
  title: 'Contact: plan een gratis adviesgesprek',
  description: `Neem contact op met Muaz IT voor IT-diensten of online marketing. U krijgt ${SITE.responseTime} reactie.`,
  alternates: { canonical: '/contact' },
}

type Props = { searchParams: Promise<{ dienst?: string }> }

export default async function ContactPage({ searchParams }: Props) {
  const { dienst = '' } = await searchParams

  const cards = [
    { icon: 'mail' as const, label: 'E-mail', value: SITE.email, href: mailHref },
    ...(SITE.phone && telHref ? [{ icon: 'phone' as const, label: 'Telefoon', value: SITE.phone.display, href: telHref }] : []),
    ...(SITE.whatsapp && waHref ? [{ icon: 'message' as const, label: 'WhatsApp', value: SITE.whatsapp.display, href: waHref }] : []),
    { icon: 'clock' as const, label: 'Bereikbaar', value: SITE.hours.label, href: null },
  ]

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Laten we <span className="text-gradient">kennismaken</span></>}
        text={`Vertel ons over uw bedrijf en uw vraag. Wij reageren ${SITE.responseTime} met een eerlijk advies, vrijblijvend en gratis.`}
      />

      <section className="relative -mt-12 pb-24 sm:-mt-16 lg:pb-32">
        <div className="container-x grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div className="card p-6 shadow-lift sm:p-10" data-reveal>
            <h2 className="text-2xl font-extrabold sm:text-3xl">Stuur ons een bericht</h2>
            <p className="mt-2 text-night-500">Velden met * zijn verplicht.</p>
            <div className="mt-8"><ContactForm defaultService={dienst} /></div>
          </div>

          <aside className="space-y-4">
            {cards.map((c, i) => {
              const inner = (
                <>
                  <span className="icon-tile"><Icon name={c.icon} className="size-5" /></span>
                  <span className="min-w-0">
                    <span className="block text-xs font-bold tracking-[0.14em] text-night-400 uppercase">{c.label}</span>
                    <span className="mt-0.5 block truncate font-semibold text-night-950">{c.value}</span>
                  </span>
                </>
              )
              return c.href ? (
                <a key={c.label} href={c.href} className="spotlight card flex items-center gap-4 p-5 transition hover:-translate-y-0.5 hover:shadow-lift" data-reveal="right" style={{ '--d': `${i * 80}ms` } as React.CSSProperties}>{inner}</a>
              ) : (
                <div key={c.label} className="card flex items-center gap-4 p-5" data-reveal="right" style={{ '--d': `${i * 80}ms` } as React.CSSProperties}>{inner}</div>
              )
            })}

            <div className="noise relative overflow-hidden rounded-3xl bg-night-950 p-7 text-white" data-reveal="right">
              <div className="absolute -top-16 -right-16 size-48 rounded-full bg-brand-600/40 blur-3xl" aria-hidden="true" />
              <h3 className="relative text-lg font-bold text-white">Bedrijfsgegevens</h3>
              <dl className="relative mt-4 space-y-2 text-sm text-night-300">
                <div className="flex justify-between gap-4"><dt>Naam</dt><dd className="font-semibold text-white">{SITE.legalName}</dd></div>
                <div className="flex justify-between gap-4"><dt>KvK</dt><dd className="font-semibold text-white">{SITE.kvk}</dd></div>
                <div className="flex justify-between gap-4"><dt>Btw</dt><dd className="font-semibold text-white">{SITE.btw}</dd></div>
                {SITE.address && (
                  <div className="flex justify-between gap-4"><dt>Adres</dt><dd className="text-right font-semibold text-white">{SITE.address.street}<br />{SITE.address.postalCode} {SITE.address.city}</dd></div>
                )}
              </dl>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
