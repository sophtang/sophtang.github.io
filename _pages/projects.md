---
layout: page
permalink: /projects/
title: Projects
description: Project pages for selected research.
nav: false
nav_order: 4
published: false
---

<div class="project-cards">
  {% for project in site.data.projects %}
    <a class="project-card" href="{{ project.url }}" target="_blank" rel="noopener">
      <div class="project-card-body">
        <h3 class="project-card-title">{{ project.title }}</h3>
        <p class="project-card-desc">{{ project.description }}</p>
      </div>
      <span class="project-card-arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </span>
    </a>
  {% endfor %}
</div>

<style>
.project-cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0 4rem;
}

.project-card {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2.25rem 2.5rem;
  border-radius: 22px;
  background: linear-gradient(110deg, #D4D3FA 0%, #B8C5F5 100%);
  color: #1a1a2e;
  text-decoration: none;
  border: 2px solid transparent;
  box-shadow: 0 2px 10px rgba(107, 103, 238, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.3s ease;
}

.project-card-body {
  flex: 1;
  min-width: 0;
}

.project-card:hover,
.project-card:focus-visible {
  background: linear-gradient(110deg, #C7C5F8 0%, #A3B4F2 100%);
  border-color: #4440C6;
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(107, 103, 238, 0.22);
  text-decoration: none;
  color: #1a1a2e;
}

.project-card-title,
.project-card:hover .project-card-title,
.project-card:focus-visible .project-card-title,
.project-card-desc,
.project-card:hover .project-card-desc,
.project-card:focus-visible .project-card-desc {
  text-decoration: none;
}

.project-card-title {
  font-family: 'Instrument Serif', Georgia, serif;
  font-size: clamp(1.8rem, 3.2vw, 2.4rem);
  font-weight: 400;
  line-height: 1.15;
  margin: 0 0 0.9rem;
  color: #1a1a2e;
}

.project-card-desc {
  font-family: 'DM Sans', -apple-system, sans-serif;
  font-size: 1rem;
  line-height: 1.55;
  margin: 0;
  color: #1a1a2e;
  opacity: 0.78;
}

.project-card-arrow {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: #4440C6;
  transform: translateX(0);
  transition: transform 0.3s ease, width 0.3s ease;
}

.project-card-arrow svg {
  width: 100%;
  height: 100%;
}

.project-card:hover .project-card-arrow,
.project-card:focus-visible .project-card-arrow {
  transform: translateX(8px);
  width: 48px;
}

@media (max-width: 600px) {
  .project-card {
    padding: 1.6rem 1.6rem;
    border-radius: 18px;
    gap: 1rem;
  }
  .project-card-arrow {
    width: 28px;
    height: 28px;
  }
  .project-card:hover .project-card-arrow,
  .project-card:focus-visible .project-card-arrow {
    width: 36px;
  }
}
</style>
