"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useParallax } from "@/hooks/use-parallax"

export function CtaSection() {
  const { ref: contentRef, isVisible } = useScrollReveal()
  const { ref: bgRef, offset } = useParallax({ speed: 0.12 })

  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-primary py-20 md:py-28"
      ref={bgRef}
    >
      {/* Parallax decorative circles */}
      <div
        className="absolute -left-12 top-16 h-52 w-52 rounded-full bg-primary-foreground/5"
        aria-hidden="true"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      />
      <div
        className="absolute -right-10 bottom-8 h-40 w-40 rounded-full bg-accent/10"
        aria-hidden="true"
        style={{ transform: `translateY(${offset * -0.4}px)` }}
      />
      <div
        className="absolute right-1/4 top-10 h-20 w-20 rounded-full bg-primary-foreground/5"
        aria-hidden="true"
        style={{ transform: `translateY(${offset * 0.3}px)` }}
      />

      <div
        ref={contentRef}
        className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 md:flex-row md:gap-16"
      >
        {/* Mascot */}
        <div
          className="flex shrink-0 justify-center transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0) scale(1)" : "translateX(-30px) scale(0.9)",
          }}
        >
          <div className="relative">
            <div
              className="absolute inset-0 -m-6 rounded-full bg-primary-foreground/10 animate-pulse-ring"
              aria-hidden="true"
            />
            <Image
              src="/images/mascot.jpg"
              alt="Amauta, el ave sabia"
              width={200}
              height={200}
              className="relative animate-float drop-shadow-lg"
            />
          </div>
        </div>

        {/* Text */}
        <div
          className="flex flex-col items-center text-center transition-all duration-700 ease-out md:items-start md:text-left"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "200ms",
          }}
        >
          <h2 className="text-3xl font-extrabold text-primary-foreground md:text-5xl text-balance">
            {"Aprende a ver"}
            <br />
            <span className="text-accent">mas lejos.</span>
          </h2>

          <div
            className="mt-4 transition-all duration-500"
            style={{
              opacity: isVisible ? 1 : 0,
              transitionDelay: "500ms",
            }}
          >
            <p className="text-lg font-bold text-primary-foreground/80">
              Amauta
            </p>
            <p className="text-sm text-primary-foreground/60">
              Sabiduria que aprende contigo
            </p>
          </div>

          <div
            className="mt-8 flex flex-col gap-4 sm:flex-row"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(15px)",
              transitionDelay: "600ms",
              transition: "all 0.5s ease-out",
            }}
          >
            <Button
              asChild
              size="lg"
              className="min-h-[56px] rounded-full bg-accent px-10 text-lg font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105 hover:bg-accent/90 animate-gentle-pulse"
            >
              <a href="#empezar">Comenzar ahora</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="min-h-[56px] rounded-full border-primary-foreground/30 bg-transparent px-8 text-lg font-bold text-primary-foreground transition-transform hover:scale-105 hover:bg-primary-foreground/10"
            >
              <a href="#que-es">Conocer mas</a>
            </Button>
          </div>

          <p
            className="mt-6 text-sm text-primary-foreground/50 transition-all duration-500"
            style={{
              opacity: isVisible ? 1 : 0,
              transitionDelay: "800ms",
            }}
          >
            Amauta que aprende contigo.
          </p>
        </div>
      </div>
    </section>
  )
}
