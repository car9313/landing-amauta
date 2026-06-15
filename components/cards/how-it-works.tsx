"use client";

import { UserPlus, Users, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  {
    icon: UserPlus,
    number: "1",
    title: "El padre crea su cuenta",
    description: "Registro rápido y gratuito en menos de un minuto.",
  },
  {
    icon: Users,
    number: "2",
    title: "Añade a sus hijos",
    description: "Crea un perfil para cada niño con su edad y nivel.",
  },
  {
    icon: Sparkles,
    number: "3",
    title: "Ellos aprenden solos",
    description: "Los niños exploran lecciones de forma autónoma y divertida.",
  },
];

export function HowItWorks() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="como-funciona"
      className="relative bg-amauta-blue-light py-16 md:py-24"
      aria-labelledby="how-heading"
    >
      <div ref={ref} className="mx-auto max-w-6xl px-4">
        <h2
          id="how-heading"
          className={`mb-12 text-balance text-center text-3xl font-extrabold text-primary transition-all duration-700 md:text-4xl ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          Cómo funciona
        </h2>

        <ol className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li
                key={step.number}
                className={`relative flex flex-col items-center text-center transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative mb-5">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-card shadow-md">
                    <Icon className="h-9 w-9 text-primary" aria-hidden="true" />
                  </div>
                  <span className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-amauta-orange text-sm font-extrabold text-accent-foreground shadow">
                    {step.number}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-primary">
                  {step.title}
                </h3>
                <p className="max-w-xs leading-relaxed text-foreground/70">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
