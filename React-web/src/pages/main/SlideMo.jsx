
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


  const slides = [
    {
      id: 1,
      title: '슬라이드 1',
      bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      content: '첫 번째 슬라이드'
    },
    {
      id: 2,
      title: '슬라이드 2',
      bg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      content: '두 번째 슬라이드'
    },
    {
      id: 3,
      title: '슬라이드 3',
      bg: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      content: '세 번째 슬라이드'
    },
    {
      id: 4,
      title: '슬라이드 4',
      bg: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      content: '네 번째 슬라이드'
    }
  ];


const SlideMo = () => {
  return (
    <section>
      <h1>모바일</h1>
      <div className="rut-swiper-wrap">
        <Swiper
          slidesPerView="auto" 
          spaceBetween={16}
          className="rutSwiper"
        >
          
          {
            slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="slide-inner" style={{ background: slide.bg }}>
                 {slide.title}</div>
              </SwiperSlide>
            ))
          }            
        </Swiper>
      </div>
      
    </section>
  )
}

export default SlideMo