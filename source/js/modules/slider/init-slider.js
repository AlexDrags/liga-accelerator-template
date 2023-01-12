import Swiper from 'swiper';
import {Navigation} from 'swiper';
import '../../vendor/swiper';
const initSlider = ()=>{
  const swiperPrev = document.querySelector('.swiper-button-prev');
  const swiperNext = document.querySelector('.swiper-button-next');

  const slider = new Swiper('.swiper', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
      // when window width is >= 320px
      // 320: {
      //   slidesPerView: 2,
      //   spaceBetween: 20
      // },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    // slidesPerGroup: 4,
    direction: 'horizontal',
    loop: true,
    // loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  swiperPrev.addEventListener('click', ()=>{
    slider.slidePrev();
  });

  swiperNext.addEventListener('click', ()=>{
    slider.slideNext();
  });

  swiperPrev.addEventListener('keyup', (event)=>{
    if (event.keyCode === 13) {
      slider.slidePrev();
    }
  });

  swiperNext.addEventListener('keyup', (event)=>{
    if (event.keyCode === 13) {
      slider.slideNext();
    }
  });
};

export default initSlider;
