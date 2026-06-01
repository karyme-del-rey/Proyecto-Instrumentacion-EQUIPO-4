/* ============================================
   SCRIPT.JS - Columna de Absorción
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initNavbar();
  initMobileMenu();
  initRevealAnimations();
  initCounters();
  initLoopTabs();
  initDTIViewer();
  initInstrumentTable();
  initGSAPAnimations();
});

/* ---- SCROLL PROGRESS ---- */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (scrollTop / docHeight * 100) + '%';
  });
}

/* ---- NAVBAR ---- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('.section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);

    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 200;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  });

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        document.querySelector('.nav-links').classList.remove('open');
      }
    });
  });
}

/* ---- MOBILE MENU ---- */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-toggle');
  const close = document.querySelector('.mobile-close');
  const menu = document.querySelector('.nav-links');

  if (toggle) {
    toggle.addEventListener('click', () => menu.classList.add('open'));
  }
  if (close) {
    close.addEventListener('click', () => menu.classList.remove('open'));
  }
}

/* ---- REVEAL ANIMATIONS ---- */
function initRevealAnimations() {
  // Activa el modo animado solo cuando JS está listo
  document.body.classList.add('js-ready');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ---- ANIMATED COUNTERS ---- */
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        animateCounter(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 2000;
  const startTime = performance.now();

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

/* ---- CONTROL LOOP TABS ---- */
function initLoopTabs() {
  const tabs = document.querySelectorAll('.loop-tab');
  const contents = document.querySelectorAll('.loop-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(tab.dataset.tab).classList.add('active');
    });
  });
}

/* ---- DTI INTERACTIVE VIEWER ---- */
function initDTIViewer() {
  const wrapper = document.querySelector('.dti-image-wrapper');
  if (!wrapper) return;

  const img = wrapper.querySelector('img');
  let scale = 1;
  let panning = false;
  let pointX = 0, pointY = 0;
  let startX = 0, startY = 0;

  const zoomIn = document.getElementById('dti-zoom-in');
  const zoomOut = document.getElementById('dti-zoom-out');
  const reset = document.getElementById('dti-reset');

  function applyTransform() {
    img.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
  }

  if (zoomIn) zoomIn.addEventListener('click', () => {
    scale = Math.min(scale + 0.3, 4);
    applyTransform();
  });

  if (zoomOut) zoomOut.addEventListener('click', () => {
    scale = Math.max(scale - 0.3, 0.5);
    applyTransform();
  });

  if (reset) reset.addEventListener('click', () => {
    scale = 1; pointX = 0; pointY = 0;
    applyTransform();
  });

  wrapper.addEventListener('mousedown', (e) => {
    e.preventDefault();
    panning = true;
    startX = e.clientX - pointX;
    startY = e.clientY - pointY;
    wrapper.style.cursor = 'grabbing';
  });

  wrapper.addEventListener('mousemove', (e) => {
    if (!panning) return;
    pointX = e.clientX - startX;
    pointY = e.clientY - startY;
    applyTransform();
  });

  wrapper.addEventListener('mouseup', () => {
    panning = false;
    wrapper.style.cursor = 'grab';
  });

  wrapper.addEventListener('mouseleave', () => {
    panning = false;
    wrapper.style.cursor = 'grab';
  });

  wrapper.addEventListener('wheel', (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.15 : 0.15;
    scale = Math.max(0.5, Math.min(4, scale + delta));
    applyTransform();
  }, { passive: false });

  // Touch support
  let lastDist = 0;
  wrapper.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      panning = true;
      startX = e.touches[0].clientX - pointX;
      startY = e.touches[0].clientY - pointY;
    }
    if (e.touches.length === 2) {
      lastDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
    }
  });

  wrapper.addEventListener('touchmove', (e) => {
    e.preventDefault();
    if (e.touches.length === 1 && panning) {
      pointX = e.touches[0].clientX - startX;
      pointY = e.touches[0].clientY - startY;
      applyTransform();
    }
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      scale = Math.max(0.5, Math.min(4, scale * (dist / lastDist)));
      lastDist = dist;
      applyTransform();
    }
  }, { passive: false });

  wrapper.addEventListener('touchend', () => { panning = false; });
}

/* ---- INSTRUMENT TABLE FILTER ---- */
function initInstrumentTable() {
  const searchInput = document.getElementById('table-search');
  const filterSelect = document.getElementById('table-filter');
  const table = document.getElementById('instruments-tbody');
  if (!searchInput || !table) return;

  function filterTable() {
    const query = searchInput.value.toLowerCase();
    const category = filterSelect ? filterSelect.value : 'all';
    const rows = table.querySelectorAll('tr');

    rows.forEach(row => {
      const text = row.textContent.toLowerCase();
      const type = row.dataset.type || '';
      const matchSearch = text.includes(query);
      const matchFilter = category === 'all' || type === category;
      row.style.display = (matchSearch && matchFilter) ? '' : 'none';
    });
  }

  searchInput.addEventListener('input', filterTable);
  if (filterSelect) filterSelect.addEventListener('change', filterTable);
}

/* ---- GSAP ANIMATIONS ---- */
function initGSAPAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  // Hero entrance
  gsap.from('.hero-content > *', {
    y: 40,
    opacity: 0,
    duration: 0.9,
    stagger: 0.15,
    ease: 'power3.out',
    delay: 0.3,
  });

  // Parallax orbs
  gsap.to('.orb-1', {
    y: -100,
    scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1 }
  });
  gsap.to('.orb-2', {
    y: -60,
    scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1 }
  });

  // Section titles
  gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
      y: 30,
      opacity: 0,
      duration: 0.7,
      scrollTrigger: { trigger: title, start: 'top 85%', toggleActions: 'play none none none' }
    });
  });

  // Process steps stagger
  gsap.utils.toArray('.process-step').forEach((step, i) => {
    gsap.from(step, {
      x: -30,
      opacity: 0,
      duration: 0.6,
      delay: i * 0.08,
      scrollTrigger: { trigger: step, start: 'top 88%', toggleActions: 'play none none none' }
    });
  });

  // Block diagram items
  gsap.utils.toArray('.block-item').forEach((block, i) => {
    gsap.from(block, {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      delay: i * 0.1,
      scrollTrigger: { trigger: block, start: 'top 88%', toggleActions: 'play none none none' }
    });
  });

  // Architecture nodes
  gsap.utils.toArray('.arch-node').forEach((node, i) => {
    gsap.from(node, {
      y: 40,
      opacity: 0,
      duration: 0.6,
      delay: i * 0.1,
      scrollTrigger: { trigger: node, start: 'top 88%', toggleActions: 'play none none none' }
    });
  });

}
