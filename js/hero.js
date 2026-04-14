function initHero() {
  var heroEl = document.querySelector('.hero');
  if (!heroEl) return;

  var track = heroEl.querySelector('.hero-track');
  var dots = heroEl.querySelectorAll('.hero-dot');
  var prevBtn = heroEl.querySelector('.hero-arrow.prev');
  var nextBtn = heroEl.querySelector('.hero-arrow.next');
  var slides = heroEl.querySelectorAll('.hero-slide');

  var currentSlide = 0;
  var totalSlides = slides.length;
  var autoplayTimer = null;
  var AUTOPLAY_DELAY = 5000;

  // --- Go to slide ---
  function goToSlide(index) {
    currentSlide = (index + totalSlides) % totalSlides;
    track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
    dots.forEach(function (dot, i) {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  // --- Autoplay ---
  function startAutoplay() {
    autoplayTimer = setInterval(function () {
      goToSlide(currentSlide + 1);
    }, AUTOPLAY_DELAY);
  }

  function stopAutoplay() {
    clearInterval(autoplayTimer);
  }

  // --- Arrow buttons ---
  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      stopAutoplay();
      goToSlide(currentSlide + 1);
      startAutoplay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      stopAutoplay();
      goToSlide(currentSlide - 1);
      startAutoplay();
    });
  }

  // --- Dot buttons ---
  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
      stopAutoplay();
      goToSlide(i);
      startAutoplay();
    });
  });

  // --- Pause on hover ---
  heroEl.addEventListener('mouseenter', stopAutoplay);
  heroEl.addEventListener('mouseleave', startAutoplay);

  // --- Touch / Swipe Support ---
  var touchStartX = 0;
  heroEl.addEventListener('touchstart', function (e) {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  heroEl.addEventListener('touchend', function (e) {
    var diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      stopAutoplay();
      goToSlide(diff > 0 ? currentSlide + 1 : currentSlide - 1);
      startAutoplay();
    }
  }, { passive: true });

  // --- Init ---
  goToSlide(0);
  startAutoplay();
}
