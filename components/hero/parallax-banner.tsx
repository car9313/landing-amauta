"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { CTA_URL } from "@/lib/constants";

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

  const bgTranslateY = (scrollY - 0.5) * 120;

  return (
    <section
      id="parallax"
      ref={ref}
      className="relative h-[80vh] scroll-mt-20 min-h-[520px] overflow-hidden md:h-[90vh]"
      aria-label="Amauta acompaña a niños en el aula y en casa"
    >
      {/* Background image */}
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

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-amauta-blue-dark/45 via-amauta-blue-dark/60 to-amauta-blue-dark/75"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative flex h-full items-center justify-center px-4 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-base font-semibold tracking-wide text-primary-foreground/80 md:text-xl">
            Detrás de cada avance hay alguien que acompaña.
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-primary-foreground md:text-6xl lg:text-7xl text-balance">
            Ahora también está Amauta.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/85 md:text-2xl">
            Un compañero de aprendizaje que guía, motiva y celebra cada logro,
            para que el niño siga avanzando en casa o en el aula con más
            confianza.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-primary-foreground/90 backdrop-blur-sm">
              Acompañamiento continuo
            </span>
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-primary-foreground/90 backdrop-blur-sm">
              Menos frustración
            </span>
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-primary-foreground/90 backdrop-blur-sm">
              Más confianza
            </span>
          </div>

          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="min-h-14 rounded-full bg-accent px-10 text-lg font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105 hover:bg-accent/90"
            >
              <a href={CTA_URL}>Probar Amauta gratis</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
