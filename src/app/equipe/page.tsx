import type { Metadata } from "next";

import { LawyerCard } from "@/components/cards/lawyer-card";
import { Container } from "@/components/common/container";
import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { team } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Equipe",
  description:
    "Conheça a equipe da Teste e teste Advocacia: profissionais com atuação técnica em Direito Previdenciário, Trabalhista e Cível.",
  path: "/equipe",
});

export default function EquipePage() {
  return (
    <>
      <PageHero
        eyebrow="Equipe Jurídica"
        title="Profissionais preparados para conduzir cada caso com responsabilidade"
        description="Nossa equipe atua de forma integrada, com alinhamento técnico e comunicação acessível para orientar decisões jurídicas com segurança."
        crumbs={[{ label: "Início", href: "/" }, { label: "Equipe" }]}
      />

      <section className="section-space">
        <Container>
          <Reveal>
            <SectionHeading
              title="Perfis profissionais"
              description="Conheça os advogados que compõem o escritório e suas principais áreas de atuação."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {team.map((lawyer, index) => (
              <Reveal
                key={lawyer.slug}
                delay={index * 0.07}
                className={cn(
                  index === team.length - 1 &&
                    team.length % 2 === 1 &&
                    "md:col-span-2 md:mx-auto md:max-w-[460px] lg:col-span-1 lg:mx-0 lg:max-w-none",
                  index === team.length - 1 && team.length % 3 === 1 && "lg:col-start-2",
                )}
              >
                <LawyerCard lawyer={lawyer} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Container>
        <CtaBand
          title="Quer falar diretamente com nossa equipe?"
          description="Agende seu atendimento para receber orientação clara e segura sobre o próximo passo do seu caso."
        />
      </Container>
    </>
  );
}
