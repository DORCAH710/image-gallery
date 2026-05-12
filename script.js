const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const effectSelect = document.getElementById('effectSelect');
const autoPlayBtn = document.getElementById('autoPlayBtn');
const lightbox = document.getElementById('lightbox');
const closeLightbox = document.getElementById('closeLightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentIndex = 0;
let currentFilter = 'all';
let autoplayId = null;

const effectMap = {
  none: 'none',
  grayscale: 'grayscale(0.9)',
  sepia: 'sepia(0.55) saturate(1.1)',
  contrast: 'contrast(1.25) saturate(1.1)',
  hue: 'hue-rotate(180deg) saturate(1.1)'
};

function getVisibleItems() {
  return galleryItems.filter(item => {
    return currentFilter === 'all' || item.dataset.category === currentFilter;
  });
}

function openLightbox(index) {
  const visible = getVisibleItems();
  if (!visible.length) return;
  currentIndex = index < 0 ? visible.length - 1 : index >= visible.length ? 0 : index;
  const item = visible[currentIndex];
  const img = item.querySelector('img');
  lightboxImage.src = img.src;
  lightboxImage.alt = img.alt;
  lightboxCaption.textContent = item.dataset.title;
  lightbox.classList.add('active');
  lightbox.setAttribute('aria-hidden', 'false');
}

function closeLightboxPanel() {
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
  if (autoplayId) {
    clearInterval(autoplayId);
    autoplayId = null;
    autoPlayBtn.textContent = 'Start Slideshow';
    autoPlayBtn.classList.remove('active');
    autoPlayBtn.setAttribute('aria-pressed', 'false');
  }
}

function moveLightbox(step) {
  const visible = getVisibleItems();
  if (!visible.length) return;
  openLightbox(currentIndex + step);
}

function updateFilter(filter) {
  currentFilter = filter;
  galleryItems.forEach(item => {
    const shouldShow = filter === 'all' || item.dataset.category === filter;
    item.style.display = shouldShow ? 'block' : 'none';
  });
  filterButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.filter === filter));
}

function applyImageEffect(effect) {
  const filterValue = effectMap[effect] || effectMap.none;
  galleryItems.forEach(item => {
    item.querySelector('img').style.filter = filterValue;
  });
}

function toggleAutoplay() {
  if (autoplayId) {
    clearInterval(autoplayId);
    autoplayId = null;
    autoPlayBtn.textContent = 'Start Slideshow';
    autoPlayBtn.classList.remove('active');
    autoPlayBtn.setAttribute('aria-pressed', 'false');
    return;
  }

  autoPlayBtn.textContent = 'Stop Slideshow';
  autoPlayBtn.classList.add('active');
  autoPlayBtn.setAttribute('aria-pressed', 'true');
  if (!lightbox.classList.contains('active')) {
    openLightbox(0);
  }

  autoplayId = setInterval(() => {
    moveLightbox(1);
  }, 3500);
}

galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    const visible = getVisibleItems();
    const itemIndex = visible.indexOf(item);
    openLightbox(itemIndex);
  });
  item.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      const visible = getVisibleItems();
      const itemIndex = visible.indexOf(item);
      openLightbox(itemIndex);
    }
  });
});

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    updateFilter(button.dataset.filter);
  });
});

effectSelect.addEventListener('change', event => {
  applyImageEffect(event.target.value);
});

autoPlayBtn.addEventListener('click', toggleAutoplay);

prevBtn.addEventListener('click', () => {
  const visible = getVisibleItems();
  if (!visible.length) return;
  const nextIndex = (currentIndex - 1 + visible.length) % visible.length;
  openLightbox(nextIndex);
});

nextBtn.addEventListener('click', () => {
  const visible = getVisibleItems();
  if (!visible.length) return;
  const nextIndex = (currentIndex + 1) % visible.length;
  openLightbox(nextIndex);
});

lightboxPrev.addEventListener('click', () => moveLightbox(-1));
lightboxNext.addEventListener('click', () => moveLightbox(1));
closeLightbox.addEventListener('click', closeLightboxPanel);
lightbox.addEventListener('click', event => {
  if (event.target === lightbox) {
    closeLightboxPanel();
  }
});

window.addEventListener('keydown', event => {
  if (!lightbox.classList.contains('active')) return;
  if (event.key === 'Escape') {
    closeLightboxPanel();
  }
  if (event.key === 'ArrowRight') {
    moveLightbox(1);
  }
  if (event.key === 'ArrowLeft') {
    moveLightbox(-1);
  }
});

updateFilter('all');
applyImageEffect('none');
