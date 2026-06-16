"use client";

import {
  WifiOff,
  GraduationCap,
  School,
  BookOpen,
  BarChart3,
  Bot,
  Sparkles,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";

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

const capabilities = [
  {
    icon: BookOpen,
    title: "Refuerza el aprendizaje",
    description:
      "Practica contenidos escolares dentro y fuera del aula para consolidar conocimientos.",
  },
  {
    icon: GraduationCap,
    title: "Explica paso a paso",
    description:
      "Lecciones guiadas con lenguaje sencillo para comprender temas complejos con mayor facilidad.",
  },
  {
    icon: BarChart3,
    title: "Sigue el progreso",
    description:
      "Identifica fortalezas y áreas de mejora mediante información clara y visual.",
  },
  {
    icon: Bot,
    title: "Acompaña y motiva",
    description:
      "Un mentor inteligente que guía, anima y celebra cada avance del niño.",
  },
];

function CapabilityCard({
  capability,
  index,
}: {
  capability: (typeof capabilities)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal();
  const Icon = capability.icon;

  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <Card className="h-full border border-border/60 bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
        <CardContent className="flex h-full flex-col items-center p-6 text-center md:p-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
            <Icon className="h-7 w-7 text-accent" aria-hidden="true" />
          </div>

          <h3 className="mt-4 text-lg font-bold text-primary md:text-xl">
            {capability.title}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
            {capability.description}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="que-es"
      className="bg-linear-to-br from-amauta-blue-light via-background to-amauta-orange-light/20 scroll-mt-20 py-16 md:py-24"
    >
      <div ref={ref} className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
            <Sparkles className="h-4 w-4" />
            ¿Qué es Amauta?
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

        {/* Differentiators */}
        <div className="mt-14">
            <div className="grid gap-4 sm:grid-cols-3">
              {differentiators.map((item, index) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className={`group rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-xl md:p-6 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                    style={{
                      transitionDelay: `${index * 120}ms`,
                    }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                      <Icon
                        className="h-6 w-6 text-accent"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="mt-4 text-base font-bold text-primary md:text-lg">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

        {/* Divider */}
        <div
          className={`mx-auto mt-16 flex items-center gap-4 transition-all duration-700 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent">
            <Sparkles className="h-3 w-3" />
            ¿Cómo te ayuda?
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        </div>

        {/* Capabilities */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {capabilities.map((capability, index) => (
            <CapabilityCard
              key={capability.title}
              capability={capability}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
