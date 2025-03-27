function createBusLoader() {
  // Konténer elem létrehozása
  const loaderContainer = document.createElement('div');
  loaderContainer.style.position = 'fixed';
  loaderContainer.style.top = '0';
  loaderContainer.style.left = '0';
  loaderContainer.style.width = '100%';
  loaderContainer.style.height = '100%';
  loaderContainer.style.display = 'flex';
  loaderContainer.style.flexDirection = 'column';
  loaderContainer.style.justifyContent = 'center';
  loaderContainer.style.alignItems = 'center';
  loaderContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
  loaderContainer.style.zIndex = '9999';
  loaderContainer.style.backdropFilter = 'blur(10px)';

  // Fekete busz ikona (Font Awesome)
  const busIcon = document.createElement('i');
  busIcon.className = 'fa-solid fa-bus';
  busIcon.style.fontSize = '50px';
  busIcon.style.color = '#000000';
  busIcon.style.animation = 'moveBus 3s ease-in-out infinite'; // Lineáris animáció


  // Betöltési szöveg
  const loadingText = document.createElement('p');
  loadingText.textContent = 'Betöltés folyamatban...';
  loadingText.style.marginTop = '20px';
  loadingText.style.fontSize = '1.25rem';
  loadingText.style.fontWeight = '600';
  loadingText.style.color = '#4b5563';
  loadingText.style.animation = 'pulse 1.5s infinite';

  // Animációs stílusok
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    @keyframes moveBus {
      0% { transform: translateX(-200px); }
      50% { transform: translateX(200px); } /* Balra kicsit többet */
      100% { transform: translateX(-200px); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
  `;

  // Elemek hozzáadása
  loaderContainer.appendChild(busIcon);
  loaderContainer.appendChild(loadingText);
  document.body.appendChild(loaderContainer);
  document.head.appendChild(styleSheet);

  // Betöltő eltávolítása 3 másodperc után
  setTimeout(() => {
    document.body.removeChild(loaderContainer);
  }, 3000);

  return {
    remove: function() {
      document.body.removeChild(loaderContainer);
    }
  };
}

// Használati példa
document.addEventListener('DOMContentLoaded', () => {
  const loader = createBusLoader();
});