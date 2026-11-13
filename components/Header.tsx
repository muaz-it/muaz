import Link from 'next/link'
import { CATEGORIES, byCategory, serviceHref } from '@/lib/services'
import { NAV } from '@/lib/site'
import { Icon } from './Icon'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/0 transition-all duration-500 [html[data-scrolled]_&]:border-white/10 [html[data-scrolled]_&]:bg-night-950/80 [html[data-scrolled]_&]:shadow-2xl [html[data-scrolled]_&]:shadow-night-950/30 [html[data-scrolled]_&]:backdrop-blur-xl">
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Link href="/" className="shrink-0" aria-label="Muaz IT, naar de homepage">
          <Logo dark />
        </Link>

        <nav aria-label="Hoofdmenu" className="hidden lg:block">
          <ul className="flex items-center gap-1 rounded-full bg-white/[0.04] p-1.5 ring-1 ring-white/10 backdrop-blur">
            <li className="group relative">
              <Link href="/diensten" className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-night-200 transition hover:bg-white/10 hover:text-white">
                Diensten <Icon name="chevron-down" className="size-4 transition duration-300 group-hover:rotate-180" />
              </Link>
              <div className="invisible absolute left-1/2 top-full w-[44rem] -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="grid grid-cols-2 gap-2 rounded-3xl bg-white p-3 shadow-lift ring-1 ring-night-100">
                  {(['it', 'marketing'] as const).map((cat) => (
                    <div key={cat}>
                      <p className="px-3 pt-2 pb-1 text-xs font-bold tracking-[0.14em] text-brand-600 uppercase">{CATEGORIES[cat].label}</p>
                      {byCategory(cat).map((s) => (
                        <Link key={s.slug} href={serviceHref(s.slug)} className="group/item flex items-start gap-3 rounded-2xl p-3 transition hover:bg-night-50">
                          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition group-hover/item:bg-gradient-to-br group-hover/item:from-brand-500 group-hover/item:to-accent-500 group-hover/item:text-white">
                            <Icon name={s.icon} className="size-5" />
                          </span>
                          <span>
                            <span className="block text-sm font-bold text-night-950">{s.name}</span>
                            <span className="block text-xs leading-snug text-night-500">{s.short}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </li>
            {NAV.slice(1).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block rounded-full px-4 py-2 text-sm font-semibold text-night-200 transition hover:bg-white/10 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact" className="btn-primary hidden min-h-11 px-5 text-sm sm:inline-flex">
            Gratis adviesgesprek <Icon name="arrow-right" className="size-4" />
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
