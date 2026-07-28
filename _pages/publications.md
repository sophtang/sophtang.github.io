---
layout: page
permalink: /publications/
title: Publications
description:
nav: true
nav_order: 2

scholar:
  last_name: [Tang]
  first_name: [Sophia]

  style: apa
  locale: en

  source: /_bibliography/
  bibliography: papers.bib
  bibliography_template: bib
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

<p class="pub-intro">
  Full list on <a href="https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}" target="_blank" rel="noopener">Google Scholar</a> ↗
</p>

<p class="pub-note">* Indicates equal contribution</p>

<style>
.pub-intro {
  font-family: 'DM Sans', -apple-system, sans-serif;
  font-size: 0.9rem;
  color: var(--global-text-color-light);
  margin: -0.5rem 0 0.4rem;
}

.pub-note {
  font-family: 'DM Sans', -apple-system, sans-serif;
  font-size: 0.85rem;
  color: var(--global-text-color-light);
  margin: 0;
}
</style>

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

<div class="publications">

{% bibliography %}

</div>
