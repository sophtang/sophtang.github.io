---
layout: about
title: About
permalink: /
subtitle:

profile:
  align: right
  image: pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>sophtang [at] engineering.upenn.edu</p>

announcements:
  enabled: true # includes a list of news items
  scrollable: false # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

selected_papers: true # includes a list of papers marked as "selected={true}"
invited_talks: true # includes the invited talks listed in _data/talks.yml
technical_articles: false
social: true # includes social icons at the bottom of the page
---
<div class="bio-intro">
<p class="bio-lead">Hi! I'm a final-year undergraduate at the University of Pennsylvania building <em>foundations of generative modeling for science</em>, currently in the <a href="https://www.chatterjeelab.com/">Chatterjee Lab</a> and visiting the <a href="https://kempnerinstitute.harvard.edu/">Kempner Institute at Harvard</a>.</p>
<div class="research-areas" id="research-areas">
  <span class="bio-label">Research areas · hover to preview, click to filter my papers</span>
  <div class="area-groups">
    {% for group in site.data.research_areas %}
    <div class="area-group">
      <span class="area-group-name">{{ group.group }}</span>
      <div class="area-chips">
        {% for area in group.areas %}
        <button type="button" class="area-chip" data-topic="{{ area.id }}" aria-pressed="false">{{ area.label }}<span class="area-count"></span></button>
        {% endfor %}
      </div>
    </div>
    {% endfor %}
  </div>
  <div class="area-peek" id="area-peek" aria-live="polite"><span class="area-hint">↑ pick a research area</span></div>
</div>
<p class="shelf-intro">I also write long-form tutorial papers on foundational topics in machine learning and shorter technical articles on my Substack, <a href="https://alchemybio.substack.com/"><em>Alchemy Bio</em></a>. Featured below ↓</p>
<div class="tutorial-shelf">
  <a class="tutorial-card" href="https://arxiv.org/abs/2603.18992">
    <span class="tutorial-thumb">{% include figure.liquid path="assets/img/publication_preview/foundations-sbm.png" sizes="84px" alt="" loading="lazy" %}</span>
    <span class="tutorial-text"><span class="tutorial-title">Foundations of Schrödinger Bridges for Generative Modeling</span><span class="tutorial-meta">220 pages · 24 figures</span></span>
  </a>
  <a class="tutorial-card" href="https://arxiv.org/abs/2512.13927">
    <span class="tutorial-thumb">{% include figure.liquid path="assets/img/publication_preview/cover.png" sizes="84px" alt="" loading="lazy" %}</span>
    <span class="tutorial-text"><span class="tutorial-title">A Complete Guide to Spherical Equivariant Graph Transformers</span><span class="tutorial-meta">99 pages · 46 figures</span></span>
  </a>
</div>
<a class="shelf-more" href="{{ '/articles/' | relative_url }}">More in technical articles <span class="shelf-more-arrow">→</span></a>
<p class="bio-closing">Aside from research, I study <em>computer science and statistics</em> in the <a href="https://fisher.wharton.upenn.edu/">Jerome Fisher Program in Management &amp; Technology</a>. I'm always exploring new theoretical ideas and thinking about interesting problems to apply them to. If any of these topics sparks your interest, I would love to <span class="connect" tabindex="0">connect<span class="connect-pop" role="group" aria-label="Contact links"><a href="https://www.linkedin.com/in/sophia-tang-05" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a><a href="https://x.com/_sophia_tang_" aria-label="X"><i class="fa-brands fa-x-twitter"></i></a><a href="mailto:sophtang@engineering.upenn.edu" aria-label="Email"><i class="fa-solid fa-envelope"></i></a></span></span>!</p>
</div>

