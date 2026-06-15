import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/images/mascot.jpg"
            alt=""
            width={36}
            height={36}
            className="rounded-full"
          />
          <span className="text-lg font-bold text-primary">
            {"Ama"}
            <span className="text-accent">{"uta"}</span>
          </span>
        </div>
        <nav className="flex flex-wrap justify-center gap-6" aria-label="Pie de página">
          <Link href="#que-es" className="text-sm text-muted-foreground transition-colors hover:text-primary">
            {"Qué es"}
          </Link>
          <Link href="#funciones" className="text-sm text-muted-foreground transition-colors hover:text-primary">
            {"Funciones"}
          </Link>
          <Link href="#diferente" className="text-sm text-muted-foreground transition-colors hover:text-primary">
            {"¿Por qué es diferente?"}
          </Link>
        </nav>
        <p className="text-xs text-muted-foreground">
          {"Amauta "} {new Date().getFullYear()} {" - Sabiduría que aprende contigo."}
        </p>
      </div>
    </footer>
  )
}
