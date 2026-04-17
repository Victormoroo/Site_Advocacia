import Link from "next/link";

import { MobileMenu } from "@/components/layout/mobile-menu";
import { buttonVariants } from "@/components/ui/button";
import { navLinks, siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

import { Container } from "../common/container";
import { HeaderNavLinks } from "./site-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-md">
      <Container className="relative flex h-[74px] items-center justify-between gap-6">
        <Link href="/" className="group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <div className="flex size-10 items-center justify-center rounded-full border border-accent-strong/30 bg-accent-soft text-[0.78rem] font-semibold tracking-wide text-accent-strong">
            TA
          </div>
          <div className="leading-tight">
            <p className="font-heading text-[1.28rem] text-foreground">{siteConfig.name}</p>
            <p className="text-xs tracking-wide text-muted-foreground uppercase">{siteConfig.city}</p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <HeaderNavLinks links={navLinks} />
          <Link href={siteConfig.whatsappHref} target="_blank" rel="noreferrer" className={cn(buttonVariants({ size: "lg" }), "h-10")}> 
            WhatsApp
          </Link>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
