"use client"

import { BookOpen, Search, Heart, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const useCases = [
  {
    icon: BookOpen,
    text: "Para **reforzar** el aprendizaje escolar desde casa.",
  },
  {
    icon: Lightbulb,
    text: "Para **explicar** temas dificiles con claridad.",
  },
  {
    icon: Search,
    text: "Para **detectar** avances y dificultades del nino.",
  },
  {
    icon: Heart,
    text: "Para **acompanar** al nino emocionalmente mientras aprende.",
  },
]

function renderBoldText(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/)
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i}>{part}</strong>
    ) : (
      <span key={i}>{part}</span>
    )
  )
}

function UseCaseCard({ item, index }: { item: typeof useCases[number]; index: number }) {
  const { ref, isVisible } = useScrollReveal()
  const Icon = item.icon

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
      <Card className="h-full border border-border/60 bg-card shadow-sm transition-shadow hover:shadow-md">
        <CardContent className="flex items-start gap-4 p-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amauta-orange-light">
            <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
          </div>
          <p className="text-base leading-relaxed text-foreground">
            {renderBoldText(item.text)}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export function UseCasesSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-3xl font-extrabold text-primary md:text-4xl text-balance">
          Para que se utiliza?
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {useCases.map((item, index) => (
            <UseCaseCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
