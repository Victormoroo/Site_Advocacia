import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { PracticeArea } from "@/content/site";

export function AreaCard({ area }: { area: PracticeArea }) {
  return (
    <Card className="group relative flex h-full flex-col overflow-hidden border-border/70 bg-card/80 shadow-[0_24px_55px_-44px_rgba(15,23,42,.6)] transition-all hover:-translate-y-0.5 hover:border-accent-strong/40 hover:shadow-[0_28px_70px_-42px_rgba(15,23,42,.55)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-strong/45 to-transparent" aria-hidden />
      <CardHeader className="pb-4">
        <p className="text-[0.68rem] font-medium tracking-[0.12em] uppercase text-accent-strong">Área de Atuação</p>
        <CardTitle className="font-heading text-2xl leading-tight text-foreground">{area.title}</CardTitle>
        <CardDescription className="text-base leading-relaxed text-muted-foreground">{area.summary}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pt-0">
        <ul className="space-y-2.5 text-sm leading-relaxed text-foreground/90">
          {area.services.slice(0, 3).map((service) => (
            <li key={service} className="flex gap-2">
              <span className="mt-1 inline-block size-1.5 rounded-full bg-accent-strong/75" aria-hidden />
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Link
          href={`/areas-de-atuacao/${area.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-strong transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Ver detalhes
          <ArrowUpRight className="size-4" aria-hidden />
        </Link>
      </CardFooter>
    </Card>
  );
}
