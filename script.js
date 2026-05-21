document.querySelector('.toggle-btn').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');

  // Clear existing particles
  if (window.pJSDom && pJSDom.length) {
    pJSDom[0].pJS.fn.vendors.destroypJS();
    pJSDom = [];
  }

  // Load with new theme
  loadParticles(isDark);
});
