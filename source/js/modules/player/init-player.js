const mediaLayer = document.querySelector('.about__cover');

function removeLayer() {
  mediaLayer.style.display = 'none';
}

mediaLayer.addEventListener('click', removeLayer);
