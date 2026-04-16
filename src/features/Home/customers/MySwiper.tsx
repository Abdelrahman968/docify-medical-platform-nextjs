'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';

import AppImage from '@/components/AppImage';

import { useLocale } from 'next-intl';
import { customers } from '@/data/customers.data';

const middleIndex = Math.floor(customers.length / 2);
type Locale = 'en' | 'ar';

export default function MySwiper() {
  const locale = useLocale() as Locale;

  return (
    <>
      <Swiper
        dir={locale === 'ar' ? 'rtl' : 'ltr'}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
          },
          480: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3.5,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={30}
        grabCursor={true}
        centeredSlides={true}
        initialSlide={middleIndex}
        className="mySwiper"
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {customers.map(customer => (
          <SwiperSlide key={customer.id}>
            <div className="flex flex-col gap-5 px-7 py-6 rounded-xl border border-gray-200 bg-white min-w-[360px] h-full">
              <div className="flex items-center gap-2">
                <div className="w-13 h-13 rounded-full overflow-hidden">
                  <AppImage
                    src={customer.image.src}
                    alt={customer.name[locale]}
                    width={52}
                    height={52}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-semibold text-[20px] text-[#022D70]">
                    {customer.name[locale]}
                  </h3>
                  <p className="text-[#616577] font-medium">
                    {customer.type[locale]}
                  </p>
                </div>
              </div>
              <p>{customer.description[locale]}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
