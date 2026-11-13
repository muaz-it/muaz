import Link from 'next/link'
import { CATEGORIES, byCategory, serviceHref } from '@/lib/services'
import { SITE, mailHref, telHref } from '@/lib/site'
import { Icon } from './Icon'
import { Logo } from './Logo'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden bg-night-950 text-night-300">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" aria-hidden="true" />
      <div className="absolute -bottom-40 left-1/2 size-[40rem] -translate-x-1/2 rounded-full bg-brand-600/10 blur-3xl" aria-hidden="true" />

      <div className="container-x relative grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:py-20">
        <div>
          <Logo dark />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">{SITE.description}</p>
        </div>

        {(['it', 'marketing'] as const).map((cat) => (
          <div key={cat}>
            <h2 className="font-display text-sm font-bold tracking-wide text-white">{CATEGORIES[cat].label}</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {byCategory(cat).map((s) => (
                <li key={s.slug}>
                  <Link href={serviceHref(s.slug)} className="transition hover:text-white">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h2 className="font-display text-sm font-bold tracking-wide text-white">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={mailHref} className="flex items-center gap-2.5 transition hover:text-white">
                <Icon name="mail" className="size-4 text-accent-400" /> {SITE.email}
              </a>
            </li>
            {SITE.phone && telHref && (
              <li>
                <a href={telHref} className="flex items-center gap-2.5 transition hover:text-white">
                  <Icon name="phone" className="size-4 text-accent-400" /> {SITE.phone.display}
                </a>
              </li>
            )}
            <li className="flex items-center gap-2.5"><Icon name="clock" className="size-4 text-accent-400" /> {SITE.hours.label}</li>
            <li className="flex items-center gap-2.5"><Icon name="building" className="size-4 text-accent-400" /> KvK {SITE.kvk}</li>
            <li className="flex items-center gap-2.5"><Icon name="file" className="size-4 text-accent-400" /> Btw {SITE.btw}</li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {SITE.name}. Alle rechten voorbehouden. · KvK {SITE.kvk} · Btw {SITE.btw}</p>
          <ul className="flex gap-5">
            <li><Link href="/over-ons" className="hover:text-white">Over ons</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
