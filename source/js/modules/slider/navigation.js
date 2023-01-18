import coachSlider from './init-coachs-slider';
import reviewsSlider from './init-reviews-slider';
const swiperPrev = document.querySelector('.swiper-button-prev');
const swiperNext = document.querySelector('.swiper-button-next');

const handlerSlider = () => {


  swiperPrev.addEventListener('click', () => {
    coachSlider.slidePrev();
  });

  swiperNext.addEventListener('click', () => {
    coachSlider.slideNext();
  });

  swiperPrev.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      coachSlider.slidePrev();
    }
  });

  swiperNext.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      coachSlider.slideNext();
    }
  });


  reviewsSlider.addEventListener('click', () => {
    coachSlider.slidePrev();
  });

  reviewsSlider.addEventListener('click', () => {
    coachSlider.slideNext();
  });

  reviewsSlider.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      coachSlider.slidePrev();
    }
  });

  reviewsSlider.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      coachSlider.slideNext();
    }
  });
};

export default handlerSlider;
