"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

import { LawyerCard } from "@/components/cards/lawyer-card";
import { Button } from "@/components/ui/button";
import type { LawyerProfile } from "@/content/site";

type TeamCarouselProps = {
  lawyers: LawyerProfile[];
};

export function TeamCarousel({ lawyers }: TeamCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
    slidesToScroll: 1,
  });

  return (
    <div className="mt-10">
      <div className="-mx-2 overflow-x-hidden overflow-y-visible px-2 py-3 sm:-mx-3 sm:px-3" ref={emblaRef}>
        <div className="-ml-5 flex">
          {lawyers.map((lawyer) => (
            <div
              key={lawyer.slug}
              className="min-w-0 flex-[0_0_88%] pl-5 sm:flex-[0_0_72%] md:flex-[0_0_52%] lg:flex-[0_0_34%] xl:flex-[0_0_33.333%]"
            >
              <LawyerCard lawyer={lawyer} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">Arraste os cards ou use as setas para navegar pela equipe.</p>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="size-10 rounded-full"
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Ver membros anteriores"
          >
            <ChevronLeft className="size-4" aria-hidden />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="size-10 rounded-full"
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Ver próximos membros"
          >
            <ChevronRight className="size-4" aria-hidden />
          </Button>
        </div>
      </div>
    </div>
  );
}
