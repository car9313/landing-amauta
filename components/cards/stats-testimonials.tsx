"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const stats = [
  { value: "4", label: "materias" },
  { value: "100+", label: "lecciones" },
  { value: "Sin conexión", label: "siempre disponible" },
  { value: "5-12", label: "años" },
];

const testimonials = [
  {
    quote:
      "Mi hija practica matemáticas en el bus camino al colegio, sin necesidad de datos. Ha mejorado muchísimo.",
    author: "Carla M.",
    role: "Madre de Sofía, 7 años",
  },
  {
    quote:
      "Lo mejor es que aprende sola y se divierte. Las rachas y los logros la mantienen motivada cada día.",
    author: "Diego R.",
    role: "Padre de Mateo, 9 años",
  },
  {
    quote:
      "Como profesora, recomiendo Amauta a las familias. El aprendizaje adaptativo realmente marca la diferencia.",
    author: "Lucía T.",
    role: "Docente de educación infantil",
  },
];

export function StatsTestimonials() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="testimonios"
      className="bg-amauta-blue-dark py-16 text-primary-foreground md:py-24"
      aria-labelledby="stats-heading"
    >
      <div ref={ref} className="mx-auto max-w-6xl px-4">
        <h2 id="stats-heading" className="sr-only">
          Estadísticas y testimonios
        </h2>

        {/* Stats */}
        <dl className="mb-16 grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-3xl font-extrabold text-amauta-orange-light md:text-4xl">
                {stat.value}
              </dd>
              <p className="mt-1 text-sm font-medium text-primary-foreground/70">
                {stat.label}
              </p>
            </div>
          ))}
        </dl>

        {/* Testimonials */}
        <ul className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <li
              key={t.author}
              className={`rounded-3xl bg-primary-foreground/10 p-7 backdrop-blur-sm transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <blockquote className="leading-relaxed text-primary-foreground/90">{`"${t.quote}"`}</blockquote>
              <footer className="mt-4">
                <p className="font-bold text-amauta-orange-light">{t.author}</p>
                <p className="text-sm text-primary-foreground/60">{t.role}</p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
