import Swiper from 'swiper';
import {
  Navigation
} from 'swiper';
import '../../vendor/swiper';

const reviewsSlider = new Swiper('.reviews__swiper', {
  modules: [Navigation],
  direction: 'horizontal',
  slidesPerView: 1,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

export default reviewsSlider;
