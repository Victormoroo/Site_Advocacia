import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Languages, Mail, GraduationCap } from "lucide-react";

import { Container } from "@/components/common/container";
import { CtaBand } from "@/components/common/cta-band";
import { ImagePlaceholder } from "@/components/common/image-placeholder";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { buttonVariants } from "@/components/ui/button";
import { getLawyerBySlug, team } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return team.map((lawyer) => ({ slug: lawyer.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const lawyer = getLawyerBySlug(params.slug);

  if (!lawyer) {
    return buildMetadata({
      title: "Equipe Jurídica",
      description: "Perfil profissional da equipe jurídica.",
      path: "/equipe",
    });
  }

  return buildMetadata({
    title: `${lawyer.name} | ${lawyer.role}`,
    description: `${lawyer.miniBio} ${lawyer.oab}.`,
    path: `/equipe/${lawyer.slug}`,
  });
}

export default function LawyerDetailPage({ params }: { params: { slug: string } }) {
  const lawyer = getLawyerBySlug(params.slug);

  if (!lawyer) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Perfil profissional"
        title={lawyer.name}
        description={lawyer.miniBio}
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Equipe", href: "/equipe" },
          { label: lawyer.name },
        ]}
      />

      <section className="section-space">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <Reveal className="space-y-6">
              <ImagePlaceholder label={lawyer.imageDirection} className="min-h-[380px]" />
              <article className="surface-panel p-6">
                <p className="font-medium text-accent-strong">{lawyer.role}</p>
                <p className="mt-1 text-sm text-muted-foreground">{lawyer.oab}</p>
                <p className="mt-4 text-base text-foreground">{lawyer.fullBio}</p>
              </article>
            </Reveal>

            <Reveal delay={0.1} className="space-y-5">
              <article className="surface-panel p-6 sm:p-7">
                <h2 className="font-heading text-3xl text-foreground">Formação e desenvolvimento</h2>
                <ul className="mt-5 space-y-3 text-base text-muted-foreground">
                  {lawyer.education.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <GraduationCap className="mt-1 size-4 text-accent-strong" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="surface-panel p-6 sm:p-7">
                <h2 className="font-heading text-3xl text-foreground">Áreas de atuação</h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {lawyer.expertise.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-accent-strong/25 bg-accent-soft/60 px-4 py-1.5 text-sm text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>

              <article className="surface-panel p-6 sm:p-7">
                <h2 className="font-heading text-3xl text-foreground">Idiomas e contato</h2>
                <p className="mt-5 flex items-center gap-2.5 text-base text-muted-foreground">
                  <Languages className="size-4 text-accent-strong" aria-hidden />
                  {lawyer.languages.join(" | ")}
                </p>
                <p className="mt-2 flex items-center gap-2.5 text-base text-muted-foreground">
                  <Mail className="size-4 text-accent-strong" aria-hidden />
                  {lawyer.email}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/contato" className={cn(buttonVariants({ size: "lg" }), "h-11")}>
                    Solicitar contato
                  </Link>
                  <Link
                    href="/equipe"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-strong transition-colors hover:text-foreground"
                  >
                    Voltar para equipe
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
          title="Atendimento profissional com linguagem simples"
          description="Estamos à disposição para orientar sua demanda com seriedade, clareza e acompanhamento técnico."
        />
      </Container>
    </>
  );
}
