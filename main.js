/* ========================================
   dabox — Main Scripts
   ======================================== */

/* ---------- Tweak defaults ---------- */
const TWEAK_DEFAULTS = {
  "accent": "#FF5A00",
  "bg": "bone"
};

/* ---------- Sticky nav shadow ---------- */
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 4));
}

/* ---------- Animated counters ---------- */
const fmt = (n, dec = 0) => n.toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec });

document.querySelectorAll('[data-count]').forEach(el => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting || el.dataset.done) return;
      el.dataset.done = "1";
      const end = parseFloat(el.dataset.count);
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      const dec = (end % 1 !== 0) ? 2 : 0;
      const start = performance.now();
      const dur = 1200;
      const tick = (t) => {
        const p = Math.min(1, (t - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        const cur = end * eased;
        el.textContent = prefix + fmt(cur, dec) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: .4 });
  obs.observe(el);
});

/* ---------- Live balance ticker ---------- */
const balanceEl = document.getElementById('balanceNum');
if (balanceEl) {
  let bal = 18420.15;
  setInterval(() => {
    bal += Math.random() * 0.08 + 0.02;
    const main = Math.floor(bal).toLocaleString('en-US');
    const dec = (bal % 1).toFixed(2).slice(2);
    balanceEl.innerHTML = '$ ' + main + '.<small>' + dec + '</small>';
  }, 1800);
}

/* ---------- Calculator ---------- */
const fm = document.getElementById('monthly');
const fy = document.getElementById('years');

if (fm && fy) {
  const updateCalc = () => {
    const m = +fm.value;
    const y = +fy.value;
    const periods = y * 24;
    const rPer = 0.0815 / 24;
    const fv = m * ((Math.pow(1 + rPer, periods) - 1) / rPer);
    const principal = m * periods;
    const yld = fv - principal;
    document.getElementById('vMonthly').textContent = m.toLocaleString('en-US');
    document.getElementById('vYears').textContent = y;
    document.querySelector('#vYears + .unit').textContent = y === 1 ? 'año' : 'años';
    document.getElementById('bdPrincipal').textContent = '$ ' + Math.round(principal).toLocaleString('en-US');
    document.getElementById('bdYield').textContent = '+ $ ' + Math.round(yld).toLocaleString('en-US');
    document.getElementById('calcResult').textContent = '$ ' + Math.round(fv).toLocaleString('en-US');
    document.querySelector('.calc-h').textContent = `¿Cuánto ahorra un colaborador en ${y === 1 ? '12 meses' : y + ' años'}?`;
  };

  [fm, fy].forEach(el => el.addEventListener('input', updateCalc));
  updateCalc();
}

/* ---------- FAQ accordion ---------- */
document.querySelectorAll('.faq-item').forEach(item => {
  item.querySelector('.faq-q').addEventListener('click', () => item.classList.toggle('open'));
});
const firstFaq = document.querySelector('.faq-item');
if (firstFaq) firstFaq.classList.add('open');


/* ---------- Edu card toggles ---------- */
document.querySelectorAll('.edu-card-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.edu-card').classList.toggle('open');
  });
});

/* ---------- Help center search ---------- */
const helpSearch = document.getElementById('helpSearch');
if (helpSearch) {
  helpSearch.addEventListener('input', () => {
    const query = helpSearch.value.toLowerCase().trim();
    document.querySelectorAll('.faq-item').forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = query === '' || text.includes(query) ? '' : 'none';
    });
    document.querySelectorAll('.help-category').forEach(cat => {
      const visibleItems = cat.querySelectorAll('.faq-item:not([style*="display: none"])');
      cat.style.display = query === '' || visibleItems.length > 0 ? '' : 'none';
    });
  });
}

/* ---------- Glossary smooth scroll ---------- */
document.querySelectorAll('.alpha-nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ---------- Tweaks panel ---------- */
const tweaksEl = document.getElementById('tweaks');
if (tweaksEl) {
  let state = { ...TWEAK_DEFAULTS };

  function applyTweaks() {
    document.documentElement.style.setProperty('--orange', state.accent);
    document.body.style.background = state.bg === 'white' ? '#FFFFFF' : '';
    document.querySelectorAll('.swatch').forEach(s => s.classList.toggle('active', s.dataset.accent === state.accent));
    const bgSelect = document.getElementById('tw-bg');
    if (bgSelect) bgSelect.value = state.bg;
  }

  document.querySelectorAll('.swatch').forEach(s => s.addEventListener('click', () => {
    state.accent = s.dataset.accent;
    applyTweaks();
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { accent: state.accent } }, '*');
  }));

  const bgSelect = document.getElementById('tw-bg');
  if (bgSelect) {
    bgSelect.addEventListener('change', e => {
      state.bg = e.target.value;
      applyTweaks();
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { bg: state.bg } }, '*');
    });
  }

  applyTweaks();

  /* ---------- Edit-mode messaging ---------- */
  window.addEventListener('message', (e) => {
    if (!e.data || !e.data.type) return;
    if (e.data.type === '__activate_edit_mode') tweaksEl.classList.add('show');
    if (e.data.type === '__deactivate_edit_mode') tweaksEl.classList.remove('show');
  });
  window.parent.postMessage({ type: '__edit_mode_available' }, '*');
}

/* ---------- Smooth scroll for anchor links ---------- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
      const y = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  });
});
