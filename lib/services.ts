import type { IconName } from '@/components/Icon'

export type Category = 'it' | 'marketing'

export type Service = {
  slug: string
  name: string
  category: Category
  icon: IconName
  image: string
  imageAlt: string
  short: string
  intro: string
  features: { title: string; text: string }[]
  deliverables: string[]
  forWho: string
}

export const CATEGORIES: Record<Category, { label: string; title: string; text: string }> = {
  it: {
    label: 'IT-diensten',
    title: 'IT die gewoon werkt',
    text: 'Beheer, cloud, beveiliging en websites. Wij zorgen dat uw systemen veilig, snel en up-to-date zijn, zodat u zich kunt richten op uw werk.',
  },
  marketing: {
    label: 'Online marketing',
    title: 'Marketing die klanten oplevert',
    text: 'Advertenties, campagnes en vindbaarheid. Wij brengen de juiste mensen naar uw bedrijf en meten wat elke euro oplevert.',
  },
}

export const SERVICES: Service[] = [
  {
    slug: 'it-beheer-support',
    name: 'IT-beheer & support',
    category: 'it',
    icon: 'headphones',
    image: '/images/it-beheer.webp',
    imageAlt: 'Laptop in een donkere ruimte met een kleurrijk oplichtend scherm',
    short: 'Eén vaste IT-partner voor uw werkplekken, netwerk en vragen.',
    intro:
      'Geen gedoe meer met haperende laptops, trage netwerken of losse leveranciers. Wij beheren uw IT-omgeving proactief en staan klaar als er iets is.',
    features: [
      { title: 'Helpdesk', text: 'Snel antwoord op IT-vragen van u en uw medewerkers, op afstand of op locatie.' },
      { title: 'Werkplekbeheer', text: 'Laptops en pc’s inrichten, updaten en beveiligen volgens één vaste standaard.' },
      { title: 'Netwerk & wifi', text: 'Een stabiel, veilig netwerk op kantoor met goede dekking in elke ruimte.' },
      { title: 'Monitoring', text: 'Wij zien problemen aankomen en lossen ze op voordat u er last van heeft.' },
      { title: 'Hardware-advies', text: 'Onafhankelijk advies en levering van apparatuur die past bij uw werk.' },
      { title: 'Documentatie', text: 'Alles vastgelegd: accounts, apparaten, licenties en afspraken.' },
    ],
    deliverables: ['Vast aanspreekpunt', 'Heldere maandelijkse afspraken', 'Overzicht van al uw apparaten en licenties', 'Ondersteuning op afstand en op locatie'],
    forWho: 'Zzp’ers, MKB-bedrijven en kantoren die hun IT willen uitbesteden.',
  },
  {
    slug: 'cloud-microsoft-365',
    name: 'Cloud & Microsoft 365',
    category: 'it',
    icon: 'cloud',
    image: '/images/cloud.webp',
    imageAlt: 'Serverkasten met netjes gelabelde netwerkkabels in een datacenter',
    short: 'Veilig samenwerken in de cloud, overal en op elk apparaat.',
    intro:
      'Wij richten Microsoft 365 of Google Workspace professioneel in, migreren uw bestanden en e-mail en zorgen voor goede back-ups.',
    features: [
      { title: 'Migratie', text: 'Uw e-mail, bestanden en agenda’s zonder dataverlies naar de cloud.' },
      { title: 'Zakelijke e-mail', text: 'E-mail op uw eigen domein, correct ingesteld zodat het niet in spam belandt.' },
      { title: 'Teams & SharePoint', text: 'Een logische structuur voor samenwerken en bestanden delen.' },
      { title: 'Back-up', text: 'Automatische back-ups van mailboxen en bestanden, buiten Microsoft om.' },
      { title: 'Licentiebeheer', text: 'Alleen betalen voor wat u gebruikt, met het juiste abonnement per persoon.' },
      { title: 'Training', text: 'Uw team leert in korte sessies slim werken met de nieuwe tools.' },
    ],
    deliverables: ['Ingerichte tenant met beveiligingsinstellingen', 'Gemigreerde mail en bestanden', 'Back-up van cloud-data', 'Korte handleiding voor uw team'],
    forWho: 'Bedrijven die flexibel en plaatsonafhankelijk willen werken.',
  },
  {
    slug: 'cybersecurity',
    name: 'Cybersecurity',
    category: 'it',
    icon: 'shield-check',
    image: '/images/security.webp',
    imageAlt: 'Oplichtende printplaat in blauw en groen licht',
    short: 'Bescherming tegen phishing, ransomware en datalekken.',
    intro:
      'Een aanval kost een klein bedrijf al snel duizenden euro’s. Wij brengen de risico’s in kaart en nemen praktische maatregelen die echt verschil maken.',
    features: [
      { title: 'Security-scan', text: 'Een helder overzicht van de zwakke plekken in uw IT-omgeving.' },
      { title: 'Tweestapsverificatie', text: 'Accounts beveiligd met MFA, zodat een gelekt wachtwoord niet genoeg is.' },
      { title: 'Endpoint-beveiliging', text: 'Professionele bescherming op alle laptops en pc’s.' },
      { title: 'E-mailbeveiliging', text: 'SPF, DKIM en DMARC ingesteld en filtering tegen phishing.' },
      { title: 'Bewustwording', text: 'Uw medewerkers herkennen nep-mails en weten wat ze moeten doen.' },
      { title: 'Herstelplan', text: 'Als het toch misgaat weet iedereen wat te doen, en zijn uw back-ups getest.' },
    ],
    deliverables: ['Rapport met risico’s en prioriteiten', 'Ingevoerde beveiligingsmaatregelen', 'Getest back-up- en herstelplan', 'Advies over AVG en datalekken'],
    forWho: 'Elk bedrijf dat werkt met klantgegevens, e-mail en online systemen.',
  },
  {
    slug: 'websites-webapps',
    name: 'Websites & webapps',
    category: 'it',
    icon: 'code',
    image: '/images/websites.webp',
    imageAlt: 'Laptop met programmeercode op een wit bureau',
    short: 'Snelle, moderne websites die bezoekers omzetten in klanten.',
    intro:
      'Wij bouwen websites en webapplicaties die snel laden, goed vindbaar zijn en er op elk scherm professioneel uitzien. Van visitekaartje tot webshop of maatwerk-portaal.',
    features: [
      { title: 'Design op maat', text: 'Een uniek ontwerp in uw huisstijl, geen standaard template.' },
      { title: 'Supersnel', text: 'Gebouwd met moderne technieken voor topscores in Google PageSpeed.' },
      { title: 'SEO-basis', text: 'Technisch goed vindbaar vanaf de eerste dag.' },
      { title: 'Webshops', text: 'Verkopen via uw eigen webshop met iDEAL en andere betaalmethoden.' },
      { title: 'Maatwerk', text: 'Klantportalen, boekingssystemen en koppelingen met uw software.' },
      { title: 'Hosting & onderhoud', text: 'Veilige hosting, updates en back-ups zonder omkijken.' },
    ],
    deliverables: ['Responsive website of webapp', 'Contactformulieren en conversiemeting', 'Hosting, SSL en back-ups', 'Uitleg zodat u zelf content kunt aanpassen'],
    forWho: 'Ondernemers die online professioneel willen overkomen en meer aanvragen willen.',
  },
  {
    slug: 'google-ads',
    name: 'Google Ads',
    category: 'marketing',
    icon: 'target',
    image: '/images/google-ads.webp',
    imageAlt: 'Laptop met een analytics-dashboard vol grafieken',
    short: 'Bovenaan in Google, precies op het moment dat klanten zoeken.',
    intro:
      'Met Google Ads bereikt u mensen die nú zoeken naar wat u aanbiedt. Wij zetten campagnes op die winstgevend zijn en sturen bij op basis van echte resultaten.',
    features: [
      { title: 'Zoekwoordonderzoek', text: 'Wij vinden de zoektermen waarop uw klanten echt zoeken en kopen.' },
      { title: 'Search & Performance Max', text: 'De juiste campagnetypes voor uw doel en budget.' },
      { title: 'Advertentieteksten', text: 'Overtuigende advertenties die opvallen en klikken opleveren.' },
      { title: 'Conversiemeting', text: 'Correct gemeten aanvragen, telefoontjes en verkopen.' },
      { title: 'Landingspagina’s', text: 'Pagina’s die bezoekers van een advertentie omzetten in klanten.' },
      { title: 'Optimalisatie', text: 'Wekelijks bijsturen op biedingen, zoektermen en budget.' },
    ],
    deliverables: ['Campagnestructuur en zoekwoordenplan', 'Conversietracking via Google Tag Manager', 'Maandelijkse rapportage in begrijpelijke taal', 'Volledige toegang tot uw eigen account'],
    forWho: 'Bedrijven die snel meer aanvragen of verkopen willen uit Google.',
  },
  {
    slug: 'social-media-advertenties',
    name: 'Social media campagnes',
    category: 'marketing',
    icon: 'megaphone',
    image: '/images/social.webp',
    imageAlt: 'Iconen van sociale media-apps in 3D op een donkere achtergrond',
    short: 'Advertenties op Instagram, Facebook, TikTok en LinkedIn.',
    intro:
      'Wij bedenken, maken en beheren advertentiecampagnes op social media die opvallen in de tijdlijn en uw doelgroep aanzetten tot actie.',
    features: [
      { title: 'Meta Ads', text: 'Campagnes op Facebook en Instagram met slimme doelgroepen.' },
      { title: 'TikTok Ads', text: 'Korte video-advertenties die passen bij het platform.' },
      { title: 'LinkedIn Ads', text: 'Zakelijke beslissers bereiken op functie, branche en bedrijf.' },
      { title: 'Creatives', text: 'Beelden, video’s en teksten die stoppen met scrollen.' },
      { title: 'Retargeting', text: 'Bezoekers van uw website opnieuw bereiken met het juiste bericht.' },
      { title: 'A/B-testen', text: 'Doorlopend testen welke boodschap en beelden het beste werken.' },
    ],
    deliverables: ['Campagneplan per platform', 'Advertentiemateriaal (beeld, video, tekst)', 'Pixel- en conversie-instellingen', 'Heldere maandrapportage'],
    forWho: 'Merken en bedrijven die zichtbaarheid, volgers en leads willen.',
  },
  {
    slug: 'seo',
    name: 'SEO & vindbaarheid',
    category: 'marketing',
    icon: 'search',
    image: '/images/seo.webp',
    imageAlt: 'Scherm met statistieken en grafieken van websitebezoekers',
    short: 'Duurzaam hoger in Google, zonder te betalen per klik.',
    intro:
      'Met SEO bouwt u aan bezoekers die blijven komen. Wij verbeteren de techniek, inhoud en autoriteit van uw website, en maken u lokaal beter vindbaar.',
    features: [
      { title: 'SEO-audit', text: 'Een volledige analyse van techniek, content en concurrentie.' },
      { title: 'Technische SEO', text: 'Snelheid, structuur en indexatie in orde.' },
      { title: 'Content', text: 'Teksten die aansluiten op wat uw klanten zoeken.' },
      { title: 'Lokale SEO', text: 'Beter zichtbaar in Google Maps met een sterk Bedrijfsprofiel.' },
      { title: 'Linkbuilding', text: 'Waardevolle verwijzingen die uw autoriteit vergroten.' },
      { title: 'Rapportage', text: 'Inzicht in posities, bezoekers en aanvragen uit Google.' },
    ],
    deliverables: ['SEO-audit met actieplan', 'Geoptimaliseerde pagina’s en content', 'Ingericht Google Bedrijfsprofiel', 'Maandelijkse voortgangsrapportage'],
    forWho: 'Bedrijven die op lange termijn meer bezoekers willen uit Google.',
  },
  {
    slug: 'branding-content',
    name: 'Branding & content',
    category: 'marketing',
    icon: 'pen-tool',
    image: '/images/branding.webp',
    imageAlt: 'Kleurstalen en schetsen van een ontwerper op een tafel',
    short: 'Een sterk merk met een herkenbare stijl en boodschap.',
    intro:
      'Een professioneel merk wekt vertrouwen. Wij helpen met logo, huisstijl en content die overal hetzelfde verhaal vertelt: op uw website, social media en in advertenties.',
    features: [
      { title: 'Logo & huisstijl', text: 'Een tijdloos logo met kleuren, lettertypes en richtlijnen.' },
      { title: 'Merkverhaal', text: 'Een heldere positionering en boodschap die u onderscheidt.' },
      { title: 'Social content', text: 'Posts, stories en reels die passen bij uw merk.' },
      { title: 'Fotografie & video', text: 'Beeldmateriaal dat uw bedrijf professioneel laat zien.' },
      { title: 'Copywriting', text: 'Teksten voor website, advertenties en nieuwsbrieven.' },
      { title: 'E-mailmarketing', text: 'Nieuwsbrieven en automatische flows die klanten terugbrengen.' },
    ],
    deliverables: ['Logo en huisstijlgids', 'Contentkalender', 'Templates voor social media', 'Tekst- en beeldmateriaal'],
    forWho: 'Starters en groeiende bedrijven die professioneler willen overkomen.',
  },
]

