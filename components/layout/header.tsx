"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CTA_URL } from "@/lib/constants";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Qué es Amauta", href: "#que-es" },
  { label: "Familias", href: "#familias-escuelas" },
  { label: "Testimonios", href: "#testimonios" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [showMobileCta, setShowMobileCta] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
    setShowMobileCta(window.scrollY > 300);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "border-border bg-card/95 shadow-sm backdrop-blur-md"
            : "border-transparent bg-card/80 backdrop-blur-sm",
          showMobileCta && "md:sticky fixed -translate-y-full md:translate-y-0",
        )}
      >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a
          href="#hero"
          className="flex items-center gap-2"
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
        </a>

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Navegación principal"
        >
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
                  isActive
                    ? "bg-accent/10 text-accent"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-accent" />
                )}
              </a>
            );
          })}
          <div className="ml-2">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-accent text-accent-foreground font-bold shadow-sm transition-all hover:scale-105 hover:bg-accent/90 hover:shadow-md"
            >
              <a href={CTA_URL}>Probar Amauta gratis</a>
            </Button>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          className="flex items-center justify-center rounded-lg p-2 text-foreground md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out md:hidden",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <nav
          className="overflow-hidden border-t border-border bg-card"
          aria-label="Navegación móvil"
        >
          <div className="flex flex-col gap-2 px-4 pb-5 pt-3">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base font-semibold transition-all duration-200",
                    isActive
                      ? "bg-accent/10 text-accent"
                      : "text-foreground hover:bg-secondary",
                  )}
                >
                  {link.label}
                </a>
              );
            })}
            <Button
              asChild
              size="lg"
              className="mt-2 w-full rounded-full bg-accent text-accent-foreground font-bold hover:bg-accent/90"
            >
              <a href={CTA_URL} onClick={() => setIsOpen(false)}>
                Probar Amauta gratis
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>

    {/* Mobile sticky CTA bar */}
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card shadow-lg transition-all duration-300 md:hidden",
        showMobileCta
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0",
      )}
    >
      <div className="px-4 py-3">
        <Button
          asChild
          size="lg"
          className="w-full rounded-full bg-accent text-accent-foreground font-bold shadow-sm hover:bg-accent/90"
        >
          <a href={CTA_URL}>Probar Amauta gratis</a>
        </Button>
      </div>
    </div>
  </>
  );
}
