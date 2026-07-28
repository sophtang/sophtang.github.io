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
Hi! I am a undergraduate student at the University of Pennsylvania conducting research in <em>generative modeling for scientific discovery</em>. Aside from research, I study **computer science and statistics** in the [Jerome Fisher Program in Management & Technology](https://fisher.wharton.upenn.edu/).

Currently, I’m part of the [Chatterjee Lab](https://www.chatterjeelab.com/), developing **theoretical ML frameworks for biological design**, and this summer, I'm a visiting researcher at the [Kempner Institute at Harvard University](https://kempnerinstitute.harvard.edu/). 

My research ranges from developing theoretical [Schrödinger bridge frameworks](https://arxiv.org/abs/2511.07406) for generative modelling of [branching](https://arxiv.org/abs/2506.09007) and [interacting particle systems](https://arxiv.org/abs/2511.07406) to [multi-objective RL](https://arxiv.org/abs/2509.25171) and [guidance](https://arxiv.org/abs/2412.17780) techniques for discrete diffusion - but I’m always exploring new theoretical ideas and thinking about interesting problems to apply them to! 

I also write long-form tutorial papers on foundational topics in machine learning and shorter technical articles on my Substack, [<em>Alchemy Bio</em>](https://alchemybio.substack.com/). I recently released [Foundations of Schrödinger Bridges for Generative Modeling](https://arxiv.org/abs/2603.18992) (220 pages) and [A Complete Guide to Spherical Equivariant Graph Transformers](https://arxiv.org/abs/2512.13927) (99 pages), which aim to break down complex theoretical concepts for a broad audience.

If any of these topics sparks your interest, I would love to connect!

<style>
.post article em {
  font-family: 'Instrument Serif', Georgia, serif;
  font-style: italic;
  color: inherit;
  font-size: 1.20em;
  font-weight: bold;
}
.post article a em {
  color: inherit;
}
.post .post-title .font-weight-bold {
  font-family: 'Instrument Serif', Georgia, serif;
  font-style: italic;
  font-weight: 400;
  color: #6B67EE;
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
  font-family: 'Instrument Serif', Georgia, serif;
  font-weight: 500;
  font-size: 1.35rem;
}
.post article .publications .author {
  font-size: 0.85rem;
  font-weight: 350;
}
.post article .publications .author > em {
  font-family: 'DM Sans', -apple-system, sans-serif;
  font-style: normal;
  font-size: 0.85rem;
  font-weight: 700;
}
.post article .publications .periodical {
  font-size: 0.8rem;
}
.post article .publications .periodical em {
  font-family: 'DM Sans', -apple-system, sans-serif;
  font-style: italic;
  font-size: inherit;
  font-weight: inherit;
}

.post article .talks .talk-title em,
.post article .talks .talk-venue em {
  font-family: 'DM Sans', -apple-system, sans-serif;
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
  transition: color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease,
    transform 0.2s ease, box-shadow 0.2s ease;
}
.profile .profile-social a:hover {
  color: var(--global-theme-color);
  border-color: var(--global-theme-color);
  background-color: rgba(107, 103, 238, 0.08);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(107, 103, 238, 0.15);
}
.profile .profile-social a i {
  font-size: 1.05rem;
  margin: 0;
}
.profile .profile-social a i::before {
  color: inherit;
}
</style>
