// JavaScript code using Anime.js to animate elements
anime({
    targets: '#welcome-section .welcome-logo',
    opacity: [0, 1],
    duration: 1500,
    easing: 'easeInOutQuad'
  });

  anime({
    targets: '#welcome-section h1',
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 1500,
    easing: 'easeInOutQuad',
    delay: 500 // Delay animation by 500ms
  });

  anime({
    targets: '#welcome-section h2',
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 1500,
    easing: 'easeInOutQuad',
    delay: 1000 // Delay animation by 1000ms
  });

  anime({
    targets: '#welcome-section button',
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 1500,
    easing: 'easeInOutQuad',
    delay: 1500 // Delay animation by 1500ms
  });