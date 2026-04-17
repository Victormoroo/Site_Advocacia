import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";

import { Container } from "@/components/common/container";
import { CtaBand } from "@/components/common/cta-band";
import { ImagePlaceholder } from "@/components/common/image-placeholder";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { buttonVariants } from "@/components/ui/button";
import { getAreaBySlug, practiceAreas } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const area = getAreaBySlug(params.slug);

  if (!area) {
    return buildMetadata({
      title: "Área de Atuação",
      description: "Informações de atuação jurídica.",
      path: "/areas-de-atuacao",
    });
  }

  return buildMetadata({
    title: `${area.title} em Franca-SP`,
    description: `${area.summary} Atendimento da Teste e teste Advocacia em ${area.title}.`,
    path: `/areas-de-atuacao/${area.slug}`,
  });
}

export default function AreaDetailPage({ params }: { params: { slug: string } }) {
  const area = getAreaBySlug(params.slug);

  if (!area) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Área de atuação"
        title={area.title}
        description={area.intro}
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Áreas de Atuação", href: "/areas-de-atuacao" },
          { label: area.shortTitle },
        ]}
      />

      <section className="section-space">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <Reveal className="space-y-8">
              <article className="surface-panel p-6 sm:p-8">
                <h2 className="font-heading text-3xl text-foreground">Serviços e frentes de atendimento</h2>
                <ul className="mt-5 space-y-3">
                  {area.services.map((service) => (
                    <li key={service} className="flex gap-2.5 text-base text-muted-foreground">
                      <Check className="mt-1 size-4 text-accent-strong" aria-hidden />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="surface-panel p-6 sm:p-8">
                <h2 className="font-heading text-3xl text-foreground">Situações comuns de atendimento</h2>
                <ul className="mt-5 space-y-3">
                  {area.situations.map((situation) => (
                    <li key={situation} className="flex gap-2.5 text-base text-muted-foreground">
                      <span className="mt-2 inline-block size-1.5 rounded-full bg-accent-strong/75" aria-hidden />
                      <span>{situation}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delay={0.1} className="space-y-6">
              <ImagePlaceholder
                label={`Direção visual para página de ${area.title.toLowerCase()}, com ambiente sóbrio e retrato natural.`}
                className="min-h-[330px]"
              />

              <article className="surface-panel p-6 sm:p-8">
                <p className="text-[0.72rem] font-medium tracking-[0.12em] uppercase text-accent-strong">
                  Abordagem institucional
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">{area.approach}</p>
                <p className="mt-5 text-base text-foreground">{area.cta}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/contato" className={cn(buttonVariants({ size: "lg" }), "h-11")}>
                    Solicitar atendimento
                  </Link>
                  <Link
                    href="/areas-de-atuacao"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-strong transition-colors hover:text-foreground"
                  >
                    Ver outras áreas
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </div>
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      <Container>
        <CtaBand
          title="Converse com nossa equipe sobre sua demanda"
          description="Uma análise inicial organizada ajuda você a tomar decisões jurídicas com mais segurança e tranquilidade."
        />
      </Container>
    </>
  );
}
