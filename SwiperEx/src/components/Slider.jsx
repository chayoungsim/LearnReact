import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import './Slider.scss';

import { Autoplay, Navigation, Pagination, A11y, EffectFade } from "swiper/modules" 

const Slider = () => {
  return (
    <div className='slider-section'>
        <Swiper
            modules={[Autoplay, Navigation, Pagination, A11y, EffectFade]}
            className="visual"
            effect="fade"
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            // autoplay={{ delay: 2500, disableOnInteraction: false }} 
            navigation={true}
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
              <video autoPlay loop muted playsInline>
                  <source src="https://cdn.pixabay.com/video/2024/05/24/213460_large.mp4" type="video/mp4" />
              </video>
              <div className='visual-item'>
                  <h3>Slide 1</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quidem odio quae dicta eum nobis ut dolorum, sit voluptas velit soluta officiis voluptatum! Voluptatum, corporis? Ducimus velit officia alias perspiciatis.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>              
              <div className='visual-item'>
                  <h3>Slide 2</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quidem odio quae dicta eum nobis ut dolorum, sit voluptas velit soluta officiis voluptatum! Voluptatum, corporis? Ducimus velit officia alias perspiciatis.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <video autoPlay loop muted playsInline>
                  <source src="../src/assets/main_visual_4.mp4" type="video/mp4" />
              </video>
              <div className='visual-item'>
                  <h3>Slide 3</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quidem odio quae dicta eum nobis ut dolorum, sit voluptas velit soluta officiis voluptatum! Voluptatum, corporis? Ducimus velit officia alias perspiciatis.</p>
              </div>
            </SwiperSlide>          
        </Swiper>
    </div>
  )
}

export default Slider