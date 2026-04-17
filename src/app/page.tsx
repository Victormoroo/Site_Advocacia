import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";

import { AreaCard } from "@/components/cards/area-card";
import { LawyerCard } from "@/components/cards/lawyer-card";
import { Container } from "@/components/common/container";
import { CtaBand } from "@/components/common/cta-band";
import { ImagePlaceholder } from "@/components/common/image-placeholder";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import {
  differentials,
  faqItems,
  homeSeo,
  practiceAreas,
  siteConfig,
  team,
  trustHighlights,
} from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: homeSeo.title,
  description: homeSeo.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60 bg-[radial-gradient(circle_at_top_right,rgba(52,67,80,.12),transparent_44%),linear-gradient(180deg,#f7f6f4_0%,#f1efec_100%)] py-14 sm:py-18 lg:py-22">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.92fr]">
            <Reveal className="space-y-6">
              <p className="font-medium tracking-[0.12em] text-[0.73rem] uppercase text-accent-strong">
                Escritório de advocacia em Franca-SP
              </p>

              <h1 className="font-heading text-4xl leading-tight text-foreground sm:text-5xl lg:text-[3.35rem] lg:leading-[1.05]">
                Presença institucional sólida para decisões jurídicas com clareza.
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                A {siteConfig.name} atua com foco em Direito Previdenciário, Trabalhista e Cível, oferecendo
                atendimento técnico, humano e acessível para quem busca segurança jurídica sem linguagem complicada.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/contato" className={cn(buttonVariants({ size: "lg" }), "h-11")}> 
                  {siteConfig.ctaPrimary}
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
                <Link
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-11 border-accent-strong/30 bg-transparent text-foreground hover:bg-accent-soft",
                  )}
                >
                  <PhoneCall className="size-4" aria-hidden />
                  {siteConfig.ctaSecondary}
                </Link>
              </div>

              <ul className="grid gap-2 pt-1 text-sm text-muted-foreground sm:grid-cols-2">
                {trustHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 size-4 text-accent-strong" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.12}>
              <ImagePlaceholder
                label="Ambiente contemporâneo de atendimento jurídico, com iluminação natural e estética sóbria em preto, branco e cinzas quentes."
                className="min-h-[470px]"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Atuação principal"
              title="Áreas de atuação com abordagem técnica e comunicação acessível"
              description="Trabalhamos com escuta atenta e estratégia jurídica responsável para orientar decisões seguras em momentos importantes."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {practiceAreas.map((area, index) => (
              <Reveal key={area.slug} delay={index * 0.06}>
                <AreaCard area={area} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.14} className="mt-8">
            <Link
              href="/areas-de-atuacao"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-strong transition-colors hover:text-foreground"
            >
              Ver todas as informações de atuação
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
        </Container>
      </section>

      <section className="section-space border-y border-border/70 bg-muted/35">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
            <Reveal>
              <ImagePlaceholder
                label="Detalhes de arquitetura e materiais do escritório com textura refinada, tons neutros e composição institucional elegante."
                className="min-h-[380px]"
              />
            </Reveal>

            <Reveal delay={0.08}>
              <SectionHeading
                eyebrow="Sobre o escritório"
                title="Atendimento próximo, postura ética e estratégia jurídica bem fundamentada"
                description="Nosso trabalho é orientar pessoas e famílias com segurança técnica e linguagem clara, especialmente em demandas que exigem confiança, previsibilidade e acompanhamento contínuo."
              />
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                A {siteConfig.name} combina rigor jurídico e acolhimento no atendimento. Cada caso recebe análise
                individual, com alinhamento transparente sobre documentação, prazos e possíveis caminhos legais.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="surface-panel p-5">
                  <p className="text-[0.7rem] tracking-[0.11em] uppercase text-accent-strong">Posicionamento</p>
                  <p className="mt-2 text-base text-foreground">Presença institucional sóbria e confiável.</p>
                </div>
                <div className="surface-panel p-5">
                  <p className="text-[0.7rem] tracking-[0.11em] uppercase text-accent-strong">Compromisso</p>
                  <p className="mt-2 text-base text-foreground">Explicações objetivas para decisões conscientes.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Diferenciais"
              title="Uma advocacia que prioriza confiança, clareza e consistência"
              description="Estrutura de atendimento pensada para simplificar o processo e fortalecer a tomada de decisão com informação de qualidade."
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

      <section className="section-space border-y border-border/70 bg-muted/35">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Equipe"
              title="Profissionais com visão técnica e atendimento responsável"
              description="Nossa equipe atua com alinhamento entre técnica jurídica e cuidado na comunicação, para que cada cliente se sinta bem orientado em todas as etapas."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {team.map((lawyer, index) => (
              <Reveal key={lawyer.slug} delay={index * 0.07}>
                <LawyerCard lawyer={lawyer} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="Perguntas Frequentes"
                title="Respostas objetivas para dúvidas comuns antes do atendimento"
                description="Reunimos respostas claras para ajudar você a entender como funciona nosso atendimento e o que esperar de cada etapa."
              />
            </Reveal>

            <Reveal delay={0.12}>
              <Accordion defaultValue={faqItems[0] ? [faqItems[0].question] : []}>
                {faqItems.slice(0, 5).map((item) => (
                  <AccordionItem key={item.question} value={item.question}>
                    <AccordionTrigger className="text-base text-foreground">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <Link
                href="/faq"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-strong transition-colors hover:text-foreground"
              >
                Acessar FAQ completo
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      <Container>
        <CtaBand
          title="Estamos disponíveis para orientar seu caso com seriedade e clareza"
          description="Fale com a equipe da Teste e teste Advocacia para uma avaliação inicial responsável, com atendimento acolhedor e comunicação objetiva."
        />
      </Container>
    </>
  );
}
