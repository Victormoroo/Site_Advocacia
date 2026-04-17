import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { CtaBand } from "@/components/common/cta-band";
import { ImagePlaceholder } from "@/components/common/image-placeholder";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { differentials, siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Sobre o Escritório",
  description:
    "Conheça a Teste e teste Advocacia, escritório em Franca-SP com atuação institucional em Direito Previdenciário, Trabalhista e Cível.",
  path: "/sobre",
});

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Quem somos"
        title="Solidez institucional com atendimento jurídico próximo e responsável"
        description="A Teste e teste Advocacia foi estruturada para oferecer orientação jurídica clara, ética e tecnicamente consistente a pessoas e famílias em Franca-SP e região."
        crumbs={[{ label: "Início", href: "/" }, { label: "Sobre o Escritório" }]}
      />

      <section className="section-space">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Apresentação"
                title="Uma advocacia contemporânea, sem perder sobriedade"
                description="Nosso posicionamento institucional nasce da combinação entre técnica jurídica, escuta cuidadosa e comunicação objetiva."
              />
              <div className="mt-6 space-y-4 text-base text-muted-foreground sm:text-lg">
                <p>
                  Atendemos demandas em Direito Previdenciário, Trabalhista e Cível com foco em clareza: explicamos os
                  caminhos possíveis, os riscos envolvidos e os documentos necessários para cada etapa.
                </p>
                <p>
                  Mais do que conduzir processos, buscamos construir uma relação de confiança com quem nos procura,
                  oferecendo suporte jurídico respeitoso, organizado e alinhado à realidade de cada caso.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ImagePlaceholder
                label="Ambiente de reunião com mesa em madeira clara, composição minimalista e fotografia em tons neutros dessaturados."
                className="min-h-[390px]"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section-space border-y border-border/70 bg-muted/35">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Como trabalhamos"
              title="Método de atendimento estruturado para segurança e transparência"
              description="Processos claros, comunicação contínua e abordagem técnica fundamentada em documentação e estratégia."
              align="center"
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {differentials.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="surface-panel h-full p-6 sm:p-7">
                  <h3 className="font-heading text-2xl text-foreground">{item.title}</h3>
                  <p className="mt-3 text-base text-muted-foreground">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Estrutura"
              title="Atendimento presencial e digital com padrão institucional uniforme"
              description="Atendemos em Franca-SP e região, com canais organizados para facilitar agendamento, envio de documentos e acompanhamento do caso."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <article className="surface-panel p-5">
                <p className="text-[0.72rem] tracking-[0.12em] uppercase text-accent-strong">Localização</p>
                <p className="mt-2 text-base text-foreground">{siteConfig.address}</p>
              </article>
              <article className="surface-panel p-5">
                <p className="text-[0.72rem] tracking-[0.12em] uppercase text-accent-strong">Horário</p>
                <p className="mt-2 text-base text-foreground">{siteConfig.officeHours}</p>
              </article>
              <article className="surface-panel p-5">
                <p className="text-[0.72rem] tracking-[0.12em] uppercase text-accent-strong">Região de atendimento</p>
                <p className="mt-2 text-base text-foreground">{siteConfig.serviceRegion}</p>
              </article>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="mt-10 flex flex-wrap gap-3">
            <Link href="/equipe" className={cn(buttonVariants({ size: "lg" }), "h-11")}>Conheça nossa equipe</Link>
            <Link
              href="/contato"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-11 border-accent-strong/30 bg-transparent hover:bg-accent-soft",
              )}
            >
              Fale com o escritório
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
        </Container>
      </section>

      <Container>
        <CtaBand
          title="Se você procura orientação jurídica com clareza, estamos à disposição"
          description="Agende um atendimento inicial para entender seu cenário com linguagem simples, visão técnica e postura institucional."
        />
      </Container>
    </>
  );
}
