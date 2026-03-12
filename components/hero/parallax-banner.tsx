"use client"

import { useEffect, useRef, useState } from "react"

export function ParallaxBanner() {
  const ref = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    let ticking = false

    function handleScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect()
            const windowHeight = window.innerHeight
            // Calculate how far through the viewport the element is
            const progress = (windowHeight - rect.top) / (windowHeight + rect.height)
            setScrollY(progress)
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const bgTranslateY = (scrollY - 0.5) * 80 // -40px to +40px range

  return (
    <section
      ref={ref}
      className="relative h-[50vh] min-h-[320px] overflow-hidden md:h-[60vh]"
      aria-label="Amauta acompanando a ninos en el aula"
    >
      {/* Parallax background image */}
      <div
        className="absolute inset-[-80px] bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/classroom.jpg)",
          transform: `translateY(${bgTranslateY}px) scale(1.1)`,
          willChange: "transform",
        }}
        role="img"
        aria-label="Escena de salon de clases con ninos aprendiendo acompanados por Amauta"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-amauta-blue-dark/60" aria-hidden="true" />

      {/* Content over parallax */}
      <div className="relative flex h-full flex-col items-center justify-center gap-4 px-4 text-center">
        <p className="text-lg font-semibold text-primary-foreground/80 md:text-xl">
          Cuando no entienden... cuando se siente dificil...
        </p>
        <h2 className="text-3xl font-extrabold text-primary-foreground md:text-5xl text-balance">
          Amauta esta contigo.
        </h2>
        <p className="mt-2 text-xl font-bold text-accent md:text-2xl">
          Confianza.
        </p>
      </div>
    </section>
  )
}
