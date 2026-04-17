import type { Metadata } from "next";

import { Container } from "@/components/common/container";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Política de Privacidade",
  description:
    "Política de privacidade da Teste e teste Advocacia sobre coleta, uso e proteção de dados pessoais.",
  path: "/politica-de-privacidade",
});

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <PageHero
        eyebrow="Privacidade"
        title="Política de Privacidade"
        description="Transparência sobre o tratamento de dados pessoais em conformidade com a legislação aplicável."
        crumbs={[{ label: "Início", href: "/" }, { label: "Política de Privacidade" }]}
      />

      <section className="section-space">
        <Container>
          <Reveal>
            <article className="surface-panel mx-auto max-w-4xl space-y-8 p-6 sm:p-9">
              <section>
                <h2 className="font-heading text-3xl text-foreground">1. Informações gerais</h2>
                <p className="mt-3 text-base text-muted-foreground">
                  A presente Política de Privacidade descreve como a Teste e teste Advocacia coleta, utiliza, armazena e
                  protege dados pessoais fornecidos por usuários deste site. O uso do site implica ciência das práticas
                  aqui descritas.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-3xl text-foreground">2. Dados coletados</h2>
                <p className="mt-3 text-base text-muted-foreground">
                  Podemos coletar dados fornecidos diretamente pelo usuário em formulários de contato, como nome,
                  telefone, e-mail e informações relacionadas à demanda jurídica apresentada.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-3xl text-foreground">3. Finalidade do tratamento</h2>
                <p className="mt-3 text-base text-muted-foreground">
                  Os dados são utilizados para retorno de contato, organização de atendimento inicial, comunicação
                  institucional e cumprimento de obrigações legais e regulatórias relacionadas à atividade profissional.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-3xl text-foreground">4. Compartilhamento de dados</h2>
                <p className="mt-3 text-base text-muted-foreground">
                  Não comercializamos dados pessoais. O compartilhamento poderá ocorrer quando necessário para execução
                  de serviços contratados, cumprimento de obrigação legal ou mediante determinação de autoridade
                  competente.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-3xl text-foreground">5. Segurança e armazenamento</h2>
                <p className="mt-3 text-base text-muted-foreground">
                  Adotamos medidas técnicas e organizacionais para proteção de dados pessoais, em nível compatível com o
                  porte e a natureza das informações tratadas.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-3xl text-foreground">6. Direitos do titular</h2>
                <p className="mt-3 text-base text-muted-foreground">
                  O titular dos dados pode solicitar acesso, correção, atualização ou eliminação de informações, quando
                  aplicável, conforme os direitos previstos na legislação vigente.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-3xl text-foreground">7. Contato sobre privacidade</h2>
                <p className="mt-3 text-base text-muted-foreground">
                  Em caso de dúvidas sobre esta Política, entre em contato pelo e-mail
                  {" "}
                  <span className="text-foreground">privacidade@testeetesteadvocacia.com.br</span>.
                </p>
              </section>

              <p className="border-t border-border/70 pt-4 text-sm text-muted-foreground">
                Última atualização: 17 de abril de 2026.
              </p>
            </article>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
