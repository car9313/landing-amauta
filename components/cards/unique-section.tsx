"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useParallax } from "@/hooks/use-parallax";
import { Button } from "../ui/button";

const uniquePoints = [
  "Inspirado en la figura del maestro sabio.",
  "Diseño amigable, culturalmente hispano y adaptado a niños.",
  "Pensado para crecer junto a cada niño, con empatía y estructura.",
];

export function UniqueSection() {
  const { ref: textRef, isVisible: textVisible } = useScrollReveal();
  const { ref: mascotParallax, offset: mascotOffset } = useParallax({
    speed: 0.2,
    direction: "down",
  });

  return (
    <section id="diferente" className="bg-amauta-blue-light py-16 md:py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 px-4 md:flex-row-reverse">
        <div
          ref={textRef}
          className="flex flex-1 flex-col transition-all duration-700 ease-out"
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? "translateX(0)" : "translateX(40px)",
          }}
        >
          <h2 className="text-3xl font-extrabold text-primary md:text-4xl text-balance">
            {"¿Qué lo hace único?"}
          </h2>
          <ul className="mt-8 flex flex-col gap-5">
            {uniquePoints.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-3 transition-all duration-500 ease-out"
                style={{
                  opacity: textVisible ? 1 : 0,
                  transform: textVisible ? "translateX(0)" : "translateX(20px)",
                  transitionDelay: `${300 + index * 150}ms`,
                }}
              >
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15">
                  <Check className="h-4 w-4 text-accent" aria-hidden="true" />
                </span>
                <p className="text-base leading-relaxed text-foreground">
                  {point}
                </p>
              </li>
            ))}
          </ul>
          <div
            className="mt-8 flex flex-col gap-4 sm:flex-row"
            /*  style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(15px)",
              transitionDelay: "600ms",
              transition: "all 0.5s ease-out",
            }} */
          >
            <Button
              asChild
              size="lg"
              className="min-h-14 rounded-full bg-accent px-10 text-lg font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105 hover:bg-accent/90 animate-gentle-pulse"
            >
              <a href="#empezar">Comenzar ahora</a>
            </Button>
          </div>
        </div>
        <div className="flex flex-1 justify-center" ref={mascotParallax}>
          <div
            className="animate-float"
            style={{ transform: `translateY(${mascotOffset}px)` }}
          >
            <Image
              src="/images/mascot.jpg"
              alt="Amauta, el ave sabia que guía el aprendizaje"
              width={320}
              height={320}
              className="drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
