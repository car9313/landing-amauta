"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";

export function ParallaxBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    let ticking = false;

    function handleScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            // Calculate how far through the viewport the element is
            const progress =
              (windowHeight - rect.top) / (windowHeight + rect.height);
            setScrollY(progress);
          }
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgTranslateY = (scrollY - 0.5) * 120; // -60px to +60px range

  return (
    <section
      ref={ref}
      className="relative h-[80vh] min-h-130 overflow-hidden md:h-[90vh]"
      aria-label="Amauta acompañando a niños en el aula"
    >
      {/* Parallax background image */}
      <div
        className="absolute -inset-30 bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/classroom.jpg)",
          transform: `translateY(${bgTranslateY}px) scale(1.15)`,
          willChange: "transform",
        }}
        role="img"
        aria-label="Escena de salón de clases con niños aprendiendo acompañados por Amauta"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-amauta-blue-dark/60"
        aria-hidden="true"
      />

      {/* Content over parallax */}
      <div className="relative flex h-full flex-col items-center justify-center gap-5 px-4 text-center">
        <p className="text-lg font-semibold text-primary-foreground/80 md:text-2xl">
          Cuando no entienden... cuando se siente difícil...
        </p>
        <h2 className="text-4xl font-extrabold text-primary-foreground md:text-6xl lg:text-7xl text-balance">
          Amauta está contigo.
        </h2>
        <p className="mt-2 text-2xl font-bold text-accent md:text-3xl">
          Confianza.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="min-h-14 rounded-full bg-accent px-10 text-lg font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105 hover:bg-accent/90 animate-gentle-pulse"
          >
            <a href="#empezar">Comenzar ahora</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
