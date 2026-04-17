import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ImagePlaceholder } from "@/components/common/image-placeholder";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { LawyerProfile } from "@/content/site";

export function LawyerCard({ lawyer }: { lawyer: LawyerProfile }) {
  return (
    <Card className="group flex h-full flex-col border-border/70 bg-card/80 shadow-[0_22px_50px_-38px_rgba(15,23,42,.6)]">
      <CardHeader className="space-y-4 pb-3">
        <ImagePlaceholder label={lawyer.imageDirection} className="min-h-[230px] rounded-2xl p-4" />
        <div>
          <CardTitle className="font-heading text-2xl">{lawyer.name}</CardTitle>
          <p className="mt-1 text-sm font-medium tracking-wide text-accent-strong uppercase">{lawyer.role}</p>
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-3 pt-0">
        <p className="text-sm text-muted-foreground">{lawyer.oab}</p>
        <p className="text-base leading-relaxed text-foreground/95">{lawyer.miniBio}</p>
      </CardContent>

      <CardFooter>
        <Link
          href={`/equipe/${lawyer.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-strong transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Conhecer perfil
          <ArrowUpRight className="size-4" aria-hidden />
        </Link>
      </CardFooter>
    </Card>
  );
}
