import Swiper from 'swiper';
import {
  Navigation
} from 'swiper';
import '../../vendor/swiper';


const coachSlider = new Swiper('.coachs__swiper', {
  modules: [Navigation],

  direction: 'horizontal',
  // slidesPerView: 1,
  spaceBetween: 0,
  loopedSlides: 8,


  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  loop: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  navigation: {
    nextEl: '.coachs__swiper-button-next',
    prevEl: '.coachs__swiper-button-prev',
  },

});


export default coachSlider;
