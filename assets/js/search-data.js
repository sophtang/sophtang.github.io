// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-technical-articles",
          title: "Technical Articles",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/articles/";
          },
        },{id: "news-peptune-de-novo-generation-of-therapeutic-peptides-with-multi-objective-guided-discrete-diffusion-accepted-at-icml-2025-come-by-us-at-poster-session-4-to-chat-free-peptune-stickers",
          title: 'PepTune: De Novo Generation of Therapeutic Peptides with Multi-Objective-Guided Discrete Diffusion accepted at...',
          description: "",
          section: "News",},{id: "news-tr2-d2-is-out-read-our-paper-on-off-policy-rl-for-discrete-diffusion-fine-tuning-with-multi-objective-rewards",
          title: 'TR2-D2 is out! Read our paper on off-policy RL for discrete diffusion fine-tuning...',
          description: "",
          section: "News",},{id: "news-entangledsbm-is-out-read-our-paper-on-simulating-interacting-multi-particle-systems-with-a-novel-schrödinger-bridge-matching-framework",
          title: 'EntangledSBM is out! Read our paper on simulating interacting multi-particle systems with a...',
          description: "",
          section: "News",},{id: "news-awarded-the-cra-outstanding-undergraduate-researcher-award-1-of-8-across-north-america-read-the-news-article-here",
          title: 'Awarded the CRA Outstanding Undergraduate Researcher Award (1 of 8 across North America)!...',
          description: "",
          section: "News",},{id: "news-branched-schrödinger-bridge-matching-is-accepted-at-iclr-2026-main-looking-forward-to-presenting-in-rio",
          title: 'Branched Schrödinger Bridge Matching is accepted at ICLR 2026 main! 🌳🧫 Looking forward...',
          description: "",
          section: "News",},{id: "news-new-tutorial-paper-on-the-foundations-of-schrödinger-bridges-for-generative-modeling-220-pages-24-figures-is-out-on-arxiv",
          title: 'New tutorial paper on the Foundations of Schrödinger Bridges for Generative Modeling (220...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
