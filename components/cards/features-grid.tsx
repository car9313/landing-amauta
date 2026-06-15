"use client";

import { WifiOff, Brain, Trophy } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  {
    icon: WifiOff,
    title: "Sin internet, sin problema",
    description:
      "Offline total. Los datos se guardan automaticamente y se sincronizan cuando vuelve la conexion.",
  },
  {
    icon: Brain,
    title: "Aprendizaje adaptativo",
    description:
      "Ejercicios que se ajustan al nivel del nino, avanzando a su propio ritmo y necesidades.",
  },
  {
    icon: Trophy,
    title: "Motivacion continua",
    description:
      "Niveles, puntos, rachas y logros que mantienen a los ninos motivados dia tras dia.",
  },
];

export function FeaturesGrid() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="features"
      className="relative bg-linear-to-br from-amauta-blue-light via-background to-amauta-orange-light/30 py-16  md:py-24"
      aria-labelledby="features-heading"
    >
      <div ref={ref} className="mx-auto max-w-6xl px-4">
        <div
          className={`mx-auto mb-12 max-w-2xl text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h2
            id="features-heading"
            className="text-balance text-3xl font-extrabold text-primary md:text-4xl"
          >
            Pensado para aprender en cualquier lugar
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Tres pilares que hacen de Amauta una experiencia educativa unica.
          </p>
        </div>

        <ul className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <li
                key={feature.title}
                className={`group rounded-3xl border border-border bg-card/70 p-8 shadow-sm backdrop-blur-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-md ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amauta-blue-light text-primary transition-transform group-hover:scale-110">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-primary">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
