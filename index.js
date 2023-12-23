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