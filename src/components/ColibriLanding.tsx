"use client";

import Image from "next/image";
import {
  CalendarDays,
  ChevronDown,
  Facebook,
  Heart,
  Instagram,
  Leaf,
  LockKeyhole,
  Mail,
  Menu,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
  Sprout,
  Star,
  Users,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

type Lang = "es" | "en";

type Copy = {
  nav: string[];
  cta: string;
  heroTitle: string;
  heroText: string;
  heroSecondary: string;
  pillars: { label: string; text: string }[];
  servicesTitle: string;
  services: { title: string; text: string; icon: "heart" | "users" | "sparkles" }[];
  approachTitle: string;
  approach: { title: string; text: string; icon: "heart" | "leaf" | "sprout" | "lock" }[];
  aboutTitle: string;
  aboutText: string;
  aboutLink: string;
  pricingTitle: string;
  pricing: { label: string; price: string; detail: string; mode: string }[];
  pricingNote: string;
  opinionsTitle: string;
  opinions: { quote: string; author: string }[];
  faqTitle: string;
  faq: { q: string; a: string }[];
  contactTitle: string;
  contactText: string;
  formName: string;
  formEmail: string;
  formPhone: string;
  formHelp: string;
  formMessage: string;
  formButton: string;
  supportTitle: string;
  supportText: string;
  footerPhrase: string;
  privacy: string;
  terms: string;
  rights: string;
};

const content: Record<Lang, Copy> = {
  es: {
    nav: ["Servicios", "Enfoque", "Quién soy", "Precios", "Preguntas", "Contacto"],
    cta: "Agendar cita",
    heroTitle: "Acompañamiento psicológico para tu bienestar emocional",
    heroText:
      "Atención en línea y presencial para ayudarte a comprender, sanar y crecer. Estoy aquí para acompañarte con calidez, respeto y herramientas prácticas.",
    heroSecondary: "Conocer servicios",
    pillars: [
      { label: "Empatía", text: "Te escuchamos sin juicio." },
      { label: "Bienestar", text: "Equilibrio mental y emocional." },
      { label: "Crecimiento", text: "Proceso de transformación." },
      { label: "Esperanza", text: "Sanar y avanzar." },
    ],
    servicesTitle: "Servicios",
    services: [
      {
        title: "Terapia individual",
        text: "Un espacio seguro para explorar tus emociones, fortalecer tu bienestar y avanzar hacia tus objetivos.",
        icon: "heart",
      },
      {
        title: "Terapia de pareja",
        text: "Mejora la comunicación, fortalece el vínculo y construyan juntos una relación más sana y consciente.",
        icon: "users",
      },
      {
        title: "Intervención breve",
        text: "Atención focalizada para situaciones específicas que requieren apoyo puntual y efectivo.",
        icon: "sparkles",
      },
    ],
    approachTitle: "Nuestro enfoque",
    approach: [
      {
        title: "TCC",
        text: "Terapia Cognitivo-Conductual para identificar y transformar pensamientos y conductas.",
        icon: "heart",
      },
      {
        title: "Mindfulness y regulación emocional",
        text: "Herramientas prácticas para manejar el estrés y cultivar bienestar.",
        icon: "leaf",
      },
      {
        title: "Humanista y basado en evidencia",
        text: "Enfoque cálido y centrado en tu experiencia, con respaldo científico.",
        icon: "sprout",
      },
      {
        title: "Ética y confidencialidad",
        text: "Tu privacidad y confianza son mi prioridad en cada proceso.",
        icon: "lock",
      },
    ],
    aboutTitle: "Sobre mí",
    aboutText:
      "Soy psicóloga clínica con formación en Terapia Cognitivo-Conductual. Acompaño a personas y parejas a comprender sus procesos, sanar heridas y construir una vida con más claridad y bienestar.",
    aboutLink: "Conocer más sobre mí",
    pricingTitle: "Precios claros",
    pricing: [
      { label: "Sesión (MXN)", price: "$700 MXN", detail: "50 minutos", mode: "Online o presencial" },
      { label: "International (USD)", price: "$60 USD", detail: "50 minutes", mode: "Online" },
    ],
    pricingNote: "Los pagos se realizan previo a la sesión. Consulta formas de pago disponibles.",
    opinionsTitle: "Opiniones",
    opinions: [
      {
        quote:
          "Gracias a este espacio he aprendido a conocerme y gestionar mis emociones. Me siento más tranquila y segura.",
        author: "Ana P.",
      },
      {
        quote:
          "Mi pareja y yo mejoramos nuestra comunicación y hoy tenemos una relación más sana y consciente.",
        author: "Carlos y Mariana",
      },
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      { q: "¿Cómo sé si la terapia es para mí?", a: "Si algo te duele, te limita o deseas entenderte mejor, la terapia puede ayudarte a ordenar lo que sientes y tomar decisiones con más claridad." },
      { q: "¿Las sesiones son en línea o presenciales?", a: "Pueden realizarse en línea o de forma presencial, según disponibilidad, ubicación y preferencia del paciente." },
      { q: "¿Cuánto dura una sesión?", a: "Cada sesión tiene una duración aproximada de 50 minutos." },
      { q: "¿Con qué frecuencia debo asistir?", a: "La frecuencia se acuerda según tus objetivos, aunque generalmente se inicia con sesiones semanales." },
    ],
    contactTitle: "Hablemos",
    contactText: "Estoy aquí para escucharte y acompañarte. Agenda tu cita o escríbeme si tienes dudas.",
    formName: "Nombre completo",
    formEmail: "Correo electrónico",
    formPhone: "Teléfono (opcional)",
    formHelp: "¿Cómo te puedo ayudar?",
    formMessage: "Cuéntame brevemente lo que te gustaría trabajar...",
    formButton: "Enviar mensaje",
    supportTitle: "No tienes que hacerlo solo/a.",
    supportText: "Dar el primer paso es el comienzo de un cambio significativo.",
    footerPhrase: "Un espacio seguro para entenderte, aceptarte y florecer.",
    privacy: "Aviso de privacidad",
    terms: "Términos y condiciones",
    rights: "Todos los derechos reservados.",
  },
  en: {
    nav: ["Services", "Approach", "About", "Pricing", "FAQ", "Contact"],
    cta: "Book now",
    heroTitle: "Psychological support for your emotional well-being",
    heroText:
      "Online and in-person care to help you understand, heal, and grow with warmth, respect, and practical tools.",
    heroSecondary: "Explore services",
    pillars: [
      { label: "Empathy", text: "We listen without judgment." },
      { label: "Well-being", text: "Mental and emotional balance." },
      { label: "Growth", text: "A process of transformation." },
      { label: "Hope", text: "Healing and moving forward." },
    ],
    servicesTitle: "Services",
    services: [
      {
        title: "Individual therapy",
        text: "A safe space to explore your emotions, strengthen your well-being and move toward your goals.",
        icon: "heart",
      },
      {
        title: "Couples therapy",
        text: "Improve communication, strengthen your bond and build a healthier, more conscious relationship.",
        icon: "users",
      },
      {
        title: "Brief intervention",
        text: "Focused support for specific situations that require timely and effective care.",
        icon: "sparkles",
      },
    ],
    approachTitle: "Our approach",
    approach: [
      { title: "CBT", text: "Cognitive Behavioral Therapy to identify and transform thoughts and behaviors.", icon: "heart" },
      { title: "Mindfulness and emotional regulation", text: "Practical tools to manage stress and cultivate well-being.", icon: "leaf" },
      { title: "Humanistic and evidence-based", text: "Warm support centered on your experience, backed by clinical evidence.", icon: "sprout" },
      { title: "Ethics and confidentiality", text: "Your privacy and trust are the priority in every process.", icon: "lock" },
    ],
    aboutTitle: "About me",
    aboutText:
      "I am a clinical psychologist trained in Cognitive Behavioral Therapy. I support individuals and couples as they understand their processes, heal emotional wounds and build a clearer, healthier life.",
    aboutLink: "Learn more about me",
    pricingTitle: "Clear pricing",
    pricing: [
      { label: "Session (MXN)", price: "$700 MXN", detail: "50 minutes", mode: "Online or in-person" },
      { label: "International (USD)", price: "$60 USD", detail: "50 minutes", mode: "Online" },
    ],
    pricingNote: "Payments are made before the session. Ask for available payment methods.",
    opinionsTitle: "Testimonials",
    opinions: [
      { quote: "This space helped me understand myself and manage my emotions. I feel calmer and safer.", author: "Ana P." },
      { quote: "My partner and I improved our communication and now have a healthier relationship.", author: "Carlos and Mariana" },
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "How do I know therapy is for me?", a: "If something hurts, limits you, or you want to understand yourself better, therapy can help you organize what you feel and make clearer decisions." },
      { q: "Are sessions online or in-person?", a: "Sessions can be online or in-person depending on availability, location and patient preference." },
      { q: "How long does a session last?", a: "Each session lasts approximately 50 minutes." },
      { q: "How often should I attend?", a: "Frequency is agreed according to your goals, although weekly sessions are usually recommended at the beginning." },
    ],
    contactTitle: "Let’s talk",
    contactText: "I am here to listen and support you. Book your appointment or send a message if you have questions.",
    formName: "Full name",
    formEmail: "Email",
    formPhone: "Phone (optional)",
    formHelp: "How can I help you?",
    formMessage: "Briefly tell me what you would like to work on...",
    formButton: "Send message",
    supportTitle: "You do not have to do it alone.",
    supportText: "Taking the first step is the beginning of meaningful change.",
    footerPhrase: "A safe space to understand yourself, accept yourself and bloom.",
    privacy: "Privacy notice",
    terms: "Terms and conditions",
    rights: "All rights reserved.",
  },
};