export const serviceHref = (slug: string) => `/diensten/${slug}`
export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug)
export const byCategory = (c: Category) => SERVICES.filter((s) => s.category === c)

export const PLATFORMS = [
  'Google Ads', 'Meta Ads', 'Instagram', 'TikTok', 'LinkedIn', 'Microsoft 365', 'Google Analytics 4',
  'Google Tag Manager', 'Azure', 'Google Workspace', 'WordPress', 'Next.js', 'Shopify', 'Cloudflare',
]

export const STEPS = [
  { icon: 'message' as IconName, title: 'Kennismaking', text: 'Een vrijblijvend gesprek over uw bedrijf, doelen en huidige situatie.' },
  { icon: 'search' as IconName, title: 'Analyse & plan', text: 'Wij brengen alles in kaart en maken een concreet plan met een heldere prijs.' },
  { icon: 'rocket' as IconName, title: 'Uitvoering', text: 'Wij voeren het plan uit en houden u op de hoogte van elke stap.' },
  { icon: 'trending-up' as IconName, title: 'Meten & verbeteren', text: 'Wij meten de resultaten en blijven bijsturen voor het beste rendement.' },
]

export const FAQS = [
  { q: 'Werken jullie alleen voor grote bedrijven?', a: 'Nee. Wij werken juist veel voor zzp’ers en MKB-bedrijven die één betrouwbare partner zoeken voor hun IT en marketing.' },
  { q: 'Kan ik ook alleen marketing of alleen IT afnemen?', a: 'Zeker. U kiest de diensten die u nodig heeft. Het voordeel van beide bij ons: uw website, techniek en campagnes sluiten naadloos op elkaar aan.' },
  { q: 'Wat kost het?', a: 'Dat hangt af van wat u nodig heeft. Na een kort kennismakingsgesprek krijgt u een duidelijke offerte met een vaste prijs of een vast maandbedrag, zonder verrassingen achteraf.' },
  { q: 'Zit ik vast aan een lang contract?', a: 'Nee. Wij geloven in resultaat, niet in lange contracten. Maandelijkse diensten zijn per maand opzegbaar, tenzij we samen iets anders afspreken.' },
  { q: 'Blijf ik eigenaar van mijn advertentieaccounts en website?', a: 'Ja. Advertentieaccounts, data, domeinnaam en website staan op uw naam. Wij krijgen alleen toegang om het werk te doen.' },
]
