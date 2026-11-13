import type { MetadataRoute } from 'next'
import { SERVICES, serviceHref } from '@/lib/services'
import { absoluteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['/', '/diensten', '/over-ons', '/contact', '/privacy', ...SERVICES.map((s) => serviceHref(s.slug))]
  return pages.map((p) => ({ url: absoluteUrl(p), changeFrequency: 'monthly', priority: p === '/' ? 1 : p.startsWith('/diensten') ? 0.8 : 0.5 }))
}
