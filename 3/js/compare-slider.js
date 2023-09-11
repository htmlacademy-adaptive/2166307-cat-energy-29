const divisor = document.querySelector('.compare-slider__divisor');
const handle = document.querySelector('.compare-slider__handle');
const sliderInput = document.querySelector('.compare-slider__input');

// Хендлер на перемещение разделителя
sliderInput.addEventListener('input', moveDivisor);

function moveDivisor() {
  handle.style.left = sliderInput.value+"%";
	divisor.style.width = sliderInput.value+"%";
}

window.onload = function() {
	moveDivisor();
};
