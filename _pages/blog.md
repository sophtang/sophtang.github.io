---
layout: page
permalink: /articles/
title: Technical Articles
description: Long-form breakdowns of the papers and ideas I'm thinking about.
nav: true
nav_order: 3

scholar:
  last_name: [Tang]
  first_name: [Sophia]

  style: apa
  locale: en

  source: /_bibliography/
  bibliography: articles.bib
  bibliography_template: article_card
  # Note: if you have latex math in your bibtex, the latex filter
  # preprocessing may conflict with MathJAX if the latter is enabled.
  # See https://github.com/alshedivat/al-folio/issues/357.
  bibtex_filters: [latex, smallcaps, superscript]

  replace_strings: true
  join_strings: true

  details_dir: bibliography
  details_link: Details

  query: "@*"
  group_by: year
  group_order: descending
---

<p class="ac-intro">
  Subcribe for the latest at <a href="https://alchemybio.substack.com/" target="_blank" rel="noopener">Alchemy Bio</a> ↗
</p>

<div class="publications ac-list">

{% bibliography %}

</div>

<style>
.ac-intro {
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 0.9rem;
  color: var(--global-text-color-light);
  margin: -0.5rem 0 0;
}

/* ---------- list scaffolding (jekyll-scholar wraps entries in ol > li) ---------- */
.ac-list ol.bibliography {
  list-style: none;
  padding: 0;
  margin: 0;
}

.ac-list ol.bibliography > li {
  margin: 0 0 1.25rem;
}

.ac-list ol.bibliography > li:last-child {
  margin-bottom: 0;
}

/* ---------- card ---------- */
.ac-card {
  position: relative;
  display: flex;
  align-items: stretch;
  gap: 0;
  overflow: hidden;
  border: 1px solid var(--global-divider-color);
  border-radius: 18px;
  background: var(--global-card-bg-color);
  isolation: isolate;
  opacity: 0;
  transform: translateY(16px);
  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.25s ease,
    opacity 0.5s ease;
}

.ac-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* flat hover tint, matching the publication rows */
.ac-card::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0;
  pointer-events: none;
  background: rgba(107, 103, 238, 0.06);
  transition: opacity 0.25s ease;
}

.ac-card:hover,
.ac-card:focus-within {
  border-color: var(--global-theme-color);
}

.ac-card:hover::before,
.ac-card:focus-within::before {
  opacity: 1;
}

/* ---------- media ---------- */
.ac-media {
  position: relative;
  flex: 0 0 40%;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 9.5rem;
  padding: 1rem;
  overflow: hidden;
  background: #f1f1ff;
  border-right: 1px solid var(--global-divider-color);
}

/* the whole preview is shown, letterboxed on the purple panel */
.ac-media-el {
  width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: contain;
  display: block;
  transform: scale(1);
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.ac-card:hover .ac-media-el,
.ac-card:focus-within .ac-media-el {
  transform: scale(1.06);
}

/* ---------- body ---------- */
.ac-body {
  position: relative;
  z-index: 1;
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  padding: 1.3rem 1.5rem;
}

.ac-title {
  font-family: 'Newsreader', Georgia, serif;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.2;
  margin: 0 0 0.3rem;
}

.post article .ac-title a.ac-stretch {
  color: var(--global-text-color);
  text-decoration: none;
  background-image: none;
  background-size: 0 0;
  border-bottom: none;
  transition: color 0.25s ease;
}

/* whole-card click target */
.ac-title a.ac-stretch::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
}

.ac-card:hover .ac-title a.ac-stretch,
.ac-card:focus-within .ac-title a.ac-stretch {
  color: var(--global-theme-color);
}

.ac-meta {
  font-family: 'JetBrains Mono', 'SF Mono', Menlo, Consolas, monospace;
  font-style: normal;
  font-size: 0.74rem;
  line-height: 1.45;
  color: var(--global-text-color-light);
  margin: 0 0 0.35rem;
}

.ac-desc {
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--global-text-color);
  margin: 0 0 0.9rem;
}

.ac-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: auto;
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 0.84rem;
  font-weight: 600;
  color: var(--global-theme-color);
  transition: opacity 0.25s ease;
}

.ac-cta svg {
  width: 15px;
  height: 15px;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.ac-card:hover .ac-cta,
.ac-card:focus-within .ac-cta {
  opacity: 1;
}

.ac-card:hover .ac-cta svg,
.ac-card:focus-within .ac-cta svg {
  transform: translateX(5px);
}

/* ---------- dark theme ----------
   the global card colour is a light purple, which leaves light text on a light
   card, so the cards get their own deep purple surface here */
html[data-theme="dark"] .ac-card {
  background: #232042;
  border-color: rgba(151, 147, 248, 0.12);
}

html[data-theme="dark"] .ac-card::before {
  background: rgba(151, 147, 248, 0.08);
}

html[data-theme="dark"] .ac-card:hover,
html[data-theme="dark"] .ac-card:focus-within {
  border-color: var(--global-theme-color);
}

html[data-theme="dark"] .ac-media {
  border-right-color: rgba(151, 147, 248, 0.1);
  border-bottom-color: rgba(151, 147, 248, 0.1);
}

html[data-theme="dark"] .post article .ac-title a.ac-stretch {
  color: #ecebff;
}

html[data-theme="dark"] .ac-meta {
  color: #a39fd0;
}

html[data-theme="dark"] .ac-desc {
  color: #d6d4ee;
}

html[data-theme="dark"] .ac-intro {
  color: #a39fd0;
}

/* ---------- responsive / motion ---------- */
@media (max-width: 700px) {
  .ac-card {
    flex-direction: column;
  }
  .ac-media {
    flex: 0 0 auto;
    min-height: 0;
    border-right: none;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .ac-title {
    font-size: 1.35rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ac-card,
  .ac-card.is-visible,
  .ac-media-el,
  .ac-cta svg {
    transition: none;
    transform: none;
    opacity: 1;
  }
}
</style>

<script>
(function () {
  const cards = Array.from(document.querySelectorAll('.ac-card'));
  if (!cards.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    cards.forEach((c) => observer.observe(c));
  }
})();
</script>
