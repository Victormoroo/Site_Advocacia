import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  label: string;
  className?: string;
};

export function ImagePlaceholder({ label, className }: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-[#f8f8f7] via-[#eceeed] to-[#d6dde0] p-6 shadow-[0_22px_70px_-36px_rgba(15,23,42,0.45)]",
        className,
      )}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,.65),transparent_42%),radial-gradient(circle_at_80%_12%,rgba(140,160,173,.25),transparent_38%),linear-gradient(140deg,rgba(17,24,39,.06),transparent_52%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(128deg,transparent_0%,rgba(8,13,20,.06)_48%,transparent_100%)]" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(144,154,164,.16)_0,rgba(144,154,164,.16)_1px,transparent_1px,transparent_40px),repeating-linear-gradient(90deg,rgba(144,154,164,.14)_0,rgba(144,154,164,.14)_1px,transparent_1px,transparent_40px)] opacity-45 mix-blend-multiply" />

      <div className="relative z-10 flex h-full min-h-[240px] flex-col justify-end rounded-2xl border border-white/35 bg-white/48 p-5 backdrop-blur-[1.2px]">
        <p className="text-[0.67rem] font-medium tracking-[0.13em] text-slate-600 uppercase">
          Direção de imagem
        </p>
        <p className="mt-2 text-sm leading-relaxed text-slate-800">{label}</p>
      </div>
    </div>
  );
}
