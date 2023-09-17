const mobileMenuBtn = document.querySelector('.main-header__toggle');
const mobileMenu = document.querySelector('.site-list');
mobileMenu.style.display = 'none';

mobileMenuBtn.addEventListener('click', ToggleFunction);

function ToggleFunction() {
    if(mobileMenu.style.display === 'none'){
      mobileMenu.style.display = 'block';
   mobileMenuBtn.style.backgroundImage = 'url("../../img/toggle_enabled.svg")';
}
 else {
  console.log('else сработал');
  mobileMenu.style.display = 'none';
  mobileMenuBtn.style.backgroundImage = 'url("../../img/toggle_disabled.svg")';
}
}

 // закрытие элемента по клику вне элемента
 document.addEventListener("mouseup", function (evt) {
  if (!mobileMenu.contains(evt.target) && !mobileMenuBtn.contains(evt.target)) {
    mobileMenu.style.display = 'none';
    mobileMenuBtn.style.backgroundImage = 'url("../../img/toggle_disabled.svg")';
  }
});
