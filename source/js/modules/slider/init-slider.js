import Swiper from 'swiper';
import {
  Navigation
} from 'swiper';
import '../../vendor/swiper';


const slider = new Swiper('.swiper', {
  modules: [Navigation],

  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 0,
  loopedSlides: 4,
  loop: false,

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

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


export default slider;
