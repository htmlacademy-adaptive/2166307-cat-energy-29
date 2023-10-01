const mobileMenuBtn = document.querySelector('.main-header__toggle');
const mobileMenu = document.querySelector('.site-list');
const mainContainer = document.querySelector('.main-container');



const mouseWatcher = function(evt) {
  // console.log('функция сработала');
  // if (!mobileMenu.contains(evt.target) && !mobileMenuBtn.contains(evt.target)) {
    evt.stopPropagation();
    mobileMenu.style.display = 'none';
    mobileMenuBtn.value = 'off'
    mobileMenuBtn.style.backgroundImage = 'url("../../img/toggle_disabled.svg")';
  // }
}

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


// Используем ResizeObserver для отслеживания resize (ps^объект window не работает в node.js - проверено :(  )
const ro = new ResizeObserver(entries => {
  for (let entry of entries) {
    const cr = entry.contentRect;
    console.log('Element:', entry.target);
    console.log(`Element size: ${cr.width}px x ${cr.height}px`);
    console.log(`Element padding: ${cr.top}px ; ${cr.left}px`);

    if (cr.width > 0) {
      console.log('ширина больше нуля: 1. запустить листенер на клик 2. запустить листенер на мауслив 3. сделать дисплей ноне на меню')
      mobileMenuBtn.value = 'off'
  mobileMenu.style.display = 'none';
      mobileMenuBtn.addEventListener('click', ToggleFunction);
      mainContainer.addEventListener('touchstart', mouseWatcher);
      mobileMenu.addEventListener('mouseleave', mouseWatcher);
    }
    else {
      console.log('ширина равна нулю: 1. убрать листенер на клик 2. убрать листенер на мауслив 3. сделать дисплей флекс на меню')
      mobileMenuBtn.value = 'on'
  mobileMenu.style.display = 'flex';
      mobileMenuBtn.removeEventListener('click', ToggleFunction);
      mainContainer.removeEventListener('touchstart', mouseWatcher);
      mobileMenu.removeEventListener('mouseleave', mouseWatcher);
    }
  }
});

// Cледим за наличием кнопки мобильного меню
ro.observe(mobileMenuBtn);

