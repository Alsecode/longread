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