const sectionIds = ["services", "approach", "about", "pricing", "faq", "contact"];

function BrandLogo({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label="El Vuelo del Colibrí">
      <Image
        src="/brand/logo-colibri.png"
        alt="Logo El Vuelo del Colibrí"
        width={compact ? 48 : 64}
        height={compact ? 48 : 64}
        className={compact ? "h-12 w-12 rounded-full object-cover" : "h-14 w-14 rounded-full object-cover sm:h-16 sm:w-16"}
        priority={compact}
      />
      <span className="leading-none">
        <span className={`block font-serif text-xl sm:text-2xl ${light ? "text-white" : "text-[var(--colibri-deep)]"}`}>
          El Vuelo del Colibrí
        </span>
        <span className={`mt-1 block text-[0.58rem] font-semibold uppercase tracking-[0.34em] ${light ? "text-[var(--colibri-gold-light)]" : "text-[var(--colibri-gold)]"}`}>
          Servicios psicológicos
        </span>
      </span>
    </a>
  );
}

function DecorativeDivider() {
  return (
    <div className="mt-3 flex items-center justify-center gap-2 text-[var(--colibri-gold)]">
      <span className="h-px w-16 bg-current" />
      <Leaf className="h-4 w-4" />
      <span className="h-px w-16 bg-current" />
    </div>
  );
}

