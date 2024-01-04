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

const switchers = document.querySelectorAll('.change-theme');

switchers.forEach(switcher => {
  switcher.addEventListener('click', function() {
    applyTheme(this.dataset.theme);
    localStorage.setItem('theme', this.dataset.theme);
  })
})

const applyTheme = (themeName) => {
  const themeUrl = `./css/themes/${themeName}.css`;

  const container = document.querySelector('.theme');
  const themeIcon = document.querySelectorAll('.change-theme');
  setTimeout(() => {
    themeIcon.forEach(icon => icon.classList.remove("change"));
  }, 300);
  themeIcon.forEach(icon => icon.classList.add("change"));

  if (themeName === 'dark') {
    container.classList.remove('shadow-dark');
    container.classList.add('shadow-light');
  } else {
    container.classList.add('shadow-dark');
    container.classList.remove('shadow-light');
  }

  document.querySelector('[title="theme"]').setAttribute('href', themeUrl);
  
}

const activeTheme = localStorage.getItem('theme');
if (activeTheme === null) {
  applyTheme('dark');
} else {
  applyTheme(activeTheme);
}
