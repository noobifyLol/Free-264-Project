  const openMapBtn = document.getElementById('openMapBtn');
  const closeMapBtn = document.getElementById('closeMapBtn');
  const mapModal = document.getElementById('mapModal');

  if (openMapBtn && closeMapBtn && mapModal) {
    openMapBtn.addEventListener('click', () => {
      mapModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
    closeMapBtn.addEventListener('click', () => {
      mapModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });

    // close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        mapModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });
  }