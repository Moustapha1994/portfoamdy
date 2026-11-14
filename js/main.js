// ===== Portfolio — Amdy Moustapha Dramé =====
(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- Menu mobile ---
  const burger = $('#burger'), menu = $('#menu');
  const setMenu = open => {
    menu.classList.toggle('open', open);
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
  };
  burger.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  $$('#menu a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  addEventListener('keydown', e => e.key === 'Escape' && setMenu(false));

  // --- Navbar opaque au défilement ---
  const nav = $('#nav');
  const onScroll = () => nav.classList.toggle('solid', scrollY > 30);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- Lien actif ---
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    $$('#menu a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  $$('main section[id]').forEach(s => spy.observe(s));

  // --- Apparition ---
  const ro = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in');
    ro.unobserve(e.target);
  }), { threshold: 0.12 });
  $$('.rv').forEach((el, i) => { el.style.transitionDelay = (i % 4) * 70 + 'ms'; ro.observe(el); });

  // --- Compteurs ---
  const co = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, end = +el.dataset.count, suf = el.dataset.suffix || '';
    co.unobserve(el);
    if (reduce) { el.textContent = end + suf; return; }
    const t0 = performance.now();
    const step = t => {
      const p = Math.min((t - t0) / 1600, 1);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 4))) + suf;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }), { threshold: 0.5 });
  $$('[data-count]').forEach(el => co.observe(el));

  // --- Lueur qui suit la souris ---
  const glow = $('.cursor-glow');
  if (matchMedia('(pointer: fine)').matches && !reduce) {
    addEventListener('pointermove', e => { glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px'; }, { passive: true });
  }

  // --- Réseau de neurones animé (hero) ---
  const cv = $('#neural');
  if (cv && !reduce) {
    const ctx = cv.getContext('2d');
    let w, h, pts = [], raf, mouse = { x: -999, y: -999 };
    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      w = cv.clientWidth; h = cv.clientHeight;
      cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(90, (w * h) / 16000));
      pts = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3, r: Math.random() * 1.6 + .6 }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d = dx * dx + dy * dy;
          if (d < 17000) {
            ctx.strokeStyle = `rgba(227,181,91,${(1 - d / 17000) * .22})`;
            ctx.lineWidth = .6; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          }
        }
        const md = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        ctx.fillStyle = md < 140 ? 'rgba(246,216,150,.95)' : 'rgba(227,181,91,.55)';
        ctx.beginPath(); ctx.arc(p.x, p.y, md < 140 ? p.r + 1 : p.r, 0, Math.PI * 2); ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    const hero = cv.parentElement;
    hero.addEventListener('pointermove', e => { const r = cv.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
    hero.addEventListener('pointerleave', () => { mouse.x = mouse.y = -999; });
    new IntersectionObserver(([e]) => { cancelAnimationFrame(raf); if (e.isIntersecting) draw(); }).observe(cv);
    addEventListener('resize', resize);
    resize();
  }

  // --- Mini réseau de neurones (carte IA) ---
  const svg = $('.nn svg');
  if (svg) {
    const layers = [3, 5, 5, 2], ns = 'http://www.w3.org/2000/svg';
    const gl = $('.nn-lines', svg), gn = $('.nn-nodes', svg);
    const pos = layers.map((n, li) => Array.from({ length: n }, (_, k) => [20 + li * 60, 55 + (k - (n - 1) / 2) * 20]));
    pos.forEach((layer, li) => {
      if (li < pos.length - 1) layer.forEach(a => pos[li + 1].forEach(b => {
        const l = document.createElementNS(ns, 'line');
        l.setAttribute('x1', a[0]); l.setAttribute('y1', a[1]); l.setAttribute('x2', b[0]); l.setAttribute('y2', b[1]);
        gl.appendChild(l);
      }));
    });
    const nodes = pos.flat().map(([x, y]) => {
      const c = document.createElementNS(ns, 'circle');
      c.setAttribute('cx', x); c.setAttribute('cy', y); c.setAttribute('r', 4.5);
      gn.appendChild(c); return c;
    });
    if (!reduce) setInterval(() => {
      nodes.forEach(n => n.classList.toggle('lit', Math.random() < .3));
    }, 900);
  }

  $('#year').textContent = new Date().getFullYear();
})();
