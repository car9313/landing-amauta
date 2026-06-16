"use client";

import { BookOpen, GraduationCap, BarChart3, Bot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

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
        <CardContent className="flex h-full flex-col items-center p-8 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
          </div>

          <h3 className="mt-5 text-xl font-bold text-primary">
            {capability.title}
          </h3>

          <p className="mt-3 text-muted-foreground leading-relaxed">
            {capability.description}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export function HowAmautaHelpsSection() {
  return (
    <section
      id="como-ayuda"
      className="bg-background scroll-mt-20 py-16 md:py-24"
      aria-labelledby="how-amauta-helps-heading"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
            Cómo ayuda Amauta
          </span>

          <h2
            id="how-amauta-helps-heading"
            className="mt-5 text-3xl font-extrabold text-primary md:text-5xl text-balance"
          >
            Herramientas diseñadas para aprender con confianza.
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Amauta combina acompañamiento, contenido educativo y seguimiento del
            progreso para ayudar a cada niño a avanzar a su propio ritmo.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
