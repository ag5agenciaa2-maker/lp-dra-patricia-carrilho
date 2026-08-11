/* Patrícia Carrilho Advogada — interações do site (Vanilla ES6) */
(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- header: compacta ao rolar ---------- */
  const header = document.getElementById('header');
  const topbar = document.getElementById('topbar');

  const onScroll = () => {
    const compact = window.scrollY > 80;
    header.classList.toggle('is-compact', compact);
    topbar.classList.toggle('is-hidden', compact);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- menu mobile ---------- */
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(open));
  });
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
    menu.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  }));

  /* ---------- reveal on scroll ---------- */
  const revealables = document.querySelectorAll('.rv');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealables.forEach((el) => el.classList.add('is-in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.18 });
    revealables.forEach((el, i) => {
      el.style.transitionDelay = (i % 4) * 110 + 'ms';
      io.observe(el);
      // rede de segurança: nunca deixar conteúdo invisível
      setTimeout(() => el.classList.add('is-in'), 2500);
    });
  }

  /* ---------- counters ---------- */
  const counters = document.querySelectorAll('[data-count]');
  const runCounter = (el) => {
    const target = parseFloat(el.dataset.count);
    const dec = parseInt(el.dataset.dec, 10) || 0;
    const duration = 1800;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const value = target * (1 - Math.pow(1 - p, 3));
      el.textContent = value.toFixed(dec).replace('.', ',');
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target.toFixed(dec).replace('.', ',');
    };
    requestAnimationFrame(tick);
  };
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        cio.unobserve(entry.target);
        runCounter(entry.target);
      });
    }, { threshold: 0.5 });
    counters.forEach((el) => cio.observe(el));
  }

  /* ---------- carrossel de depoimentos (cross-fade) ---------- */
  const carousel = document.getElementById('carousel');
  const items = [...carousel.querySelectorAll('.carousel__item')];
  const dots = document.getElementById('dots');
  let current = 0;
  let timer = null;

  items.forEach((_, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-label', `Depoimento ${i + 1}`);
    if (i === 0) b.classList.add('is-on');
    b.addEventListener('click', () => { show(i); restart(); });
    dots.appendChild(b);
  });
  const dotEls = [...dots.children];

  function show(index) {
    current = (index + items.length) % items.length;
    items.forEach((el, i) => el.classList.toggle('is-active', i === current));
    dotEls.forEach((el, i) => el.classList.toggle('is-on', i === current));
  }
  function start() {
    if (reduceMotion) return;
    timer = setInterval(() => show(current + 1), 6000);
  }
  function stop() { clearInterval(timer); timer = null; }
  function restart() { stop(); start(); }

  carousel.addEventListener('mouseenter', stop);
  carousel.addEventListener('mouseleave', start);
  dots.addEventListener('mouseenter', stop);
  dots.addEventListener('mouseleave', start);
  start();

  /* ---------- FAQ (acordeão) ---------- */
  const faqItems = [...document.querySelectorAll('.faq__item')];
  const setOpen = (item, open) => {
    const answer = item.querySelector('.faq__a');
    item.classList.toggle('is-open', open);
    item.querySelector('.faq__q').setAttribute('aria-expanded', String(open));
    answer.style.maxHeight = open ? answer.scrollHeight + 'px' : '0px';
  };
  faqItems.forEach((item) => {
    setOpen(item, item.classList.contains('is-open'));
    item.querySelector('.faq__q').addEventListener('click', () => {
      const willOpen = !item.classList.contains('is-open');
      faqItems.forEach((other) => setOpen(other, false));
      setOpen(item, willOpen);
    });
  });
  window.addEventListener('resize', () => {
    faqItems.filter((i) => i.classList.contains('is-open')).forEach((i) => setOpen(i, true));
  });

  /* ---------- formulário: validação real ---------- */
  const form = document.getElementById('form');
  const errorBox = document.getElementById('form-error');
  const okBox = document.getElementById('form-ok');

  const fail = (field, message) => {
    field.classList.add('is-invalid');
    errorBox.textContent = message;
    errorBox.classList.add('is-visible');
    field.focus();
    return false;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = form.nome, tel = form.tel, msg = form.msg;
    [nome, tel, msg].forEach((f) => f.classList.remove('is-invalid'));
    errorBox.classList.remove('is-visible');

    if (nome.value.trim().length < 3) return fail(nome, 'Escreva seu nome completo.');
    if (tel.value.replace(/\D/g, '').length < 10) return fail(tel, 'Informe um WhatsApp com DDD.');
    if (msg.value.trim().length < 15) return fail(msg, 'Conte um pouco mais sobre o caso (mínimo 15 caracteres).');

    // Protótipo: sem back-end. Trocar por fetch() para o endpoint de e-mail quando disponível.
    form.classList.add('is-sent');
    okBox.hidden = false;
  });

  /* máscara simples de telefone */
  form.tel.addEventListener('input', (e) => {
    const d = e.target.value.replace(/\D/g, '').slice(0, 11);
    e.target.value = d.length > 10
      ? `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
      : d.length > 6 ? `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
      : d.length > 2 ? `(${d.slice(0, 2)}) ${d.slice(2)}` : d;
  });
})();
