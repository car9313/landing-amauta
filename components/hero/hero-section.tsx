"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/use-parallax";
import { CTA_URL } from "@/lib/constants";
import {
  Sparkles,
  Star,
  WifiOff,
  Users,
  ShieldCheck,
  BookOpen,
} from "lucide-react";

const floatingIcons = [
  {
    Icon: Sparkles,
    className: "text-accent",
    size: 18,
    delay: "0s",
    x: "10%",
    y: "18%",
  },
  {
    Icon: Star,
    className: "text-amauta-orange",
    size: 22,
    delay: "1s",
    x: "86%",
    y: "14%",
  },
  {
    Icon: BookOpen,
    className: "text-primary/50",
    size: 22,
    delay: "1.8s",
    x: "80%",
    y: "72%",
  },
  {
    Icon: WifiOff,
    className: "text-amauta-orange/70",
    size: 20,
    delay: "2.4s",
    x: "14%",
    y: "76%",
  },
];

const highlights = ["Offline-first", "Aprendizaje guiado", "Para casa y aula"];

const audiencePills = [
  { icon: Users, label: "Niños de 5 a 9 años" },
  { icon: ShieldCheck, label: "Acompañamiento seguro" },
];

export function HeroSection() {
  const { ref: bgRef, offset: bgOffset } = useParallax({ speed: 0.1 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      ref={bgRef}
      className="relative flex min-h-[90vh] scroll-mt-20 items-center overflow-hidden bg-amauta-blue-light"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute bottom-0 left-0 w-full animate-wave"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          style={{ transform: `translateY(${bgOffset * 0.3}px)` }}
        >
          <path
            d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,117.3C672,107,768,117,864,138.7C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L0,320Z"
            className="fill-background/50"
          />
        </svg>

        <svg
          className="absolute bottom-0 left-0 w-full animate-wave-slow"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          style={{ transform: `translateY(${bgOffset * 0.15}px)` }}
        >
          <path
            d="M0,192L60,176C120,160,240,128,360,128C480,128,600,160,720,170.7C840,181,960,171,1080,149.3C1200,128,1320,96,1380,80L1440,64L1440,320L0,320Z"
            className="fill-background/30"
          />
        </svg>

        <div
          className="absolute left-[6%] top-[20%] h-36 w-36 rounded-full bg-primary/5 animate-float-gentle"
          style={{ transform: `translateY(${bgOffset * 0.35}px)` }}
        />
        <div
          className="absolute right-[10%] top-[12%] h-24 w-24 rounded-full bg-accent/10 animate-float-gentle-reverse"
          style={{ transform: `translateY(${bgOffset * -0.2}px)` }}
        />
      </div>

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, className, size, delay, x, y }, i) => (
        <div
          key={i}
          className="absolute pointer-events-none animate-icon-float"
          style={{ left: x, top: y, animationDelay: delay }}
          aria-hidden="true"
        >
          <Icon className={className} size={size} />
        </div>
      ))}

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:gap-14 lg:gap-20">
        {/* Text */}
        <div
          className={`flex flex-col items-center text-center transition-all duration-700 md:items-start md:text-left ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-2">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-bold text-accent">
              Aprendizaje guiado para niños de 5 a 9 años
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            {audiencePills.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1.5 text-sm font-medium text-muted-foreground shadow-sm"
              >
                <Icon className="h-4 w-4 text-amauta-orange" />
                {label}
              </span>
            ))}
          </div>

          <h1 className="mt-5 max-w-xl text-balance text-5xl font-extrabold leading-tight tracking-tight text-primary md:text-6xl lg:text-7xl">
            Tu hijo aprende a su ritmo,
            <span className="text-accent"> con confianza y motivación.</span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-foreground md:text-lg">
            Amauta acompaña el aprendizaje con actividades guiadas para casa y
            aula, y una experiencia pensada para seguir avanzando incluso cuando
            la conexión no está disponible.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="group min-h-[52px] overflow-hidden rounded-full bg-accent px-8 text-base font-bold text-accent-foreground hover:bg-accent/90"
            >
              <a href={CTA_URL}>
                <span className="relative z-10 flex items-center gap-2">
                  Probar Amauta gratis
                  <Sparkles className="h-4 w-4 transition-transform group-hover:rotate-12 group-hover:scale-110" />
                </span>
              </a>
            </Button>

            <p className="mt-3 text-sm text-muted-foreground">
              Sin internet, sin problema.
            </p>

            <div className="mt-6 animate-fade-in-up">
              <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-5 py-2 text-sm font-semibold text-muted-foreground shadow-sm">
                <span className="relative">
                  <span className="animate-gentle-pulse text-accent">
                    +100 familias
                  </span>
                </span>
                ya confían en Amauta
              </p>
            </div>
          </div>
        </div>

        {/* Mascot */}
        <div
          className={`flex justify-center transition-all duration-1000 ${
            mounted
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-10 scale-95 opacity-0"
          }`}
        >
          <div className="relative w-full max-w-130">
            <div
              className="absolute inset-0 mx-auto h-[82%] w-[82%] rounded-full bg-accent/10 animate-pulse-ring"
              aria-hidden="true"
            />

            <div className="absolute -right-2 top-2 z-20 animate-bounce-gentle">
              <div className="rounded-2xl border border-border bg-card px-4 py-2 shadow-lg">
                <p className="text-sm font-bold text-primary">
                  ¡Hola, aprende conmigo!
                </p>
              </div>
              <div className="ml-6 h-3 w-3 -translate-y-0.5 rotate-45 border-b border-r border-border bg-card" />
            </div>

            <div className="relative z-10 animate-float">
              <Image
                src="/images/mascota.png"
                alt="Amauta, el mentor ave sabia que acompaña a los niños en su aprendizaje"
                width={520}
                height={520}
                priority
                className="drop-shadow-2xl"
              />
            </div>

            <div
              className="absolute -left-2 top-1/4 animate-sparkle"
              aria-hidden="true"
            >
              <Sparkles className="h-6 w-6 text-accent" />
            </div>

            <div
              className="absolute -right-4 bottom-1/3 animate-sparkle"
              style={{ animationDelay: "0.5s" }}
              aria-hidden="true"
            >
              <Star className="h-5 w-5 fill-amauta-orange text-amauta-orange" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
