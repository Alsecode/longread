import Swiper from 'swiper';

import WOW from 'wow.js';
const wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 0,
  mobile: true,
  live: true,
});

wow.init();

window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in');
 
    elements.forEach(function(element) {
       const elementPosition = element.getBoundingClientRect().top;
       const screenHeight = window.innerHeight;
 
       if (elementPosition < screenHeight) {
          element.classList.add('show');
       }
    });
 });

// Слайдер
const swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});

// Появление иконки с оглавлением
document.addEventListener('DOMContentLoaded', function () {
  const icon = document.getElementById('bookmark-icon');
  const content = document.getElementById('introduction');

  function checkIconVisibility() {
    const contentTop = content.offsetTop;

    if (window.scrollY >= contentTop) {
      icon.classList.add('icon_visible');
    } else {
      icon.classList.remove('icon_visible');
    }
  }

  window.addEventListener('scroll', checkIconVisibility);

  checkIconVisibility();
});

const openBtns = document.querySelectorAll('.icon_bookmark > *');
const modal = document.getElementById('modal');

openBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    modal.classList.remove('sidebar_hidden');
    const overlay = document.createElement("div");
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);
  })
});

const closeBtn = document.querySelector('#close');

closeBtn.addEventListener('click', function() {
  modal.classList.add('sidebar_hidden');
  const overlay = document.querySelector('.overlay');
  if (overlay) {
    document.body.removeChild(overlay);
  }
});


const switchers = document.querySelectorAll('.icon_theme > *');

switchers.forEach(switcher => {
  switcher.addEventListener('click', function() {
    applyTheme(this.dataset.theme);
    localStorage.setItem('theme', this.dataset.theme);
  })
})

const applyTheme = (themeName) => {
  const themeUrl = `./src/themes/${themeName}.css`;

  const containers = document.querySelectorAll('.icon');

  setTimeout(() => {
    switchers.forEach(icon => icon.classList.remove("change"));
  }, 300);
  switchers.forEach(icon => icon.classList.add("change"));

  containers.forEach(container => {
    const classList = container.classList;

    for (var i = classList.length - 1; i >= 0; i -= 1) {
      if (classList[i].startsWith('icon_shadow')) {
          classList.remove(classList[i]);
      }
    }
  });
  containers.forEach(container => {
    themeName === 'dark' ? container.classList.add(`icon_shadow-light`) : container.classList.add(`icon_shadow-dark`);
  });

  document.querySelector('[title="theme"]').setAttribute('href', themeUrl);
  
}

const activeTheme = localStorage.getItem('theme');
if (activeTheme === null) {
  applyTheme('dark');
} else {
  applyTheme(activeTheme);
}
