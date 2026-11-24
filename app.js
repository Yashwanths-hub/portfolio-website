(() => {
  // =========================================================================
  // DATA DEFINITIONS (From User's Source HTML)
  // =========================================================================
  const PROJECTS = [
    {
      id: 'fleet-intelligence',
      number: '001',
      github: 'https://github.com/Yashwanths-hub/Fleet-Intelligence',
      title: 'FLEET INTELLIGENCE',
      subtitle: 'Real-Time Equipment Monitoring Platform',
      category: 'backend',
      badge: 'Caterpillar Hackathon Winner',
      summary: 'Event-driven backend platform for real-time Caterpillar equipment telemetry, replacing spreadsheet-based tracking.',
      stack: ['Java', 'Spring Boot', 'Redis', 'Apache Kafka', 'PostgreSQL', 'REST APIs'],
      bullets: [
        'Built on the backend team of a real-time fleet monitoring platform for Caterpillar equipment.',
        'Implemented Redis for low-latency state management and fast reads of live equipment status.',
        'Integrated Apache Kafka for event-driven data streaming between equipment updates and backend services.'
      ],
      svg: `
        <svg class="card-svg-graphic" viewBox="0 0 400 280" fill="none">
          <defs>
            <radialGradient id="grad-p1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#E63224" stop-opacity="0.8"/>
              <stop offset="70%" stop-color="#7a140d" stop-opacity="0.3"/>
              <stop offset="100%" stop-color="#0a0a0a" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <rect width="400" height="280" fill="#0d0d0d"/>
          <circle cx="200" cy="140" r="110" fill="url(#grad-p1)"/>
          <!-- Geometric shard telemetry visual like VOID in screenshot -->
          <polygon points="200,50 270,120 240,210 160,210 130,120" stroke="#ff4d3d" stroke-width="1.5" fill="#181818" fill-opacity="0.75"/>
          <line x1="200" y1="50" x2="200" y2="230" stroke="#E63224" stroke-width="2.5" stroke-dasharray="4 2"/>
          <line x1="130" y1="120" x2="270" y2="120" stroke="#ff6b5e" stroke-width="1"/>
          <line x1="160" y1="210" x2="270" y2="120" stroke="#ffffff" stroke-width="0.8" opacity="0.4"/>
          <line x1="200" y1="50" x2="160" y2="210" stroke="#ffffff" stroke-width="0.8" opacity="0.4"/>
          <!-- Telemetry coordinates -->
          <text x="24" y="254" fill="#666" font-family="Space Mono, monospace" font-size="9">CAT_FLEET_STREAM // LATENCY &lt; 14ms</text>
        </svg>
      `
    },
    {
      id: 'reachwise',
      number: '002',
      github: 'https://github.com/Yashwanths-hub/reachwise',
      title: 'REACHWISE',
      subtitle: 'Intelligent Appointment Reminder System',
      category: 'backend',
      badge: '28-Test Suite · Audit Trail',
      summary: 'Policy-enforced Spring Boot reminder engine processing 940 appointments and 620 contacts with deterministic outcome logging.',
      stack: ['Java 17', 'Spring Boot', 'Maven', 'Python', 'REST APIs'],
      bullets: [
        'Processes 940 appointments and 620 resident contacts via configurable SMS, Voice, and Email fallback sequences.',
        'Enforces quiet hours, channel opt-outs, and 7-day frequency caps while deduplicating shared contact points.',
        'Validates logic with a 28-test suite and emits a deterministic JSONL audit trail for every decision.'
      ],
      svg: `
        <svg class="card-svg-graphic" viewBox="0 0 400 280" fill="none">
          <rect width="400" height="280" fill="#0d0d0d"/>
          <!-- High-contrast minimal landscape / mountain motif like ELEMENT in reference -->
          <path d="M0 240 L120 130 L210 190 L310 90 L400 180 L400 280 L0 280 Z" fill="#202020"/>
          <path d="M120 130 L160 170 L210 190 L260 140 L310 90 L360 140 L400 180 L400 280 L120 280 Z" fill="#141414"/>
          <path d="M0 260 L90 200 L180 230 L290 160 L400 220 L400 280 L0 280 Z" fill="#2a2a2a"/>
          <!-- Contrast Red Beacon Figure -->
          <circle cx="210" cy="184" r="3" fill="#E63224"/>
          <line x1="210" y1="184" x2="210" y2="195" stroke="#E63224" stroke-width="2"/>
          <text x="24" y="254" fill="#666" font-family="Space Mono, monospace" font-size="9">AUDIT_RUN // 28_TESTS_PASS (100%)</text>
        </svg>
      `
    },
    {
      id: 'brightbud',
      number: '003',
      github: 'https://github.com/Yashwanths-hub/BrightBud',
      title: 'BRIGHTBUD',
      subtitle: 'AI-Powered Learning Platform',
      category: 'ai',
      badge: 'THREX Hackathon Top 15',
      summary: 'Full-stack adaptive learning platform with ML models for early dyslexia detection and real-time progress tracking.',
      stack: ['React', 'Java', 'Spring Boot', 'Python', 'PostgreSQL', 'MySQL', 'Machine Learning'],
      bullets: [
        'Built a scalable full-stack application pairing a React frontend with a modular Java Spring Boot backend.',
        'Developed machine learning models for early dyslexia detection, adaptive learning, and live progress tracking.',
        'Designed the initial PostgreSQL schema and migrated to MySQL for streamlined query maintenance.'
      ],
      svg: `
        <svg class="card-svg-graphic" viewBox="0 0 400 280" fill="none">
          <rect width="400" height="280" fill="#0d0d0d"/>
          <!-- Sleek dark automotive / futuristic sleek curve like DRIVE in screenshot -->
          <path d="M40 220 C 140 220, 180 140, 260 130 C 320 120, 360 150, 400 170" stroke="#444" stroke-width="2"/>
          <path d="M120 200 C 180 170, 240 140, 320 145 C 370 148, 390 165, 400 180" stroke="#777" stroke-width="3"/>
          <circle cx="370" cy="170" r="4" fill="#E63224"/>
          <!-- Sleek horizontal brake light streak -->
          <line x1="320" y1="170" x2="390" y2="170" stroke="#E63224" stroke-width="3.5" stroke-linecap="round"/>
          <line x1="310" y1="170" x2="395" y2="170" stroke="#ff6b5e" stroke-width="1.5" stroke-linecap="round"/>
          <text x="24" y="254" fill="#666" font-family="Space Mono, monospace" font-size="9">NEURAL_NET // DYSLEXIA_PREDICTION</text>
        </svg>
      `
    },
    {
      id: 'crowd-tracker',
      number: '004',
      title: 'CROWD TRACKER PRO',
      subtitle: 'Real-Time Transit & SOS Web App',
      category: 'fullstack',
      badge: 'Firebase Real-Time Sync',
      summary: 'Responsive transit web app enabling commuters to report and view live bus crowding and emergency SOS alerts.',
      stack: ['Firebase Firestore', 'Firebase Hosting', 'Web Development'],
      bullets: [
        'Used Firebase Firestore for instant multi-user synchronization across commuter devices.',
        'Designed a responsive UI featuring live crowding notifications and emergency SOS alerts.',
        'Deployed and hosted on Firebase Hosting.'
      ],
      svg: `
        <svg class="card-svg-graphic" viewBox="0 0 400 280" fill="none">
          <rect width="400" height="280" fill="#0d0d0d"/>
          <!-- Radar concentric rings -->
          <circle cx="200" cy="140" r="40" stroke="#2a2a2a" stroke-width="1"/>
          <circle cx="200" cy="140" r="80" stroke="#222" stroke-width="1" stroke-dasharray="3 3"/>
          <circle cx="200" cy="140" r="120" stroke="#1a1a1a" stroke-width="1"/>
          <!-- Radar beam -->
          <line x1="200" y1="140" x2="290" y2="70" stroke="#E63224" stroke-width="1.5"/>
          <circle cx="290" cy="70" r="4" fill="#E63224"/>
          <text x="24" y="254" fill="#666" font-family="Space Mono, monospace" font-size="9">TRANSIT_MESH // LIVE_SOS_ALERT</text>
        </svg>
      `
    }
  ];

  const SKILL_VIEWS = {
    stack: [
      { group: 'Languages', items: ['Java', 'Python', 'SQL'] },
      { group: 'Backend & Streaming', items: ['Spring Boot', 'RESTful APIs', 'Redis', 'Apache Kafka', 'Maven'] },
      { group: 'Frontend', items: ['React', 'Next.js (Basic)', 'Tailwind CSS'] },
      { group: 'Databases & Cloud', items: ['PostgreSQL', 'MySQL', 'Firebase Firestore', 'Firebase Hosting'] },
      { group: 'Analytics & Tools', items: ['Power BI', 'Tableau', 'Microsoft Excel', 'Git', 'GitHub'] }
    ],
    quality: [
      { group: 'Testing & Validation', items: ['Unit Testing', 'Test Suite Design', 'REST API Validation', 'SQL Data Validation', 'Deterministic Output Validation', 'Audit-Trail Logging'] },
      { group: 'AI & ML', items: ['LLM APIs & Embeddings', 'Machine Learning', 'GitHub Copilot', 'Claude'] },
      { group: 'Currently Exploring', items: ['DeepEval', 'Ragas', 'promptfoo', 'Playwright', 'Appium', 'AWS (S3, Lambda, CloudWatch, IAM)', 'CI/CD'] }
    ],
    certs: [
      { group: 'Awards & Hackathons', items: ['Winner — Caterpillar Hackathon (Fleet Intelligence System)', 'Recipient — Luminary Award (2025–2026)', 'Top 15 Teams — THREX Hackathon (BrightBud 48-hr MVP)'] },
      { group: 'Certifications & Internships', items: ['Data Analytics Internship — VCodez', 'Cisco AICTE Internship — Networking', 'Cisco AICTE Cyber Security Virtual Internship', 'NPTEL Certification — Programming in Java'] }
    ]
  };

  // State
  let activeFilter = 'all';
  let activeSkillTab = 'stack';
  let toastTimeout = null;

  // =========================================================================
  // TOAST HANDLER
  // =========================================================================
  function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  function copyText(value, label) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).then(() => {
        showToast(label + ' copied: ' + value);
      }).catch(() => fallbackCopy(value, label));
    } else {
      fallbackCopy(value, label);
    }
  }

  function fallbackCopy(value, label) {
    const ta = document.createElement('textarea');
    ta.value = value;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showToast(label + ' copied: ' + value);
    } catch (e) {
      showToast('Copy: ' + value);
    }
    document.body.removeChild(ta);
  }

  // =========================================================================
  // RENDER PROJECTS
  // =========================================================================
  function renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    const filtered = activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter(p => p.category === activeFilter);

    grid.innerHTML = filtered.map((p, idx) => `
      <article class="project-card reveal-item delay-${(idx % 3) + 1}" data-project-id="${p.id}">
        <div class="card-visual-box">
          ${p.svg}
        </div>
        <div class="card-meta-bar">
          <div class="card-meta-left">
            <span class="card-num">${p.number}</span>
            <h4 class="card-title">${p.title}</h4>
            <span class="card-sub">${p.subtitle}</span>
            ${p.github ? `
              <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="card-gh-link" onclick="event.stopPropagation();">
                <i data-lucide="github" class="w-3 h-3"></i>
                <span>GitHub Repository</span>
              </a>
            ` : ''}
          </div>
          <div class="card-circle-arrow" aria-label="View Project Details">
            →
          </div>
        </div>
      </article>
    `).join('');

    // Trigger reveal observer for new cards
    observeReveals();

    grid.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => {
        openProjectModal(card.dataset.projectId);
      });
    });

    if (window.lucide) lucide.createIcons();
  }

  // =========================================================================
  // RENDER SKILLS TABS
  // =========================================================================
  function renderSkills() {
    const container = document.getElementById('skills-content');
    if (!container) return;

    const groups = SKILL_VIEWS[activeSkillTab] || [];
    container.innerHTML = groups.map((g, idx) => `
      <div class="skill-cluster reveal-item delay-${(idx % 4) + 1}">
        <h4 class="cluster-title">${g.group}</h4>
        <div class="cluster-tags">
          ${g.items.map(item => `<span class="cluster-tag">${item}</span>`).join('')}
        </div>
      </div>
    `).join('');

    observeReveals();
  }

  // =========================================================================
  // PROJECT MODAL
  // =========================================================================
  function openProjectModal(id) {
    const p = PROJECTS.find(item => item.id === id);
    if (!p) return;

    document.getElementById('modal-badge').textContent = p.badge;
    document.getElementById('modal-title').textContent = p.title;
    document.getElementById('modal-subtitle').textContent = p.subtitle;
    document.getElementById('modal-bullets').innerHTML = p.bullets.map(b => `<li>${b}</li>`).join('');
    document.getElementById('modal-stack').innerHTML = p.stack.map(t => `<span class="tech-pill">${t}</span>`).join('');

    const actions = document.getElementById('modal-actions');
    if (p.github) {
      actions.innerHTML = `
        <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn-accent">
          <i data-lucide="github" class="w-4 h-4"></i>
          <span>VIEW GITHUB REPOSITORY</span>
          <span class="btn-arrow">→</span>
        </a>
      `;
    } else {
      actions.innerHTML = `
        <span class="text-muted" style="font-family: var(--font-mono); font-size: 0.72rem;">PROPRIETARY INTERNAL HACKATHON BUILD</span>
      `;
    }

    if (window.lucide) lucide.createIcons();
    const modal = document.getElementById('project-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // =========================================================================
  // HERO INTERACTIVE CANVAS (Video Frames)
  // =========================================================================
  const TOTAL_FRAMES = 240;
  const canvas = document.getElementById('hero-interactive-canvas');
  const subjectContainer = document.getElementById('subject-container');
  let ctx = null;
  const frames = new Array(TOTAL_FRAMES);
  let loadedFrames = 0;
  let currentFrameIdx = 0;
  let targetFrameIdx = 0;
  let isHovering = false;

  function getFrameUrl(idx) {
    const num = String(idx + 1).padStart(3, '0');
    return `frames/ezgif-frame-${num}.jpg`;
  }

  function resizeCanvas() {
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.round(rect.width * dpr);
    const h = Math.round(rect.height * dpr);

    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
      drawHeroFrame(Math.round(currentFrameIdx));
    }
  }

  function drawHeroFrame(idx) {
    if (!ctx || !canvas) return;
    let img = frames[idx];

    // Fallback to nearest loaded frame
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        if (frames[i] && frames[i].complete && frames[i].naturalWidth > 0) {
          img = frames[i];
          break;
        }
      }
    }
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    ctx.clearRect(0, 0, cw, ch);

    // Cover scaling inside circular mask to completely fill circle with no letterbox cuts
    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) * 0.5;
    const dy = (ch - dh) * 0.5;

    ctx.save();
    // Circular vignette mask
    ctx.beginPath();
    ctx.arc(cw / 2, ch / 2, Math.min(cw, ch) * 0.44, 0, Math.PI * 2);
    ctx.clip();

    ctx.drawImage(img, dx, dy, dw, dh);
    ctx.restore();

    // Crisp black perimeter ring matching Swiss editorial design
    ctx.beginPath();
    ctx.arc(cw / 2, ch / 2, Math.min(cw, ch) * 0.44, 0, Math.PI * 2);
    ctx.strokeStyle = '#111111';
    ctx.lineWidth = Math.max(2, Math.round(cw * 0.004));
    ctx.stroke();
  }

  // =========================================================================
  // REVEAL OBSERVER
  // =========================================================================
  let revealObserver = null;
  function observeReveals() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-item').forEach(el => el.classList.add('revealed'));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      });
    }

    document.querySelectorAll('.reveal-item:not(.revealed)').forEach(el => {
      revealObserver.observe(el);
    });
  }

  // =========================================================================
  // LENIS SMOOTH SCROLLING & SCROLL METRICS
  // =========================================================================
  let lenis = null;

  function initSmoothScroll() {
    if (typeof Lenis !== 'undefined') {
      lenis = new Lenis({
        duration: 1.25,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.6,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      lenis.on('scroll', (e) => {
        handleScrollMetrics(e.scroll);
      });
    } else {
      window.addEventListener('scroll', () => {
        const sy = window.pageYOffset || document.documentElement.scrollTop;
        handleScrollMetrics(sy);
      }, { passive: true });
    }

    // Smooth Anchor Navigation
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (!targetId || targetId === '#') return;
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          if (lenis) {
            lenis.scrollTo(targetEl, { offset: -72, duration: 1.3 });
          } else {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }

  function handleScrollMetrics(scrollY) {
    // 1. Top Scroll Progress Bar
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const progress = total > 0 ? (scrollY / total) * 100 : 0;
    const bar = document.getElementById('scroll-progress-bar');
    if (bar) bar.style.width = `${progress}%`;

    // 2. Parallax Shift on Red Circle
    const redCircle = document.querySelector('.red-circle-graphic');
    if (redCircle) {
      const shift = Math.min(50, scrollY * 0.08);
      redCircle.style.transform = `translate(-50%, calc(-50% + ${shift}px))`;
    }

    // 3. Subject Video Frame Scrub on Scroll
    if (!isHovering) {
      const heroMax = window.innerHeight * 1.5;
      const frac = Math.max(0, Math.min(1, scrollY / heroMax));
      targetFrameIdx = Math.round(frac * (TOTAL_FRAMES - 1));
    }
  }

  function initHeroCanvas() {
    if (!canvas) return;
    ctx = canvas.getContext('2d');

    // Preload frames (prioritizing initial frames)
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.onload = () => {
        loadedFrames++;
        if (i === 0) {
          resizeCanvas();
          drawHeroFrame(0);
        }
      };
      img.src = getFrameUrl(i);
      frames[i] = img;
    }

    // Interactive scrub via mouse movement over container
    if (subjectContainer) {
      subjectContainer.addEventListener('mousemove', (e) => {
        isHovering = true;
        const rect = subjectContainer.getBoundingClientRect();
        const normX = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        targetFrameIdx = Math.round(normX * (TOTAL_FRAMES - 1));
      });

      subjectContainer.addEventListener('mouseleave', () => {
        isHovering = false;
      });
    }

    window.addEventListener('resize', resizeCanvas, { passive: true });

    // Smooth LERP rendering loop
    function loop() {
      const diff = targetFrameIdx - currentFrameIdx;
      currentFrameIdx += diff * 0.12;

      const idxToDraw = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(currentFrameIdx)));
      drawHeroFrame(idxToDraw);

      requestAnimationFrame(loop);
    }

    resizeCanvas();
    requestAnimationFrame(loop);
  }

  // =========================================================================
  // EVENT LISTENERS INITIALIZATION
  // =========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling & reveals
    initSmoothScroll();
    observeReveals();

    // Project filters
    const filterContainer = document.getElementById('project-filters');
    if (filterContainer) {
      filterContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;
        activeFilter = btn.dataset.filter;
        filterContainer.querySelectorAll('.filter-btn').forEach(b => {
          b.classList.toggle('active', b.dataset.filter === activeFilter);
        });
        renderProjects();
      });
    }

    // Skill tabs
    const skillTabs = document.getElementById('skill-tabs');
    if (skillTabs) {
      skillTabs.addEventListener('click', (e) => {
        const btn = e.target.closest('.tab-btn');
        if (!btn) return;
        activeSkillTab = btn.dataset.tab;
        skillTabs.querySelectorAll('.tab-btn').forEach(b => {
          b.classList.toggle('active', b.dataset.tab === activeSkillTab);
        });
        renderSkills();
      });
    }

    // Mobile menu toggle
    const mobileBtn = document.getElementById('mobile-menu-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    if (mobileBtn && mobileDrawer) {
      mobileBtn.addEventListener('click', () => {
        mobileDrawer.classList.toggle('active');
      });
      mobileDrawer.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
          mobileDrawer.classList.remove('active');
        });
      });
    }

    // Modal Close
    const closeBtn = document.getElementById('modal-close');
    const modal = document.getElementById('project-modal');
    if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target.id === 'project-modal') closeProjectModal();
      });
    }

    // Direct Copy Buttons
    const heroCopy = document.getElementById('copy-email-hero');
    const emailBtn = document.getElementById('copy-email-btn');
    const phoneBtn = document.getElementById('copy-phone-btn');

    if (heroCopy) heroCopy.addEventListener('click', () => copyText('iamyashwanths2004@gmail.com', 'Email'));
    if (emailBtn) emailBtn.addEventListener('click', () => copyText('iamyashwanths2004@gmail.com', 'Email'));
    if (phoneBtn) phoneBtn.addEventListener('click', () => copyText('9344485378', 'Phone'));

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInput = document.getElementById('sender-name');
        const name = nameInput ? nameInput.value.trim() : 'there';
        showToast(`Thank you, ${name}! Your message has been noted.`);
        contactForm.reset();
      });
    }

    // Render initial views
    renderProjects();
    renderSkills();
    initHeroCanvas();
    if (window.lucide) lucide.createIcons();
  });
})();
