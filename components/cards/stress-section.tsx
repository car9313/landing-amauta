"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useParallax } from "@/hooks/use-parallax";

const benefits = [
  {
    text: "Evita peleas al hacer tareas: el nino comprende mejor.",
  },
  {
    text: "Los padres reciben orientacion clara sin ser expertos.",
  },
  {
    text: "El nino se siente acompanado y capaz, lo que reduce frustraciones.",
  },
];

export function StressSection() {
  const { ref: textRef, isVisible: textVisible } = useScrollReveal();
  const { ref: imgRef, isVisible: imgVisible } = useScrollReveal();
  const { ref: parallaxRef, offset } = useParallax({
    speed: 0.15,
    direction: "down",
  });

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto  flex max-w-5xl flex-col items-center gap-12 px-4 md:flex-row">
        <div
          ref={textRef}
          className="flex flex-1 flex-col transition-all duration-700 ease-out"
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? "translateX(0)" : "translateX(-40px)",
          }}
        >
          <h2 className="text-3xl font-extrabold text-primary md:text-4xl text-balance">
            {"Como Amauta reduce el estres en casa?"}
          </h2>
          <ul className="mt-8 flex flex-col gap-5">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-start gap-3 transition-all duration-500 ease-out"
                style={{
                  opacity: textVisible ? 1 : 0,
                  transform: textVisible
                    ? "translateX(0)"
                    : "translateX(-20px)",
                  transitionDelay: `${300 + index * 150}ms`,
                }}
              >
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amauta-orange-light">
                  <Check className="h-4 w-4 text-accent" aria-hidden="true" />
                </span>
                <p className="text-base leading-relaxed text-foreground">
                  {benefit.text}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-8 rounded-xl bg-amauta-blue-light px-6 py-4 text-center text-lg font-bold text-primary">
            {'Transforma el "no entiendo" en "ahora si puedo!"'}
          </p>
        </div>
        <div
          ref={imgRef}
          className="flex flex-1 justify-center transition-all duration-700 ease-out"
          style={{
            opacity: imgVisible ? 1 : 0,
            transform: imgVisible ? "translateX(0)" : "translateX(40px)",
          }}
        >
          <div
            ref={parallaxRef}
            style={{ transform: `translateY(${offset}px)` }}
          >
            <Image
              src="/images/branding.jpg"
              alt="Ninos aprendiendo con Amauta, acompanados por la mascota guia"
              width={480}
              height={360}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
