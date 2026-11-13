'use client'

import { useState } from 'react'
import { SERVICES } from '@/lib/services'
import { SITE, mailHref } from '@/lib/site'
import { Icon } from './Icon'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function ContactForm({ defaultService = '' }: { defaultService?: string }) {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setError('')
    const data = Object.fromEntries(new FormData(e.currentTarget))
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = (await res.json().catch(() => ({}))) as { error?: string }
      if (!res.ok) throw new Error(json.error || 'Versturen is niet gelukt.')
      setStatus('sent')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Versturen is niet gelukt.')
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="grid place-items-center py-12 text-center" role="status">
        <span className="icon-tile size-16"><Icon name="check" className="size-8" strokeWidth={2.5} /></span>
        <h3 className="mt-6 text-2xl font-extrabold">Bedankt voor uw bericht!</h3>
        <p className="mt-3 max-w-sm text-night-500">Wij nemen {SITE.responseTime} contact met u op.</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" noValidate={false}>
      <div>
        <label htmlFor="name" className="label">Naam *</label>
        <input id="name" name="name" required autoComplete="name" className="input" placeholder="Uw naam" />
      </div>
      <div>
        <label htmlFor="company" className="label">Bedrijf</label>
        <input id="company" name="company" autoComplete="organization" className="input" placeholder="Bedrijfsnaam (optioneel)" />
      </div>
      <div>
        <label htmlFor="email" className="label">E-mail *</label>
        <input id="email" name="email" type="email" required autoComplete="email" className="input" placeholder="naam@bedrijf.nl" />
      </div>
      <div>
        <label htmlFor="phone" className="label">Telefoon</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className="input" placeholder="Optioneel" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="service" className="label">Waar kunnen wij mee helpen?</label>
        <select id="service" name="service" defaultValue={defaultService} className="input cursor-pointer">
          <option value="">Maak een keuze</option>
          {SERVICES.map((s) => <option key={s.slug} value={s.name}>{s.name}</option>)}
          <option value="Combinatie / weet ik nog niet">Combinatie / weet ik nog niet</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="label">Bericht *</label>
        <textarea id="message" name="message" required rows={5} className="input resize-y" placeholder="Vertel kort over uw bedrijf en uw vraag…" />
      </div>
      {/* Honeypot tegen spam: onzichtbaar voor mensen */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {status === 'error' && (
        <p className="rounded-xl bg-red-50 p-4 text-sm text-red-800 ring-1 ring-red-200 sm:col-span-2" role="alert">
          {error} U kunt ons ook direct mailen via{' '}
          <a href={mailHref} className="font-semibold underline">{SITE.email}</a>.
        </p>
      )}

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-night-400">Wij gebruiken uw gegevens alleen om contact met u op te nemen.</p>
        <button type="submit" disabled={status === 'sending'} className="btn-primary min-h-13 px-8">
          {status === 'sending' ? 'Versturen…' : 'Verstuur bericht'}
          <Icon name="arrow-right" className="size-4" />
        </button>
      </div>
    </form>
  )
}
