import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

export const initSwiper = () => {
  return new Swiper('.swiper', {    
    slidesPerView: 'auto',
    spaceBetween: 16,    
  });
};

export const rutSwiper = () => {
  return new Swiper('.rut-swiper', {    
    slidesPerView: 'auto',
    spaceBetween: 16,  
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },  
  });
};
