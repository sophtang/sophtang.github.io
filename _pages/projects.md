---
layout: page
permalink: /projects/
title: Project Pages
description: Explore selected papers via their project page! :D
nav: true
nav_order: 4
published: true
---

<div class="pp-grid">
  {% for project in site.data.projects %}
    <article class="pp-card{% if project.featured %} pp-card--featured{% endif %}">
      <div class="pp-media">
        {% if project.image %}
          {% assign media = '/assets/img/publication_preview/' | append: project.image | relative_url %}
          {% if project.image contains '.mp4' %}
            <video class="pp-media-el" autoplay muted loop playsinline preload="auto" aria-hidden="true">
              <source src="{{ media }}" type="video/mp4">
            </video>
          {% else %}
            <img class="pp-media-el" src="{{ media }}" alt="{{ project.title }} preview" loading="lazy">
          {% endif %}
        {% endif %}
        {% if project.abbr %}<span class="pp-badge">{{ project.abbr }}</span>{% endif %}
      </div>

      <div class="pp-body">
        <h3 class="pp-title">
          <a class="pp-stretch" href="{{ project.url }}" target="_blank" rel="noopener">{{ project.title }}</a>
        </h3>
        {% if project.meta %}<p class="pp-meta">{{ project.meta }}</p>{% endif %}
        <p class="pp-desc">{{ project.description }}</p>

        <div class="pp-actions">
          <span class="pp-cta">
            Visit site
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
          {% if project.paper %}
            <a class="pp-paper" href="{{ project.paper }}" target="_blank" rel="noopener">Paper</a>
          {% endif %}
        </div>
      </div>
    </article>
  {% endfor %}
</div>

<style>
.pp-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.75rem;
  margin: 2.25rem 0 4rem;
}

/* ---------- card ---------- */
.pp-card {
  --pp-accent: var(--global-theme-color);
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--global-divider-color);
  border-radius: 18px;
  background: var(--global-card-bg-color);
  isolation: isolate;
  opacity: 0;
  transform: translateY(18px);
  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s ease,
    border-color 0.35s ease,
    opacity 0.5s ease;
}

.pp-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* cursor-following glow */
.pp-card::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0;
  pointer-events: none;
  background: radial-gradient(
    340px circle at var(--pp-x, 50%) var(--pp-y, 50%),
    rgba(107, 103, 238, 0.16),
    rgba(107, 103, 238, 0) 65%
  );
  transition: opacity 0.35s ease;
}

.pp-card:hover,
.pp-card:focus-within {
  transform: translateY(-6px);
  border-color: var(--pp-accent);
  box-shadow: 0 18px 38px rgba(107, 103, 238, 0.18);
}

.pp-card:hover::before,
.pp-card:focus-within::before {
  opacity: 1;
}

.pp-card--featured {
  border-color: rgba(107, 103, 238, 0.55);
  box-shadow: 0 6px 18px rgba(107, 103, 238, 0.1);
}

/* ---------- media ---------- */
.pp-media {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  padding: 0.5rem;
  background: #fff;
  border-bottom: 1px solid var(--global-divider-color);
}

/* figures are shown whole, not cropped */
.pp-media-el {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  transform: scale(1);
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), filter 0.4s ease;
}

.pp-card:hover .pp-media-el,
.pp-card:focus-within .pp-media-el {
  transform: scale(1.05);
}

.pp-badge {
  position: absolute;
  top: 0.7rem;
  left: 0.7rem;
  z-index: 2;
  font-family: 'DM Sans', -apple-system, sans-serif;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  color: var(--global-theme-color);
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(107, 103, 238, 0.3);
  backdrop-filter: blur(4px);
  opacity: 0;
  transform: translateY(-6px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.pp-card:hover .pp-badge,
.pp-card:focus-within .pp-badge {
  opacity: 1;
  transform: translateY(0);
}

/* ---------- body ---------- */
.pp-body {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.35rem 1.5rem 1.5rem;
}

.pp-title {
  font-family: 'Instrument Serif', Georgia, serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.2;
  margin: 0 0 0.35rem;
}

.post article .pp-title a.pp-stretch {
  color: var(--global-text-color);
  text-decoration: none;
  background-image: none;
  background-size: 0 0;
  border-bottom: none;
  transition: color 0.25s ease;
}

/* whole-card click target */
.pp-title a.pp-stretch::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
}

.pp-card:hover .pp-title a.pp-stretch,
.pp-card:focus-within .pp-title a.pp-stretch {
  color: var(--global-theme-color);
}

.pp-meta {
  font-family: 'DM Sans', -apple-system, sans-serif;
  font-style: italic;
  font-size: 0.82rem;
  line-height: 1.45;
  color: var(--global-text-color-light);
  margin: 0 0 0.7rem;
}

.pp-desc {
  font-family: 'DM Sans', -apple-system, sans-serif;
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--global-text-color);
  opacity: 0.85;
  margin: 0 0 1.1rem;
}

