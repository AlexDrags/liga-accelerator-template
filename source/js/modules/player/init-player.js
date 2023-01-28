const mediaLayer = document.querySelector('.about__cover');
const iframe = document.getElementById('iframe');

// console.log(iframe);
function removeLayer() {
  mediaLayer.style.display = 'none';
  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
}

mediaLayer.addEventListener('click', removeLayer);
mediaLayer.addEventListener('keyup', (event)=>{
  if (event.keyCode === 13) {
    mediaLayer.style.display = 'none';
    iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
  }
});
