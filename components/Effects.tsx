'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

/**
 * Lichte, globale effecten zonder extra libraries:
 * - scroll-reveal voor elk element met [data-reveal] (robuust bij snel swipen)
 * - spotlight-gloed die de muis volgt op .spotlight-elementen
 * - header krijgt data-scrolled zodra de pagina scrolt
 */
export function Effects() {
  const pathname = usePathname()

  useEffect(() => {
    const root = document.documentElement
    root.classList.add('fx')
    // Alles wat boven of in beeld staat wordt getoond. Ook elementen die bij een snelle swipe
    // in één frame zijn overgeslagen (IntersectionObserver mist die op mobiel).
    let pending = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)'))
    let frame = 0
    const check = () => {
      frame = 0
      const limit = window.innerHeight * 0.92
      pending = pending.filter((el) => {
        if (el.getBoundingClientRect().top < limit) {
          el.classList.add('is-visible')
          return false
        }
        return true
      })
      if (!pending.length) stop()
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(check) }
    const stop = () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    check()
    return stop
  }, [pathname])

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return // geen werk tijdens touch-scrollen
      const el = (e.target as Element | null)?.closest<HTMLElement>('.spotlight')
      if (!el) return
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - r.left}px`)
      el.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    const onScroll = () => document.documentElement.toggleAttribute('data-scrolled', window.scrollY > 12)
    onScroll()
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return null
}
