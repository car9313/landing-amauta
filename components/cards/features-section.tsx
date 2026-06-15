"use client";

import { BarChart3, GraduationCap, Bot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useParallax } from "@/hooks/use-parallax";

const features = [
  {
    icon: BarChart3,
    title: "Análisis de progreso",
    description:
      "Detecta fortalezas y dificultades del niño de forma clara y visual.",
  },
  {
    icon: GraduationCap,
    title: "Lecciones explicativas",
    description:
      "Presenta contenidos paso a paso con lenguaje sencillo y amigable.",
  },
  {
    icon: Bot,
    title: "Agente inteligente",
    description:
      "Un personaje guía interactivo que explica, motiva y acompaña al niño.",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal();
  const Icon = feature.icon;

  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateY(0) scale(1)"
          : "translateY(40px) scale(0.95)",
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <Card className="h-full border-none bg-card shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg">
        <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
          </div>
          <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {feature.description}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export function FeaturesSection() {
  const { ref: bgRef, offset: bgOffset } = useParallax({ speed: 0.1 });

  return (
    <section
      id="funciones"
      className="relative overflow-hidden bg-amauta-blue-light py-16 md:py-24"
      ref={bgRef}
    >
      {/* Parallax decorative circles */}
      <div
        className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-primary/5"
        aria-hidden="true"
        style={{ transform: `translateY(${bgOffset * 0.6}px)` }}
      />
      <div
        className="absolute -left-8 bottom-20 h-28 w-28 rounded-full bg-accent/8"
        aria-hidden="true"
        style={{ transform: `translateY(${bgOffset * -0.4}px)` }}
      />

      <div className="relative mx-auto max-w-5xl px-4">
        <h2 className="text-center text-3xl font-extrabold text-primary md:text-4xl text-balance">
          Funciones principales
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
