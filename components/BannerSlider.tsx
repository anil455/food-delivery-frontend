"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


export default  function BannerSlider({ banners }: { banners: any[] }) {
   

  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation
      loop
      className="banner-slider overflow-hidden rounded-2xl"
    >
      {banners.map((banner:any) => (
        <SwiperSlide key={banner.id}>
          <div className="relative h-40 sm:h-56">
            <Image
              src={banner.image_path}
              alt="image banner"
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>
      ))}

      <style jsx global>{`
        .banner-slider .swiper-pagination-bullet {
          background: white;
          opacity: 0.6;
        }
        .banner-slider .swiper-pagination-bullet-active {
          opacity: 1;
        }
        .banner-slider .swiper-button-next,
        .banner-slider .swiper-button-prev {
          color: white;
        }
        .banner-slider .swiper-button-next::after,
        .banner-slider .swiper-button-prev::after {
          font-size: 1.25rem;
        }
      `}</style>
    </Swiper>
  );
}