function ServiceIcon({ type }: { type: "heart" | "users" | "sparkles" }) {
  const classes = "h-8 w-8";
  if (type === "users") return <Users className={classes} />;
  if (type === "sparkles") return <Sparkles className={classes} />;
  return <Heart className={classes} />;
}

function ApproachIcon({ type }: { type: "heart" | "leaf" | "sprout" | "lock" }) {
  const classes = "h-7 w-7";
  if (type === "leaf") return <Leaf className={classes} />;
  if (type === "sprout") return <Sprout className={classes} />;
  if (type === "lock") return <ShieldCheck className={classes} />;
  return <Heart className={classes} />;
}

export default function ColibriLanding() {
  const [lang, setLang] = useState<Lang>("es");
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useMemo(() => content[lang], [lang]);

  return (
    <main id="home" className="min-h-screen overflow-hidden bg-[var(--colibri-cream)] text-[var(--colibri-ink)]">
      <header className="sticky top-0 z-50 border-b border-[rgba(196,150,90,0.18)] bg-[rgba(255,251,245,0.86)] backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <BrandLogo compact />

          <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--colibri-ink-muted)] lg:flex">
            {t.nav.map((item, index) => (
              <a key={item} href={`#${sectionIds[index]}`} className="transition hover:text-[var(--colibri-deep)]">
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="rounded-full border border-[rgba(196,150,90,0.38)] px-4 py-2 text-sm font-semibold text-[var(--colibri-deep)] transition hover:bg-white"
            >
              {lang === "es" ? "ES / EN" : "EN / ES"}
            </button>
            <a href="#contact" className="colibri-button">
              <CalendarDays className="h-4 w-4" />
              {t.cta}
            </a>
          </div>

          <button
            className="rounded-full border border-[rgba(196,150,90,0.28)] p-3 text-[var(--colibri-deep)] lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button className="absolute inset-0 bg-black/35" aria-label="Cerrar menú" onClick={() => setMobileOpen(false)} />
          <aside className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-[var(--colibri-cream)] p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <BrandLogo compact />
              <button className="rounded-full border p-2 text-[var(--colibri-deep)]" onClick={() => setMobileOpen(false)} aria-label="Cerrar menú">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-8 grid gap-3 text-lg font-medium text-[var(--colibri-deep)]">
              {t.nav.map((item, index) => (
                <a key={item} onClick={() => setMobileOpen(false)} href={`#${sectionIds[index]}`} className="rounded-2xl border border-[rgba(196,150,90,0.18)] bg-white/60 px-4 py-3">
                  {item}
                </a>
              ))}
            </nav>
            <div className="mt-auto grid gap-3">
              <button onClick={() => setLang(lang === "es" ? "en" : "es")} className="rounded-full border border-[rgba(196,150,90,0.38)] px-4 py-3 font-semibold text-[var(--colibri-deep)]">
                {lang === "es" ? "Cambiar a EN" : "Switch to ES"}
              </button>
              <a href="#contact" onClick={() => setMobileOpen(false)} className="colibri-button justify-center">
                <CalendarDays className="h-4 w-4" />
                {t.cta}
              </a>
            </div>
          </aside>
        </div>
      )}

      <section className="relative border-b border-[rgba(196,150,90,0.18)]">
        <div className="pointer-events-none absolute left-[-7rem] top-24 h-72 w-72 rounded-full bg-[rgba(112,163,158,0.15)] blur-3xl" />
        <div className="pointer-events-none absolute right-[-8rem] top-0 h-80 w-80 rounded-full bg-[rgba(215,170,105,0.18)] blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:px-8 lg:py-20">
          <div className="relative z-10">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(196,150,90,0.25)] bg-white/60 px-4 py-2 text-sm font-semibold text-[var(--colibri-teal)] shadow-sm">
              <Sparkles className="h-4 w-4 text-[var(--colibri-coral)]" />
              Psicología clínica moderna y humana
            </p>
            <h1 className="max-w-3xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] text-[var(--colibri-deep)] sm:text-6xl lg:text-7xl">
              {t.heroTitle}
            </h1>
            <div className="mt-6 flex items-center gap-3 justify-content text-[var(--colibri-gold)]">
              <span className="h-px w-20 bg-current" />
              <Leaf className="h-5 w-5" />
              <span className="h-px w-20 bg-current" />
            </div>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--colibri-ink-muted)]">
              {t.heroText}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="colibri-button justify-center px-6 py-4">
                <CalendarDays className="h-5 w-5" />
                {t.cta}
              </a>
              <a href="#services" className="rounded-full border border-[var(--colibri-teal)] bg-white/60 px-6 py-4 text-center font-semibold text-[var(--colibri-deep)] transition hover:bg-white">
                {t.heroSecondary}
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {t.pillars.map((pillar, index) => (
                <div key={pillar.label} className="colibri-mini-card">
                  <div className={`colibri-mini-icon ${index === 1 || index === 3 ? "text-[var(--colibri-coral)]" : "text-[var(--colibri-teal)]"}`}>
                    {index === 0 ? <Heart /> : index === 1 ? <Leaf /> : index === 2 ? <Sprout /> : <Sparkles />}
                  </div>
                  <p className="mt-3 font-semibold text-[var(--colibri-deep)]">{pillar.label}</p>
                  <p className="mt-1 text-xs leading-5 text-[var(--colibri-ink-muted)]">{pillar.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-8 top-0 hidden h-full w-1/2 rounded-[3rem] bg-[url('/brand/brand-board.png')] bg-cover bg-center opacity-10 lg:block" />
            <div className="relative mx-auto max-w-xl rounded-[2.5rem] border border-[rgba(196,150,90,0.22)] bg-white/55 p-6 shadow-[0_30px_100px_rgba(28,84,81,0.12)] backdrop-blur">
              <div className="absolute -right-5 top-8 hidden h-48 w-36 rounded-full bg-[rgba(245,206,172,0.55)] blur-2xl sm:block" />
              <Image
                src="/brand/logo-colibri.png"
                alt="Colibrí de El Vuelo del Colibrí"
                width={900}
                height={900}
                className="relative mx-auto aspect-square w-full max-w-md rounded-[2rem] object-cover mix-blend-multiply"
                priority
              />
              <div className="relative z-10 mt-5 rounded-3xl border border-white/70 bg-white/80 p-5 shadow-xl backdrop-blur">
                <p className="font-serif text-2xl text-[var(--colibri-deep)]">
                  Escucha • Comprende • Acompaña
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--colibri-ink-muted)]">
                  Un espacio seguro para florecer desde tu interior.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="colibri-section">
        <div className="text-center">
          <h2 className="colibri-title">{t.servicesTitle}</h2>
          <DecorativeDivider />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {t.services.map((service, index) => (
            <article key={service.title} className="colibri-card group">
              <div className={`colibri-card-icon ${index === 1 ? "text-[var(--colibri-gold)]" : index === 2 ? "text-[var(--colibri-coral)]" : "text-[var(--colibri-teal)]"}`}>
                <ServiceIcon type={service.icon} />
              </div>
              <h3 className="mt-5 font-serif text-2xl text-[var(--colibri-deep)]">{service.title}</h3>
              <p className="mt-3 leading-7 text-[var(--colibri-ink-muted)]">{service.text}</p>
              <a href="#contact" className="mt-5 inline-flex items-center gap-2 font-semibold text-[var(--colibri-teal)]">
                Saber más <span className="transition group-hover:translate-x-1">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="approach" className="border-y border-[rgba(196,150,90,0.16)] bg-white/45">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.7fr_1.8fr] lg:px-8">
          <div>
            <h2 className="font-serif text-4xl leading-tight text-[var(--colibri-deep)] sm:text-5xl">{t.approachTitle}</h2>
            <div className="mt-4 flex items-center gap-2 text-[var(--colibri-gold)]">
              <span className="h-px w-16 bg-current" />
              <Leaf className="h-4 w-4" />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.approach.map((item, index) => (
              <article key={item.title} className="relative rounded-[2rem] border border-[rgba(196,150,90,0.16)] bg-[var(--colibri-cream)] p-6 shadow-sm">
                <div className={`colibri-approach-icon ${index % 2 === 0 ? "text-[var(--colibri-teal)]" : "text-[var(--colibri-gold)]"}`}>
                  <ApproachIcon type={item.icon} />
                </div>
                <h3 className="mt-5 font-serif text-xl leading-tight text-[var(--colibri-deep)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--colibri-ink-muted)]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="colibri-section grid gap-10 lg:grid-cols-[0.9fr_1fr_1fr] lg:items-center">
        <div className="relative">
          <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-[rgba(112,163,158,0.16)]" />
          <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(196,150,90,0.20)] bg-white shadow-xl">
            <div className="flex aspect-[4/5] items-center justify-center bg-[linear-gradient(135deg,#fff8ef,#dfe8e2)] p-8">
              <div className="rounded-full border border-[rgba(196,150,90,0.25)] bg-white/70 p-8 text-center shadow-lg">
                <Heart className="mx-auto h-16 w-16 text-[var(--colibri-teal)]" />
                <p className="mt-4 font-serif text-2xl text-[var(--colibri-deep)]">Psicología clínica</p>
                <p className="mt-2 max-w-48 text-sm leading-6 text-[var(--colibri-ink-muted)]">Imagen profesional editable para reemplazar por fotografía real.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="colibri-title text-left">{t.aboutTitle}</h2>
          <div className="mt-4 flex items-center gap-2 text-[var(--colibri-gold)]">
            <span className="h-px w-16 bg-current" />
            <Leaf className="h-4 w-4" />
          </div>
          <p className="mt-6 text-lg leading-8 text-[var(--colibri-ink-muted)]">{t.aboutText}</p>
          <a href="#contact" className="mt-6 inline-flex items-center gap-2 font-semibold text-[var(--colibri-teal)]">
            {t.aboutLink} <span>→</span>
          </a>
        </div>
        <div id="pricing" className="rounded-[2rem] border border-[rgba(196,150,90,0.20)] bg-white/65 p-6 shadow-sm">
          <div className="text-center">
            <h2 className="font-serif text-3xl text-[var(--colibri-deep)]">{t.pricingTitle}</h2>
            <DecorativeDivider />
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {t.pricing.map((plan) => (
              <article key={plan.label} className="rounded-[1.5rem] border border-[rgba(196,150,90,0.18)] bg-[var(--colibri-cream)] p-6 text-center">
                <p className="font-semibold text-[var(--colibri-ink-muted)]">{plan.label}</p>
                <p className="mt-3 font-serif text-4xl text-[var(--colibri-deep)]">{plan.price}</p>
                <p className="mt-3 text-sm text-[var(--colibri-ink-muted)]">{plan.detail}</p>
                <p className="text-sm text-[var(--colibri-ink-muted)]">{plan.mode}</p>
              </article>
            ))}
          </div>
          <p className="mt-4 text-center text-xs leading-5 text-[var(--colibri-ink-muted)]">* {t.pricingNote}</p>
        </div>
      </section>

      <section className="border-y border-[rgba(196,150,90,0.16)] bg-white/40">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="colibri-title text-left">{t.opinionsTitle}</h2>
            <div className="mt-3 flex items-center gap-2 text-[var(--colibri-gold)]">
              <span className="h-px w-16 bg-current" />
              <Leaf className="h-4 w-4" />
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {t.opinions.map((opinion) => (
                <figure key={opinion.author} className="rounded-[1.75rem] border border-[rgba(196,150,90,0.18)] bg-[var(--colibri-cream)] p-6 shadow-sm">
                  <blockquote className="leading-7 text-[var(--colibri-ink-muted)]">“{opinion.quote}”</blockquote>
                  <figcaption className="mt-5 font-semibold text-[var(--colibri-teal)]">— {opinion.author}</figcaption>
                  <div className="mt-3 flex gap-1 text-[var(--colibri-gold)]" aria-label="5 estrellas">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </figure>
              ))}
            </div>
          </div>
          <div id="faq">
            <h2 className="colibri-title text-left">{t.faqTitle}</h2>
            <div className="mt-3 flex items-center gap-2 text-[var(--colibri-gold)]">
              <span className="h-px w-16 bg-current" />
              <Leaf className="h-4 w-4" />
            </div>
            <div className="mt-8 grid gap-3">
              {t.faq.map((item) => (
                <details key={item.q} className="group rounded-2xl border border-[rgba(196,150,90,0.18)] bg-[var(--colibri-cream)] px-5 py-4 shadow-sm">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[var(--colibri-deep)]">
                    {item.q}
                    <ChevronDown className="h-5 w-5 shrink-0 transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 leading-7 text-[var(--colibri-ink-muted)]">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="colibri-section">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.25fr_0.85fr]">
          <div>
            <h2 className="colibri-title text-left">{t.contactTitle}</h2>
            <div className="mt-3 flex items-center gap-2 text-[var(--colibri-gold)]">
              <span className="h-px w-16 bg-current" />
              <Leaf className="h-4 w-4" />
            </div>
            <p className="mt-6 leading-8 text-[var(--colibri-ink-muted)]">{t.contactText}</p>
            <div className="mt-8 grid gap-4 text-sm text-[var(--colibri-ink-muted)]">
              <a href="https://wa.me/525512345678" className="flex items-center gap-3">
                <span className="rounded-full border border-[rgba(28,91,89,0.22)] p-3 text-[var(--colibri-teal)]"><MessageCircle className="h-5 w-5" /></span>
                <span><strong className="block text-[var(--colibri-deep)]">WhatsApp</strong>+52 55 1234 5678</span>
              </a>
              <a href="mailto:hola@elvuelodelcolibri.com" className="flex items-center gap-3">
                <span className="rounded-full border border-[rgba(28,91,89,0.22)] p-3 text-[var(--colibri-teal)]"><Mail className="h-5 w-5" /></span>
                <span><strong className="block text-[var(--colibri-deep)]">Correo</strong>hola@elvuelodelcolibri.com</span>
              </a>
            </div>
          </div>

          <form className="rounded-[2rem] border border-[rgba(196,150,90,0.20)] bg-white/70 p-5 shadow-xl backdrop-blur" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="colibri-input" placeholder={t.formName} />
              <input className="colibri-input" placeholder={t.formEmail} type="email" />
              <input className="colibri-input" placeholder={t.formPhone} />
              <select className="colibri-input" defaultValue="">
                <option value="" disabled>{t.formHelp}</option>
                <option>Terapia individual</option>
                <option>Terapia de pareja</option>
                <option>Intervención breve</option>
              </select>
            </div>
            <textarea className="colibri-input mt-4 min-h-32 resize-none py-4" placeholder={t.formMessage} />
            <button className="colibri-button mt-4 w-full justify-center sm:w-auto sm:px-8" type="submit">
              {t.formButton}
              <Send className="h-4 w-4" />
            </button>
          </form>

          <article className="relative overflow-hidden rounded-[2rem] border border-[rgba(196,150,90,0.20)] bg-[linear-gradient(135deg,#eef4ef,#fff9f0)] p-8 shadow-sm">
            <Leaf className="absolute -right-8 top-6 h-28 w-28 rotate-12 text-[rgba(112,163,158,0.18)]" />
            <LockKeyhole className="h-10 w-10 text-[var(--colibri-gold)]" />
            <h3 className="mt-8 font-serif text-3xl leading-tight text-[var(--colibri-deep)]">{t.supportTitle}</h3>
            <p className="mt-4 leading-7 text-[var(--colibri-ink-muted)]">{t.supportText}</p>
            <Heart className="mt-6 h-6 w-6 text-[var(--colibri-coral)]" />
          </article>
        </div>
      </section>

      <footer className="bg-[var(--colibri-deep)] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
          <BrandLogo light />
          <div className="text-center">
            <p className="font-serif text-xl leading-8 text-white">{t.footerPhrase}</p>
            <DecorativeDivider />
            <p className="mt-5 text-sm text-white/70">© {new Date().getFullYear()} El Vuelo del Colibrí. {t.rights}</p>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <a href="#" className="text-sm text-white/75 hover:text-white">{t.privacy}</a>
            <a href="#" className="text-sm text-white/75 hover:text-white">{t.terms}</a>
            <div className="flex gap-3 pt-2">
              <a href="#" aria-label="Instagram" className="rounded-full border border-white/25 p-3 text-white/80 transition hover:bg-white/10 hover:text-white"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="rounded-full border border-white/25 p-3 text-white/80 transition hover:bg-white/10 hover:text-white"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="WhatsApp" className="rounded-full border border-white/25 p-3 text-white/80 transition hover:bg-white/10 hover:text-white"><MessageCircle className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
