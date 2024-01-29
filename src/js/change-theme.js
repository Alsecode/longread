
  const switchers = document.querySelectorAll('.icon_theme > *');
  console.log(switchers);

  switchers.forEach(switcher => {
    switcher.addEventListener('click', function() {
      applyTheme(this.dataset.theme);
      localStorage.setItem('theme', this.dataset.theme);
    })
  })
  
  const applyTheme = (themeName) => {
    const themeUrl = `./src/themes/${themeName}.css`;

    console.log(themeName);
  
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



