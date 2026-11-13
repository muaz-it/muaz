'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { SERVICES, serviceHref } from '@/lib/services'
import { NAV, SITE, mailHref } from '@/lib/site'
import { Icon } from './Icon'
import { Logo } from './Logo'

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const d = dialogRef.current
    if (!d) return
    if (open && !d.open) d.showModal()
    if (!open && d.open) d.close()
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="grid size-11 cursor-pointer place-items-center rounded-full text-white ring-1 ring-white/15 transition hover:bg-white/10 lg:hidden"
        aria-label="Menu openen"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <Icon name="menu" className="size-5" />
      </button>

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(false)}
        onClick={(e) => e.target === dialogRef.current && setOpen(false)}
        aria-label="Menu"
        className="m-0 ml-auto h-dvh max-h-dvh w-full max-w-sm bg-night-950 p-0 text-white backdrop:bg-night-950/60 backdrop:backdrop-blur-sm"
      >
        {open && (
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <Logo dark />
              <button type="button" onClick={() => setOpen(false)} className="grid size-11 cursor-pointer place-items-center rounded-full ring-1 ring-white/15 hover:bg-white/10" aria-label="Menu sluiten">
                <Icon name="x" className="size-5" />
              </button>
            </div>
            <nav aria-label="Mobiel menu" className="flex-1 overflow-y-auto px-5 py-6">
              <ul className="space-y-1">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center justify-between rounded-xl px-3 font-display text-lg font-bold hover:bg-white/5">
                      {item.label}
                      <Icon name="arrow-right" className="size-4 text-night-400" />
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-8 px-3 text-xs font-bold tracking-[0.14em] text-accent-300 uppercase">Diensten</p>
              <ul className="mt-2 grid gap-1">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link href={serviceHref(s.slug)} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-night-200 hover:bg-white/5 hover:text-white">
                      <Icon name={s.icon} className="size-4 text-brand-300" /> {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="space-y-3 border-t border-white/10 p-5">
              <Link href="/contact" className="btn-primary w-full">Gratis adviesgesprek</Link>
              <a href={mailHref} className="btn-ghost-dark w-full"><Icon name="mail" className="size-4" /> {SITE.email}</a>
            </div>
          </div>
        )}
      </dialog>
    </>
  )
}
