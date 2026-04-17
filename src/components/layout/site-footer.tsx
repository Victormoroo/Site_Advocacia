import Link from "next/link";
import { MapPin, PhoneCall, Mail, Clock3 } from "lucide-react";

import { Container } from "@/components/common/container";
import { footerColumns, siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-[#0f141b] text-slate-200">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div className="space-y-4">
            <p className="font-heading text-3xl text-white">{siteConfig.name}</p>
            <p className="max-w-sm text-sm leading-relaxed text-slate-300">
              Escritório de advocacia com atuação em {siteConfig.city}, comprometido com orientação técnica,
              comunicação clara e atendimento respeitoso.
            </p>
          </div>

          <div>
            <p className="mb-4 text-[0.72rem] font-medium tracking-[0.12em] text-slate-400 uppercase">Institucional</p>
            <ul className="space-y-2 text-sm text-slate-200">
              {footerColumns.institution.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[0.72rem] font-medium tracking-[0.12em] text-slate-400 uppercase">Suporte</p>
            <ul className="space-y-2 text-sm text-slate-200">
              {footerColumns.support.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 text-sm text-slate-200">
            <p className="text-[0.72rem] font-medium tracking-[0.12em] text-slate-400 uppercase">Contato</p>
            <p className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 text-slate-300" aria-hidden />
              <span>{siteConfig.address}</span>
            </p>
            <p className="flex items-center gap-2.5">
              <PhoneCall className="size-4 text-slate-300" aria-hidden />
              <span>{siteConfig.phoneDisplay}</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Mail className="size-4 text-slate-300" aria-hidden />
              <span>{siteConfig.email}</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Clock3 className="size-4 text-slate-300" aria-hidden />
              <span>{siteConfig.officeHours}</span>
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs leading-relaxed text-slate-400 sm:text-sm">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</p>
          <p className="mt-1">
            Este site possui caráter estritamente informativo e institucional, em conformidade com os deveres éticos
            da advocacia.
          </p>
        </div>
      </Container>
    </footer>
  );
}