<style>
.post article em {
  font-family: 'Newsreader', Georgia, serif;
  font-style: italic;
  color: inherit;
  font-size: 1.12em;
  font-weight: 500;
}
.post article a em {
  color: inherit;
}
.post .post-title .font-weight-bold {
  font-family: 'Newsreader', Georgia, serif;
  font-style: italic;
  font-weight: 500;
  color: var(--global-theme-color); /* #6B67EE light, #9793F8 dark */
}
.post article .publications em,
.post article .publications strong,
.post article .publications .title,
.post article .publications .author,
.post article .publications .periodical {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
}
.post article .publications .title {
  font-family: 'Newsreader', Georgia, serif;
  font-weight: 500;
  font-size: 1.22rem;
  line-height: 1.3;
}
.post article .publications .author {
  font-size: 0.85rem;
  font-weight: 350;
}
.post article .publications .author > em {
  font-family: 'Inter', -apple-system, sans-serif;
  font-style: normal;
  font-size: 0.85rem;
  font-weight: 700;
}
.post article .publications .periodical {
  font-size: 0.8rem;
}
.post article .publications .periodical em {
  font-family: 'Inter', -apple-system, sans-serif;
  font-style: italic;
  font-size: inherit;
  font-weight: inherit;
}

.post article .talks .talk-title em,
.post article .talks .talk-venue em {
  font-family: 'Inter', -apple-system, sans-serif;
  font-style: italic;
  font-size: inherit;
  font-weight: inherit;
}

.post article .news .table-responsive {
  max-height: 17rem !important;
  overflow-y: auto;
  padding-right: 0.5rem;
}

.post article hr.section-divider {
  border: 0;
  border-top: 1px solid var(--global-divider-color);
  margin: 2.75rem 0 2rem;
}

.post article h2.section-heading {
  margin-bottom: 0.5rem;
  font-size: 1.95rem;
  font-style: normal;
  font-weight: 500;
}

.profile .profile-social {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.85rem 0 0.6rem;
}
.profile .profile-social a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  border: 1px solid var(--global-divider-color);
  border-radius: 0.6rem;
  color: var(--global-text-color);
  background-image: none;
  background-size: 0 0;
  transition: color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
}
.profile .profile-social a:hover {
  color: var(--global-theme-color);
  border-color: var(--global-theme-color);
  background-color: rgba(107, 103, 238, 0.08);
}
.profile .profile-social a i {
  font-size: 1.05rem;
  margin: 0;
}
.profile .profile-social a i::before {
  color: inherit;
}
.profile .profile-social a.social-icon-svg svg {
  width: 1.05rem;
  height: 1.05rem;
  margin: 0;
  display: block;
}

/* photo: thin hairline outline, matching the publication previews */
.profile figure img,
.profile picture img {
  border: 1px solid var(--global-divider-color);
}

/* landscape: icons on one line, email on one line, both styled like the
   publication buttons and set in the nav font */
@media (min-width: 576px) and (orientation: landscape) {
  .profile {
    container-type: inline-size;
  }
  .profile .profile-social {
    flex-wrap: nowrap;
    gap: 0.3rem;
    margin: 0.7rem 0 0.3rem;
  }
  .profile .profile-social a {
    flex: 1 1 0;
    min-width: 0;
    width: auto;
    height: auto;
    aspect-ratio: 1;
    border-radius: 5px;
    transition: color 0.18s ease, border-color 0.18s ease, background-color 0.18s ease;
  }
  .profile .profile-social a:hover {
    color: var(--global-btn-hover-text-color);
    background-color: var(--global-btn-hover-bg-color);
  }
  .profile .profile-social a i {
    font-size: 0.95rem;
  }
  .profile .profile-social a.social-icon-svg svg {
    width: 0.95rem;
    height: 0.95rem;
  }
  .profile .more-info {
    margin: 0;
  }
  .profile .more-info p {
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 0.2rem 0;
    font-family: 'JetBrains Mono', 'SF Mono', Menlo, Consolas, monospace;
    font-size: min(0.74rem, calc(100cqi / 21.5));
    line-height: 1.5;
    text-align: center;
    white-space: nowrap;
    color: var(--global-text-color);
    transition: color 0.18s ease, border-color 0.18s ease, background-color 0.18s ease;
  }
  .profile .more-info p:hover {
    color: var(--global-theme-color);
  }
}
/* ---------- interactive bio ---------- */
.bio-intro p {
  max-width: 40em;
}
.post article .bio-intro p.bio-lead {
  font-size: 1.14rem;
  line-height: 1.65;
  margin-bottom: 1.3rem;
}
.bio-label {
  display: block;
  font-family: 'JetBrains Mono', 'SF Mono', Menlo, Consolas, monospace;
  font-size: 0.7rem;
  letter-spacing: 0.04em;
  color: var(--global-text-color-light);
  margin: 0 0 0.45rem;
}

