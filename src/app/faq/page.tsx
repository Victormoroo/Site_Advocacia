import type { Metadata } from "next";

import { Container } from "@/components/common/container";
import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqItems } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Perguntas Frequentes",
  description:
    "Dúvidas frequentes sobre atendimento jurídico previdenciário, trabalhista e cível na Teste e teste Advocacia.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Perguntas frequentes sobre atendimento e atuação jurídica"
        description="Reunimos respostas claras para as dúvidas mais comuns de quem busca orientação em Direito Previdenciário, Trabalhista e Cível."
        crumbs={[{ label: "Início", href: "/" }, { label: "FAQ" }]}
      />

      <section className="section-space">
        <Container>
          <Reveal className="mx-auto max-w-4xl">
            <Accordion defaultValue={faqItems[0] ? [faqItems[0].question] : []}>
              {faqItems.map((item) => (
                <AccordionItem key={item.question} value={item.question}>
                  <AccordionTrigger className="py-4 text-base sm:text-lg text-foreground">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </Container>
      </section>

      <Container>
        <CtaBand
          title="Ainda ficou com alguma dúvida?"
          description="Nossa equipe está disponível para orientar seu caso com atenção, linguagem acessível e transparência sobre os próximos passos."
        />
      </Container>
    </>
  );
}
