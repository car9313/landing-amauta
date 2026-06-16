"use client";

import { WifiOff, GraduationCap, School } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const differentiators = [
  {
    icon: WifiOff,
    title: "Offline-first",
    description:
      "Los niños pueden seguir aprendiendo incluso cuando la conexión a internet no está disponible.",
  },
  {
    icon: GraduationCap,
    title: "Aprendizaje guiado",
    description:
      "Amauta acompaña paso a paso el proceso de aprendizaje para generar confianza y autonomía.",
  },
  {
    icon: School,
    title: "Para casa y aula",
    description:
      "Una experiencia diseñada para apoyar tanto a las familias como a docentes e instituciones educativas.",
  },
];

export function UniqueSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="que-es"
      className="bg-background scroll-mt-20 py-16 md:py-24"
      aria-labelledby="unique-heading"
    >
      <div ref={ref} className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <span className="inline-flex rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
            ¿Por qué Amauta es diferente?
          </span>

          <h2
            id="unique-heading"
            className="mt-5 text-3xl font-extrabold tracking-tight text-primary md:text-5xl text-balance"
          >
            Diseñado para acompañar el aprendizaje donde más importa.
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Amauta combina continuidad, acompañamiento y flexibilidad en una
            experiencia creada para ayudar a niños, familias y docentes.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {differentiators.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`group rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-xl ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 120}ms`,
                }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                  <Icon className="h-7 w-7 text-accent" aria-hidden="true" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-primary">
                  {item.title}
                </h3>

                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
