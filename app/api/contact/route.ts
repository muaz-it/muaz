import nodemailer from 'nodemailer'
import { SITE } from '@/lib/site'

export const runtime = 'nodejs'

const clean = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '')
const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)

export async function POST(req: Request) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return Response.json({ error: 'Ongeldig verzoek.' }, { status: 400 })
  }

  // Honeypot: bots vullen dit verborgen veld in. Doe alsof het gelukt is.
  if (clean(body.website, 200)) return Response.json({ ok: true })

  const data = {
    name: clean(body.name, 120),
    email: clean(body.email, 200),
    company: clean(body.company, 160),
    phone: clean(body.phone, 40),
    service: clean(body.service, 120),
    message: clean(body.message, 5000),
  }

  if (!data.name || !data.message || !isEmail(data.email)) {
    return Response.json({ error: 'Vul uw naam, een geldig e-mailadres en een bericht in.' }, { status: 422 })
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error('[contact] SMTP is niet ingesteld; bericht niet verzonden.')
    return Response.json({ error: 'Het formulier is tijdelijk niet beschikbaar.' }, { status: 503 })
  }

  const port = Number(SMTP_PORT) || 587
  const transporter = nodemailer.createTransport({ host: SMTP_HOST, port, secure: port === 465, auth: { user: SMTP_USER, pass: SMTP_PASS } })

  const text = [
    `Nieuwe aanvraag via ${SITE.url}`,
    '',
    `Naam:     ${data.name}`,
    `Bedrijf:  ${data.company || '-'}`,
    `E-mail:   ${data.email}`,
    `Telefoon: ${data.phone || '-'}`,
    `Dienst:   ${data.service || '-'}`,
    '',
    data.message,
  ].join('\n')

  try {
    await transporter.sendMail({
      from: `"${SITE.name} website" <${SMTP_USER}>`,
      to: CONTACT_TO || SITE.email,
      replyTo: `"${data.name.replace(/"/g, '')}" <${data.email}>`,
      subject: `Aanvraag: ${data.service || 'contact'} – ${data.name}`,
      text,
    })
  } catch (err) {
    console.error('[contact] versturen mislukt', err)
    return Response.json({ error: 'Versturen is niet gelukt.' }, { status: 502 })
  }

  return Response.json({ ok: true })
}
