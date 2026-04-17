import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/common/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="section-space">
      <Container>
        <div className="mx-auto max-w-2xl space-y-5 rounded-3xl border border-border/70 bg-card/85 px-6 py-12 text-center shadow-[0_18px_60px_-45px_rgba(15,23,42,.8)] sm:px-10">
          <p className="text-[0.74rem] font-medium tracking-[0.12em] uppercase text-accent-strong">Página não encontrada</p>
          <h1 className="font-heading text-4xl text-foreground sm:text-5xl">Conteúdo indisponível</h1>
          <p className="text-base text-muted-foreground sm:text-lg">
            A página que você tentou acessar não foi localizada. Você pode retornar à página inicial ou falar com nossa equipe.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/" className={cn(buttonVariants({ size: "lg" }), "h-11")}>
              <ArrowLeft className="size-4" aria-hidden />
              Voltar ao início
            </Link>
            <Link
              href="/contato"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 border-accent-strong/30 bg-transparent")}
            >
              Ir para contato
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
