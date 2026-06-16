import Image from "next/image";
import Link from "next/link";
import { Sparkles, WifiOff, ShieldCheck, Brain } from "lucide-react";

const footerLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Qué es Amauta", href: "#que-es" },
  { label: "Familias", href: "#familias-escuelas" },
  { label: "Testimonios", href: "#testimonios" },
];

const trustBadges = [
  { icon: WifiOff, label: "Offline-first" },
  { icon: ShieldCheck, label: "Seguro para niños" },
  { icon: Brain, label: "Aprendizaje guiado" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-background to-amauta-blue-light/30">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand column */}
          <div className="md:col-span-4">
            <Link
              href="#hero"
              className="inline-flex items-center gap-2"
              aria-label="Amauta - Inicio"
            >
              <Image
                src="/icons/icon-192x192.png"
                alt=""
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold text-primary">
                Ama<span className="text-accent">uta</span>
              </span>
            </Link>

            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Acompañamos el aprendizaje de niños de 5 a 9 años con una
              experiencia guiada, offline-first, diseñada para casa y aula.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {trustBadges.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Navegación
            </h4>
            <nav className="flex flex-col gap-3" aria-label="Pie de página">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-foreground transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA Column */}
          <div className="flex flex-col md:col-span-5 md:items-end md:text-right">
            <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">
              ¿Listo para comenzar?
            </h4>
            <p className="mb-4 max-w-xs text-sm leading-relaxed text-muted-foreground md:text-right">
              Ayuda a tu hijo a aprender con confianza, motivación y sin
              conexión.
            </p>
            <Link
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-sm transition-all hover:scale-105 hover:bg-accent/90 hover:shadow-md"
            >
              Probar Amauta gratis
              <Sparkles className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Amauta &mdash; Sabiduría que
            aprende contigo.
          </p>
        </div>
      </div>
    </footer>
  );
}
