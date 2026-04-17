import type { Metadata } from "next";
import Link from "next/link";
import { Clock3, Mail, MapPin, MessageCircle, PhoneCall } from "lucide-react";

import { Container } from "@/components/common/container";
import { ImagePlaceholder } from "@/components/common/image-placeholder";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Contato",
  description:
    "Entre em contato com a Teste e teste Advocacia em Franca-SP. Atendimento por formulário, telefone e WhatsApp.",
  path: "/contato",
});

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Fale com nossa equipe"
        description="Atendimento institucional em Franca-SP e região, com retorno em horário comercial e orientação clara desde o primeiro contato."
        crumbs={[{ label: "Início", href: "/" }, { label: "Contato" }]}
      />

      <section className="section-space">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <article className="surface-panel p-6 sm:p-8">
                <h2 className="font-heading text-3xl text-foreground">Envie sua mensagem</h2>
                <p className="mt-3 max-w-2xl text-base text-muted-foreground">
                  Utilize o formulário para descrever sua demanda. O envio abaixo representa uma estrutura funcional para
                  integração futura com e-mail, CRM ou automação de atendimento.
                </p>
                <div className="mt-7">
                  <ContactForm />
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1} className="space-y-6">
              <article className="surface-panel space-y-4 p-6 sm:p-8">
                <h2 className="font-heading text-3xl text-foreground">Informações do escritório</h2>
                <p className="flex items-start gap-2.5 text-base text-muted-foreground">
                  <MapPin className="mt-1 size-4 text-accent-strong" aria-hidden />
                  <span>{siteConfig.address}</span>
                </p>
                <p className="flex items-center gap-2.5 text-base text-muted-foreground">
                  <PhoneCall className="size-4 text-accent-strong" aria-hidden />
                  <span>{siteConfig.phoneDisplay}</span>
                </p>
                <p className="flex items-center gap-2.5 text-base text-muted-foreground">
                  <MessageCircle className="size-4 text-accent-strong" aria-hidden />
                  <span>{siteConfig.whatsappDisplay}</span>
                </p>
                <p className="flex items-center gap-2.5 text-base text-muted-foreground">
                  <Mail className="size-4 text-accent-strong" aria-hidden />
                  <span>{siteConfig.email}</span>
                </p>
                <p className="flex items-center gap-2.5 text-base text-muted-foreground">
                  <Clock3 className="size-4 text-accent-strong" aria-hidden />
                  <span>{siteConfig.officeHours}</span>
                </p>

                <Link href={siteConfig.whatsappHref} target="_blank" rel="noreferrer" className={cn(buttonVariants({ size: "lg" }), "mt-3 h-11 w-full")}>
                  Conversar no WhatsApp
                </Link>
              </article>

              <article className="surface-panel p-6 sm:p-8">
                <h2 className="font-heading text-2xl text-foreground">Mapa e localização</h2>
                <p className="mt-2 text-base text-muted-foreground">
                  Placeholder para mapa institucional do escritório em Franca-SP (integração futura com Google Maps ou
                  provedor equivalente).
                </p>
                <div className="mt-4">
                  <ImagePlaceholder
                    label="Placeholder de mapa institucional com marcação elegante da localização do escritório em Franca-SP."
                    className="min-h-[230px]"
                  />
                </div>
              </article>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="mt-8">
            <div className="surface-panel p-5 sm:p-6">
              <p className="text-sm text-muted-foreground sm:text-base">
                Nosso retorno é feito em horário comercial, respeitando a ordem de chegada e a complexidade inicial das
                informações enviadas.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
