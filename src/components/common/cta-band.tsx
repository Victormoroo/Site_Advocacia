import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

type CtaBandProps = {
  title: string;
  description: string;
};

export function CtaBand({ title, description }: CtaBandProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="overflow-hidden rounded-3xl border border-border/80 bg-[linear-gradient(125deg,#0f141b_0%,#131b24_38%,#1f2933_72%,#2a3946_100%)] px-6 py-10 shadow-[0_26px_70px_-40px_rgba(15,23,42,.95)] sm:px-10 sm:py-12 lg:px-12">
        <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-[0.72rem] font-medium tracking-[0.12em] uppercase text-slate-300">
              Atendimento Institucional
            </p>
            <h2 className="font-heading text-3xl leading-tight text-white sm:text-4xl">{title}</h2>
            <p className="max-w-2xl text-base leading-relaxed text-slate-200/95 sm:text-lg">{description}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:justify-end lg:flex-col lg:items-stretch">
            <Link
              href="/contato"
              className={cn(buttonVariants({ size: "lg" }), "h-11 bg-white text-slate-900 hover:bg-white/90")}
            >
              Agendar conversa
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
            <Link
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 border-white/25 bg-white/5 text-white hover:bg-white/12 hover:text-white",
              )}
            >
              <MessageCircle className="size-4" aria-hidden />
              Conversar no WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
