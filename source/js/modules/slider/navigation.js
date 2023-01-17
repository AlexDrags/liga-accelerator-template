import slider from './init-slider';
const swiperPrev = document.querySelector('.swiper-button-prev');
const swiperNext = document.querySelector('.swiper-button-next');


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
