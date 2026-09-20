"use client";

import "swiper/css";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CategoryTabs({ categories, selectedCategoryId, onSelectCategory }: { categories: any[]; selectedCategoryId:any; onSelectCategory: (id: any) => void }) {
  const swiperRef = useRef<any>(null);
  const [isLocked, setIsLocked] = useState(true);

  useEffect(() => {
    if (!swiperRef.current) return;
    const activeIndex = categories.findIndex((c) => c.id === selectedCategoryId);
    if (activeIndex !== -1) {
      swiperRef.current.slideTo(activeIndex);
    }
  }, [selectedCategoryId, categories]);

  return (
    <div className="flex items-center gap-2">
      {!isLocked && (
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/[.08] text-neutral-600 dark:border-white/[.08] dark:text-neutral-300"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      )}

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsLocked(swiper.isLocked);
        }}
        onResize={(swiper) => setIsLocked(swiper.isLocked)}
        spaceBetween={8}
        slidesPerView="auto"
        className="!flex-1"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <button onClick={() => onSelectCategory(category.id)}
              className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                category.id === selectedCategoryId
                  ? "bg-orange-600 text-white shadow-sm shadow-orange-600/30"
                  : "border border-black/[.08] bg-white text-neutral-600 hover:border-orange-300 hover:text-orange-600 dark:border-white/[.08] dark:bg-neutral-900 dark:text-neutral-300"
              }`}
            >
              {category.name}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      {!isLocked && (
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/[.08] text-neutral-600 dark:border-white/[.08] dark:text-neutral-300"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
