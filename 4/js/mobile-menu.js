const mobileMenuBtn = document.querySelector('.main-header__toggle');
const mobileMenu = document.querySelector('.site-list');
const mediaQuery = window.matchMedia('(min-width: 768px)')


mobileMenuBtn.addEventListener('click', ToggleFunction);

function ToggleFunction() {
  if(mobileMenuBtn.value == 'off'){
  mobileMenuBtn.value = 'on'
  mobileMenu.style.display = 'block';
  mobileMenuBtn.style.backgroundImage = 'url("../../img/toggle_enabled.svg")';
}
 else {
  mobileMenuBtn.value = 'off'
  mobileMenu.style.display = 'none';
  mobileMenuBtn.style.backgroundImage = 'url("../../img/toggle_disabled.svg")';
}
}

//  // закрытие элемента по клику вне элемента
//  document.addEventListener("mouseup", function (evt) {
//   if (!mobileMenu.contains(evt.target) && !mobileMenuBtn.contains(evt.target)) {
//     mobileMenu.style.display = 'none';
//     mobileMenuBtn.style.backgroundImage = 'url("../../img/toggle_disabled.svg")';
//   }
// });
