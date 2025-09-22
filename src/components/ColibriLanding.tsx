"use client";
import React, { useMemo, useState } from "react";

// =======================
//  El Vuelo del Colibrí — Landing Responsive (solo diseño)
//  - 100% Tailwind, sin dependencias externas
//  - Bilingüe ES/EN con toggle local (sin i18n lib)
//  - Navbar móvil (hamburger) + layout responsive móvil/tablet/desktop
//  - Sin formularios funcionales ni iframes (placeholders de diseño)
// =======================

// Pequeños íconos inline para no depender de librerías
// arriba ya tienes: import React, { useMemo, useState } from "react";
type SvgProps = React.SVGProps<SVGSVGElement>;

const IconMenu = ({ className, ...rest }: SvgProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-6 h-6 ${className ?? ""}`}
    aria-hidden
    {...rest}
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const IconX = ({ className, ...rest }: SvgProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-6 h-6 ${className ?? ""}`}
    aria-hidden
    {...rest}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const Hummingbird = ({ className, ...rest }: SvgProps) => (
  <svg
    viewBox="0 0 64 64"
    className={`w-7 h-7 ${className ?? ""}`}
    aria-hidden
    {...rest}
  >
    <path
      d="M12 28c10-6 22-4 30 2 4 3 7 7 10 11-7-1-14-3-19-7-4 3-8 6-12 9 2-4 4-8 7-12-6-1-11-1-16 0z"
      fill="currentColor"
    />
  </svg>
);


const copy = {
  es: {
    brand: "El Vuelo del Colibrí",
    tagline: "Psicología clínica moderna y humana — atención en línea y presencial",
    ctaPrimary: "Agendar cita",
    nav: { services: "Servicios", approach: "Enfoque", about: "Quién soy", prices: "Precios", faq: "Preguntas", contact: "Contacto" },
    services: {
      title: "Servicios profesionales",
      items: [
        { t: "Terapia individual", d: "Acompañamiento para ansiedad, depresión, estrés y crecimiento personal." },
        { t: "Terapia de pareja", d: "Comunicación, límites y reconstrucción de la confianza." },
        { t: "Intervención breve", d: "Sesiones focalizadas con objetivos concretos." },
      ]
    },
    approach: {
      title: "Nuestro enfoque",
      bullets: [
        "Terapia Cognitivo‑Conductual (TCC)",
        "Mindfulness y regulación emocional",
        "Humanista y basado en evidencia",
        "Ética y confidencialidad"
      ]
    },
    about: {
      title: "Sobre mí",
      body: "Psicólogo(a) clínico(a) con formación en TCC y experiencia con pacientes nacionales e internacionales. Lenguaje claro y objetivos medibles desde la primera sesión.",
      creds: ["Cédula profesional verificada", "Miembro de asociaciones", "+5 años de práctica clínica"]
    },
    prices: {
      title: "Precios claros",
      mxn: { label: "Sesión (MXN)", price: "$700 MXN", sub: "50 minutos — online o presencial" },
      usd: { label: "International (USD)", price: "$60 USD", sub: "50 minutes — online" },
      note: "*Tarifas orientativas. Se confirman al agendar según modalidad y país."
    },
    testimonials: {
      title: "Opiniones",
      quotes: [
        { q: "Desde la primera sesión tuve pasos concretos.", a: "Paciente anónimo" },
        { q: "Calidez y herramientas prácticas para mi día a día.", a: "Paciente anónimo" }
      ]
    },
    faq: {
      title: "Preguntas frecuentes",
      qs: [
        { q: "¿Cómo es la primera sesión?", a: "Exploramos tu motivo de consulta y acordamos un plan de trabajo." },
        { q: "¿Atiendes en línea?", a: "Sí, con videollamada segura y materiales de apoyo." },
        { q: "¿Emites factura?", a: "Sí, bajo solicitud." }
      ]
    },
    contact: {
      title: "Contacto",
      desc: "¿Dudas antes de agendar? Escríbeme.",
    },
    footer: { legal: "Aviso de Privacidad", rights: "Todos los derechos reservados" }
  },
  en: {
    brand: "El Vuelo del Colibrí",
    tagline: "Modern, compassionate clinical psychology — online & in‑person",
    ctaPrimary: "Book now",
    nav: { services: "Services", approach: "Approach", about: "About", prices: "Pricing", faq: "FAQ", contact: "Contact" },
    services: {
      title: "Professional services",
      items: [
        { t: "Individual therapy", d: "Support for anxiety, depression, stress and growth." },
        { t: "Couples therapy", d: "Communication, boundaries and rebuilding trust." },
        { t: "Brief intervention", d: "Focused work with concrete goals." },
      ]
    },
    approach: {
      title: "Our approach",
      bullets: [
        "Cognitive Behavioral Therapy (CBT)",
        "Mindfulness & emotion regulation",
        "Humanistic, evidence‑based",
        "Ethics & confidentiality"
      ]
    },
    about: {
      title: "About me",
      body: "Clinical psychologist trained in CBT with international experience. Clear language and measurable goals from session one.",
      creds: ["Professional license verified", "Member of associations", "+5 years clinical practice"]
    },
    prices: {
      title: "Transparent pricing",
      mxn: { label: "Session (MXN)", price: "$700 MXN", sub: "50 minutes — online or in‑person" },
      usd: { label: "International (USD)", price: "$60 USD", sub: "50 minutes — online" },
      note: "*Indicative rates. Confirmed upon booking by modality & country."
    },
    testimonials: {
      title: "Testimonials",
      quotes: [
        { q: "I got clarity and next steps from the first session.", a: "Anonymous" },
        { q: "Warm and practical tools for everyday life.", a: "Anonymous" }
      ]
    },
    faq: {
      title: "Frequently asked questions",
      qs: [
        { q: "How is the first session?", a: "We explore your goals and agree on a plan." },
        { q: "Do you offer online sessions?", a: "Yes, secure video calls with support materials." },
        { q: "Do you issue invoices?", a: "Yes, upon request." }
      ]
    },
    contact: { title: "Contact", desc: "Questions before booking? Send a message." },
    footer: { legal: "Privacy Notice", rights: "All rights reserved" }
  }
} as const;

