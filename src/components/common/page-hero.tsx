import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/common/container";
import { cn } from "@/lib/utils";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  title: string;
  description: string;
  eyebrow?: string;
  crumbs?: Crumb[];
  className?: string;
};

export function PageHero({ title, description, eyebrow, crumbs, className }: PageHeroProps) {
  return (
    <section className={cn("relative border-b border-border/70 bg-muted/45 py-16 sm:py-20", className)}>
      <Container>
        {crumbs && crumbs.length ? (
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            {crumbs.map((crumb, index) => {
              const isLast = index === crumbs.length - 1;
              return (
                <div key={`${crumb.label}-${index}`} className="flex items-center gap-2">
                  {crumb.href && !isLast ? (
                    <Link className="transition-colors hover:text-foreground" href={crumb.href}>
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-foreground">{crumb.label}</span>
                  )}
                  {!isLast ? <ChevronRight className="size-3.5" aria-hidden /> : null}
                </div>
              );
            })}
          </nav>
        ) : null}

        <div className="max-w-3xl space-y-5">
          {eyebrow ? (
            <p className="font-medium tracking-[0.12em] text-[0.74rem] uppercase text-accent-strong">{eyebrow}</p>
          ) : null}
          <h1 className="font-heading text-4xl leading-tight text-foreground sm:text-5xl">{title}</h1>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
        </div>
      </Container>
    </section>
  );
}
