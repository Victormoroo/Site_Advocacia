import type { Metadata } from "next";

import { AreaCard } from "@/components/cards/area-card";
import { Container } from "@/components/common/container";
import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { practiceAreas } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Áreas de Atuação",
  description:
    "Conheça as áreas de atuação da Teste e teste Advocacia: Direito Previdenciário, Trabalhista e Cível, com atendimento claro e responsável.",
  path: "/areas-de-atuacao",
});

export default function AreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Atuação Jurídica"
        title="Áreas de atuação com foco em estratégia e segurança jurídica"
        description="Nossa atuação é concentrada em três frentes essenciais, com abordagem técnica e comunicação acessível para decisões bem orientadas."
        crumbs={[{ label: "Início", href: "/" }, { label: "Áreas de Atuação" }]}
      />

      <section className="section-space">
        <Container>
          <Reveal>
            <SectionHeading
              title="Direito Previdenciário, Trabalhista e Cível"
              description="Cada área possui estrutura de atendimento dedicada, com análise individual e condução responsável em todas as etapas."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {practiceAreas.map((area, index) => (
              <Reveal key={area.slug} delay={index * 0.06}>
                <AreaCard area={area} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Container>
        <CtaBand
          title="Precisa entender qual área atende melhor sua demanda?"
          description="Nossa equipe pode orientar o encaminhamento correto do seu caso de forma clara, sem promessas e com análise responsável."
        />
      </Container>
    </>
  );
}
