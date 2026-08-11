/* Patrícia Carrilho Advogada — interações do site (Vanilla ES6) */
(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- header: compacta ao rolar ---------- */
  const header = document.getElementById('header');

  const onScroll = () => {
    const compact = window.scrollY > 80;
    header.classList.toggle('is-compact', compact);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- menu mobile (drawer premium) ---------- */
  const burger = document.getElementById('burger');
  const drawer = document.getElementById('drawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const drawerClose = document.getElementById('drawerClose');

  const openDrawer = () => {
    drawer.classList.add('is-open');
    drawerOverlay.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    burger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('drawer-open');
  };
  const closeDrawer = () => {
    drawer.classList.remove('is-open');
    drawerOverlay.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    burger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('drawer-open');
  };

  burger.addEventListener('click', () => {
    burger.getAttribute('aria-expanded') === 'true' ? closeDrawer() : openDrawer();
  });
  drawerClose.addEventListener('click', closeDrawer);
  drawerOverlay.addEventListener('click', closeDrawer);
  drawer.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeDrawer));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });

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

  /* ---------- FAQ (cards flip 3D) ---------- */
  const faqCards = [...document.querySelectorAll('.faq-flip__card')];
  faqCards.forEach((card) => {
    card.addEventListener('click', () => {
      const willFlip = !card.classList.contains('is-flipped');
      card.classList.toggle('is-flipped', willFlip);
      card.setAttribute('aria-expanded', String(willFlip));
    });
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
    const nome = form.nome, tel = form.tel, assunto = form.assunto, msg = form.msg;
    [nome, tel, msg].forEach((f) => f.classList.remove('is-invalid'));
    errorBox.classList.remove('is-visible');

    if (nome.value.trim().length < 3) return fail(nome, 'Escreva seu nome completo.');
    if (tel.value.replace(/\D/g, '').length < 10) return fail(tel, 'Informe um WhatsApp com DDD.');
    if (msg.value.trim().length < 15) return fail(msg, 'Conte um pouco mais sobre o caso (mínimo 15 caracteres).');

    form.classList.add('is-sent');
    okBox.hidden = false;

    // ▼ MENSAGEM OBRIGATÓRIA — estrutura fixa (Padrão AG5) ▼
    let texto = `Olá, me chamo ${nome.value.trim()}, vim através do site e gostaria de uma informação.\n`;
    texto += `\n- Telefone: ${tel.value.trim()}`;
    texto += `\n- Assunto: ${assunto.value}`;
    if (msg.value.trim()) texto += `\n- Seu caso: ${msg.value.trim()}`;
    // ▲ ────────────────────────────────────────── ▲

    const urlWhatsApp = `https://wa.me/5521992513639?text=${encodeURIComponent(texto)}`;
    window.open(urlWhatsApp, '_blank', 'noopener,noreferrer');
  });

  /* máscara simples de telefone */
  form.tel.addEventListener('input', (e) => {
    const d = e.target.value.replace(/\D/g, '').slice(0, 11);
    e.target.value = d.length > 10
      ? `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
      : d.length > 6 ? `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
      : d.length > 2 ? `(${d.slice(0, 2)}) ${d.slice(2)}` : d;
  });

  /* ---------- carrossel "sobre" (coverflow editorial) ---------- */
  const aboutCarousel = document.getElementById('aboutCarousel');
  if (aboutCarousel) {
    const aboutTrack = document.getElementById('aboutTrack');
    const aboutSlides = [...aboutTrack.querySelectorAll('.carousel-about__slide')];
    const aboutPrev = document.getElementById('aboutPrev');
    const aboutNext = document.getElementById('aboutNext');
    let aboutCurrent = 0;

    function showAbout(index) {
      aboutCurrent = (index + aboutSlides.length) % aboutSlides.length;
      aboutSlides.forEach((slide, i) => {
        let diff = i - aboutCurrent;
        if (diff > aboutSlides.length / 2) diff -= aboutSlides.length;
        if (diff < -aboutSlides.length / 2) diff += aboutSlides.length;
        slide.dataset.pos = Math.abs(diff) > 2 ? 'far' : String(diff);
      });
    }

    aboutSlides.forEach((slide, i) => slide.addEventListener('click', () => showAbout(i)));
    aboutPrev.addEventListener('click', () => showAbout(aboutCurrent - 1));
    aboutNext.addEventListener('click', () => showAbout(aboutCurrent + 1));
    showAbout(0);
  }
})();

