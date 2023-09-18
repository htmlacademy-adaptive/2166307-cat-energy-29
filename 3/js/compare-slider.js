const divisor = document.querySelector('.compare-slider__divisor');
const handle = document.querySelector('.compare-slider__handle');
const sliderInput = document.querySelector('.compare-slider__input');
const divisorImage = document.querySelector('.compare-slider__divisor-image')

// Хендлер на перемещение разделителя
sliderInput.addEventListener('input', moveDivisor);

function moveDivisor() {
  handle.style.right = (sliderInput.value * (-1))+"%";
  divisor.style.right = (sliderInput.value * (-1) + 100)+"%";
  divisorImage.style.left = (sliderInput.value * (-1) + 100)+"%";
}

window.onload = function() {
	moveDivisor();
};
