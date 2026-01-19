import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

export const initSwiper = () => {
  return new Swiper('.swiper', {    
    slidesPerView: 'auto',
    spaceBetween: 16,    
  });
};