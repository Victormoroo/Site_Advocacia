"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/content/site";

export function WhatsAppFloat() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55, duration: 0.35, ease: "easeOut" }}
      className="fixed right-4 bottom-4 z-40 sm:right-7 sm:bottom-7"
    >
      <Link
        href={siteConfig.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar pelo WhatsApp"
        className="group inline-flex items-center gap-2 rounded-full border border-accent-strong/20 bg-background/95 px-4 py-2.5 text-sm font-medium text-foreground shadow-[0_14px_35px_-22px_rgba(2,8,23,.65)] backdrop-blur transition-all hover:-translate-y-0.5 hover:border-accent-strong/50 hover:text-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <MessageCircle className="size-4" aria-hidden />
        WhatsApp
      </Link>
    </motion.div>
  );
}