/* research-area chips: Methods row, Applications row */
.research-areas {
  margin: 0 0 1.2rem;
}
.area-groups {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}
.area-group {
  display: grid;
  grid-template-columns: 7.2rem minmax(0, 1fr);
  align-items: baseline;
  gap: 0.4rem 0.8rem;
}
.area-group-name {
  font-family: 'Newsreader', Georgia, serif;
  font-style: italic;
  font-weight: 500;
  font-size: 1.02rem;
  color: var(--global-key-text-color);
}
.area-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.area-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.28rem 0.7rem;
  border: 1px solid var(--global-divider-color);
  border-radius: 5px;
  background: transparent;
  color: var(--global-text-color);
  font-family: 'JetBrains Mono', 'SF Mono', Menlo, Consolas, monospace;
  font-size: 0.75rem;
  line-height: 1.4;
  cursor: pointer;
  transition: color 0.18s ease, border-color 0.18s ease, background-color 0.18s ease;
}
.area-count {
  font-size: 0.68rem;
  color: var(--global-text-color-light);
  transition: color 0.18s ease;
}
.area-chip:hover,
.area-chip:focus-visible {
  color: var(--global-btn-hover-text-color);
  border-color: var(--global-theme-color);
  background: var(--global-btn-hover-bg-color);
}
.area-chip:hover .area-count {
  color: var(--global-btn-hover-text-color);
}
.area-chip[aria-pressed="true"] {
  background: var(--global-theme-color);
  border-color: var(--global-theme-color);
  color: #fff;
}
.area-chip[aria-pressed="true"] .area-count {
  color: rgba(255, 255, 255, 0.8);
}
.area-peek {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem 0.5rem;
  min-height: 2.1rem;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: var(--global-text-color-light);
}
.area-hint {
  font-family: 'JetBrains Mono', 'SF Mono', Menlo, Consolas, monospace;
  font-size: 0.7rem;
}
.area-peek-item {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.12rem 0.45rem 0.12rem 0.14rem;
  border-radius: 5px;
  background: rgba(107, 103, 238, 0.08);
  color: var(--global-text-color);
  font-size: 0.78rem;
  line-height: 1.4;
  animation: bio-pop-in 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.area-peek-item img,
.area-peek-item video {
  width: 26px;
  height: 18px;
  object-fit: cover;
  border-radius: 3px;
  border: 1px solid var(--global-divider-color);
}
@keyframes bio-pop-in {
  from { opacity: 0; transform: translateY(3px); }
  to { opacity: 1; transform: none; }
}
@media (max-width: 575px) {
  .area-group {
    grid-template-columns: minmax(0, 1fr);
  }
}

/* featured tutorials */
.post article .bio-intro p.shelf-intro {
  font-size: 0.95rem;
  margin-bottom: 0.6rem;
}
.tutorial-shelf {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.7rem;
  margin: 0 0 1.2rem;
}
.post article a.tutorial-card {
  display: grid;
  grid-template-columns: 84px minmax(0, 1fr);
  gap: 0.7rem;
  align-items: center;
  min-width: 0;
  padding: 0.6rem;
  border: 1px solid var(--global-divider-color);
  border-radius: 8px;
  color: var(--global-text-color);
  background-image: none;
  transition: border-color 0.25s ease, background-color 0.25s ease;
}
.post article a.tutorial-card:hover {
  border-color: var(--global-theme-color);
  background-color: rgba(107, 103, 238, 0.06);
}
.tutorial-thumb {
  width: 84px;
  height: 60px;
  overflow: hidden;
  border-radius: 5px;
  border: 1px solid var(--global-divider-color);
}
.tutorial-thumb figure {
  margin: 0;
  height: 100%;
}
.tutorial-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.tutorial-card:hover .tutorial-thumb img {
  transform: scale(1.08);
}
.tutorial-text {
  min-width: 0;
}
.tutorial-title {
  display: block;
  color: var(--global-key-text-color);
  font-family: 'Newsreader', Georgia, serif;
  font-weight: 500;
  font-size: 0.95rem;
  line-height: 1.25;
  transition: color 0.2s ease;
}
.tutorial-card:hover .tutorial-title {
  color: var(--global-theme-color);
}
.tutorial-meta {
  display: block;
  margin-top: 0.2rem;
  font-family: 'JetBrains Mono', 'SF Mono', Menlo, Consolas, monospace;
  font-size: 0.66rem;
  color: var(--global-text-color-light);
}
.post article a.shelf-more {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  margin: -0.5rem 0 1.3rem;
  font-family: 'JetBrains Mono', 'SF Mono', Menlo, Consolas, monospace;
  font-size: 0.74rem;
  background-image: none;
}
.shelf-more-arrow {
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.shelf-more:hover .shelf-more-arrow {
  transform: translateX(4px);
}

/* "connect" pops out contact links */
.connect {
  position: relative;
  display: inline-block;
  color: var(--global-theme-color);
  border-bottom: 1px dashed currentColor;
  line-height: 1.25;
  cursor: pointer;
  outline-offset: 3px;
}
.connect-pop {
  position: absolute;
  left: 50%;
  bottom: calc(100% + 8px);
  z-index: 5;
  display: flex;
  gap: 0.3rem;
  padding: 0.35rem;
  background: var(--global-bg-color);
  border: 1px solid var(--global-theme-color);
  border-radius: 8px;
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, 6px);
  transition: opacity 0.2s ease, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.connect-pop::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  height: 10px;
}
.connect:hover .connect-pop,
.connect:focus-within .connect-pop {
  opacity: 1;
  pointer-events: auto;
  transform: translate(-50%, 0);
}
.post article .connect-pop a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: 1px solid var(--global-divider-color);
  border-radius: 5px;
  color: var(--global-text-color);
  font-size: 0.92rem;
  background-image: none;
  transition: color 0.18s ease, border-color 0.18s ease, background-color 0.18s ease;
}
.post article .connect-pop a:hover {
  color: var(--global-btn-hover-text-color);
  border-color: var(--global-theme-color);
  background-color: var(--global-btn-hover-bg-color);
}
.connect:hover .connect-pop a {
  animation: bio-pop-in 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.connect:hover .connect-pop a:nth-child(2) {
  animation-delay: 0.04s;
}
.connect:hover .connect-pop a:nth-child(3) {
  animation-delay: 0.08s;
}

/* Selected Publications: research-area filter */
#selected-publications {
  display: inline-block;
  margin-right: 0.8rem;
}
/* the first paper row carries hover padding, so tuck the list up under the heading */
.post article .publications {
  margin-top: -0.4rem;
}
.post article .publications ol.bibliography > li {
  margin-bottom: 0.35rem;
}
.topic-filter {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.18rem 0.3rem 0.18rem 0.6rem;
  border-radius: 5px;
  background: var(--global-theme-color);
  color: #fff;
  font-family: 'JetBrains Mono', 'SF Mono', Menlo, Consolas, monospace;
  font-size: 0.72rem;
  vertical-align: 0.4rem;
  animation: bio-pop-in 0.3s both;
}
.topic-filter[hidden] {
  display: none;
}
.topic-filter-name {
  color: #fff;
}
.topic-filter-clear {
  width: 1.25rem;
  height: 1.25rem;
  border: 0;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  line-height: 1;
  cursor: pointer;
}
/* papers that aren't selected stay hidden until their research area is active */
.post article .publications ol.bibliography > li:has(> .row:not([data-selected])),
.publications ol.bibliography > li.paper-extra {
  display: none;
}
.publications.topic-filtering ol.bibliography > li {
  transition: opacity 0.3s ease;
}
.publications.topic-filtering ol.bibliography > li:not(.topic-match) {
  opacity: 0.28;
}
.post article .publications.topic-filtering ol.bibliography > li.paper-extra.topic-match {
  display: list-item;
  animation: bio-pop-in 0.35s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.publications ol.bibliography > li.topic-match > .row {
  background-color: rgba(107, 103, 238, 0.06);
}
.publications ol.bibliography > li.topic-match .preview-frame {
  border-color: var(--global-theme-color);
}
.paper-extra-tag {
  display: inline-block;
  margin-bottom: 0.3rem;
  padding: 0 0.35rem;
  border: 1px solid var(--global-divider-color);
  border-radius: 4px;
  font-family: 'JetBrains Mono', 'SF Mono', Menlo, Consolas, monospace;
  font-size: 0.66rem;
  color: var(--global-theme-color);
}

@media (prefers-reduced-motion: reduce) {
  .area-peek-item,
  .connect-pop,
  .connect-pop a,
  .topic-filter,
  .tutorial-thumb img,
  .shelf-more-arrow {
    animation: none !important;
    transition: none !important;
  }
}
</style>

<script>
// this script sits above the publication list, so wait for the whole page
document.addEventListener('DOMContentLoaded', function () {
  const chips = Array.from(document.querySelectorAll('.area-chip'));
  const list = document.querySelector('.post article .publications');
  if (!chips.length || !list) return;

  const peek = document.getElementById('area-peek');
  const pill = document.getElementById('topic-filter');
  const pillName = pill.querySelector('.topic-filter-name');
  const papers = Array.from(list.querySelectorAll('ol.bibliography > li')).map((li) => {
    const row = li.querySelector('.row');
    const topics = (row && row.dataset.topics ? row.dataset.topics : '').split(/\s+/).filter(Boolean);
    const extra = !(row && row.dataset.selected);
    if (extra) {
      li.classList.add('paper-extra');
      const body = row && row.querySelector('[class*="col-sm-"]:not(.abbr)');
      if (body) {
        const tag = document.createElement('span');
        tag.className = 'paper-extra-tag';
        tag.textContent = 'not in selected · shown for this area';
        body.prepend(tag);
      }
    }
    const label = row && row.querySelector('.title .hover-reveal-label');
    const title = label ? label.textContent.trim() : '';
    const short = (row && row.dataset.shortname) ||
      title.split(':')[0].replace(/ for Generative Modeling/, '').replace(/ (with|for) .*/, '').trim();
    const thumb = row && row.querySelector('.preview-frame img, .preview-frame video');
    return { li, topics, short, thumb };
  });

  let active = null;
  const matches = (topic) => papers.filter((p) => p.topics.includes(topic));
  const labelOf = (topic) => chips.find((c) => c.dataset.topic === topic).firstChild.textContent.trim();

  const hint = () => {
    peek.innerHTML = '';
    const span = document.createElement('span');
    span.className = 'area-hint';
    span.textContent = active ? `Filtering papers by “${labelOf(active)}” ↓` : '↑ pick a research area';
    peek.appendChild(span);
  };

  const preview = (topic) => {
    peek.innerHTML = '';
    matches(topic).forEach((p, i) => {
      const item = document.createElement('span');
      item.className = 'area-peek-item';
      item.style.animationDelay = `${i * 45}ms`;
      if (p.thumb) {
        const t = p.thumb.cloneNode(true);
        t.removeAttribute('class');
        t.removeAttribute('width');
        t.removeAttribute('height');
        t.removeAttribute('style');
        if (t.tagName === 'VIDEO') t.muted = true;
        item.appendChild(t);
      }
      item.appendChild(document.createTextNode(p.short));
      peek.appendChild(item);
    });
  };

  const setFilter = (topic) => {
    active = topic;
    chips.forEach((c) => c.setAttribute('aria-pressed', String(c.dataset.topic === topic)));
    papers.forEach((p) => p.li.classList.toggle('topic-match', !!topic && p.topics.includes(topic)));
    list.classList.toggle('topic-filtering', !!topic);
    pill.hidden = !topic;
    if (topic) pillName.textContent = labelOf(topic);
    hint();
  };

  chips.forEach((chip) => {
    const topic = chip.dataset.topic;
    chip.querySelector('.area-count').textContent = matches(topic).length;
    chip.addEventListener('mouseenter', () => preview(topic));
    chip.addEventListener('focus', () => preview(topic));
    chip.addEventListener('mouseleave', hint);
    chip.addEventListener('blur', hint);
    chip.addEventListener('click', () => {
      setFilter(active === topic ? null : topic);
      if (active) document.getElementById('selected-publications').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
  pill.querySelector('.topic-filter-clear').addEventListener('click', () => setFilter(null));
});
</script>
