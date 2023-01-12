const mediaLayer = document.querySelector('.about__cover');

function removeLayer() {
  mediaLayer.style.display = 'none';
}

mediaLayer.addEventListener('click', removeLayer);
mediaLayer.addEventListener('keyup', (event)=>{
  if (event.keyCode === 13) {
    mediaLayer.style.display = 'none';
  }
});
