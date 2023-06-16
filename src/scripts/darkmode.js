let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#darkMode-toggle');

const enableDarkMode = () => {
  document.body.classList.add('darkMode');
  darkModeToggle.classList.add('darkMode-toggle--toggled');
  localStorage.setItem('darkMode', 'enabled');
};
const disableDarkMode = () => {
  document.body.classList.remove('darkMode');
  darkModeToggle.classList.remove('darkMode-toggle--toggled');
  localStorage.setItem('darkMode', null);
};

if (darkMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
