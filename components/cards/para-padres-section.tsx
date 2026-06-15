"use client";

import { Check, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const parentBenefits = [
  { text: "Claridad", detail: "en cada tarea." },
  { text: "Seguimiento", detail: "del progreso." },
  { text: "Comunicacion", detail: "con docentes." },
];

const schoolBenefits = [
  { text: "Refuerza", detail: "el aprendizaje." },
  { text: "Datos", detail: "de progreso." },
  { text: "Apoyo", detail: "complementario." },
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
          key={index}
          className="flex items-center gap-3 transition-all duration-500 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(-20px)",
            transitionDelay: `${delayBase + index * 120}ms`,
          }}
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15">
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

export function ParaPadresSection() {
  const { ref: padresRef, isVisible: padresVisible } = useScrollReveal();
  const { ref: colegiosRef, isVisible: colegiosVisible } = useScrollReveal();

  return (
    <section className="bg-linear-to-br from-amauta-blue-light via-background to-amauta-orange-light/30 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Para Padres */}
          <div ref={padresRef}>
            <Card
              className="h-full border-none shadow-md transition-all duration-700 ease-out"
              style={{
                opacity: padresVisible ? 1 : 0,
                transform: padresVisible ? "translateY(0)" : "translateY(40px)",
              }}
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Users
                      className="h-6 w-6 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="text-2xl font-extrabold text-primary md:text-3xl">
                    Para Padres
                  </h2>
                </div>

                <div className="mt-6">
                  <BenefitList
                    items={parentBenefits}
                    isVisible={padresVisible}
                    delayBase={300}
                  />
                </div>

                {/* Animated decorative element */}
                <div
                  className="mt-6 rounded-xl bg-amauta-blue-light p-4 text-center transition-all duration-500"
                  style={{
                    opacity: padresVisible ? 1 : 0,
                    transform: padresVisible ? "scale(1)" : "scale(0.9)",
                    transitionDelay: "700ms",
                  }}
                >
                  <p className="text-sm font-semibold text-primary">
                    {"Acompanamos a tu familia en cada paso"}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Para Colegios */}
          <div ref={colegiosRef}>
            <Card
              className="h-full border-none shadow-md transition-all duration-700 ease-out"
              style={{
                opacity: colegiosVisible ? 1 : 0,
                transform: colegiosVisible
                  ? "translateY(0)"
                  : "translateY(40px)",
                transitionDelay: "150ms",
              }}
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-accent"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 21h18M3 7l9-4 9 4M4 7v8h4V7M10 7v8h4V7M16 7v8h4V7M2 15h20M2 21h20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-extrabold text-accent md:text-3xl">
                    Para Colegios
                  </h2>
                </div>

                <div className="mt-6">
                  <BenefitList
                    items={schoolBenefits}
                    isVisible={colegiosVisible}
                    delayBase={400}
                  />
                </div>

                {/* Animated decorative element */}
                <div
                  className="mt-6 rounded-xl bg-amauta-orange-light p-4 text-center transition-all duration-500"
                  style={{
                    opacity: colegiosVisible ? 1 : 0,
                    transform: colegiosVisible ? "scale(1)" : "scale(0.9)",
                    transitionDelay: "800ms",
                  }}
                >
                  <p className="text-sm font-semibold text-accent">
                    {"Un aliado para potenciar la ensenanza"}
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