type Lang = keyof typeof copy;

const Section = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">{children}</section>
);

export default function ColibriLandingResponsive() {
  const [lang, setLang] = useState<Lang>("es");
  const t = useMemo(() => copy[lang], [lang]);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-emerald-50 text-slate-800 font-sans antialiased">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="text-emerald-600"><Hummingbird/></span>
            <span className="tracking-tight">{t.brand}</span>
            <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">PSICO</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-emerald-700">{t.nav.services}</a>
            <a href="#approach" className="hover:text-emerald-700">{t.nav.approach}</a>
            <a href="#about" className="hover:text-emerald-700">{t.nav.about}</a>
            <a href="#pricing" className="hover:text-emerald-700">{t.nav.prices}</a>
            <a href="#faq" className="hover:text-emerald-700">{t.nav.faq}</a>
            <a href="#contact" className="hover:text-emerald-700">{t.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={() => setLang(l => l === "es" ? "en" : "es")} className="hidden sm:inline-flex text-sm font-medium px-3 py-2 rounded-lg border hover:bg-slate-50">
              {lang === "es" ? "EN" : "ES"}
            </button>
            <a href="#contact" className="hidden md:inline-flex text-sm font-medium px-3 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">{t.ctaPrimary}</a>
            <button onClick={() => setMobileOpen(true)} className="md:hidden p-2 rounded-lg hover:bg-slate-100" aria-label="Open menu">
              <IconMenu/>
            </button>
          </div>
        </div>

        {/* Mobile sheet */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50">
            <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)}></div>
            <div className="absolute right-0 top-0 h-full w-80 max-w-[85%] bg-white shadow-xl p-4 flex flex-col">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-semibold text-slate-900">
                  <span className="text-emerald-600"><Hummingbird/></span>
                  <span>{t.brand}</span>
                </div>
                <button onClick={() => setMobileOpen(false)} className="p-2 rounded-lg hover:bg-slate-100" aria-label="Close menu"><IconX/></button>
              </div>
              <nav className="mt-6 grid gap-3 text-slate-700">
                <a onClick={()=>setMobileOpen(false)} href="#services" className="px-3 py-2 rounded-lg hover:bg-slate-100">{t.nav.services}</a>
                <a onClick={()=>setMobileOpen(false)} href="#approach" className="px-3 py-2 rounded-lg hover:bg-slate-100">{t.nav.approach}</a>
                <a onClick={()=>setMobileOpen(false)} href="#about" className="px-3 py-2 rounded-lg hover:bg-slate-100">{t.nav.about}</a>
                <a onClick={()=>setMobileOpen(false)} href="#pricing" className="px-3 py-2 rounded-lg hover:bg-slate-100">{t.nav.prices}</a>
                <a onClick={()=>setMobileOpen(false)} href="#faq" className="px-3 py-2 rounded-lg hover:bg-slate-100">{t.nav.faq}</a>
                <a onClick={()=>setMobileOpen(false)} href="#contact" className="px-3 py-2 rounded-lg hover:bg-slate-100">{t.nav.contact}</a>
              </nav>
              <div className="mt-auto grid grid-cols-2 gap-2">
                <button onClick={() => setLang(l => l === "es" ? "en" : "es")} className="text-sm font-medium px-3 py-2 rounded-lg border hover:bg-slate-50">{lang === "es" ? "EN" : "ES"}</button>
                <a href="#contact" onClick={()=>setMobileOpen(false)} className="text-center text-sm font-medium px-3 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">{t.ctaPrimary}</a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <Section id="home">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-sky-600">{t.brand}</span>
            </h1>
            <p className="mt-4 text-lg text-slate-700">{t.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="px-5 py-3 rounded-xl bg-emerald-600 text-white font-medium shadow hover:bg-emerald-700">{t.ctaPrimary}</a>
              <a href="#pricing" className="px-5 py-3 rounded-xl border font-medium hover:bg-slate-50">{lang === 'es' ? 'Ver precios' : 'See pricing'}</a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2">✓ <span>Confidencialidad</span></div>
              <div className="flex items-center gap-2">🌍 <span>Online · Presencial</span></div>
              <div className="flex items-center gap-2">★ <span>Basado en evidencia</span></div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 -z-10 bg-gradient-to-tr from-emerald-200 via-sky-100 to-fuchsia-100 rounded-3xl blur-2xl opacity-70"/>
            <div className="aspect-[4/3] rounded-2xl border bg-white/70 p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <Hummingbird/>
                </div>
                <p className="mt-4 text-slate-700 text-sm sm:text-base">(Área de imagen / ilustración del colibrí)</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section id="services">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">{t.services.title}</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s, i) => (
            <div key={i} className="rounded-2xl border bg-white/70 shadow-sm p-5 hover:shadow-md transition-shadow">
              <div className="text-lg font-medium text-slate-900">{s.t}</div>
              <p className="mt-2 text-slate-600 text-sm">{s.d}</p>
              <div className="mt-4">
                <a href="#contact" className="text-emerald-700 font-medium hover:underline inline-flex items-center">{t.ctaPrimary} →</a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Approach */}
      <Section id="approach">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">{t.approach.title}</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {t.approach.bullets.map((b, i) => (
            <span key={i} className="px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-sm">{b}</span>
          ))}
        </div>
      </Section>

      {/* About */}
      <Section id="about">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">{t.about.title}</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">{t.about.body}</p>
            <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
              {t.about.creds.map((c, i) => (
                <li key={i} className="flex items-center gap-2">✓ <span>{c}</span></li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border bg-white/70 p-6">
            <div className="font-medium text-slate-900">Reserva rápida (placeholder)</div>
            <p className="text-sm text-slate-600 mt-2">Aquí irá el widget de agenda cuando activemos funcionalidades.</p>
            <a href="#contact" className="mt-4 inline-block px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">{t.ctaPrimary}</a>
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">{t.prices.title}</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {[t.prices.mxn, t.prices.usd].map((p, i) => (
            <div key={i} className="rounded-2xl border bg-white/70 p-6">
              <div className="text-sm text-slate-600">{p.label}</div>
              <div className="mt-2 text-3xl font-semibold text-slate-900">{p.price}</div>
              <div className="text-slate-600 mt-1">{p.sub}</div>
              <a href="#contact" className="mt-4 inline-block px-4 py-2 rounded-lg border font-medium hover:bg-slate-50">{t.ctaPrimary}</a>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 mt-3">{t.prices.note}</p>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">{t.testimonials.title}</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {t.testimonials.quotes.map((q, i) => (
            <figure key={i} className="rounded-2xl border bg-white/70 p-6">
              <blockquote className="text-slate-700 italic">“{q.q}”</blockquote>
              <figcaption className="mt-3 text-sm text-slate-500">— {q.a}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">{t.faq.title}</h2>
        <div className="mt-6 grid gap-4">
          {t.faq.qs.map((f, i) => (
            <details key={i} className="bg-white/80 rounded-xl border p-4 open:shadow-sm">
              <summary className="cursor-pointer font-medium text-slate-900">{f.q}</summary>
              <p className="mt-2 text-slate-600 text-sm">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">{t.contact.title}</h2>
            <p className="mt-2 text-slate-700">{t.contact.desc}</p>
            <div className="mt-6 grid gap-4">
              <div>
                <label className="block text-sm text-slate-600">{lang === 'es' ? 'Nombre' : 'Name'}</label>
                <div className="mt-1 h-11 w-full rounded-lg border border-slate-300 bg-white/70"></div>
              </div>
              <div>
                <label className="block text-sm text-slate-600">Email</label>
                <div className="mt-1 h-11 w-full rounded-lg border border-slate-300 bg-white/70"></div>
              </div>
              <div>
                <label className="block text-sm text-slate-600">{lang === 'es' ? 'Mensaje' : 'Message'}</label>
                <div className="mt-1 h-28 w-full rounded-lg border border-slate-300 bg-white/70"></div>
              </div>
              <div className="flex gap-3">
                <a href="#" className="px-4 py-2 rounded-lg bg-emerald-600 text-white pointer-events-none opacity-70">{lang === 'es' ? 'Enviar (placeholder)' : 'Send (placeholder)'}</a>
                <a href="#pricing" className="px-4 py-2 rounded-lg border hover:bg-slate-50">{lang === 'es' ? 'Ver precios' : 'See pricing'}</a>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border bg-white/70 p-6">
            <div className="font-medium text-slate-900">Ubicación / Mapa (placeholder)</div>
            <div className="mt-3 aspect-[4/3] rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 border" />
            <p className="mt-3 text-xs text-slate-500">Este bloque será reemplazado por un mapa embebido cuando activemos funcionalidades.</p>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2 text-slate-800"><span className="text-emerald-600"><Hummingbird/></span> {t.brand}</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-emerald-700">{t.footer.legal}</a>
            <span>© {new Date().getFullYear()} {t.footer.rights}</span>
            <button onClick={() => setLang(l => l === "es" ? "en" : "es")} className="px-2 py-1.5 rounded-lg border hover:bg-slate-50">{lang === 'es' ? 'EN' : 'ES'}</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
