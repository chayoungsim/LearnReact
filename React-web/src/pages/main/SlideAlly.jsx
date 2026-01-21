import { A11y, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";


const SlideAlly = () => {
  const [page, setPage] = useState({ current: 1, total: 4 });
 

  return (
    <section
      role="region"
      aria-roledescription="carousel"
      aria-label="루틴 추천"
      className="rut-swiper-wrap"

    >
      <div aria-live="polite" className="sr-only">
        {`현재 ${page.current} / ${page.total}`}
      </div>

      <Swiper
        modules={[A11y, Keyboard]}
        slidesPerView="auto"
        keyboard={{ enabled: true }}
        className='rutSwiper'
        spaceBetween={16}
        onInit={(swiper) =>
          setPage({ current: 1, total: swiper.slides.length })
        }
        onSlideChange={(swiper) =>
          setPage((prev) => ({
            ...prev,
            current: swiper.activeIndex + 1,
          }))
        }
      >
        {[1, 2, 3, 4].map((n, i) => (
          <SwiperSlide
            key={i}
            role="group"
            aria-label={`${i + 1} / 4`}            
          >
            <button>Slide {n}</button>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default SlideAlly