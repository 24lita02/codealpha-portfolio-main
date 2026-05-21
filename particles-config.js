function loadParticles(isDark) {
  particlesJS("particles-js", {
    particles: {
      number: { value: 60 },
      color: { value: isDark ? "#ffffff" : "#222222" },
      shape: { type: "circle" },
      opacity: {
        value: 0.5,
        random: true
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 120,
        color: isDark ? "#ffffff" : "#444444",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2
      }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" }
      }
    },
    retina_detect: true
  });
}
