"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { BookOpen, Quote, Sparkles, Users, WifiOff, Medal } from "lucide-react";

const stats = [
  { value: "4", label: "materias", icon: BookOpen },
  { value: "100+", label: "lecciones", icon: Sparkles },
  { value: "Sin conexión", label: "siempre disponible", icon: WifiOff },
  { value: "5-9", label: "años", icon: Users },
];

const testimonials = [
  {
    quote:
      "Mi hija practica matemáticas en el bus camino al colegio, sin necesidad de datos. Ha mejorado muchísimo.",
    author: "Carla M.",
    role: "Madre de Sofía, 7 años",
    tag: "Familia",
  },
  {
    quote:
      "Lo mejor es que aprende sola y se divierte. Las rachas y los logros la mantienen motivada cada día.",
    author: "Diego R.",
    role: "Padre de Mateo, 9 años",
    tag: "Motivación",
  },
  {
    quote:
      "Como profesora, recomiendo Amauta a las familias. El aprendizaje adaptativo realmente marca la diferencia.",
    author: "Lucía T.",
    role: "Docente de educación infantil",
    tag: "Docencia",
  },
];

export function StatsTestimonials() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="testimonios"
      className="bg-gradient-to-b from-amauta-blue-dark via-amauta-blue-dark to-amauta-blue-dark/95 scroll-mt-20 py-16 text-primary-foreground md:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div ref={ref} className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm ring-1 ring-white/10">
            <Quote className="h-4 w-4 text-accent" />
            <span className="text-sm font-semibold text-primary-foreground/85">
              Lo que familias y docentes están viendo
            </span>
          </div>

          <h2
            id="testimonials-heading"
            className={`mt-5 text-3xl font-extrabold tracking-tight text-balance md:text-5xl transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            Confianza que se nota en el aprendizaje diario.
          </h2>

          <p
            className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/80 md:text-lg transition-all duration-700 delay-100 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            Cuando el niño avanza con menos frustración y más constancia, la
            experiencia en casa y en el aula cambia de verdad.
          </p>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`rounded-3xl border border-white/10 bg-white/8 p-5 text-center shadow-[0_20px_60px_-30px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-3xl font-extrabold text-amauta-orange-light md:text-4xl">
                  {stat.value}
                </dd>
                <p className="mt-1 text-sm font-medium text-primary-foreground/70">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </dl>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <article
              key={t.author}
              className={`rounded-3xl border border-white/10 bg-white/8 p-7 shadow-[0_24px_70px_-35px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="inline-flex items-center rounded-full bg-accent/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent">
                  {t.tag}
                </span>
                <Medal className="h-5 w-5 text-amauta-orange-light/90" />
              </div>

              <blockquote className="text-base leading-relaxed text-primary-foreground/92 md:text-[1.05rem]">
                “{t.quote}”
              </blockquote>

              <footer className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-accent to-amauta-orange text-sm font-extrabold text-white">
                  {t.author
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </div>

                <div>
                  <p className="font-bold text-primary-foreground">
                    {t.author}
                  </p>
                  <p className="text-sm text-primary-foreground/60">{t.role}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
