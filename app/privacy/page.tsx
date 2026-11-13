import { PageHero } from '@/components/sections'
import { SITE, mailHref } from '@/lib/site'

export const metadata = {
  title: 'Privacyverklaring',
  description: `Hoe ${SITE.name} omgaat met uw persoonsgegevens.`,
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy" title="Privacyverklaring" text={`${SITE.name} gaat zorgvuldig om met uw persoonsgegevens en houdt zich aan de Algemene Verordening Gegevensbescherming (AVG).`} />
      <section className="section">
        <div className="container-x">
          <article className="prose-muaz mx-auto max-w-3xl">
            <h2>Wie zijn wij?</h2>
            <p>
              {SITE.legalName}, ingeschreven bij de Kamer van Koophandel onder nummer {SITE.kvk} (btw-nummer {SITE.btw}), is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in deze verklaring.
            </p>
            <h2>Welke gegevens verwerken wij?</h2>
            <p>Wanneer u contact met ons opneemt via het formulier, e-mail of telefoon, verwerken wij de gegevens die u zelf verstrekt:</p>
            <ul>
              <li>Naam en eventueel bedrijfsnaam</li>
              <li>E-mailadres en telefoonnummer</li>
              <li>De inhoud van uw bericht</li>
            </ul>
            <h2>Waarom verwerken wij deze gegevens?</h2>
            <ul>
              <li>Om uw vraag te beantwoorden en contact met u op te nemen</li>
              <li>Om een offerte op te stellen en onze diensten uit te voeren</li>
              <li>Om te voldoen aan wettelijke verplichtingen, zoals de fiscale bewaarplicht</li>
            </ul>
            <h2>Hoe lang bewaren wij gegevens?</h2>
            <p>Wij bewaren gegevens niet langer dan nodig. Contactaanvragen zonder vervolg verwijderen wij uiterlijk na twaalf maanden. Facturen bewaren wij zeven jaar, zoals de wet voorschrijft.</p>
            <h2>Delen met derden</h2>
            <p>Wij verkopen uw gegevens nooit. Wij delen gegevens alleen met partijen die nodig zijn voor onze dienstverlening (zoals hosting en e-mail), met wie wij een verwerkersovereenkomst hebben.</p>
            <h2>Uw rechten</h2>
            <p>
              U heeft het recht om uw gegevens in te zien, te laten corrigeren of te laten verwijderen. Stuur hiervoor een e-mail naar <a href={mailHref}>{SITE.email}</a>. U kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens.
            </p>
            <h2>Beveiliging</h2>
            <p>Wij nemen passende technische en organisatorische maatregelen om uw gegevens te beschermen, waaronder versleutelde verbindingen (HTTPS) en tweestapsverificatie op onze systemen.</p>
          </article>
        </div>
      </section>
    </>
  )
}