.pp-desc em {
  font-family: 'Instrument Serif', Georgia, serif;
  font-style: italic;
  font-size: 1.12em;
  font-weight: 600;
  color: var(--global-theme-color);
}

/* ---------- actions ---------- */
.pp-actions {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-top: auto;
}

.pp-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: 'DM Sans', -apple-system, sans-serif;
  font-size: 0.86rem;
  font-weight: 600;
  color: var(--global-theme-color);
  opacity: 0.75;
  transition: opacity 0.25s ease;
}

.pp-cta svg {
  width: 15px;
  height: 15px;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.pp-card:hover .pp-cta,
.pp-card:focus-within .pp-cta {
  opacity: 1;
}

.pp-card:hover .pp-cta svg,
.pp-card:focus-within .pp-cta svg {
  transform: translateX(5px);
}

.post article a.pp-paper {
  position: relative;
  z-index: 2;
  font-family: 'DM Sans', -apple-system, sans-serif;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  border: 1px solid var(--global-divider-color);
  color: var(--global-text-color-light);
  text-decoration: none;
  background-image: none;
  background-size: 0 0;
  transition: color 0.25s ease, border-color 0.25s ease, background-color 0.25s ease;
}

.post article a.pp-paper:hover {
  color: var(--global-theme-color);
  border-color: var(--global-theme-color);
  background-color: rgba(107, 103, 238, 0.08);
  text-decoration: none;
}

/* ---------- dark theme ----------
   the global card colour is a light purple, which leaves light text on a light
   card, so the cards get their own deep purple surface here */
html[data-theme="dark"] .pp-card {
  background: #232042;
  border-color: rgba(151, 147, 248, 0.22);
}

html[data-theme="dark"] .pp-card--featured {
  border-color: rgba(151, 147, 248, 0.5);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
}

html[data-theme="dark"] .pp-card::before {
  background: radial-gradient(
    340px circle at var(--pp-x, 50%) var(--pp-y, 50%),
    rgba(151, 147, 248, 0.22),
    rgba(151, 147, 248, 0) 65%
  );
}

html[data-theme="dark"] .pp-card:hover,
html[data-theme="dark"] .pp-card:focus-within {
  border-color: var(--global-theme-color);
  box-shadow: 0 18px 38px rgba(0, 0, 0, 0.5);
}

html[data-theme="dark"] .pp-media {
  border-bottom-color: rgba(151, 147, 248, 0.18);
}

html[data-theme="dark"] .post article .pp-title a.pp-stretch {
  color: #ecebff;
}

html[data-theme="dark"] .pp-meta {
  color: #a39fd0;
}

html[data-theme="dark"] .pp-desc {
  color: #d6d4ee;
  opacity: 0.9;
}

html[data-theme="dark"] .pp-badge {
  color: #ecebff;
  background: rgba(35, 32, 66, 0.85);
  border-color: rgba(151, 147, 248, 0.45);
}

html[data-theme="dark"] .post article a.pp-paper {
  color: #b6b2e0;
  border-color: rgba(151, 147, 248, 0.35);
}

html[data-theme="dark"] .post article a.pp-paper:hover {
  color: #ecebff;
  border-color: var(--global-theme-color);
  background-color: rgba(151, 147, 248, 0.16);
}

/* ---------- responsive / motion ---------- */
@media (max-width: 768px) {
  .pp-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 1.35rem;
  }
  .pp-title {
    font-size: 1.45rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .pp-card,
  .pp-card.is-visible,
  .pp-media-el,
  .pp-cta svg,
  .pp-badge {
    transition: none;
    transform: none;
    opacity: 1;
  }
}
</style>

<script>
(function () {
  const cards = Array.from(document.querySelectorAll('.pp-card'));
  if (!cards.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarsePointer = window.matchMedia('(hover: none)').matches;

  // staggered reveal on scroll
  if (reduceMotion || !('IntersectionObserver' in window)) {
    cards.forEach((c) => c.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        // stagger whatever scrolls into view together, without leaving a
        // transition-delay behind that would slow down the hover animation
        let shown = 0;
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const card = entry.target;
          observer.unobserve(card);
          window.setTimeout(() => card.classList.add('is-visible'), shown * 70);
          shown += 1;
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    cards.forEach((c) => observer.observe(c));
  }

  cards.forEach((card) => {
    const video = card.querySelector('video');

    if (video && reduceMotion) {
      video.removeAttribute('autoplay');
      video.pause();
    }

    if (coarsePointer) return;

    // glow follows the cursor
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--pp-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--pp-y', `${e.clientY - rect.top}px`);
    });

    // hovering restarts the preview so you always catch it from the top
    if (video && !reduceMotion) {
      card.addEventListener('pointerenter', () => {
        video.currentTime = 0;
        video.play().catch(() => {});
      });
      card.addEventListener('focusin', () => {
        video.play().catch(() => {});
      });
    }
  });
})();
</script>
