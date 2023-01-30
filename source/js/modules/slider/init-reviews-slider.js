import Swiper from 'swiper';
import {
  Navigation
} from 'swiper';
import '../../vendor/swiper';

const reviewsSlider = new Swiper('.reviews__swiper', {
  modules: [Navigation],
  direction: 'horizontal',
  slidesPerView: 1,
  autoHeight: true,

  navigation: {
    nextEl: '.reviews__swiper-button-next',
    prevEl: '.reviews__swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

export default reviewsSlider;
