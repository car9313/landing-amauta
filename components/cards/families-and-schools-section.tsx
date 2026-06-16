"use client";

import { Check, School, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const parentBenefits = [
  {
    text: "Menos frustración",
    detail: "durante tareas y actividades.",
  },
  {
    text: "Más autonomía",
    detail: "para aprender a su propio ritmo.",
  },
  {
    text: "Mayor motivación",
    detail: "gracias a logros y avances visibles.",
  },
];

const schoolBenefits = [
  {
    text: "Continuidad educativa",
    detail: "dentro y fuera del aula.",
  },
  {
    text: "Seguimiento",
    detail: "del progreso de cada estudiante.",
  },
  {
    text: "Refuerzo",
    detail: "de contenidos de forma complementaria.",
  },
];

function BenefitList({
  items,
  isVisible,
  delayBase,
}: {
  items: typeof parentBenefits;
  isVisible: boolean;
  delayBase: number;
}) {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((item, index) => (
        <li
          key={item.text}
          className="flex items-start gap-3 transition-all duration-500 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(-20px)",
            transitionDelay: `${delayBase + index * 120}ms`,
          }}
        >
          <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15">
            <Check className="h-4 w-4 text-accent" aria-hidden="true" />
          </span>

          <p className="text-base leading-relaxed text-foreground">
            <strong className="text-primary">{item.text}</strong> {item.detail}
          </p>
        </li>
      ))}
    </ul>
  );
}

export function FamiliesAndSchoolsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  const { ref: familiesRef, isVisible: familiesVisible } = useScrollReveal();

  const { ref: schoolsRef, isVisible: schoolsVisible } = useScrollReveal();

  return (
    <section
      id="familias-escuelas"
      className="bg-linear-to-br from-amauta-blue-light via-background to-amauta-orange-light/20 scroll-mt-20 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div ref={headerRef} className="mx-auto mb-14 max-w-3xl text-center">
          <span
            className={`inline-flex rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition-all duration-700 ${
              headerVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            Diseñado para quienes acompañan el aprendizaje
          </span>

          <h2
            className={`mt-5 text-3xl font-extrabold text-primary md:text-5xl text-balance transition-all duration-700 delay-100 ${
              headerVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            Beneficios para familias y escuelas.
          </h2>

          <p
            className={`mt-4 text-base leading-relaxed text-muted-foreground md:text-lg transition-all duration-700 delay-200 ${
              headerVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            Amauta ayuda a que los niños aprendan con mayor confianza,
            constancia y autonomía, tanto en casa como en el aula.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Familias */}
          <div ref={familiesRef}>
            <Card
              className="h-full border border-border/50 shadow-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-lg"
              style={{
                opacity: familiesVisible ? 1 : 0,
                transform: familiesVisible
                  ? "translateY(0)"
                  : "translateY(40px)",
              }}
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <Users
                      className="h-6 w-6 text-primary"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold text-primary">
                      Para Familias
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      Acompañamiento dentro y fuera de casa.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <BenefitList
                    items={parentBenefits}
                    isVisible={familiesVisible}
                    delayBase={250}
                  />
                </div>

                <div
                  className="mt-8 rounded-2xl bg-amauta-blue-light p-4 text-center transition-all duration-500"
                  style={{
                    opacity: familiesVisible ? 1 : 0,
                    transform: familiesVisible ? "scale(1)" : "scale(0.95)",
                    transitionDelay: "700ms",
                  }}
                >
                  <p className="font-semibold text-primary">
                    Acompañamos a tu familia en cada paso.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Escuelas */}
          <div ref={schoolsRef}>
            <Card
              className="h-full border border-border/50 shadow-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-lg"
              style={{
                opacity: schoolsVisible ? 1 : 0,
                transform: schoolsVisible
                  ? "translateY(0)"
                  : "translateY(40px)",
                transitionDelay: "150ms",
              }}
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10">
                    <School
                      className="h-6 w-6 text-accent"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold text-accent">
                      Para Escuelas
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      Un aliado para potenciar la enseñanza.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <BenefitList
                    items={schoolBenefits}
                    isVisible={schoolsVisible}
                    delayBase={350}
                  />
                </div>

                <div
                  className="mt-8 rounded-2xl bg-amauta-orange-light/50 p-4 text-center transition-all duration-500"
                  style={{
                    opacity: schoolsVisible ? 1 : 0,
                    transform: schoolsVisible ? "scale(1)" : "scale(0.95)",
                    transitionDelay: "800ms",
                  }}
                >
                  <p className="font-semibold text-accent">
                    Un aliado para potenciar la enseñanza.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