/* ──────────────────────────────────────────────
   WHATSAPP PREMIUM — Balão flutuante (AG5 V4)

   Timeline:
     • t=0s  → usuário chega na 3ª seção (servicos) → botão verde aparece imediatamente
     • t=25s → balão sobe ("digitando..." por 2.5s → mensagem real)
     • t=40s → balão some automaticamente (visível por 15s)
     • Modo Compliance (advocacia/OAB): SEM badge de notificação em nenhum momento.
─────────────────────────────────────────────── */
(function initWaPremium() {
  // ─── CONFIGURAÇÃO POR PROJETO ───
  const MODO_COMPLIANCE = true; // Advocacia (OAB Provimento 205/2021) → SEM badge, SEM urgência fabricada

  const bubble        = document.getElementById('wa-message-bubble');
  const typing        = document.getElementById('wa-typing');
  const realMessage   = document.getElementById('wa-real-message');
  const badge         = document.getElementById('wa-notification');
  const closeBtn      = document.getElementById('wa-close-btn');
  const mainBtn       = document.getElementById('wa-main-btn');
  const targetSection = document.getElementById('servicos');

  if (!bubble || !typing || !realMessage || !closeBtn || !mainBtn || !targetSection) return;

  const DELAY_BALAO            = 25000; // 25s após entrar na seção
  const DURATION_TYPING        = 2500;  // 2.5s de "digitando..."
  const DURATION_BALAO_VISIVEL = 15000; // 15s exibido depois de aparecer
  const DELAY_BADGE_APOS_SUMIR = 5000;  // 5s após sumir → badge (só nicho tranquilo)

  let triggered = false;
  let autoHideTimer = null;
  let badgeTimer = null;
  let userClosed = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !triggered) {
        triggered = true;

        // Botão flutuante aparece imediatamente
        mainBtn.classList.add('visible');

        // t=25s → balão sobe
        setTimeout(() => {
          if (userClosed) return;
          bubble.classList.add('show');

          // 2.5s de "digitando..." → mensagem real (via classes utilitárias, sem inline style)
          setTimeout(() => {
            if (userClosed) return;
            typing.classList.add('is-hidden');
            realMessage.classList.add('is-visible');
            requestAnimationFrame(() => realMessage.classList.add('is-in'));
          }, DURATION_TYPING);

          // t=40s → balão some automaticamente
          autoHideTimer = setTimeout(() => {
            if (userClosed) return;
            bubble.classList.remove('show');

            // t=45s → badge "1" aparece (só se NÃO for Compliance)
            if (!MODO_COMPLIANCE && badge) {
              badgeTimer = setTimeout(() => {
                if (userClosed) return;
                badge.classList.add('show');
              }, DELAY_BADGE_APOS_SUMIR);
            }
          }, DURATION_BALAO_VISIVEL);
        }, DELAY_BALAO);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(targetSection);

  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    userClosed = true;
    bubble.classList.remove('show');
    if (autoHideTimer) clearTimeout(autoHideTimer);
    if (badgeTimer) clearTimeout(badgeTimer);
    // Badge pós-close: só em nicho tranquilo
    if (!MODO_COMPLIANCE && badge) {
      setTimeout(() => { badge.classList.add('show'); }, DELAY_BADGE_APOS_SUMIR);
    }
  });

  mainBtn.addEventListener('click', () => {
    bubble.classList.remove('show');
    if (badge) badge.classList.remove('show');
    if (autoHideTimer) clearTimeout(autoHideTimer);
    if (badgeTimer) clearTimeout(badgeTimer);
  });
})();
