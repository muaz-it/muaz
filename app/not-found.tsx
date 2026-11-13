import Link from 'next/link'
import { Icon } from '@/components/Icon'
import { PageHero } from '@/components/sections'

export default function NotFound() {
  return (
    <PageHero eyebrow="404" title="Pagina niet gevonden" text="Deze pagina bestaat niet (meer). Ga terug naar de homepage of bekijk onze diensten.">
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn-primary">Naar de homepage <Icon name="arrow-right" className="size-4" /></Link>
        <Link href="/diensten" className="btn-ghost-dark">Bekijk diensten</Link>
      </div>
    </PageHero>
  )
}
